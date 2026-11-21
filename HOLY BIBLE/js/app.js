/**
 * Sacred Bible Study & Spiritual Growth Application Engine
 * Pure Vanilla JavaScript (ES6+) — State Management, Scripture Fetcher,
 * Multi-color Highlighter, Study Journal, Audio Read-Aloud, and Search Engine.
 */

(() => {
  'use strict';

  // ==========================================================================
  // 1. APPLICATION STATE & PERSISTENCE KEYS
  // ==========================================================================
  const STORAGE_KEYS = {
    THEME: 'sacred_bible_theme',
    TRANSLATION: 'sacred_bible_translation',
    FONT_SIZE: 'sacred_bible_fontsize',
    CURRENT_BOOK: 'sacred_bible_cur_book',
    CURRENT_CHAPTER: 'sacred_bible_cur_chapter',
    HIGHLIGHTS: 'sacred_bible_highlights',
    BOOKMARKS: 'sacred_bible_bookmarks',
    NOTES: 'sacred_bible_notes',
    CACHE_PREFIX: 'sacred_bible_cache_'
  };

  const state = {
    currentBookId: localStorage.getItem(STORAGE_KEYS.CURRENT_BOOK) || 'GEN',
    currentChapter: parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_CHAPTER), 10) || 1,
    currentTranslation: localStorage.getItem(STORAGE_KEYS.TRANSLATION) || 'web',
    currentFontSize: localStorage.getItem(STORAGE_KEYS.FONT_SIZE) || 'font-size-md',
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    activeTab: 'tab-reader',
    currentGenreFilter: 'ALL',
    currentTestamentFilter: 'ALL',
    searchQuery: '',
    
    // User Study Collections
    highlights: JSON.parse(localStorage.getItem(STORAGE_KEYS.HIGHLIGHTS) || '{}'),
    bookmarks: JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '{}'),
    notes: JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || '{}'),
    
    // Active UI interaction
    selectedVerse: null, // { bookId, chapter, verse, text, element }
    chapterVerses: [],   // Current loaded verses array
    
    // Web Speech Audio Player
    audio: {
      isPlaying: false,
      isPaused: false,
      currentIndex: 0,
      utterance: null,
      speed: 1.0,
      voices: []
    }
  };

  // Curated Daily Bread Verses
  const DAILY_VERSES = [
    {
      reference: "Psalm 23:1-2",
      bookId: "PSA",
      chapter: 23,
      verse: 1,
      text: "The LORD is my shepherd: I shall not want. He makes me lie down in green pastures. He leads me beside still waters.",
      prompt: "Where are you striving in your own energy today? Rest in the Shepherd's quiet guidance and allow Him to restore your weary soul."
    },
    {
      reference: "Isaiah 40:31",
      bookId: "ISA",
      chapter: 40,
      verse: 31,
      text: "Those who wait on the LORD will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.",
      prompt: "True spiritual power is found in quiet, expectant waiting upon God. Hand over your exhaustion and receive His supernatural wind beneath your wings."
    },
    {
      reference: "Romans 8:38-39",
      bookId: "ROM",
      chapter: 8,
      verse: 38,
      text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth... will be able to separate us from the love of God, which is in Christ Jesus our Lord.",
      prompt: "No failure, fear, or worldly circumstance can sever you from the eternal, protective grip of Christ's love."
    },
    {
      reference: "Philippians 4:6-7",
      bookId: "PHP",
      chapter: 4,
      verse: 6,
      text: "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.",
      prompt: "Turn every anxious whisper into a prayer of grateful trust, and watch God's divine peace garrison your mind."
    },
    {
      reference: "John 15:5",
      bookId: "JHN",
      chapter: 15,
      verse: 5,
      text: "I am the vine. You are the branches. He who remains in me and I in him bears much fruit, for apart from me you can do nothing.",
      prompt: "You are not a factory producing fruit by self-effort; you are a branch attached to the living Vine. Abide and let His life surge through you."
    }
  ];

  // ==========================================================================
  // 2. DOM ELEMENT SELECTORS
  // ==========================================================================
  const DOM = {
    body: document.body,
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIconSun: document.getElementById('theme-icon-sun'),
    themeIconMoon: document.getElementById('theme-icon-moon'),
    translationSelect: document.getElementById('translation-select'),
    fontSizeSelect: document.getElementById('font-size-select'),
    navTabBtns: document.querySelectorAll('.nav-tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    
    // Daily Bread
    dailyVerseText: document.getElementById('daily-verse-text'),
    dailyVerseRef: document.getElementById('daily-verse-ref'),
    dailyReflectionPrompt: document.getElementById('daily-reflection-prompt'),
    dailyJumpBtn: document.getElementById('daily-jump-btn'),
    dailyCopyBtn: document.getElementById('daily-copy-btn'),

    // Book Navigation & Filters
    sidebarBookSearch: document.getElementById('sidebar-book-search'),
    testamentBtns: document.querySelectorAll('.testament-btn'),
    genrePillBtns: document.querySelectorAll('.genre-pill-btn'),
    bookNavList: document.getElementById('book-nav-list'),

    // Book Overview Card
    bookViewName: document.getElementById('book-view-name'),
    bookViewGenre: document.getElementById('book-view-genre'),
    bookViewAuthor: document.getElementById('book-view-author'),
    bookViewDate: document.getElementById('book-view-date'),
    bookViewEra: document.getElementById('book-view-era'),
    bookViewTheme: document.getElementById('book-view-theme'),
    bookViewHighlights: document.getElementById('book-view-highlights'),

    // Chapter Navigation & Study Context
    chapterGrid: document.getElementById('chapter-grid-container'),
    chapterCountLabel: document.getElementById('chapter-count-label'),
    studyChapterHeading: document.getElementById('study-chapter-heading'),
    studyChapterContext: document.getElementById('study-chapter-context'),
    studyChapterKeypoints: document.getElementById('study-chapter-keypoints'),
    btnPrevChapter: document.getElementById('btn-prev-chapter'),
    btnNextChapter: document.getElementById('btn-next-chapter'),

    // Scripture Flow Card
    scriptureChapterTitle: document.getElementById('scripture-chapter-title'),
    scriptureTranslationBadge: document.getElementById('scripture-translation-badge'),
    versesBodyFlow: document.getElementById('verses-body-flow'),

    // Floating Verse Toolbar
    floatingToolbar: document.getElementById('floating-verse-toolbar'),
    toolbarColorDots: document.querySelectorAll('.color-dot-btn'),
    toolbarBtnNote: document.getElementById('toolbar-btn-note'),
    toolbarBtnBookmark: document.getElementById('toolbar-btn-bookmark'),
    toolbarBtnCopy: document.getElementById('toolbar-btn-copy'),

    // Audio Bible Player
    audioCurrentLabel: document.getElementById('audio-current-label'),
    audioStatusLabel: document.getElementById('audio-status-label'),
    audioSpeedSelect: document.getElementById('audio-speed-select'),
    audioPlayBtn: document.getElementById('audio-play-btn'),
    audioPlayText: document.getElementById('audio-play-text'),
    audioStopBtn: document.getElementById('audio-stop-btn'),

    // Topical Section
    topicalCardsGrid: document.getElementById('topical-cards-grid'),
    topicalDetailView: document.getElementById('topical-detail-view'),
    topicalBackBtn: document.getElementById('topical-back-btn'),
    topicDetailHero: document.getElementById('topic-detail-hero'),
    topicalVersesContainer: document.getElementById('topical-verses-container'),

    // Timeline Section
    timelineContainer: document.getElementById('timeline-eras-container'),

    // Journal Drawer & Inline
    journalDrawerTrigger: document.getElementById('journal-drawer-trigger'),
    journalSlideDrawer: document.getElementById('journal-slide-drawer'),
    journalDrawerBackdrop: document.getElementById('journal-drawer-backdrop'),
    journalDrawerClose: document.getElementById('journal-drawer-close'),
    drawerJournalItems: document.getElementById('drawer-journal-items'),
    drawerTotalCount: document.getElementById('drawer-total-count'),
    drawerExportNotesBtn: document.getElementById('drawer-export-notes-btn'),
    inlineExportNotesBtn: document.getElementById('inline-export-notes-btn'),
    inlineJournalItemsList: document.getElementById('inline-journal-items-list'),
    journalBadgeCount: document.getElementById('journal-badge-count'),
    journalFilterPills: document.querySelectorAll('.journal-filter-pill'),

    // Note Modal
    noteModalOverlay: document.getElementById('note-modal-overlay'),
    noteModalRefLabel: document.getElementById('note-modal-ref-label'),
    noteModalVerseQuote: document.getElementById('note-modal-verse-quote'),
    noteTextarea: document.getElementById('note-textarea'),
    noteModalClose: document.getElementById('note-modal-close'),
    noteModalCancelBtn: document.getElementById('note-modal-cancel-btn'),
    noteModalSaveBtn: document.getElementById('note-modal-save-btn'),
    noteModalDeleteBtn: document.getElementById('note-modal-delete-btn'),

    // Search Modal
    searchModalTrigger: document.getElementById('search-modal-trigger'),
    searchModalOverlay: document.getElementById('search-modal-overlay'),
    searchModalClose: document.getElementById('search-modal-close'),
    globalSearchInput: document.getElementById('global-search-input'),
    searchResultsContainer: document.getElementById('search-results-container'),
    searchQuickTags: document.getElementById('search-quick-tags'),

    // Toasts
    toastContainer: document.getElementById('toast-container'),
    brandHomeBtn: document.getElementById('brand-home-btn')
  };

  // ==========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  function showToast(message, icon = '✦') {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ==========================================================================
  // 4. THEME & DISPLAY PREFERENCES
  // ==========================================================================
  function applyTheme(theme) {
    state.theme = theme;
    DOM.body.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);

    if (theme === 'dark') {
      DOM.themeIconSun.style.display = 'none';
      DOM.themeIconMoon.style.display = 'inline';
    } else {
      DOM.themeIconSun.style.display = 'inline';
      DOM.themeIconMoon.style.display = 'none';
    }
  }

  function applyFontSize(fontSizeClass) {
    state.currentFontSize = fontSizeClass;
    DOM.body.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg', 'font-size-xl');
    DOM.body.classList.add(fontSizeClass);
    localStorage.setItem(STORAGE_KEYS.FONT_SIZE, fontSizeClass);
  }

  // ==========================================================================
  // 5. DAILY BREAD ROTATION
  // ==========================================================================
  let activeDailyVerse = null;

  function initDailyBread() {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % DAILY_VERSES.length;
    activeDailyVerse = DAILY_VERSES[index];

    if (DOM.dailyVerseText) DOM.dailyVerseText.textContent = `"${activeDailyVerse.text}"`;
    if (DOM.dailyVerseRef) DOM.dailyVerseRef.textContent = `${activeDailyVerse.reference} (WEB)`;
    if (DOM.dailyReflectionPrompt) {
      DOM.dailyReflectionPrompt.innerHTML = `<strong>Daily Reflection:</strong> ${activeDailyVerse.prompt}`;
    }

    if (DOM.dailyJumpBtn) {
      DOM.dailyJumpBtn.onclick = () => {
        navigateToPassage(activeDailyVerse.bookId, activeDailyVerse.chapter, activeDailyVerse.verse);
      };
    }

    if (DOM.dailyCopyBtn) {
      DOM.dailyCopyBtn.onclick = () => {
        navigator.clipboard.writeText(`"${activeDailyVerse.text}" — ${activeDailyVerse.reference}`);
        showToast('Daily verse copied to clipboard!', '📋');
      };
    }
  }

  // ==========================================================================
  // 6. 66-BOOK EXPLORER & SIDEBAR
  // ==========================================================================
  function renderBookSidebar() {
    if (!DOM.bookNavList) return;
    DOM.bookNavList.innerHTML = '';

    const filterQuery = state.searchQuery.toLowerCase().trim();

    const filteredBooks = BIBLE_BOOKS.filter(book => {
      // Testament filter
      if (state.currentTestamentFilter !== 'ALL' && book.testament !== state.currentTestamentFilter) {
        return false;
      }
      // Genre filter
      if (state.currentGenreFilter !== 'ALL' && book.genre !== state.currentGenreFilter) {
        return false;
      }
      // Search query
      if (filterQuery) {
        const matchesName = book.name.toLowerCase().includes(filterQuery);
        const matchesId = book.id.toLowerCase().includes(filterQuery);
        const matchesTheme = book.theme.toLowerCase().includes(filterQuery);
        if (!matchesName && !matchesId && !matchesTheme) return false;
      }
      return true;
    });

    if (filteredBooks.length === 0) {
      DOM.bookNavList.innerHTML = `
        <div style="padding: 1.5rem 0.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No books found matching "${state.searchQuery}".
        </div>
      `;
      return;
    }

    filteredBooks.forEach(book => {
      const btn = document.createElement('button');
      btn.className = `book-nav-item ${book.id === state.currentBookId ? 'active' : ''}`;
      btn.setAttribute('data-book-id', book.id);
      btn.innerHTML = `
        <div>
          <span class="book-nav-name">${book.name}</span>
          <div class="book-nav-meta">${book.genre} • ${book.testament}</div>
        </div>
        <span class="book-nav-meta">${book.totalChapters} ch</span>
      `;
      btn.onclick = () => {
        navigateToPassage(book.id, 1);
      };
      DOM.bookNavList.appendChild(btn);
    });
  }

  // ==========================================================================
  // 7. BOOK OVERVIEW & CHAPTER SELECTOR
  // ==========================================================================
  function updateBookOverviewCard(book) {
    if (!book) return;

    if (DOM.bookViewName) DOM.bookViewName.textContent = book.name;
    if (DOM.bookViewGenre) DOM.bookViewGenre.textContent = `${book.genre} (${book.testament})`;
    if (DOM.bookViewAuthor) DOM.bookViewAuthor.textContent = book.author;
    if (DOM.bookViewDate) DOM.bookViewDate.textContent = book.date;
    if (DOM.bookViewEra) DOM.bookViewEra.textContent = book.era;
    if (DOM.bookViewTheme) DOM.bookViewTheme.textContent = book.theme;

    if (DOM.bookViewHighlights) {
      DOM.bookViewHighlights.innerHTML = '';
      (book.highlights || []).forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        DOM.bookViewHighlights.appendChild(li);
      });
    }

    // Render Chapter Grid
    if (DOM.chapterGrid) {
      DOM.chapterGrid.innerHTML = '';
      if (DOM.chapterCountLabel) {
        DOM.chapterCountLabel.textContent = `${book.totalChapters} Chapters`;
      }

      for (let ch = 1; ch <= book.totalChapters; ch++) {
        const chBtn = document.createElement('button');
        chBtn.className = `chapter-num-btn ${ch === state.currentChapter ? 'active' : ''}`;
        chBtn.textContent = ch;
        chBtn.setAttribute('aria-label', `${book.name} Chapter ${ch}`);
        chBtn.onclick = () => {
          navigateToPassage(book.id, ch);
        };
        DOM.chapterGrid.appendChild(chBtn);
      }
    }
  }

  function updateChapterStudyHeader(bookId, chapterNum) {
    const studyContext = getChapterStudyContext(bookId, chapterNum);
    if (!studyContext) return;

    if (DOM.studyChapterHeading) {
      DOM.studyChapterHeading.textContent = `${studyContext.bookName} Chapter ${chapterNum} Study Context`;
    }
    if (DOM.studyChapterContext) {
      DOM.studyChapterContext.textContent = studyContext.historicalContext;
    }
    if (DOM.studyChapterKeypoints) {
      DOM.studyChapterKeypoints.innerHTML = '';
      (studyContext.keyPoints || []).forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        DOM.studyChapterKeypoints.appendChild(li);
      });
    }
  }

  // ==========================================================================
  // 8. DYNAMIC CHAPTER SCRIPTURE FETCHER (Zero Missing Chapters + Caching)
  // ==========================================================================
  async function fetchChapterScripture(bookId, chapterNum, translation = 'web') {
    const book = getBookById(bookId);
    if (!book) return [];

    const cacheKey = `${STORAGE_KEYS.CACHE_PREFIX}${translation}_${bookId}_${chapterNum}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        localStorage.removeItem(cacheKey);
      }
    }

    // Modern Berean Standard Bible (BSB) API
    if (translation === 'bsb') {
      try {
        const url = `https://bible.helloao.org/api/BSB/${book.id}/${chapterNum}.json`;
        const resp = await fetch(url);
        if (resp.ok) {
          const json = await resp.json();
          const verses = [];
          if (json.chapter && json.chapter.content) {
            json.chapter.content.forEach(item => {
              if (item.type === 'verse' && item.number) {
                const text = Array.isArray(item.content)
                  ? item.content.map(c => typeof c === 'string' ? c : (c.text || '')).join(' ').trim()
                  : String(item.content || '').trim();
                verses.push({ verse: item.number, text: text });
              }
            });
          }
          if (verses.length > 0) {
            localStorage.setItem(cacheKey, JSON.stringify(verses));
            return verses;
          }
        }
      } catch (err) {
        console.warn('BSB API fetch failed, falling back:', err);
      }
    }

    // Default Bible API (WEB, KJV, ASV)
    try {
      const formattedBook = encodeURIComponent(book.name);
      const url = `https://bible-api.com/${formattedBook}+${chapterNum}?translation=${translation}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data && data.verses && data.verses.length > 0) {
          const verses = data.verses.map(v => ({
            verse: v.verse,
            text: (v.text || '').replace(/\s+/g, ' ').trim()
          }));
          localStorage.setItem(cacheKey, JSON.stringify(verses));
          return verses;
        }
      }
    } catch (apiErr) {
      console.warn('Bible-API failed, checking offline fallback:', apiErr);
    }

    // Built-in Offline Fallback
    const offlineKey = `${bookId}-${chapterNum}`;
    if (OFFLINE_SAMPLE_CHAPTERS && OFFLINE_SAMPLE_CHAPTERS[offlineKey]) {
      return OFFLINE_SAMPLE_CHAPTERS[offlineKey];
    }

    // Graceful synthesized fallback if entirely disconnected
    return [
      {
        verse: 1,
        text: `The sacred text for ${book.name} Chapter ${chapterNum} is ready to be loaded from the Bible API.`
      },
      {
        verse: 2,
        text: "Please verify your internet connection or select a different translation (WEB, KJV, ASV, BSB) from the top bar to fetch this passage."
      }
    ];
  }

  async function renderChapter(bookId, chapterNum, scrollToVerse = null) {
    const book = getBookById(bookId);
    if (!book) return;

    state.currentBookId = bookId;
    state.currentChapter = chapterNum;
    localStorage.setItem(STORAGE_KEYS.CURRENT_BOOK, bookId);
    localStorage.setItem(STORAGE_KEYS.CURRENT_CHAPTER, chapterNum);

    // Stop active audio
    stopAudio();
    hideFloatingToolbar();

    // Update Header labels
    if (DOM.scriptureChapterTitle) {
      DOM.scriptureChapterTitle.textContent = `${book.name} ${chapterNum}`;
    }
    if (DOM.scriptureTranslationBadge) {
      DOM.scriptureTranslationBadge.textContent = `${state.currentTranslation.toUpperCase()} Translation`;
    }

    // Update Overview & Chapter Study Header
    updateBookOverviewCard(book);
    updateChapterStudyHeader(bookId, chapterNum);
    renderBookSidebar();

    // Show golden spinner loader
    if (DOM.versesBodyFlow) {
      DOM.versesBodyFlow.innerHTML = `
        <div class="golden-spinner" aria-label="Loading sacred scripture..."></div>
        <div class="skeleton-text" style="width: 90%;"></div>
        <div class="skeleton-text" style="width: 85%;"></div>
        <div class="skeleton-text" style="width: 95%;"></div>
      `;
    }

    // Fetch Verses
    const verses = await fetchChapterScripture(bookId, chapterNum, state.currentTranslation);
    state.chapterVerses = verses;

    if (!DOM.versesBodyFlow) return;
    DOM.versesBodyFlow.innerHTML = '';

    if (verses.length === 0) {
      DOM.versesBodyFlow.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          <p style="margin-bottom: 1rem;">Unable to load scripture verses for ${book.name} Chapter ${chapterNum}.</p>
          <button id="retry-fetch-btn" class="btn btn-primary">Retry Chapter</button>
        </div>
      `;
      const retryBtn = document.getElementById('retry-fetch-btn');
      if (retryBtn) retryBtn.onclick = () => renderChapter(bookId, chapterNum);
      return;
    }

    // Render Verses
    verses.forEach(v => {
      const verseSpan = document.createElement('span');
      verseSpan.className = 'verse-item';
      verseSpan.id = `verse-${bookId}-${chapterNum}-${v.verse}`;
      verseSpan.setAttribute('data-book-id', bookId);
      verseSpan.setAttribute('data-chapter', chapterNum);
      verseSpan.setAttribute('data-verse-num', v.verse);
      verseSpan.setAttribute('data-text', v.text);

      const verseKey = `${bookId}-${chapterNum}-${v.verse}`;

      // Apply saved highlights
      if (state.highlights[verseKey]) {
        verseSpan.classList.add(`hl-${state.highlights[verseKey]}`);
      }

      // Apply note indicator
      if (state.notes[verseKey]) {
        verseSpan.classList.add('verse-has-note');
      }

      // Apply bookmark indicator
      if (state.bookmarks[verseKey]) {
        verseSpan.classList.add('verse-is-bookmarked');
      }

      verseSpan.innerHTML = `<span class="verse-number">${v.verse}</span>${v.text} `;

      verseSpan.onclick = (e) => {
        e.stopPropagation();
        openVerseToolbar(verseSpan, bookId, chapterNum, v.verse, v.text);
      };

      DOM.versesBodyFlow.appendChild(verseSpan);
    });

    // Update Bottom Navigation Prev/Next
    if (DOM.btnPrevChapter) {
      if (chapterNum > 1) {
        DOM.btnPrevChapter.disabled = false;
        DOM.btnPrevChapter.textContent = `← ${book.name} ${chapterNum - 1}`;
        DOM.btnPrevChapter.onclick = () => navigateToPassage(bookId, chapterNum - 1);
      } else {
        DOM.btnPrevChapter.disabled = true;
        DOM.btnPrevChapter.textContent = `← Start of Book`;
      }
    }

    if (DOM.btnNextChapter) {
      if (chapterNum < book.totalChapters) {
        DOM.btnNextChapter.disabled = false;
        DOM.btnNextChapter.textContent = `${book.name} ${chapterNum + 1} →`;
        DOM.btnNextChapter.onclick = () => navigateToPassage(bookId, chapterNum + 1);
      } else {
        DOM.btnNextChapter.disabled = true;
        DOM.btnNextChapter.textContent = `End of Book →`;
      }
    }

    // If requested, scroll to and highlight target verse
    if (scrollToVerse) {
      setTimeout(() => {
        const targetEl = document.getElementById(`verse-${bookId}-${chapterNum}-${scrollToVerse}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.style.transition = 'all 0.5s ease';
          targetEl.style.outline = '3px solid var(--accent-gold)';
          setTimeout(() => { targetEl.style.outline = 'none'; }, 2400);
        }
      }, 250);
    }
  }

  function navigateToPassage(bookId, chapterNum, verseNum = null) {
    switchTab('tab-reader');
    renderChapter(bookId, chapterNum, verseNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================================================
  // 9. FLOATING VERSE STUDY TOOLBAR & ACTIONS
  // ==========================================================================
  function openVerseToolbar(element, bookId, chapter, verse, text) {
    state.selectedVerse = {
      bookId: bookId,
      chapter: chapter,
      verse: verse,
      text: text,
      element: element
    };

    if (!DOM.floatingToolbar) return;

    const rect = element.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    DOM.floatingToolbar.style.left = `${rect.left + rect.width / 2 + scrollX}px`;
    DOM.floatingToolbar.style.top = `${rect.top + scrollY - 10}px`;
    DOM.floatingToolbar.classList.add('visible');
  }

  function hideFloatingToolbar() {
    if (DOM.floatingToolbar) {
      DOM.floatingToolbar.classList.remove('visible');
    }
  }

  function handleVerseHighlight(colorType) {
    if (!state.selectedVerse) return;
    const { bookId, chapter, verse, element, text } = state.selectedVerse;
    const verseKey = `${bookId}-${chapter}-${verse}`;

    // Remove existing highlight classes
    element.classList.remove('hl-promises', 'hl-growth', 'hl-wisdom', 'hl-comfort', 'hl-gold', 'hl-emerald', 'hl-sapphire', 'hl-rose');

    if (colorType === 'none') {
      delete state.highlights[verseKey];
      showToast(`Highlight removed from verse ${verse}`, '✕');
    } else {
      // Map colorType to style class
      state.highlights[verseKey] = colorType;
      element.classList.add(`hl-${colorType}`);
      const colorNames = {
        promises: "Gold (God's Promises)",
        growth: "Emerald (Spiritual Growth & Victory)",
        wisdom: "Sapphire (Wisdom & Doctrine)",
        comfort: "Rose (Grace, Comfort & Love)"
      };
      showToast(`Highlighted in ${colorNames[colorType]}`, '✦');
    }

    localStorage.setItem(STORAGE_KEYS.HIGHLIGHTS, JSON.stringify(state.highlights));
    updateJournalViews();
    hideFloatingToolbar();
  }

  function toggleVerseBookmark() {
    if (!state.selectedVerse) return;
    const { bookId, chapter, verse, element, text } = state.selectedVerse;
    const book = getBookById(bookId);
    const verseKey = `${bookId}-${chapter}-${verse}`;

    if (state.bookmarks[verseKey]) {
      delete state.bookmarks[verseKey];
      element.classList.remove('verse-is-bookmarked');
      showToast(`Removed bookmark for ${book.name} ${chapter}:${verse}`, '★');
    } else {
      state.bookmarks[verseKey] = {
        bookId: bookId,
        bookName: book ? book.name : bookId,
        chapter: chapter,
        verse: verse,
        text: text,
        date: new Date().toLocaleDateString()
      };
      element.classList.add('verse-is-bookmarked');
      showToast(`Bookmarked ${book.name} ${chapter}:${verse}`, '★');
    }

    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(state.bookmarks));
    updateJournalViews();
    hideFloatingToolbar();
  }

  function copySelectedVerse() {
    if (!state.selectedVerse) return;
    const { bookId, chapter, verse, text } = state.selectedVerse;
    const book = getBookById(bookId);
    const bookName = book ? book.name : bookId;
    const formatted = `"${text}" — ${bookName} ${chapter}:${verse} (${state.currentTranslation.toUpperCase()})`;

    navigator.clipboard.writeText(formatted);
    showToast(`Copied ${bookName} ${chapter}:${verse} to clipboard!`, '📋');
    hideFloatingToolbar();
  }

  // ==========================================================================
  // 10. STUDY NOTES & REFLECTION MODAL
  // ==========================================================================
  function openNoteModal() {
    if (!state.selectedVerse) return;
    const { bookId, chapter, verse, text } = state.selectedVerse;
    const book = getBookById(bookId);
    const verseKey = `${bookId}-${chapter}-${verse}`;

    if (DOM.noteModalRefLabel) {
      DOM.noteModalRefLabel.textContent = `${book ? book.name : bookId} ${chapter}:${verse}`;
    }
    if (DOM.noteModalVerseQuote) {
      DOM.noteModalVerseQuote.textContent = `"${text}"`;
    }

    const existing = state.notes[verseKey];
    if (existing && DOM.noteTextarea) {
      DOM.noteTextarea.value = existing.note;
      if (DOM.noteModalDeleteBtn) DOM.noteModalDeleteBtn.style.display = 'inline-block';
    } else {
      if (DOM.noteTextarea) DOM.noteTextarea.value = '';
      if (DOM.noteModalDeleteBtn) DOM.noteModalDeleteBtn.style.display = 'none';
    }

    if (DOM.noteModalOverlay) DOM.noteModalOverlay.classList.add('active');
    hideFloatingToolbar();
  }

  function closeNoteModal() {
    if (DOM.noteModalOverlay) DOM.noteModalOverlay.classList.remove('active');
  }

  function saveNote() {
    if (!state.selectedVerse) return;
    const { bookId, chapter, verse, element, text } = state.selectedVerse;
    const book = getBookById(bookId);
    const verseKey = `${bookId}-${chapter}-${verse}`;
    const noteText = DOM.noteTextarea ? DOM.noteTextarea.value.trim() : '';

    if (!noteText) {
      showToast('Please enter a note reflection or prayer.', '⚠️');
      return;
    }

    state.notes[verseKey] = {
      bookId: bookId,
      bookName: book ? book.name : bookId,
      chapter: chapter,
      verse: verse,
      text: text,
      note: noteText,
      date: new Date().toLocaleDateString()
    };

    element.classList.add('verse-has-note');
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(state.notes));
    showToast(`Study note saved for ${book ? book.name : bookId} ${chapter}:${verse}`, '📝');
    closeNoteModal();
    updateJournalViews();
  }

  function deleteNote() {
    if (!state.selectedVerse) return;
    const { bookId, chapter, verse, element } = state.selectedVerse;
    const verseKey = `${bookId}-${chapter}-${verse}`;

    delete state.notes[verseKey];
    element.classList.remove('verse-has-note');
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(state.notes));
    showToast('Study note deleted.', '🗑️');
    closeNoteModal();
    updateJournalViews();
  }

  // ==========================================================================
  // 11. AUDIO BIBLE READ-ALOUD (Web Speech API)
  // ==========================================================================
  function initSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
      if (DOM.audioStatusLabel) DOM.audioStatusLabel.textContent = 'Audio not supported in this browser';
      return;
    }

    function populateVoices() {
      state.audio.voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    }

    populateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }

  function playAudio() {
    if (!('speechSynthesis' in window)) {
      showToast('Speech audio is not supported in this browser.', '⚠️');
      return;
    }

    if (state.audio.isPaused) {
      window.speechSynthesis.resume();
      state.audio.isPaused = false;
      state.audio.isPlaying = true;
      if (DOM.audioPlayText) DOM.audioPlayText.textContent = 'Pause';
      if (DOM.audioStatusLabel) DOM.audioStatusLabel.textContent = 'Reading scripture aloud...';
      return;
    }

    if (state.audio.isPlaying) {
      window.speechSynthesis.pause();
      state.audio.isPaused = true;
      state.audio.isPlaying = false;
      if (DOM.audioPlayText) DOM.audioPlayText.textContent = 'Resume';
      if (DOM.audioStatusLabel) DOM.audioStatusLabel.textContent = 'Audio paused';
      return;
    }

    if (!state.chapterVerses || state.chapterVerses.length === 0) {
      showToast('No chapter verses loaded to read.', '⚠️');
      return;
    }

    state.audio.currentIndex = 0;
    state.audio.isPlaying = true;
    state.audio.isPaused = false;
    if (DOM.audioPlayText) DOM.audioPlayText.textContent = 'Pause';
    if (DOM.audioStopBtn) DOM.audioStopBtn.style.display = 'inline-flex';

    speakVerseAt(state.audio.currentIndex);
  }

  function speakVerseAt(index) {
    if (!state.audio.isPlaying || index >= state.chapterVerses.length) {
      stopAudio();
      return;
    }

    const currentV = state.chapterVerses[index];
    const book = getBookById(state.currentBookId);
    const bookName = book ? book.name : '';

    // Highlight current active verse in reading flow
    document.querySelectorAll('.verse-item.speaking-active').forEach(el => el.classList.remove('speaking-active'));
    const verseEl = document.getElementById(`verse-${state.currentBookId}-${state.currentChapter}-${currentV.verse}`);
    if (verseEl) {
      verseEl.classList.add('speaking-active');
      verseEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (DOM.audioCurrentLabel) {
      DOM.audioCurrentLabel.textContent = `${bookName} ${state.currentChapter}:${currentV.verse}`;
    }
    if (DOM.audioStatusLabel) {
      DOM.audioStatusLabel.textContent = `Reading verse ${index + 1} of ${state.chapterVerses.length}...`;
    }

    const utteranceText = `Verse ${currentV.verse}. ${currentV.text}`;
    const utterance = new SpeechSynthesisUtterance(utteranceText);
    utterance.rate = state.audio.speed;

    if (state.audio.voices.length > 0) {
      // Pick a natural clear voice
      const preferred = state.audio.voices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'));
      utterance.voice = preferred || state.audio.voices[0];
    }

    utterance.onend = () => {
      if (state.audio.isPlaying && !state.audio.isPaused) {
        state.audio.currentIndex++;
        speakVerseAt(state.audio.currentIndex);
      }
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      stopAudio();
    };

    state.audio.utterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stopAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    state.audio.isPlaying = false;
    state.audio.isPaused = false;
    state.audio.currentIndex = 0;
    state.audio.utterance = null;

    document.querySelectorAll('.verse-item.speaking-active').forEach(el => el.classList.remove('speaking-active'));

    if (DOM.audioPlayText) DOM.audioPlayText.textContent = 'Listen';
    if (DOM.audioStatusLabel) DOM.audioStatusLabel.textContent = 'Ready to listen';
    if (DOM.audioStopBtn) DOM.audioStopBtn.style.display = 'none';
  }

  // ==========================================================================
  // 12. "WALK IN THE SPIRIT" TOPICAL COLLECTIONS VIEW
  // ==========================================================================
  function renderTopicalGrid() {
    if (!DOM.topicalCardsGrid) return;
    DOM.topicalCardsGrid.innerHTML = '';

    TOPICAL_COLLECTIONS.forEach(topic => {
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', topic.title);

      card.innerHTML = `
        <div class="topic-card-top">
          <span class="topic-badge">${topic.badge}</span>
          <span class="topic-verse-count">${topic.verses.length} Scriptures</span>
        </div>
        <h3 class="topic-card-title">${topic.title}</h3>
        <p class="topic-card-desc">${topic.description}</p>
        <div class="topic-card-footer">
          <span class="topic-sample-ref">${topic.verses[0].reference}</span>
          <span class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;">
            Explore Truth →
          </span>
        </div>
      `;

      card.onclick = () => openTopicalDetail(topic.id);
      DOM.topicalCardsGrid.appendChild(card);
    });
  }

  function openTopicalDetail(topicId) {
    const topic = getTopicById(topicId);
    if (!topic) return;

    if (DOM.topicalCardsGrid) DOM.topicalCardsGrid.style.display = 'none';
    if (DOM.topicalDetailView) DOM.topicalDetailView.classList.add('active');

    // Render Hero & Victory Guide
    if (DOM.topicDetailHero) {
      DOM.topicDetailHero.innerHTML = `
        <span class="section-eyebrow">${topic.category}</span>
        <h2 class="section-heading-large" style="margin-bottom: 0.5rem;">${topic.title}</h2>
        <p class="section-subtext" style="margin-bottom: 1.25rem;">${topic.description}</p>

        <div class="victory-guide-box">
          <div class="victory-truth-title">✦ Divine Truth & Foundation</div>
          <p class="victory-truth-text">${topic.victoryGuide.truth}</p>

          <div class="victory-steps-title">Actionable Victory Steps</div>
          <ol class="victory-steps-list">
            ${topic.victoryGuide.actionSteps.map(step => `<li>${step}</li>`).join('')}
          </ol>

          <div class="victory-prayer-box">
            <div class="victory-prayer-title">Spiritual Warfare & Victory Prayer</div>
            <p class="victory-prayer-text">"${topic.victoryGuide.prayer}"</p>
          </div>
        </div>
      `;
    }

    // Render Topical Verses
    if (DOM.topicalVersesContainer) {
      DOM.topicalVersesContainer.innerHTML = '';
      topic.verses.forEach(v => {
        const vCard = document.createElement('div');
        vCard.className = 'topical-verse-card';
        vCard.innerHTML = `
          <div class="topical-verse-top">
            <h4 class="topical-verse-ref">${v.reference}</h4>
            <span class="book-badge-genre" style="font-size:0.7rem;">${v.colorType.toUpperCase()}</span>
          </div>
          <p class="topical-verse-body">"${v.text}"</p>
          <div class="topical-verse-insight">
            <strong>Spiritual Insight:</strong> ${v.insight}
          </div>
          <div class="topical-verse-actions">
            <button class="btn btn-primary btn-jump-context">
              📖 Open Full Chapter Context
            </button>
            <button class="btn btn-secondary btn-copy-verse">
              📋 Copy Verse
            </button>
            <button class="btn btn-secondary btn-save-hl">
              ★ Save to Highlights
            </button>
          </div>
        `;

        // Button Actions
        const jumpBtn = vCard.querySelector('.btn-jump-context');
        jumpBtn.onclick = () => {
          navigateToPassage(v.bookId, v.chapter, v.verse);
          showToast(`Opened ${v.reference} in Bible Reader`, '📖');
        };

        const copyBtn = vCard.querySelector('.btn-copy-verse');
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(`"${v.text}" — ${v.reference}`);
          showToast(`Copied ${v.reference} to clipboard!`, '📋');
        };

        const saveHlBtn = vCard.querySelector('.btn-save-hl');
        saveHlBtn.onclick = () => {
          const verseKey = `${v.bookId}-${v.chapter}-${v.verse}`;
          state.highlights[verseKey] = v.colorType;
          localStorage.setItem(STORAGE_KEYS.HIGHLIGHTS, JSON.stringify(state.highlights));
          showToast(`Saved ${v.reference} to your Highlights!`, '✦');
          updateJournalViews();
        };

        DOM.topicalVersesContainer.appendChild(vCard);
      });
    }

    window.scrollTo({ top: 100, behavior: 'smooth' });
  }

  function backToTopicalGrid() {
    if (DOM.topicalDetailView) DOM.topicalDetailView.classList.remove('active');
    if (DOM.topicalCardsGrid) DOM.topicalCardsGrid.style.display = 'grid';
  }

  // ==========================================================================
  // 13. CHRONOLOGICAL BIBLICAL TIMELINE VIEW (10 ERAS)
  // ==========================================================================
  function renderTimeline() {
    if (!DOM.timelineContainer) return;
    DOM.timelineContainer.innerHTML = '';

    BIBLICAL_TIMELINE.forEach(era => {
      const eraCard = document.createElement('article');
      eraCard.className = 'timeline-era-card';
      eraCard.innerHTML = `
        <div class="era-number-node">${era.eraNumber}</div>
        <div class="era-header-row">
          <h3 class="era-title">${era.name}</h3>
          <span class="era-dates">${era.dates}</span>
        </div>
        <div class="era-badge-books">Associated Scriptures: ${era.badge}</div>
        <p class="era-summary-text">${era.summary}</p>

        <div class="era-figures-row">
          <span class="figures-label">Key Figures:</span>
          ${era.majorFigures.map(fig => `<span class="figure-pill">${fig}</span>`).join('')}
        </div>

        <div style="margin-bottom: 0.85rem;">
          <span class="figures-label" style="display:block; margin-bottom: 0.35rem;">Watershed Events:</span>
          <ul style="list-style: disc inside; font-size: 0.82rem; color: var(--text-secondary); display:flex; flex-direction:column; gap: 0.2rem;">
            ${era.keyEvents.map(evt => `<li>${evt}</li>`).join('')}
          </ul>
        </div>

        <div class="era-books-chips-group">
          <span class="figures-label" style="margin-right: 0.5rem;">Explore Books:</span>
          ${era.associatedBooks.map(b => `
            <button class="era-book-chip-btn" data-book-id="${b.id}" data-chapter="${b.startChapter || 1}">
              📖 ${b.name} (${b.chapters})
            </button>
          `).join('')}
        </div>
      `;

      // Attach clickable book chip listeners
      eraCard.querySelectorAll('.era-book-chip-btn').forEach(btn => {
        btn.onclick = () => {
          const bookId = btn.getAttribute('data-book-id');
          const chapter = parseInt(btn.getAttribute('data-chapter'), 10) || 1;
          const book = getBookById(bookId);
          navigateToPassage(bookId, chapter);
          showToast(`Opening ${book ? book.name : bookId} in Bible Reader`, '🏛️');
        };
      });

      DOM.timelineContainer.appendChild(eraCard);
    });
  }

  // ==========================================================================
  // 14. SPIRITUAL JOURNAL & SAVED HIGHLIGHTS (DRAWER & INLINE)
  // ==========================================================================
  let activeJournalFilter = 'ALL';

  function updateJournalViews() {
    renderJournalContent(DOM.drawerJournalItems);
    renderJournalContent(DOM.inlineJournalItemsList);

    // Update count badge
    const totalItems = Object.keys(state.highlights).length + Object.keys(state.bookmarks).length + Object.keys(state.notes).length;
    if (DOM.journalBadgeCount) {
      if (totalItems > 0) {
        DOM.journalBadgeCount.textContent = totalItems;
        DOM.journalBadgeCount.style.display = 'inline-flex';
      } else {
        DOM.journalBadgeCount.style.display = 'none';
      }
    }
    if (DOM.drawerTotalCount) {
      DOM.drawerTotalCount.textContent = `${totalItems} Saved Items`;
    }
  }

  function renderJournalContent(container) {
    if (!container) return;
    container.innerHTML = '';

    const items = [];

    // Highlights
    Object.keys(state.highlights).forEach(key => {
      const parts = key.split('-');
      if (parts.length >= 3) {
        const bookId = parts[0];
        const chapter = parseInt(parts[1], 10);
        const verse = parseInt(parts[2], 10);
        const color = state.highlights[key];
        const book = getBookById(bookId);
        items.push({
          type: 'highlight',
          color: color,
          key: key,
          bookId: bookId,
          bookName: book ? book.name : bookId,
          chapter: chapter,
          verse: verse,
          text: `Scripture passage saved in ${color.toUpperCase()} highlight`
        });
      }
    });

    // Bookmarks
    Object.keys(state.bookmarks).forEach(key => {
      const b = state.bookmarks[key];
      items.push({
        type: 'bookmark',
        key: key,
        bookId: b.bookId,
        bookName: b.bookName,
        chapter: b.chapter,
        verse: b.verse,
        text: b.text,
        date: b.date
      });
    });

    // Notes
    Object.keys(state.notes).forEach(key => {
      const n = state.notes[key];
      items.push({
        type: 'note',
        key: key,
        bookId: n.bookId,
        bookName: n.bookName,
        chapter: n.chapter,
        verse: n.verse,
        text: n.text,
        note: n.note,
        date: n.date
      });
    });

    // Apply Filter
    const filtered = items.filter(item => {
      if (activeJournalFilter === 'ALL') return true;
      if (activeJournalFilter === 'bookmarks') return item.type === 'bookmark';
      if (activeJournalFilter === 'notes') return item.type === 'note';
      if (item.type === 'highlight' && item.color === activeJournalFilter) return true;
      return false;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="journal-empty-state">
          <div class="journal-empty-icon">📖</div>
          <h4 style="font-family: var(--font-serif-header); color: var(--text-primary); margin-bottom: 0.5rem;">
            No Saved Study Entries Yet
          </h4>
          <p style="font-size: 0.85rem; line-height: 1.5;">
            Click on any verse in the Bible Reader to apply color highlights, bookmark sacred passages, or record personal reflections and prayers.
          </p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'journal-item-card';

      let typeBadge = '';
      if (item.type === 'highlight') {
        typeBadge = `<span class="book-badge-genre" style="font-size:0.68rem;">HL: ${item.color.toUpperCase()}</span>`;
      } else if (item.type === 'bookmark') {
        typeBadge = `<span class="book-badge-genre" style="font-size:0.68rem; background-color: var(--accent-gold-subtle); color: var(--accent-gold);">★ BOOKMARK</span>`;
      } else if (item.type === 'note') {
        typeBadge = `<span class="book-badge-genre" style="font-size:0.68rem; background-color: var(--accent-sage-subtle); color: var(--accent-sage);">📝 NOTE</span>`;
      }

      card.innerHTML = `
        <div class="journal-card-top">
          <span class="journal-verse-ref">${item.bookName} ${item.chapter}:${item.verse}</span>
          ${typeBadge}
        </div>
        ${item.text ? `<p class="journal-verse-quote">"${item.text}"</p>` : ''}
        ${item.note ? `<div class="journal-note-content"><strong>Reflection:</strong> ${item.note}</div>` : ''}
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.35rem;">
          <span style="font-size:0.72rem; color:var(--text-muted);">${item.date || ''}</span>
          <button class="btn btn-secondary btn-journal-jump" style="padding: 0.25rem 0.55rem; font-size: 0.75rem;">
            Read in Context →
          </button>
        </div>
      `;

      const jumpBtn = card.querySelector('.btn-journal-jump');
      jumpBtn.onclick = () => {
        closeJournalDrawer();
        navigateToPassage(item.bookId, item.chapter, item.verse);
      };

      container.appendChild(card);
    });
  }

  function openJournalDrawer() {
    if (DOM.journalSlideDrawer) DOM.journalSlideDrawer.classList.add('open');
    if (DOM.journalDrawerBackdrop) DOM.journalDrawerBackdrop.classList.add('active');
  }

  function closeJournalDrawer() {
    if (DOM.journalSlideDrawer) DOM.journalSlideDrawer.classList.remove('open');
    if (DOM.journalDrawerBackdrop) DOM.journalDrawerBackdrop.classList.remove('active');
  }

  function exportStudyNotes() {
    let content = "=========================================================\n";
    content += "   HOLY BIBLE STUDY & SPIRITUAL REFLECTION JOURNAL\n";
    content += `   Exported on: ${new Date().toLocaleString()}\n`;
    content += "=========================================================\n\n";

    content += "--- 1. PERSONAL STUDY NOTES & PRAYERS ---\n\n";
    const noteKeys = Object.keys(state.notes);
    if (noteKeys.length === 0) {
      content += "No personal study notes recorded yet.\n\n";
    } else {
      noteKeys.forEach(k => {
        const n = state.notes[k];
        content += `[${n.bookName} ${n.chapter}:${n.verse}] (${n.date || 'Recent'})\n`;
        content += `Verse: "${n.text}"\n`;
        content += `Reflection / Prayer: ${n.note}\n`;
        content += "---------------------------------------------------------\n";
      });
    }

    content += "\n--- 2. BOOKMARKED SCRIPTURES ---\n\n";
    const bmKeys = Object.keys(state.bookmarks);
    if (bmKeys.length === 0) {
      content += "No bookmarks saved yet.\n\n";
    } else {
      bmKeys.forEach(k => {
        const b = state.bookmarks[k];
        content += `★ ${b.bookName} ${b.chapter}:${b.verse} — "${b.text}"\n`;
      });
    }

    content += "\n--- 3. COLOR-CODED HIGHLIGHTS ---\n\n";
    const hlKeys = Object.keys(state.highlights);
    if (hlKeys.length === 0) {
      content += "No highlighted verses recorded yet.\n\n";
    } else {
      hlKeys.forEach(k => {
        const parts = k.split('-');
        const book = getBookById(parts[0]);
        content += `[${state.highlights[k].toUpperCase()}] ${book ? book.name : parts[0]} ${parts[1]}:${parts[2]}\n`;
      });
    }

    content += "\n=========================================================\n";
    content += "   'Thy word is a lamp unto my feet, and a light unto my path.' — Psalm 119:105\n";

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bible_Study_Notes_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Study notes downloaded successfully!', '📥');
  }

  // ==========================================================================
  // 15. GLOBAL SEARCH ENGINE & PASSAGE JUMPER
  // ==========================================================================
  function parseScriptureReference(query) {
    if (!query) return null;
    const clean = query.trim();

    // Match e.g. "John 3:16", "1 Cor 13:4", "Genesis 1", "Psalm 23:1"
    const match = clean.match(/^([1-3]?\s*[A-Za-z]+)\s*(\d+)(?:[:\.](\d+))?$/i);
    if (!match) return null;

    const rawBookName = match[1].trim();
    const chapter = parseInt(match[2], 10);
    const verse = match[3] ? parseInt(match[3], 10) : null;

    // Resolve book
    const foundBook = BIBLE_BOOKS.find(b => {
      const bName = b.name.toLowerCase();
      const bId = b.id.toLowerCase();
      const qName = rawBookName.toLowerCase();
      return bName === qName || bId === qName || bName.startsWith(qName);
    });

    if (foundBook && chapter >= 1 && chapter <= foundBook.totalChapters) {
      return {
        book: foundBook,
        chapter: chapter,
        verse: verse
      };
    }

    return null;
  }

  function handleGlobalSearch(query) {
    if (!DOM.searchResultsContainer) return;
    const q = (query || '').trim();

    if (!q) {
      DOM.searchResultsContainer.innerHTML = `
        <div style="padding: 2rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Type a book reference like <strong>"John 3:16"</strong>, a book name like <strong>"Proverbs"</strong>, or a spiritual topic like <strong>"Temptation"</strong>.
        </div>
      `;
      return;
    }

    DOM.searchResultsContainer.innerHTML = '';

    // Check direct reference jump
    const refJump = parseScriptureReference(q);
    if (refJump) {
      const jumpCard = document.createElement('div');
      jumpCard.className = 'search-result-item';
      jumpCard.innerHTML = `
        <div class="search-res-title">
          ⚡ Jump Directly to ${refJump.book.name} Chapter ${refJump.chapter}${refJump.verse ? `:${refJump.verse}` : ''}
        </div>
        <div class="search-res-desc">Instant navigation to holy scripture text</div>
      `;
      jumpCard.onclick = () => {
        closeSearchModal();
        navigateToPassage(refJump.book.id, refJump.chapter, refJump.verse);
      };
      DOM.searchResultsContainer.appendChild(jumpCard);
    }

    // Matching Books
    const matchingBooks = BIBLE_BOOKS.filter(b => 
      b.name.toLowerCase().includes(q.toLowerCase()) || 
      b.id.toLowerCase().includes(q.toLowerCase()) ||
      b.theme.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5);

    matchingBooks.forEach(b => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="search-res-title">📖 Book of ${b.name} (${b.testament})</div>
        <div class="search-res-desc">${b.genre} • Author: ${b.author} • ${b.totalChapters} chapters</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${b.theme}</div>
      `;
      item.onclick = () => {
        closeSearchModal();
        navigateToPassage(b.id, 1);
      };
      DOM.searchResultsContainer.appendChild(item);
    });

    // Matching Topics
    const matchingTopics = TOPICAL_COLLECTIONS.filter(t =>
      t.title.toLowerCase().includes(q.toLowerCase()) ||
      t.description.toLowerCase().includes(q.toLowerCase()) ||
      t.category.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 4);

    matchingTopics.forEach(t => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="search-res-title">🛡️ Topic: ${t.title}</div>
        <div class="search-res-desc">${t.category} • ${t.verses.length} Scriptures & Spiritual Victory Guide</div>
      `;
      item.onclick = () => {
        closeSearchModal();
        switchTab('tab-topical');
        openTopicalDetail(t.id);
      };
      DOM.searchResultsContainer.appendChild(item);
    });

    if (DOM.searchResultsContainer.children.length === 0) {
      DOM.searchResultsContainer.innerHTML = `
        <div style="padding: 2rem 1rem; text-align: center; color: var(--text-muted);">
          No matching passages, books, or topics found for "${q}".
        </div>
      `;
    }
  }

  function openSearchModal() {
    if (DOM.searchModalOverlay) DOM.searchModalOverlay.classList.add('active');
    if (DOM.globalSearchInput) {
      DOM.globalSearchInput.focus();
      DOM.globalSearchInput.select();
    }
  }

  function closeSearchModal() {
    if (DOM.searchModalOverlay) DOM.searchModalOverlay.classList.remove('active');
  }

  // ==========================================================================
  // 16. TAB NAVIGATION
  // ==========================================================================
  function switchTab(targetTabId) {
    state.activeTab = targetTabId;

    DOM.navTabBtns.forEach(btn => {
      if (btn.getAttribute('data-target') === targetTabId) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    DOM.tabPanes.forEach(pane => {
      if (pane.id === targetTabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    if (targetTabId === 'tab-topical') {
      renderTopicalGrid();
      backToTopicalGrid();
    } else if (targetTabId === 'tab-timeline') {
      renderTimeline();
    } else if (targetTabId === 'tab-journal-inline') {
      updateJournalViews();
    }
  }

  // ==========================================================================
  // 17. INITIALIZATION & EVENT LISTENERS
  // ==========================================================================
  function initEventListeners() {
    // Brand Home Click
    if (DOM.brandHomeBtn) {
      DOM.brandHomeBtn.onclick = () => {
        navigateToPassage('GEN', 1);
      };
    }

    // Theme Switcher
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.onclick = () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        showToast(`Theme changed to ${nextTheme === 'dark' ? 'Evening Sanctuary' : 'Illuminated Parchment'}`);
      };
    }

    // Translation Switcher
    if (DOM.translationSelect) {
      DOM.translationSelect.value = state.currentTranslation;
      DOM.translationSelect.onchange = (e) => {
        state.currentTranslation = e.target.value;
        localStorage.setItem(STORAGE_KEYS.TRANSLATION, state.currentTranslation);
        renderChapter(state.currentBookId, state.currentChapter);
        showToast(`Translation switched to ${state.currentTranslation.toUpperCase()}`, '📖');
      };
    }

    // Font Size Switcher
    if (DOM.fontSizeSelect) {
      DOM.fontSizeSelect.value = state.currentFontSize;
      DOM.fontSizeSelect.onchange = (e) => {
        applyFontSize(e.target.value);
      };
    }

    // Main Tab Switching
    DOM.navTabBtns.forEach(btn => {
      btn.onclick = () => {
        const target = btn.getAttribute('data-target');
        switchTab(target);
      };
    });

    // Sidebar Testament Filter
    DOM.testamentBtns.forEach(btn => {
      btn.onclick = () => {
        DOM.testamentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentTestamentFilter = btn.getAttribute('data-testament');
        renderBookSidebar();
      };
    });

    // Sidebar Genre Filter Pills
    DOM.genrePillBtns.forEach(btn => {
      btn.onclick = () => {
        DOM.genrePillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentGenreFilter = btn.getAttribute('data-genre');
        renderBookSidebar();
      };
    });

    // Sidebar Book Search Input
    if (DOM.sidebarBookSearch) {
      DOM.sidebarBookSearch.oninput = (e) => {
        state.searchQuery = e.target.value;
        renderBookSidebar();
      };
    }

    // Floating Verse Toolbar actions
    DOM.toolbarColorDots.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        handleVerseHighlight(btn.getAttribute('data-color'));
      };
    });

    if (DOM.toolbarBtnBookmark) {
      DOM.toolbarBtnBookmark.onclick = (e) => {
        e.stopPropagation();
        toggleVerseBookmark();
      };
    }

    if (DOM.toolbarBtnCopy) {
      DOM.toolbarBtnCopy.onclick = (e) => {
        e.stopPropagation();
        copySelectedVerse();
      };
    }

    if (DOM.toolbarBtnNote) {
      DOM.toolbarBtnNote.onclick = (e) => {
        e.stopPropagation();
        openNoteModal();
      };
    }

    // Close floating toolbar on click outside
    document.addEventListener('click', (e) => {
      if (DOM.floatingToolbar && !DOM.floatingToolbar.contains(e.target) && !e.target.closest('.verse-item')) {
        hideFloatingToolbar();
      }
    });

    // Audio Bible Player Controls
    if (DOM.audioPlayBtn) DOM.audioPlayBtn.onclick = playAudio;
    if (DOM.audioStopBtn) DOM.audioStopBtn.onclick = stopAudio;
    if (DOM.audioSpeedSelect) {
      DOM.audioSpeedSelect.onchange = (e) => {
        state.audio.speed = parseFloat(e.target.value) || 1.0;
        if (state.audio.isPlaying) {
          stopAudio();
          playAudio();
        }
      };
    }

    // Topical Detail Back Button
    if (DOM.topicalBackBtn) DOM.topicalBackBtn.onclick = backToTopicalGrid;

    // Journal Drawer
    if (DOM.journalDrawerTrigger) DOM.journalDrawerTrigger.onclick = openJournalDrawer;
    if (DOM.journalDrawerClose) DOM.journalDrawerClose.onclick = closeJournalDrawer;
    if (DOM.journalDrawerBackdrop) DOM.journalDrawerBackdrop.onclick = closeJournalDrawer;
    if (DOM.drawerExportNotesBtn) DOM.drawerExportNotesBtn.onclick = exportStudyNotes;
    if (DOM.inlineExportNotesBtn) DOM.inlineExportNotesBtn.onclick = exportStudyNotes;

    // Journal Filter Pills (both drawer & inline)
    DOM.journalFilterPills.forEach(pill => {
      pill.onclick = () => {
        DOM.journalFilterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeJournalFilter = pill.getAttribute('data-filter');
        updateJournalViews();
      };
    });

    // Note Modal
    if (DOM.noteModalClose) DOM.noteModalClose.onclick = closeNoteModal;
    if (DOM.noteModalCancelBtn) DOM.noteModalCancelBtn.onclick = closeNoteModal;
    if (DOM.noteModalSaveBtn) DOM.noteModalSaveBtn.onclick = saveNote;
    if (DOM.noteModalDeleteBtn) DOM.noteModalDeleteBtn.onclick = deleteNote;
    if (DOM.noteModalOverlay) {
      DOM.noteModalOverlay.onclick = (e) => {
        if (e.target === DOM.noteModalOverlay) closeNoteModal();
      };
    }

    // Search Modal
    if (DOM.searchModalTrigger) DOM.searchModalTrigger.onclick = openSearchModal;
    if (DOM.searchModalClose) DOM.searchModalClose.onclick = closeSearchModal;
    if (DOM.searchModalOverlay) {
      DOM.searchModalOverlay.onclick = (e) => {
        if (e.target === DOM.searchModalOverlay) closeSearchModal();
      };
    }

    if (DOM.globalSearchInput) {
      DOM.globalSearchInput.oninput = (e) => {
        handleGlobalSearch(e.target.value);
      };
      DOM.globalSearchInput.onkeydown = (e) => {
        if (e.key === 'Enter') {
          const firstResult = DOM.searchResultsContainer.querySelector('.search-result-item');
          if (firstResult) firstResult.click();
        }
      };
    }

    if (DOM.searchQuickTags) {
      DOM.searchQuickTags.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          const jump = btn.getAttribute('data-search-jump');
          if (DOM.globalSearchInput) {
            DOM.globalSearchInput.value = jump;
            handleGlobalSearch(jump);
          }
        };
      });
    }

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // '/' opens search if not currently typing in an input
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openSearchModal();
      }
      // 'Escape' closes modals & floating toolbar
      if (e.key === 'Escape') {
        closeSearchModal();
        closeNoteModal();
        closeJournalDrawer();
        hideFloatingToolbar();
      }
    });
  }

  // ==========================================================================
  // 18. INITIAL LAUNCH ENTRY POINT
  // ==========================================================================
  function initApp() {
    applyTheme(state.theme);
    applyFontSize(state.currentFontSize);
    initDailyBread();
    initSpeechSynthesis();
    initEventListeners();

    // Initial render
    renderBookSidebar();
    renderChapter(state.currentBookId, state.currentChapter);
    renderTopicalGrid();
    renderTimeline();
    updateJournalViews();

    console.log('✝ Holy Scripture & Spiritual Growth Sanctuary initialized.');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
