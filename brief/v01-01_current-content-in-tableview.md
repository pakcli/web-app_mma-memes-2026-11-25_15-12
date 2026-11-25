---
title: "Current Content Inventory & Tableview Mode Proposal"
version: v01-01
status: proposal-quarantined
baseline_brief: "[[brief/v01-00_main-idea.md]]"
inspected_at: "2026-11-25"
dependencies:
  - "[[skill/brief-latest-idea-with-current-state-of-lapangan]]"
  - "[[skill/donot-ngada-ngada-exact-lapangan-variables]]"
---

# Brief v01-01: Current Content in Tableview

## 1. Frontmatter & Heritage Block
- **Baseline Brief:** `brief/v01-00_main-idea.md`
- **Source of Truth Inspected:** `script.js` (`MEMES` array, lines 2-345) and `vault_mma-memes/index.md` (`base` tableview columns)
- **Milestone:** `v01-01`

---

## 2. Executive Summary & The Problem in Current Codebase
**What works today in the live codebase:**
`script.js` stores all 19 verified MMA memes inside `MEMES` and renders them exclusively as `1:1` cards inside `#memeGrid` (`renderMemes()`). Meanwhile, the companion Obsidian vault (`vault_mma-memes/index.md`) already defines a `table` view with `file.name`, `platform`, `athlete_name`, `quote`, `link`, `quick_description`, `rating`, `frame_second_start`, `duration`, and `frame_second_mark`.

**The gap:**
The web app has no **Tableview** mode (`table` layout) for power users who want to scan all 19 entries, compare `frameSecondStart` / `duration` / `frameSecondMark`, or inspect raw vs. clean quotes at a glance without scrolling through `1:1` cards.

---

## 3. Current Content Tableview (Verified Live `MEMES` Array)

| `id` | `memeId` | `fighter` | `quoteRaw` | `rating` | `mood` | `secondaryTag` | `frameSecondStart` | `duration` | `frameSecondMark` | `sourceUrl` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `2-3-years-dagestan` | Islam Makhachev | Send him 2-3 years Dagestan and forget. | PG | Deadpan | Wrestling | 0 | 6 | 3 | `https://www.youtube.com/shorts/ip0bbmQEFPQ` |
| 2 | `chama` | Alex Pereira | Chama. | PG | Deadpan | Catchphrase | 0 | 4 | 2 | `https://www.youtube.com/shorts/zJ4T2bOjwcU` |
| 3 | `igbg` | Dustin Poirier | IGBG | PG | Goofy | Story | 0 | 5 | 2 | `https://www.youtube.com/shorts/AOzTnKPfZ1s` |
| 4 | `igbbmn` | Dustin Poirier | IGBBMN | 13+ | Goofy | Story | 0 | 5 | 2 | `https://www.youtube.com/shorts/-fSB3CZKngc` |
| 5 | `cchwbt` | Dustin Poirier | CCHWBT | PG | Goofy | Story | 0 | 5 | 2 | `https://www.youtube.com/shorts/yPc0Gw0Lsqo` |
| 6 | `i-eaty-i-sleepy-i-trainy` | Islam Makhachev | I eaty, I sleepy, I trainy. | PG | Goofy | Camp | 0 | 5 | 2 | `https://www.youtube.com/shorts/mN1KzwACt08` |
| 7 | `black-belt-who-give-him` | Islam Makhachev | Black belt? Who give him? We have to check that. | PG | Confused | BJJ | 0 | 7 | 3 | `https://www.youtube.com/shorts/08r0JtiKD_Y` |
| 8 | `australia-doesnt-have-wrestling` | Islam Makhachev | Australia doesn't have wrestling. | PG | Deadpan | MediaDay | 0 | 5 | 2 | `https://www.youtube.com/shorts/u9lnRL8WFNU` |
| 9 | `learn-some-english-so-important` | Islam Makhachev | If you wanna make money, you need to learn some English. So important. | PG | Smirk | Interview | 12 | 8 | 15 | `https://www.youtube.com/watch?v=gZNxHsiqcxk` |
| 10 | `lets-wrestle-kid` | Conor McGregor | Let's wrestle, kid! Let's wrestle, let's wrestle! | PG | Hyped | Presser | 5 | 6 | 8 | `https://www.youtube.com/watch?v=7dRIfqX46u8` |
| 11 | `lets-go-for-that` | Jiri Prochazka | Let's go for that! | PG | Hyped | Mindset | 0 | 4 | 2 | `https://www.youtube.com/shorts/ANbT9O5C6Mk` |
| 12 | `im-coming` | Jiri Prochazka | I'm coming! I'm coming! | 13+ | Hyped | Training | 0 | 5 | 2 | `https://www.youtube.com/shorts/oCFfVhx4PRw` |
| 13 | `i-like-him-maybe` | Conor McGregor | I like him... maybe. | PG | Side-Eye | Interview | 0 | 4 | 2 | `https://www.youtube.com/shorts/Z6Yjs3ILfAw` |
| 14 | `i-actually-got-a-text-message` | Daniel Cormier | I actually got a text message... | PG | Deadpan | Reaction | 0 | 5 | 2 | `https://www.youtube.com/shorts/rCZy7IxJcH4` |
| 15 | `why-tap-go-sleep` | Islam Makhachev | Why tap? Go sleep. | PG | Confused | Presser | 0 | 4 | 2 | `https://www.youtube.com/shorts/slSIEqtVX4M` |
| 16 | `who-the-fook-is-that` | Conor McGregor | Who the fook is that guy?! | 18+ | Side-Eye | Presser | 0 | 5 | 2 | `https://www.youtube.com/shorts/DWKlFp2kC3Q` |
| 17 | `this-is-number-one-bullshit` | Khabib Nurmagomedov | This is number one bullshit. | 18+ | Deadpan | Backstage | 2 | 5 | 4 | `https://www.youtube.com/watch?v=XDdDQQ8uLhY` |
| 18 | `floaty-mouthy-clowny` | Ilia Topuria | Floaty, mouthy, clowny. | PG | Smirk | Media | 0 | 5 | 2 | `https://www.youtube.com/shorts/sq9UQo-aFeI` |
| 19 | `fat-and-happy` | Paddy Pimblett | I'd rather be fat and happy than skinny and unhappy. | PG | Goofy | Presser | 0 | 6 | 3 | `https://www.youtube.com/shorts/z8sLf1XxX3o` |

