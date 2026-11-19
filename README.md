# CanadaHitBack prototype

A clickable front-end prototype of the CanadaHitBack flow: pick or paste a playlist, swipe through Canadian matches, and save the result. It runs entirely in the browser with mock data. There is no build step and no dependencies.

Design source: https://www.figma.com/design/vtXylePJrUXRtEJtH2hoFm/Canada-Hits-Back

## Run it

Serve the folder with any static server and open it in a browser:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Use a server rather than opening `index.html` from disk, so the SVG sprite and fonts load cleanly. All paths are relative, so the repo also works on GitHub Pages (Settings > Pages > deploy from the main branch, root folder).

The phone is a fixed 390 x 844 canvas that scales to fit the window. Fonts load from Google Fonts: Archivo (a stand-in for PP Formula SemiExtended) for all UI type, and Inter for the status bar and keyboard only. Swap in the real fonts in `index.html` and the `--sans` / `--sys` variables at the top of `styles.css`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Markup for every screen. All screens live inside one `#phone` element. |
| `styles.css` | All styling. The last two blocks (`ART DIRECTION v2` and `SHAPE PASS`) override the earlier rules, see [DESIGN.md](DESIGN.md). |
| `app.js` | All behaviour, mock data and animation. One IIFE, no framework. |
| `assets/` | Images exported from Figma, the backdrop, and one cover image. |
| `DESIGN.md` | Colours, type, shape rules and spacing decisions. |

Assets (Figma exports keep their hash names):

| File | Used for |
| --- | --- |
| `aurora-red.svg`, `43623.svg` | Red aurora with mountain ridge, and the stars (backdrop on every screen) |
| `f8d4b.svg` | Status bar signal, wifi and battery |
| `59b64.svg`, `412e0.svg` | White maple leaf: hometown pill, playlist rows |
| `46144.svg` | Red maple leaf behind the tally count |
| `2de73.svg`, `b6d16.svg`, `6869e.svg` | Match tab icon (selected, unselected, first-screen button) |
| `36d6f.svg` | Link icon |
| `f1137.svg` | Keyboard emoji key |
| `4e2d0.svg` | Snowflake pattern (swipe left) |
| `cover-run-away-with-me.png` | Album art for the one card that uses a real image |

## The flow

1. **Open** (`#scrOpen`): pick a playlist card, or tap the link field. The field opens the on-screen keyboard; Return submits.
2. **Loading**: contour outline, a coast-to-coast city counter, then the cover grows into the first card.
3. **Match** (`#sheet`): one card per song. Swipe right to swap (`OUI!`), left to keep (`NON, MERCI`), or use the buttons. Shuffle asks for another Canadian pick. Back undoes the last answer.
4. **Already-Canadian cards**: show "Did you know?" and a single "Nice, eh!" button. Swipe right or tap to move on.
5. **Playlist sheet**: drag the grabber down (or tap the list button) to see the playlist, the now-matching pill and the tab bar.
6. **Playlist complete**: "Swap songs" and "Save as new" both open the view playlist page.
7. **View playlist**: three modes (below). **Library** lists playlists and any saved playlists.

View playlist modes (`openDetail(pl, mode, from, sv)`):

- `swap`: only the swiped-right songs, current playlist title.
- `new`: only the swiped-right songs, new title (`newTitle()`), "See original playlist" button.
- `full`: every song, originals and Canadian.

The back button on every view playlist page goes to Library. Swipe a row left on that page to reveal delete (local to the page for now).

Keyboard shortcuts while matching: Left = keep, Right = swap, R = shuffle, Z or Backspace = back, Escape = close sheet.

## Where the backend plugs in

All data is mock and hard-coded at the top of `app.js`. State is plain variables inside the IIFE (`ITEMS`, `assign`, `hist`, `saved`, `SAVED`). Nothing is persisted.

### Data shapes

`PLAYLISTS[]` is the user's playlists:

```js
{ title: 'My Playlist #2', items: [
  { t: 'Taste', a: 'Sabrina Carpenter', c: ['#f7a15a', '#e0603a'] },   // not Canadian: gets a match
  { cn: 1, t: 'Hideaway', a: 'Kiesza', c: [...], p: { ... } }           // already Canadian (built with CN())
] }
```

`POOL[]` is the Canadian suggestions:

```js
{ t, a, town, why, c1, c2, art: [c0, c1, c2], dur, img? }
```

- `c1`, `c2` tint the screen. `art` colours the generated cover; `img: true` uses `cover-run-away-with-me.png`. Replace the generated cover with a real image URL in `coverHTML()`.
- `why` is the match reason. `dur` is the preview length.
- An already-Canadian item's `p` object has the same fields plus `fact` ("Did you know?" text).

### Hooks to replace

| Mock today | Function in `app.js` | What the backend should do |
| --- | --- | --- |
| Playlists on the open screen and in the library | `PLAYLISTS`, `renderOpenCards()`, `renderLib()`, `statsFor()` | Load the user's playlists and the Canadian percentage. |
| Pasted link is only checked for the word "spotify". An empty field types a sample link. | `submitLink()` | Resolve the playlist from the link, then call `start()`. |
| Loader runs a fixed 5.6 s timer | `start(pl)` (`await sleep(5600)`) | Wait for the real playlist read and analysis, then hand off to the first card. |
| Each next card appears after a 0.9 to 1.4 s fake wait | `readNext(i)` | Fetch (or take from a prefetched queue) the Canadian match for song `i`. |
| Shuffle picks the next unused `POOL` entry | `shuffle2()` | Request another candidate for the same song. |
| Swap and keep only update local `hist` | `commit(dir)`, `commitCn()`, `back()` | Record each decision (and its undo). |
| Swap songs, Save as new | `$('fSwap')`, `saveNew()`, `createSaved()` | Swap songs replaces the originals in the Spotify playlist. Save as new creates a new playlist titled by `newTitle()`. Both need real calls. |
| Listen on Spotify, Swap all and the icons on the view page | handlers near `$('dSpot')`, `$('dSwap')`, `$('dAdd')`, `$('dUndo')` | Currently toasts. Connect them. |
| Delete a row (swipe left) | `wireRow()` | Currently removes the row from the page only. |
| Greeting "Hi, fel." | `index.html`, `.greet` | Use the signed-in user's name. |
| Preview player in each card | `wirePlay()` | Currently a fake 30 s timer. Play a real preview. |

Suggested endpoints, as a starting point only (none exist yet):

```
GET  /playlists                     -> PLAYLISTS
POST /playlists/resolve  {url}      -> one playlist
GET  /playlists/:id/matches/:i      -> a POOL-shaped suggestion
POST /playlists/:id/decisions       -> record swap / keep / undo
POST /playlists/:id/swap            -> replace originals
POST /playlists                     -> save as new playlist
```

## Things to know

- The "Did you know?" facts and match reasons are placeholders. Verify or replace them before showing anyone.
- The second playlist ("Gym Mix") exists so both cards on the first screen lead somewhere.
- The Figma frames show checkerboard placeholders for playlist covers. The prototype uses colour mosaics and generated art.
- Animation timing is multiplied by a `T` variable (the `D()` helper). Set `T = 3` in `app.js` to see everything in slow motion. Reduced motion is respected.
- Demo helpers to remove in production: the sample-link typing in `submitLink()`, the `lag` variable, and the keyboard shortcuts.
- No licence file is included. Add one before making the repository public.
