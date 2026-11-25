---
title: "MMA MEMES Web App - Main Idea & Live Codebase Baseline"
version: v01-00
status: baseline-active
inspected_at: "2026-11-25"
dependencies:
  - "[[skill/brief-latest-idea-with-current-state-of-lapangan]]"
  - "[[skill/donot-ngada-ngada-exact-lapangan-variables]]"
---

# Brief v01-00: Main Idea & Live Codebase Baseline

## 1. Frontmatter & Heritage Block
- **Workspace Root:** `web-app_mma-meme-2026-11-25_15-12/`
- **Git Status (`git status -s`):** `?? index.html`, `?? script.js`, `?? style.css` (untracked working-tree files)
- **Companion Vault:** `vault_mma-memes/` (`index.md` + 19 `.md` notes)

---

## 2. Executive Summary & The Problem in Current Codebase
**What works today in the live codebase:**
The application is a zero-build static web app (`index.html`, `style.css`, `script.js`) implementing an outside-the-cage, zero-drama, no-AI-slop MMA reaction library (`MMA MEMES`) backed by 19 curated entries in `MEMES`.

**Core Design Pillars:**
1. **3-Tier Content Rating Gate (`PG` / `13+` / `18+`):** Managed via `#ratingModal` triggered from `#openRatingBtn` (three-dots button). `RATING_WEIGHT` (`{ PG: 1, "13+": 2, "18+": 3 }`) controls dynamic quote masking (`getDisplayQuote(meme)`) and warning visibility (`getRatingWarningHtml(meme)`).
2. **Outside-the-Cage & No-AI-Slop Guardrails:** `#ruleBanner` floats below the sticky header, can be dismissed via `#closeRuleBtn`, and re-enabled via `#ruleBannerToggle` (persisted in `localStorage` under `"mma_meme_show_rule"`).
3. **Uniform `1:1` Square Cards with `16:9` Thumbnails:** Each `.meme-card` renders a `16:9` YouTube thumbnail (`getThumbnailUrl(url)`), top-left platform badge (`getPlatformLabel(meme)`), top-right rating badge (`getRatingBadgeClass(rating)`), bottom-left `Source` link, bottom-right `Start at <formatTime(...)>` badge, 2-line clamped quote/description, `By <fighter>` + 2 tags, and 4 footer actions (`Copy Link`, `Copy Thumb`, `Make GIF`, `More`).
4. **Compact `More` Frame Panel & GIF Studio:** Toggling `More` adds `.is-expanded` to `.meme-card`, compacting `.card-body` and revealing `.card-more-panel` (`frameSecondStart`, `duration`, `frameSecondMark`). Opening `Make GIF` (`openGifModal(id)`) anchors `previewFrame` on `frameSecondMark` and exports animated `.gif` files via `gif.js` at `1x`, `1.5x`, or `2x` speed.

---

## 3. Current Codebase Architecture vs. Target Delta Matrix

| Dimension | Current Live State (Verified) | Target State (v01-00 Baseline) |
| :--- | :--- | :--- |
| **Header Row 1 (`.header-top`)** | `.brand-logo` (`MMA / MEMES`), `#searchInput`, `#openSubmitBtn`, `#openRatingBtn` | Operational |
| **Header Row 2 (`.header-filters`)** | `#athleteDropdown` (`All`, `Clear`, `#athleteSortBar` `most`/`least`/`az`/`za`), `#moodSelect` (mobile), `#moodChips` (desktop `>= 900px`) | Operational |
| **Floating Rule Banner** | `#ruleBanner` (`position: sticky; top: 96px`) + `#closeRuleBtn` + `#ruleBannerToggle` | Operational |
| **Floating Bottom Dock** | `.floating-dock` with `.mode-tabs` (`all`, `quotes`, `faces`) | Operational |
| **Data Store (`script.js`)** | `MEMES` array (19 objects) + `state` object + `localStorage` key `"mma_meme_show_rule"` | Operational |

