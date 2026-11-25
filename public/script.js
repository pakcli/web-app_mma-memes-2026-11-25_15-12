// CURATED 19-ITEM MMA MEME DATABASE (OUTSIDE-THE-CAGE • ZERO DRAMA • NO AI SLOP)
const MEMES = [
  {
    id: 1,
    memeId: "2-3-years-dagestan",
    quoteRaw: "Send him 2-3 years Dagestan and forget.",
    quoteClean: "Send him 2-3 years Dagestan and forget.",
    fighter: "Islam Makhachev",
    mood: "Deadpan",
    secondaryTag: "Wrestling",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Deadpan wrestling advice from Daniel Cormier interview",
    frameSecondStart: 0,
    duration: 6,
    frameSecondMark: 3,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/ip0bbmQEFPQ",
    accent: "#FDE047"
  },
  {
    id: 2,
    memeId: "chama",
    quoteRaw: "Chama.",
    quoteClean: "Chama.",
    fighter: "Alex Pereira",
    mood: "Deadpan",
    secondaryTag: "Catchphrase",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Alex Pereira stone-faced signature catchphrase outside cage",
    frameSecondStart: 0,
    duration: 4,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/zJ4T2bOjwcU",
    accent: "#3B82F6"
  },
  {
    id: 3,
    memeId: "igbg",
    quoteRaw: "IGBG",
    quoteClean: "IGBG",
    fighter: "Dustin Poirier",
    mood: "Goofy",
    secondaryTag: "Story",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Dustin Poirier viral Instagram story acronym post",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/AOzTnKPfZ1s",
    accent: "#3B82F6"
  },
  {
    id: 4,
    memeId: "igbbmn",
    quoteRaw: "IGBBMN",
    quoteClean: "IGBBMN",
    fighter: "Dustin Poirier",
    mood: "Goofy",
    secondaryTag: "Story",
    rating: "13+",
    isFaceHighlight: true,
    quickDescription: "Dustin Poirier cryptic social media acronym meme",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/-fSB3CZKngc",
    accent: "#8B5CF6"
  },
  {
    id: 5,
    memeId: "cchwbt",
    quoteRaw: "CCHWBT",
    quoteClean: "CCHWBT",
    fighter: "Dustin Poirier",
    mood: "Goofy",
    secondaryTag: "Story",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Dustin Poirier viral IG story acronym meme",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/yPc0Gw0Lsqo",
    accent: "#8B5CF6"
  },
  {
    id: 6,
    memeId: "i-eaty-i-sleepy-i-trainy",
    quoteRaw: "I eaty, I sleepy, I trainy.",
    quoteClean: "I eaty, I sleepy, I trainy.",
    fighter: "Islam Makhachev",
    mood: "Goofy",
    secondaryTag: "Camp",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Funny Dagestan camp daily routine vlog quote",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/mN1KzwACt08",
    accent: "#FDE047"
  },
  {
    id: 7,
    memeId: "black-belt-who-give-him",
    quoteRaw: "Black belt? Who give him? We have to check that.",
    quoteClean: "Black belt? Who give him? We have to check that.",
    fighter: "Islam Makhachev",
    mood: "Confused",
    secondaryTag: "BJJ",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Islam questioning MMA black belts with Cormier",
    frameSecondStart: 0,
    duration: 7,
    frameSecondMark: 3,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/08r0JtiKD_Y",
    accent: "#3B82F6"
  },
  {
    id: 8,
    memeId: "australia-doesnt-have-wrestling",
    quoteRaw: "Australia doesn't have wrestling.",
    quoteClean: "Australia doesn't have wrestling.",
    fighter: "Islam Makhachev",
    mood: "Deadpan",
    secondaryTag: "MediaDay",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Deadpan UFC 284 media day wrestling remark",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/u9lnRL8WFNU",
    accent: "#3B82F6"
  },
  {
    id: 9,
    memeId: "learn-some-english-so-important",
    quoteRaw: "If you wanna make money, you need to learn some English. So important.",
    quoteClean: "If you wanna make money, you need to learn some English. So important.",
    fighter: "Islam Makhachev",
    mood: "Smirk",
    secondaryTag: "Interview",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Islam Makhachev funny advice during DC interview",
    frameSecondStart: 12,
    duration: 8,
    frameSecondMark: 15,
    sourceTitle: "YouTube Video (Verified)",
    sourceUrl: "https://www.youtube.com/watch?v=gZNxHsiqcxk",
    accent: "#EC4899"
  },
  {
    id: 10,
    memeId: "lets-wrestle-kid",
    quoteRaw: "Let's wrestle, kid! Let's wrestle, let's wrestle!",
    quoteClean: "Let's wrestle, kid! Let's wrestle, let's wrestle!",
    fighter: "Conor McGregor",
    mood: "Hyped",
    secondaryTag: "Presser",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Animated UFC 229 press conference wrestling chant",
    frameSecondStart: 5,
    duration: 6,
    frameSecondMark: 8,
    platform: "YouTube Short",
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/watch?v=7dRIfqX46u8",
    accent: "#3B82F6"
  },
  {
    id: 11,
    memeId: "lets-go-for-that",
    quoteRaw: "Let's go for that!",
    quoteClean: "Let's go for that!",
    fighter: "Jiri Prochazka",
    mood: "Hyped",
    secondaryTag: "Mindset",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Jiri Prochazka intense samurai signature catchphrase",
    frameSecondStart: 0,
    duration: 4,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/ANbT9O5C6Mk",
    accent: "#FDE047"
  },
  {
    id: 12,
    memeId: "im-coming",
    quoteRaw: "I'm coming! I'm coming!",
    quoteClean: "I'm coming!",
    fighter: "Jiri Prochazka",
    mood: "Hyped",
    secondaryTag: "Training",
    rating: "13+",
    isFaceHighlight: true,
    quickDescription: "Jiri Prochazka intense viral training video shout",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/oCFfVhx4PRw",
    accent: "#EF4444"
  },
  {
    id: 13,
    memeId: "i-like-him-maybe",
    quoteRaw: "I like him... maybe.",
    quoteClean: "I like him... maybe.",
    fighter: "Conor McGregor",
    mood: "Side-Eye",
    secondaryTag: "Interview",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Dry press conference pause with classic side-eye",
    frameSecondStart: 0,
    duration: 4,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/Z6Yjs3ILfAw",
    accent: "#FDE047"
  },
  {
    id: 14,
    memeId: "i-actually-got-a-text-message",
    quoteRaw: "I actually got a text message...",
    quoteClean: "I actually got a text message...",
    fighter: "Daniel Cormier",
    mood: "Deadpan",
    secondaryTag: "Reaction",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Daniel Cormier hilarious mid-interview phone reaction",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/rCZy7IxJcH4",
    accent: "#6366F1"
  },
  {
    id: 15,
    memeId: "why-tap-go-sleep",
    quoteRaw: "Why tap? Go sleep.",
    quoteClean: "Why tap? Go sleep.",
    fighter: "Islam Makhachev",
    mood: "Confused",
    secondaryTag: "Presser",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Confused post-fight presser shrug about tapping out",
    frameSecondStart: 0,
    duration: 4,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/slSIEqtVX4M",
    accent: "#3B82F6"
  },
  {
    id: 16,
    memeId: "who-the-fook-is-that",
    quoteRaw: "Who the fook is that guy?!",
    quoteClean: "Who the f*** is that guy?!",
    fighter: "Conor McGregor",
    mood: "Side-Eye",
    secondaryTag: "Presser",
    rating: "18+",
    isFaceHighlight: true,
    quickDescription: "Iconic UFC 205 press conference stage reaction",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/DWKlFp2kC3Q",
    accent: "#3B82F6"
  },
  {
    id: 17,
    memeId: "this-is-number-one-bullshit",
    quoteRaw: "This is number one bullshit.",
    quoteClean: "This is number one b*******.",
    fighter: "Khabib Nurmagomedov",
    mood: "Deadpan",
    secondaryTag: "Backstage",
    rating: "18+",
    isFaceHighlight: true,
    quickDescription: "Deadpan UFC 205 backstage interview classic line",
    frameSecondStart: 2,
    duration: 5,
    frameSecondMark: 4,
    sourceTitle: "YouTube Video (Verified)",
    sourceUrl: "https://www.youtube.com/watch?v=XDdDQQ8uLhY",
    accent: "#EF4444"
  },
  {
    id: 18,
    memeId: "floaty-mouthy-clowny",
    quoteRaw: "Floaty, mouthy, clowny.",
    quoteClean: "Floaty, mouthy, clowny.",
    fighter: "Ilia Topuria",
    mood: "Smirk",
    secondaryTag: "Media",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "UFC London media scrum banter with smirk",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/sq9UQo-aFeI",
    accent: "#3B82F6"
  },
  {
    id: 19,
    memeId: "fat-and-happy",
    quoteRaw: "I'd rather be fat and happy than skinny and unhappy.",
    quoteClean: "I'd rather be fat and happy than skinny and unhappy.",
    fighter: "Paddy Pimblett",
    mood: "Goofy",
    secondaryTag: "Presser",
    rating: "PG",
    isFaceHighlight: true,
    quickDescription: "Post-fight presser food philosophy with big grin",
    frameSecondStart: 0,
    duration: 6,
    frameSecondMark: 3,
    sourceTitle: "YouTube Short (Verified)",
    sourceUrl: "https://www.youtube.com/shorts/z8sLf1XxX3o",
    accent: "#FDE047"
  }
];

