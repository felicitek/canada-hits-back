# Design notes

The look was reset to a punchier, less dainty direction using the new Figma frames and the brand team's visual: heavy extended type, wine-red base, sharp corners, flat colour. Where the brand visual didn't translate to a product screen, these notes record the call that was made.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| Red | `#F9244F` | Emphasis text, primary buttons, check button, active tab, glows |
| Blush | `#F8E9E9` | Body and headline text on dark |
| Blush outline | `#FEE3E3` | Maple leaf graphic, outlined text on dark |
| Wine | `#440922` | Base the screens were designed on |
| Backdrop | `aurora-red.svg` over a dark plum gradient | Every non-match screen. Kept dark and red at the bottom, with a mountain ridge. |
| Mist | `#AEC2D0` | Song count on playlist cards (kept from the Figma frame) |
| Frost | `#D9F0FF` | The `NON, MERCI` stamp and left-swipe snow, the one cool accent |

Each match card tints the whole screen with its own two colours (`c1`, `c2`).

## Type

PP Formula SemiExtended in the Figma frames; Archivo (variable weight and width) stands in.

- Headlines: weight 900, slightly extended (`font-stretch: 108%`), tight tracking.
- Card titles and rows: weight 800.
- Body and meta: weights 500 to 600.
- Calls to action: heavy uppercase (`SWAP SONGS`, `NICE, EH!`, `LISTEN ON SPOTIFY`).
- Status bar time and the keyboard use the system font (Inter fallback), as on a real device.

## Shape

One rule keeps the mix of round and square consistent:

- **0px:** containers and stickers (playlist cards, "Did you know?", swipe stamps).
- **4px:** every control and every image (swipe buttons, CTAs, covers, thumbnails, tabs, pills, field, chip, tile).
- **Round:** the back button on the view playlist pages, the status bar and Dynamic Island (hardware), the thin grabber bar, and the Spotify embed's play button (it copies Spotify's own player).

No outlines on cards or buttons. Surfaces are defined by fill and shadow. The swipe stamps keep their white border because the border is the stamp.

## Layout rules worth keeping

- First-screen link field, the Match button next to it, and the tab bar on every other screen are all 48px tall on the same baseline.
- The Replacing chip and the playlist button on the match screen are both 52px tall on the same line. The playlist button also appears on already-Canadian cards.
- The icon buttons use a single 2.6px stroke.

## Where it lives in the code

`styles.css` is layered: the first part is the original build, and the last two blocks (`ART DIRECTION v2`, `SHAPE PASS`, plus a few small labelled overrides after them) restyle it. A cleaner pass would fold those overrides into the base rules. Behaviour is not touched by any of them.