---

## 4. Monospace Topology Trees (Current vs. Target)

```text
web-app_mma-meme-2026-11-25_15-12
    index.html                         # [EXISTING] Semantic DOM & modals
    style.css                          # [EXISTING] Dark theme, blue (#3b82f6) & neon-yellow (#fde047)
    script.js                          # [EXISTING] 19-item MEMES, filters, GIF Studio, guardrails
    brief
        v01-00_main-idea.md            # [NEW] Baseline architectural brief
```

---

## 5. Monospace UI/UX Wireframe & Ergonomics

```text
+-------------------------------------------------------------------------+
| MMA                                                                     |
| MEMES   [ Search quotes, fighters...      ]  [ + Add Meme ]  [ : ]      |
+-------------------------------------------------------------------------+
| [ Athletes (All) v ]  [ All Moods v ]  (Desktop: horizontal mood chips) |
+-------------------------------------------------------------------------+
       +-----------------------------------------------------------+
       | Community Rule: Outside-the-cage humor only...        [x] |
       +-----------------------------------------------------------+

  +-----------------------------+   +-----------------------------+
  | [YOUTUBE SHORT]       [PG]  |   | [YOUTUBE]            [18+]  |
  |      16:9 THUMBNAIL         |   |      16:9 THUMBNAIL         |
  | [Source ->]   [Start at 3s] |   | [Source ->]   [Start at 2s] |
  +-----------------------------+   +-----------------------------+
  | "Quote..."                  |   | "Quote..."                  |
  | Quick 6-7 word description  |   | Quick 6-7 word description  |
  | By Fighter   [#Mood] [#Tag] |   | By Fighter   [#Mood] [#Tag] |
  | [Copy][Thumb][Make GIF][More]   | [Copy][Thumb][Make GIF][More]
  +-----------------------------+   +-----------------------------+

               +-------------------------------------------+
               | ( All Memes | Quote Library | Funny Faces)|
               +-------------------------------------------+
```

---

## 6. Exact Live Variables Inventory (`script.js`)

### Category A: Global Constants & Data Store
- `MEMES`: `Array<Object>` (19 items; keys: `id`, `memeId`, `quoteRaw`, `quoteClean`, `fighter`, `mood`, `secondaryTag`, `rating`, `isFaceHighlight`, `quickDescription`, `frameSecondStart`, `duration`, `frameSecondMark`, `platform` optional, `sourceTitle`, `sourceUrl`, `accent`).
- `RATING_WEIGHT`: `{ PG: 1, "13+": 2, "18+": 3 }`.

### Category B: Runtime `state` Object & GIF Studio State
- `state.rating`: `"PG" | "13+" | "18+"` (default `"PG"`).
- `state.mode`: `"all" | "quotes" | "faces"` (default `"all"`).
- `state.mood`: `string` (default `"All"`).
- `state.search`: `string` (default `""`).
- `state.athleteSort`: `"most" | "least" | "az" | "za"` (default `"most"`).
- `state.selectedAthletes`: `Set<string>` initialized with all `MEMES.map((m) => m.fighter)`.
- `activeGifMeme`, `activeGifImage`, `gifSpeed`, `previewAnimId`, `previewFrame`.

### Category C: Browser Persistence
- `localStorage` key: `"mma_meme_show_rule"` (`"1"` or `"0"`).

---

## 7. 1:1 Parity Documentation Plan
- `index.html`, `style.css`, `script.js` <-> `brief/v01-00_main-idea.md`.
- Companion Obsidian vault schema <-> `vault_mma-memes/index.md`.

---

## 8. Pre-Coding Quarantine Declaration

> [!IMPORTANT]
> **PRE-CODING QUARANTINE (DONOT-CODE-YET)**:
> This document records the verified live baseline of `v01-00`.
> No source code modifications are triggered by this brief.