// APP STATE
const state = {
  rating: "PG", // "PG" | "13+" | "18+"
  mode: "all", // "all" | "quotes" | "faces"
  mood: "All",
  search: "",
  athleteSort: "most", // "most" | "least" | "az" | "za"
  selectedAthletes: new Set(MEMES.map((m) => m.fighter))
};

const RATING_WEIGHT = { PG: 1, "13+": 2, "18+": 3 };

// DOM ELEMENTS
const memeGrid = document.getElementById("memeGrid");
const emptyState = document.getElementById("emptyState");
const facesBanner = document.getElementById("facesBanner");
const searchInput = document.getElementById("searchInput");
const athleteDropdown = document.getElementById("athleteDropdown");
const athleteToggleBtn = document.getElementById("athleteToggleBtn");
const athleteMenu = document.getElementById("athleteMenu");
const athleteList = document.getElementById("athleteList");

// HELPERS
function formatTime(totalSeconds) {
  const sec = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h}h : ${m}m : ${s}s`;
  if (m > 0) return `${m}m : ${s}s`;
  return `${s}s`;
}

function getYoutubeId(url) {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return match ? match[1] : "";
}

function getThumbnailUrl(url) {
  const id = getYoutubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

function getPlatformLabel(meme) {
  if (meme && meme.platform) return meme.platform;
  const url = meme?.sourceUrl || "";
  if (!url) return "Source";
  if (url.includes("youtube.com/shorts")) return "YouTube Short";
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube";
  if (url.includes("instagram.com")) return "Instagram";
  if (url.includes("twitter.com") || url.includes("x.com")) return "X";
  if (url.includes("reddit.com")) return "Reddit";
  return "Source";
}

function getRatingBadgeClass(rating) {
  if (rating === "13+") return "rating-13";
  if (rating === "18+") return "rating-18";
  return "";
}

function getRatingWarningHtml(meme) {
  if (RATING_WEIGHT[state.rating] >= RATING_WEIGHT[meme.rating]) {
    return "";
  }
  if (meme.rating === "13+") {
    return `<p class="rating-warning warn-13">13+ Mild Content Warning</p>`;
  }
  if (meme.rating === "18+") {
    return `<p class="rating-warning warn-18">18+ Uncensored Language Warning</p>`;
  }
  return "";
}

function getDisplayQuote(meme) {
  if (RATING_WEIGHT[state.rating] >= RATING_WEIGHT[meme.rating]) {
    return meme.quoteRaw;
  }
  return meme.quoteClean;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatTwoWordName(name) {
  return String(name || "")
    .split(/\s+/)
    .filter((w) => w && w !== "&")
    .slice(0, 2)
    .join(" ");
}

function getAthleteCounts() {
  const counts = new Map();
  MEMES.forEach((m) => {
    counts.set(m.fighter, (counts.get(m.fighter) || 0) + 1);
  });
  const list = Array.from(counts.entries());
  if (state.athleteSort === "least") {
    return list.sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
  }
  if (state.athleteSort === "az") {
    return list.sort((a, b) => formatTwoWordName(a[0]).localeCompare(formatTwoWordName(b[0])));
  }
  if (state.athleteSort === "za") {
    return list.sort((a, b) => formatTwoWordName(b[0]).localeCompare(formatTwoWordName(a[0])));
  }
  return list.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function updateAthleteButtonLabel(totalAthletes) {
  const count = state.selectedAthletes.size;
  if (count === totalAthletes) {
    athleteToggleBtn.textContent = "Athletes (All) ▾";
    athleteToggleBtn.classList.remove("has-filter");
  } else {
    athleteToggleBtn.textContent = `Athletes (${count}) ▾`;
    athleteToggleBtn.classList.add("has-filter");
  }
}

function renderAthleteMenu() {
  const entries = getAthleteCounts();
  updateAthleteButtonLabel(entries.length);

  athleteList.innerHTML = entries
    .map(([fighter, count]) => {
      const checked = state.selectedAthletes.has(fighter) ? "checked" : "";
      const shortName = formatTwoWordName(fighter);
      return `
        <label class="athlete-item">
          <span class="athlete-item-left">
            <input type="checkbox" class="athlete-checkbox" value="${escapeHtml(fighter)}" ${checked} />
            <span>${escapeHtml(shortName)}</span>
          </span>
          <span class="athlete-item-count">(${count})</span>
        </label>
      `;
    })
    .join("");
}

// RENDER MEME GRID
function renderMemes() {
  facesBanner.classList.toggle("hidden", state.mode !== "faces");

  const filtered = MEMES.filter((m) => {
    if (!state.selectedAthletes.has(m.fighter)) return false;
    if (state.mode === "faces" && !m.isFaceHighlight) return false;
    if (state.mood !== "All" && m.mood !== state.mood) return false;

    if (state.search.trim() !== "") {
      const q = state.search.toLowerCase();
      const matches =
        m.quoteRaw.toLowerCase().includes(q) ||
        m.quoteClean.toLowerCase().includes(q) ||
        m.fighter.toLowerCase().includes(q) ||
        m.mood.toLowerCase().includes(q) ||
        (m.secondaryTag && m.secondaryTag.toLowerCase().includes(q)) ||
        (m.quickDescription && m.quickDescription.toLowerCase().includes(q));
      if (!matches) return false;
    }
    return true;
  });

  memeGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  filtered.forEach((meme) => {
    const displayQuote = getDisplayQuote(meme);
    const thumbUrl = getThumbnailUrl(meme.sourceUrl);
    const platformLabel = getPlatformLabel(meme);
    const ratingClass = getRatingBadgeClass(meme.rating);
    const warningHtml = getRatingWarningHtml(meme);
    const secondTag = meme.secondaryTag || "Clip";

    const card = document.createElement("article");
    card.className = "meme-card";

    card.innerHTML = `
      <div class="card-preview">
        <div class="card-preview-badges">
          <span class="badge-platform">${escapeHtml(platformLabel)}</span>
          <span class="badge-rating ${ratingClass}">${escapeHtml(meme.rating)}</span>
        </div>
        <a href="${escapeHtml(meme.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="card-thumb-link" title="Watch original clip">
          ${
            thumbUrl
              ? `<img src="${escapeHtml(thumbUrl)}" alt="${escapeHtml(meme.fighter)} — ${escapeHtml(meme.mood)}" class="card-thumb" loading="lazy" />`
              : ""
          }
        </a>
        <a href="${escapeHtml(meme.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="source-corner-btn" title="${escapeHtml(meme.sourceTitle)}">
          Source ↗
        </a>
        <span class="duration-corner-badge">
          Start at ${formatTime(meme.frameSecondStart ?? 0)}
        </span>
      </div>

      <div class="card-body">
        <p class="quote-text">&ldquo;${escapeHtml(displayQuote)}&rdquo;</p>
        ${meme.quickDescription ? `<p class="card-desc">${escapeHtml(meme.quickDescription)}</p>` : ""}
        ${warningHtml}
        <div class="card-byline">
          <span class="by-who">By ${escapeHtml(meme.fighter)}</span>
          <div class="card-tags">
            <button type="button" class="tag-btn tag-mood" data-mood="${escapeHtml(meme.mood)}">
              #${escapeHtml(meme.mood)}
            </button>
            <button type="button" class="tag-btn tag-extra" data-tag="${escapeHtml(secondTag)}">
              #${escapeHtml(secondTag)}
            </button>
          </div>
        </div>
      </div>

      <div class="card-more-panel">
        <span class="card-face-label">Expression: ${escapeHtml(meme.fighter)} &bull; ${escapeHtml(meme.mood)}</span>
        <div class="frame-grid">
          <div class="frame-stat">
            <span class="frame-stat-label">Start</span>
            <span class="frame-stat-val">${formatTime(meme.frameSecondStart ?? 0)}</span>
          </div>
          <div class="frame-stat">
            <span class="frame-stat-label">Duration</span>
            <span class="frame-stat-val">${formatTime(meme.duration ?? 5)}</span>
          </div>
          <div class="frame-stat">
            <span class="frame-stat-label">Frame Mark</span>
            <span class="frame-stat-val">${formatTime(meme.frameSecondMark ?? 2)}</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <div class="card-actions">
          <button type="button" class="action-btn copy-link-btn" data-id="${meme.id}">Copy Link</button>
          <button type="button" class="action-btn copy-thumb-btn" data-id="${meme.id}">Copy Thumb</button>
          <button type="button" class="action-btn action-btn-gif gif-btn" data-id="${meme.id}">Make GIF</button>
          <button type="button" class="action-btn more-btn" aria-expanded="false">More</button>
        </div>
      </div>
    `;

    memeGrid.appendChild(card);
  });
}

// DELEGATED CARD ACTIONS
memeGrid.addEventListener("click", (e) => {
  const moodBtn = e.target.closest(".tag-mood");
  if (moodBtn) {
    state.mood = moodBtn.dataset.mood;
    updateMoodUI();
    renderMemes();
    return;
  }

  const extraBtn = e.target.closest(".tag-extra");
  if (extraBtn) {
    state.search = extraBtn.dataset.tag;
    searchInput.value = state.search;
    renderMemes();
    return;
  }

  const copyLinkBtn = e.target.closest(".copy-link-btn");
  if (copyLinkBtn) {
    const meme = MEMES.find((m) => m.id === Number(copyLinkBtn.dataset.id));
    if (!meme) return;
    navigator.clipboard?.writeText(meme.sourceUrl).catch(() => {});
    flashBtn(copyLinkBtn, "Copied!");
    return;
  }

  const copyThumbBtn = e.target.closest(".copy-thumb-btn");
  if (copyThumbBtn) {
    const meme = MEMES.find((m) => m.id === Number(copyThumbBtn.dataset.id));
    if (!meme) return;
    const thumbUrl = getThumbnailUrl(meme.sourceUrl) || meme.sourceUrl;
    navigator.clipboard?.writeText(thumbUrl).catch(() => {});
    flashBtn(copyThumbBtn, "Copied!");
    return;
  }

  const gifBtn = e.target.closest(".gif-btn");
  if (gifBtn) {
    openGifModal(Number(gifBtn.dataset.id));
    return;
  }

  const moreBtn = e.target.closest(".more-btn");
  if (moreBtn) {
    const card = moreBtn.closest(".meme-card");
    if (!card) return;
    const expanded = card.classList.toggle("is-expanded");
    moreBtn.textContent = expanded ? "Less" : "More";
    moreBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
  }
});

function flashBtn(btn, label) {
  const prev = btn.textContent;
  btn.textContent = label;
  setTimeout(() => {
    btn.textContent = prev;
  }, 1200);
}

// FILTER CONTROLS & RATING MODAL
const ratingModal = document.getElementById("ratingModal");
const openRatingBtn = document.getElementById("openRatingBtn");

openRatingBtn.addEventListener("click", () => {
  ratingModal.classList.remove("hidden");
});

function closeRatingModal() {
  ratingModal.classList.add("hidden");
}

document.getElementById("closeRatingBtn").addEventListener("click", closeRatingModal);

// COMMUNITY RULE BANNER TOGGLE
const ruleBanner = document.getElementById("ruleBanner");
const closeRuleBtn = document.getElementById("closeRuleBtn");
const ruleBannerToggle = document.getElementById("ruleBannerToggle");

function setRuleBannerVisible(visible) {
  ruleBanner.classList.toggle("hidden", !visible);
  ruleBannerToggle.checked = visible;
  try {
    localStorage.setItem("mma_meme_show_rule", visible ? "1" : "0");
  } catch {}
}

try {
  const savedRule = localStorage.getItem("mma_meme_show_rule");
  if (savedRule === "0") setRuleBannerVisible(false);
} catch {}

closeRuleBtn.addEventListener("click", () => setRuleBannerVisible(false));
ruleBannerToggle.addEventListener("change", (e) => setRuleBannerVisible(e.target.checked));

ratingModal.addEventListener("click", (e) => {
  if (e.target === ratingModal) closeRatingModal();
});

document.querySelectorAll(".rating-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.rating = btn.dataset.rating;
    document.querySelectorAll(".rating-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    openRatingBtn.title = `Content Rating: ${state.rating}`;
    openRatingBtn.setAttribute("aria-label", `Content Rating (${state.rating})`);
    closeRatingModal();
    renderMemes();
    if (activeGifMeme) {
      document.getElementById("gifRatingLabel").textContent = state.rating;
      drawPreviewFrame();
    }
  });
});

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.mode = btn.dataset.mode;
    document.querySelectorAll(".mode-btn").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    renderMemes();
  });
});

const moodSelect = document.getElementById("moodSelect");

document.querySelectorAll(".mood-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.mood = btn.dataset.mood;
    updateMoodUI();
    renderMemes();
  });
});

moodSelect.addEventListener("change", (e) => {
  state.mood = e.target.value;
  updateMoodUI();
  renderMemes();
});

function updateMoodUI() {
  document.querySelectorAll(".mood-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.mood === state.mood);
  });
  if (moodSelect) {
    moodSelect.value = state.mood;
  }
}

searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  renderMemes();
});

document.getElementById("resetFiltersBtn").addEventListener("click", () => {
  state.mode = "all";
  state.mood = "All";
  state.search = "";
  state.selectedAthletes = new Set(MEMES.map((m) => m.fighter));
  searchInput.value = "";
  document.querySelectorAll(".mode-btn").forEach((b) => {
    const isAll = b.dataset.mode === "all";
    b.classList.toggle("active", isAll);
    b.setAttribute("aria-selected", isAll ? "true" : "false");
  });
  updateMoodUI();
  renderAthleteMenu();
  renderMemes();
});

// ATHLETE DROPDOWN CONTROLS
athleteToggleBtn.addEventListener("click", () => {
  const isHidden = athleteMenu.classList.toggle("hidden");
  athleteToggleBtn.setAttribute("aria-expanded", isHidden ? "false" : "true");
});

athleteList.addEventListener("change", (e) => {
  const cb = e.target.closest(".athlete-checkbox");
  if (!cb) return;
  if (cb.checked) {
    state.selectedAthletes.add(cb.value);
  } else {
    state.selectedAthletes.delete(cb.value);
  }
  updateAthleteButtonLabel(getAthleteCounts().length);
  renderMemes();
});

document.getElementById("athleteSelectAllBtn").addEventListener("click", () => {
  state.selectedAthletes = new Set(MEMES.map((m) => m.fighter));
  renderAthleteMenu();
  renderMemes();
});

document.getElementById("athleteClearBtn").addEventListener("click", () => {
  state.selectedAthletes.clear();
  renderAthleteMenu();
  renderMemes();
});

document.getElementById("athleteSortBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".athlete-sort-btn");
  if (!btn) return;
  state.athleteSort = btn.dataset.sort;
  document.querySelectorAll(".athlete-sort-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderAthleteMenu();
});

document.addEventListener("click", (e) => {
  if (!athleteDropdown.contains(e.target)) {
    athleteMenu.classList.add("hidden");
    athleteToggleBtn.setAttribute("aria-expanded", "false");
  }
});

// ==========================================
// SPEED-UP GIF ENGINE (CANVAS + GIF.JS)
// ==========================================
let activeGifMeme = null;
let activeGifImage = null;
let gifSpeed = 1;
let previewAnimId = null;
let previewFrame = 0;

const gifModal = document.getElementById("gifModal");
const gifCanvas = document.getElementById("gifCanvas");
const gifCaptionCheck = document.getElementById("gifCaptionCheck");
const gifStatus = document.getElementById("gifStatus");
const downloadGifBtn = document.getElementById("downloadGifBtn");
const gifFrameMarkLabel = document.getElementById("gifFrameMarkLabel");

function openGifModal(id) {
  activeGifMeme = MEMES.find((m) => m.id === id);
  if (!activeGifMeme) return;
  gifSpeed = 1;
  // Default GIF anchor to frameSecondMark
  const markSec = activeGifMeme.frameSecondMark ?? 0;
  previewFrame = (markSec * 5) % 30;
  activeGifImage = null;

  const thumbUrl = getThumbnailUrl(activeGifMeme.sourceUrl);
  if (thumbUrl) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      activeGifImage = img;
    };
    img.src = thumbUrl;
  }

  document.getElementById("gifModalTitle").textContent = `GIF Studio: ${activeGifMeme.fighter}`;
  document.getElementById("gifRatingLabel").textContent = state.rating;
  if (gifFrameMarkLabel) {
    gifFrameMarkLabel.textContent = `Default Frame Mark: ${markSec}s (Start: ${activeGifMeme.frameSecondStart ?? 0}s, Duration: ${activeGifMeme.duration ?? 5}s)`;
  }
  gifStatus.textContent = "";
  gifModal.classList.remove("hidden");

  document.querySelectorAll(".speed-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.speed === "1");
  });

  startPreviewLoop();
}

function closeGifModal() {
  gifModal.classList.add("hidden");
  cancelAnimationFrame(previewAnimId);
  activeGifMeme = null;
  activeGifImage = null;
}

document.getElementById("closeGifBtn").addEventListener("click", closeGifModal);

gifModal.addEventListener("click", (e) => {
  if (e.target === gifModal) closeGifModal();
});

document.querySelectorAll(".speed-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    gifSpeed = parseFloat(btn.dataset.speed);
    document.querySelectorAll(".speed-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

gifCaptionCheck.addEventListener("change", () => {
  if (activeGifMeme) drawPreviewFrame();
});

function renderCanvasStep(ctx, width, height, step, totalSteps) {
  const m = activeGifMeme;
  const progress = (step / totalSteps) * Math.PI * 2;
  const panX = Math.sin(progress) * 8;
  const panY = Math.cos(progress) * 5;
  const scale = 1.06 + Math.sin(progress * 2) * 0.04;

  ctx.fillStyle = "#121417";
  ctx.fillRect(0, 0, width, height);

  if (activeGifImage && activeGifImage.complete && activeGifImage.naturalWidth > 0) {
    ctx.save();
    ctx.translate(width / 2 + panX, height / 2 + panY);
    ctx.scale(scale, scale);
    ctx.drawImage(activeGifImage, -width / 2, -height / 2, width, height);
    ctx.restore();

    ctx.fillStyle = "rgba(18, 20, 23, 0.25)";
    ctx.fillRect(0, 0, width, height);
  } else {
    const grad = ctx.createRadialGradient(width / 2, height / 2 - 15, 10, width / 2, height / 2 - 15, 150);
    grad.addColorStop(0, m.accent + "55");
    grad.addColorStop(1, "#121417");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#F3F4F6";
    ctx.font = "bold 22px Space Grotesk, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(m.fighter.toUpperCase(), width / 2, height / 2 - 14);
  }

  ctx.fillStyle = "rgba(18, 20, 23, 0.72)";
  ctx.fillRect(0, 0, width, 30);

  ctx.fillStyle = "#E5E7EB";
  ctx.font = "bold 11px Inter, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`mma-meme.web.app • Mark ${m.frameSecondMark ?? 0}s`, 14, 19);

  ctx.textAlign = "right";
  ctx.fillStyle = "#3B82F6";
  ctx.fillText(`${gifSpeed}x SPEED`, width - 14, 19);

  if (gifCaptionCheck.checked) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.78)";
    ctx.fillRect(0, height - 64, width, 64);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 15px Space Grotesk, sans-serif";
    ctx.textAlign = "center";
    const quote = getDisplayQuote(m);
    const clipped = quote.length > 46 ? quote.slice(0, 44) + "..." : quote;
    ctx.fillText(`"${clipped}"`, width / 2, height - 36);

    ctx.fillStyle = "#FDE047";
    ctx.font = "600 11px Inter, sans-serif";
    ctx.fillText(`${m.fighter} • ${m.mood}`, width / 2, height - 15);
  }
}

function drawPreviewFrame() {
  if (!activeGifMeme) return;
  const ctx = gifCanvas.getContext("2d");
  renderCanvasStep(ctx, gifCanvas.width, gifCanvas.height, previewFrame, 30);
}

function startPreviewLoop() {
  cancelAnimationFrame(previewAnimId);
  function tick() {
    if (!activeGifMeme) return;
    previewFrame = (previewFrame + 0.5 * gifSpeed) % 30;
    drawPreviewFrame();
    previewAnimId = requestAnimationFrame(tick);
  }
  tick();
}

downloadGifBtn.addEventListener("click", async () => {
  if (!activeGifMeme) return;
  if (typeof GIF === "undefined") {
    gifStatus.textContent = "GIF encoder library failed to load. Check your connection.";
    return;
  }

  downloadGifBtn.disabled = true;
  gifStatus.textContent = "Rendering GIF frames...";

  try {
    const workerResp = await fetch("https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js");
    const workerBlob = await workerResp.blob();
    const workerUrl = URL.createObjectURL(workerBlob);

    const ctx = gifCanvas.getContext("2d");
    const totalFrames = 16;
    const baseDelay = 70;
    const frameDelay = Math.max(20, Math.round(baseDelay / gifSpeed));

    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: gifCanvas.width,
      height: gifCanvas.height,
      workerScript: workerUrl
    });

    for (let i = 0; i < totalFrames; i++) {
      renderCanvasStep(ctx, gifCanvas.width, gifCanvas.height, i, totalFrames);
      gif.addFrame(ctx, { copy: true, delay: frameDelay });
    }

    gif.on("finished", (blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `mma-meme-${activeGifMeme.fighter.toLowerCase().replace(/\s+/g, "-")}-${gifSpeed}x.gif`;
      a.click();
      URL.revokeObjectURL(url);
      URL.revokeObjectURL(workerUrl);
      gifStatus.textContent = "GIF downloaded!";
      downloadGifBtn.disabled = false;
    });

    gif.render();
  } catch (err) {
    gifStatus.textContent = "Could not render GIF in this browser.";
    downloadGifBtn.disabled = false;
  }
});

// ==========================================
// SUBMIT MODAL WITH NO-DRAMA & NO-SLOP GUARDRAIL
// ==========================================
const submitModal = document.getElementById("submitModal");
const submitForm = document.getElementById("submitForm");
const formError = document.getElementById("formError");

document.getElementById("openSubmitBtn").addEventListener("click", () => {
  submitModal.classList.remove("hidden");
});

function closeSubmitModal() {
  submitModal.classList.add("hidden");
  formError.classList.add("hidden");
}

document.getElementById("closeSubmitBtn").addEventListener("click", closeSubmitModal);

submitModal.addEventListener("click", (e) => {
  if (e.target === submitModal) closeSubmitModal();
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quote = document.getElementById("newQuote").value.trim();
  const fighter = document.getElementById("newFighter").value.trim();
  const mood = document.getElementById("newMood").value;
  const rating = document.getElementById("newRating").value;
  const url = document.getElementById("newUrl").value.trim();

  const bannedWords = ["trash", "sucks", "fraud", "bum", "clown fan", "hate"];
  if (bannedWords.some((w) => quote.toLowerCase().includes(w))) {
    formError.textContent = "Blocked by Community Rule: Keep it fun and respectful—no shit-talking other parties.";
    formError.classList.remove("hidden");
    return;
  }

  if (url.includes("search_query=")) {
    formError.textContent = "Please paste a direct YouTube video, Short, or social post URL—not a search query.";
    formError.classList.remove("hidden");
    return;
  }

  MEMES.unshift({
    id: Date.now(),
    memeId: quote.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    quoteRaw: quote,
    quoteClean: quote.replace(/fuck|fook/gi, "f***").replace(/bullshit/gi, "b*******"),
    fighter,
    mood,
    secondaryTag: "Community",
    rating,
    isFaceHighlight: true,
    quickDescription: "Community submitted outside-the-cage reaction",
    frameSecondStart: 0,
    duration: 5,
    frameSecondMark: 2,
    sourceTitle: "Community Verified Source",
    sourceUrl: url,
    accent: "#3B82F6"
  });

  state.selectedAthletes.add(fighter);
  submitForm.reset();
  closeSubmitModal();
  renderAthleteMenu();
  renderMemes();
});

// INITIAL RENDER
renderAthleteMenu();
renderMemes();
