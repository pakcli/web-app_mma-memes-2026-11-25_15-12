# Version History

## v01-01 (Proposal - Quarantined)
- **Brief:** `brief/v01-01_current-content-in-tableview.md`
- **Status:** Drafted (`DONOT-CODE-YET` — awaiting implementation greenlight)
- **Scope:** Documents all 19 live `MEMES` entries in tableview format and proposes a `Tableview` mode tab in `.floating-dock` rendering a responsive table alongside the `1:1` card grid.

## v01-00 (Current Live Baseline)
- **Brief:** `brief/v01-00_main-idea.md`
- **Status:** Implemented in `index.html`, `style.css`, and `script.js`
- **Highlights:**
  - 19 verified MMA meme entries synced with `vault_mma-memes` (direct YouTube / Shorts URLs, zero `search_query=` links, zero AI slop).
  - 2-row sticky top header (`MMA / MEMES` italic logo, search with desktop SVG icon, `+ Add Meme`, `:` rating modal, `Athletes` dropdown with `Most`/`Least`/`A-Z`/`Z->A` sort, and `Moods` selector).
  - Top floating dismissible `#ruleBanner` with `localStorage` persistence (`"mma_meme_show_rule"`) and toggle inside `#ratingModal`.
  - Uniform `1:1` cards with `16:9` thumbnails, blue/neon-yellow/red theme, `Start at` `hh:mm:ss` badge, `More` frame timing panel (`frameSecondStart`, `duration`, `frameSecondMark`), and `gif.js` Speed-Up GIF Studio.
  - Floating bottom pill dock (`.floating-dock`) for `All Memes`, `Quote Library`, and `Fighter Funny Faces`.
