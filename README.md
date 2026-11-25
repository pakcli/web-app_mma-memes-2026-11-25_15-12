# MMA MEMES (`mma-memes.web.app`)

An outside-the-cage, zero-drama, no-AI-slop MMA reaction and quote library built with vanilla HTML, CSS, and JavaScript.

## Features
- **19 Curated Entries (`MEMES`):** Direct YouTube video and YouTube Shorts origins with verified timestamps (`frameSecondStart`, `duration`, `frameSecondMark`).
- **3-Tier Content Rating (`PG` / `13+` / `18+`):** Accessible via the three-dots (`:`) modal (`#ratingModal`), dynamically masking profanity and toggling tier warnings.
- **2-Row Sticky Header:**
  - Row 1: Stacked italic `MMA / MEMES` logo, `#searchInput`, `+ Add Meme`, and `:` modal trigger.
  - Row 2: `#athleteDropdown` (2-word names, meme counts, `All`/`Clear`, and `Most`/`Least`/`A-Z`/`Z->A` sort) and Mood filter (`#moodSelect` on mobile, `#moodChips` on desktop).
- **Uniform `1:1` Cards with `16:9` Thumbnails:** Platform badge, rating badge, `Source` link, `Start at` timestamp badge, 2-line clamped quote and description, tags, and `Copy Link`, `Copy Thumb`, `Make GIF`, `More` actions.
- **Floating Bottom Pill Dock:** Switches between `All Memes`, `Quote Library`, and `Fighter Funny Faces`.
- **Speed-Up GIF Studio:** Client-side animated `.gif` export (`gif.js`) anchored on `frameSecondMark` with `1x`, `1.5x`, and `2x` speed toggles.

## Project Structure
```text
web-app_mma-memes-2026-11-25_15-12/
  index.html
  style.css
  script.js
  README.md
  GUIDE.md
  VERSION.md
  brief/
    v01-00_main-idea.md
    v01-01_current-content-in-tableview.md
```

## Run Locally
Start a local static server so thumbnails, modals, and `gif.js` workers run without `file://` restrictions:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.