### 3.1 Current Content List (Codeblock)

```text
01. [PG]  2-3-years-dagestan            | Islam Makhachev     | "Send him 2-3 years Dagestan and forget."                         | Deadpan  / Wrestling   | start:0s  dur:6s mark:3s  | https://www.youtube.com/shorts/ip0bbmQEFPQ
02. [PG]  chama                         | Alex Pereira        | "Chama."                                                          | Deadpan  / Catchphrase | start:0s  dur:4s mark:2s  | https://www.youtube.com/shorts/zJ4T2bOjwcU
03. [PG]  igbg                          | Dustin Poirier      | "IGBG"                                                            | Goofy    / Story       | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/AOzTnKPfZ1s
04. [13+] igbbmn                        | Dustin Poirier      | "IGBBMN"                                                          | Goofy    / Story       | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/-fSB3CZKngc
05. [PG]  cchwbt                        | Dustin Poirier      | "CCHWBT"                                                          | Goofy    / Story       | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/yPc0Gw0Lsqo
06. [PG]  i-eaty-i-sleepy-i-trainy      | Islam Makhachev     | "I eaty, I sleepy, I trainy."                                     | Goofy    / Camp        | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/mN1KzwACt08
07. [PG]  black-belt-who-give-him       | Islam Makhachev     | "Black belt? Who give him? We have to check that."                | Confused / BJJ         | start:0s  dur:7s mark:3s  | https://www.youtube.com/shorts/08r0JtiKD_Y
08. [PG]  australia-doesnt-have-wrestling | Islam Makhachev   | "Australia doesn't have wrestling."                               | Deadpan  / MediaDay    | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/u9lnRL8WFNU
09. [PG]  learn-some-english-so-important | Islam Makhachev   | "If you wanna make money, you need to learn some English. So important." | Smirk / Interview | start:12s dur:8s mark:15s | https://www.youtube.com/watch?v=gZNxHsiqcxk
10. [PG]  lets-wrestle-kid              | Conor McGregor      | "Let's wrestle, kid! Let's wrestle, let's wrestle!"               | Hyped    / Presser     | start:5s  dur:6s mark:8s  | https://www.youtube.com/watch?v=7dRIfqX46u8
11. [PG]  lets-go-for-that              | Jiri Prochazka      | "Let's go for that!"                                              | Hyped    / Mindset     | start:0s  dur:4s mark:2s  | https://www.youtube.com/shorts/ANbT9O5C6Mk
12. [13+] im-coming                     | Jiri Prochazka      | "I'm coming! I'm coming!"                                         | Hyped    / Training    | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/oCFfVhx4PRw
13. [PG]  i-like-him-maybe              | Conor McGregor      | "I like him... maybe."                                            | Side-Eye / Interview   | start:0s  dur:4s mark:2s  | https://www.youtube.com/shorts/Z6Yjs3ILfAw
14. [PG]  i-actually-got-a-text-message | Daniel Cormier      | "I actually got a text message..."                                | Deadpan  / Reaction    | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/rCZy7IxJcH4
15. [PG]  why-tap-go-sleep              | Islam Makhachev     | "Why tap? Go sleep."                                              | Confused / Presser     | start:0s  dur:4s mark:2s  | https://www.youtube.com/shorts/slSIEqtVX4M
16. [18+] who-the-fook-is-that          | Conor McGregor      | "Who the fook is that guy?!"                                      | Side-Eye / Presser     | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/DWKlFp2kC3Q
17. [18+] this-is-number-one-bullshit   | Khabib Nurmagomedov | "This is number one bullshit."                                    | Deadpan  / Backstage   | start:2s  dur:5s mark:4s  | https://www.youtube.com/watch?v=XDdDQQ8uLhY
18. [PG]  floaty-mouthy-clowny          | Ilia Topuria        | "Floaty, mouthy, clowny."                                         | Smirk    / Media       | start:0s  dur:5s mark:2s  | https://www.youtube.com/shorts/sq9UQo-aFeI
19. [PG]  fat-and-happy                 | Paddy Pimblett      | "I'd rather be fat and happy than skinny and unhappy."            | Goofy    / Presser     | start:0s  dur:6s mark:3s  | https://www.youtube.com/shorts/z8sLf1XxX3o
```

