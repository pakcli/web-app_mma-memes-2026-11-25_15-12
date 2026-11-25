# User & Contributor Guide

## 1. Filtering & Searching
- **Search (`#searchInput`):** Matches quotes, fighter names, moods, secondary tags, and quick descriptions.
- **Athletes (`#athleteDropdown`):**
  - Toggle individual fighters on or off.
  - Use **All** or **Clear** for bulk selection.
  - Sort the list by **Most**, **Least**, **A-Z**, or **Z->A**.
- **Moods:** Select from the **Moods** dropdown on mobile or horizontal mood chips on desktop (`All Moods`, `Deadpan`, `Confused`, `Goofy`, `Smirk`, `Side-Eye`, `Hyped`).
- **View Modes (`.floating-dock`):** Switch between `All Memes`, `Quote Library`, and `Fighter Funny Faces`.

## 2. Content Rating & Community Rule Banner
- Click the **three-dots (`:`)** button (`#openRatingBtn`) to open `#ratingModal`:
  - **PG (Default):** Masks profanity and displays blue (`13+`) or red (`18+`) warnings on higher-rated cards.
  - **13+:** Unlocks `13+` quotes and hides `13+` warnings.
  - **18+:** Shows all quotes uncensored with no warning banners.
- **Community Rule Banner (`#ruleBanner`):** Dismiss with the `x` button (`#closeRuleBtn`), and re-enable anytime using **Show Community Rule banner** (`#ruleBannerToggle`) inside the `:` modal.

## 3. Card Actions & Speed-Up GIF Studio
- **Source:** Bottom-left corner of the `16:9` thumbnail opens the verified YouTube Short or video.
- **Start at:** Bottom-right corner shows `frameSecondStart` formatted as `23h : 20m : 21s`, `20m : 21s`, or `21s`.
- **Copy Link / Copy Thumb:** Copies the direct YouTube URL or `i.ytimg.com` thumbnail URL.
- **More / Less:** Compacts the card body and reveals the fighter expression label plus `Start`, `Duration`, and `Frame Mark`.
- **Make GIF:** Opens `#gifModal` anchored at `frameSecondMark`. Choose `1x`, `1.5x`, or `2x` speed, toggle the quote caption overlay, and click **Download Animated .GIF**.

## 4. Adding a Meme (`+ Add Meme`)
- Submissions must follow the **Outside-the-Cage, Zero Drama, No AI Slop** rules.
- `search_query=` URLs and toxic/trash-talk phrases are blocked automatically.