---

## 4. Current Codebase Architecture vs. Target Delta Matrix

| Dimension | Current Live State (Verified) | Target State (v01-01 Tableview Proposal) |
| :--- | :--- | :--- |
| **View Modes (`state.mode`)** | `"all" | "quotes" | "faces"` in `.floating-dock` | Add `"table"` mode button (`Tableview`) in `.floating-dock` |
| **Grid Container (`#memeGrid`)** | Always renders `.meme-card` grid (`grid-template-columns: repeat(3, 1fr)`) | When `state.mode === "table"`, renders `#memeTableWrap` responsive `<table>` |
| **Table Columns** | Not implemented in web app (only in `vault_mma-memes/index.md`) | `Athlete`, `Quote`, `Quick Desc`, `Platform`, `Rating`, `Start / Dur / Mark`, `Actions` (`Source`, `Make GIF`) |
| **State & Filters** | `state.rating`, `state.mood`, `state.search`, `state.selectedAthletes` | Reused unchanged for both card grid and tableview |

---

## 5. Monospace Topology Trees (Current vs. Target)

```text
web-app_mma-meme-2026-11-25_15-12
    index.html                                  # [CURRENT - MODIFIED: add Tableview tab + #memeTableWrap]
    style.css                                   # [CURRENT - MODIFIED: add .meme-table-wrap & .meme-table]
    script.js                                   # [CURRENT - MODIFIED: branch renderMemes() on state.mode === "table"]
    brief
        v01-00_main-idea.md                     # [CURRENT - BASELINE]
        v01-01_current-content-in-tableview.md  # [NEW - PROPOSAL]
```

---

## 6. Monospace UI/UX Wireframe (Tableview Mode)

```text
+---------------------------------------------------------------------------------------------------+
| ATHLETE          | QUOTE                            | PLATFORM      | RATING | TIMING     | ACT   |
+------------------+----------------------------------+---------------+--------+------------+-------+
| Islam Makhachev  | "Send him 2-3 years Dagestan..." | YouTube Short | PG     | 0s / 6s /3s| [Src][GIF]
| Alex Pereira     | "Chama."                         | YouTube Short | PG     | 0s / 4s /2s| [Src][GIF]
| Dustin Poirier   | "IGBBMN"                         | YouTube Short | 13+    | 0s / 5s /2s| [Src][GIF]
+---------------------------------------------------------------------------------------------------+
```

---

## 7. Exact Codeblock Diffs (Proposed Delta)

```diff
--- index.html (floating-dock)
-      <button type="button" data-mode="faces" class="mode-btn" role="tab" aria-selected="false">
-        Fighter Funny Faces
-      </button>
+      <button type="button" data-mode="faces" class="mode-btn" role="tab" aria-selected="false">
+        Fighter Funny Faces
+      </button>
+      <button type="button" data-mode="table" class="mode-btn" role="tab" aria-selected="false">
+        Tableview
+      </button>
```

```diff
--- script.js (renderMemes)
-  memeGrid.innerHTML = "";
+  memeGrid.innerHTML = "";
+  memeGrid.classList.toggle("hidden", state.mode === "table");
+  memeTableWrap.classList.toggle("hidden", state.mode !== "table");
```

---

## 8. Pre-Coding Quarantine Declaration

> [!IMPORTANT]
> **PRE-CODING QUARANTINE (DONOT-CODE-YET)**:
> This document constitutes an architectural proposal anchored to the live `v01-00` codebase.
> No source code (`index.html`, `style.css`, `script.js`) may be modified until this brief
> receives explicit user review and greenlight.
