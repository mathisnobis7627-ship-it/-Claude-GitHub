/* ============================================
   HISTOIRE-GEO LYCEE - APPLICATION JS
   ============================================ */

// ============ STATE ============
const state = {
    currentPage: 'home',
    currentLevel: null,
    currentChapter: null,
    progress: JSON.parse(localStorage.getItem('hg-progress') || '{}'),
    darkMode: localStorage.getItem('hg-dark') === 'true'
};

// ============ DATA ACCESS ============
function getAllData() {
    return {
        seconde: window.SECONDE_DATA,
        premiere: window.PREMIERE_DATA,
        terminale: window.TERMINALE_DATA
    };
}

function getLevelData(level) {
    return getAllData()[level];
}

function findChapter(chapterId) {
    const allData = getAllData();
    for (const level of Object.values(allData)) {
        if (!level) continue;
        for (const subject of level.subjects) {
            for (const theme of subject.themes) {
                for (const chapter of theme.chapters) {
                    if (chapter.id === chapterId) {
                        return { chapter, level: level.level, subject: subject.subject, theme: theme.theme };
                    }
                }
            }
        }
    }
    return null;
}

function getAllChapters() {
    const chapters = [];
    const allData = getAllData();
    for (const [levelKey, level] of Object.entries(allData)) {
        if (!level) continue;
        for (const subject of level.subjects) {
            for (const theme of subject.themes) {
                for (const chapter of theme.chapters) {
                    chapters.push({
                        ...chapter,
                        level: level.level,
                        levelLabel: level.label,
                        subject: subject.subject,
                        subjectLabel: subject.label,
                        theme: theme.theme
                    });
                }
            }
        }
    }
    return chapters;
}

// ============ NAVIGATION ============
function showHome() {
    state.currentPage = 'home';
    state.currentLevel = null;
    state.currentChapter = null;
    updatePageVisibility();
    updateNavTabs('home');
    scrollToTop();
}

function showLevel(level) {
    state.currentPage = 'level';
    state.currentLevel = level;
    state.currentChapter = null;
    renderLevelPage(level);
    updatePageVisibility();
    updateNavTabs(level);
    scrollToTop();
}

function showChapter(chapterId) {
    const result = findChapter(chapterId);
    if (!result) return;
    state.currentPage = 'chapter';
    state.currentChapter = chapterId;
    renderChapterPage(result);
    updatePageVisibility();
    scrollToTop();
}

function showProgress() {
    state.currentPage = 'progress';
    renderProgressPage();
    updatePageVisibility();
    updateNavTabs(null);
    scrollToTop();
}

function updatePageVisibility() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    switch (state.currentPage) {
        case 'home':
            document.getElementById('home-page').classList.add('active');
            break;
        case 'level':
            document.getElementById('level-page').classList.add('active');
            break;
        case 'chapter':
            document.getElementById('chapter-page').classList.add('active');
            break;
        case 'progress':
            document.getElementById('progress-page').classList.add('active');
            break;
    }
}

function updateNavTabs(activeLevel) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.level === activeLevel);
    });
}

// ============ RENDER: LEVEL PAGE ============
function renderLevelPage(level) {
    const data = getLevelData(level);
    if (!data) return;

    const container = document.getElementById('level-page');
    let html = `
        <div class="level-header ${level}">
            <h2>${data.icon} ${data.label}</h2>
            <p>Programme complet d'Histoire-Géographie</p>
        </div>
    `;

    for (const subject of data.subjects) {
        html += `
            <div class="subject-section">
                <h3 class="subject-title">${subject.icon} ${subject.label}</h3>
        `;

        for (const theme of subject.themes) {
            html += `
                <div class="theme-group">
                    <h4 class="theme-group-title">${theme.theme}</h4>
                    <div class="chapter-list">
            `;

            let chNum = 1;
            for (const chapter of theme.chapters) {
                const isCompleted = state.progress[chapter.id];
                html += `
                    <div class="chapter-card ${isCompleted ? 'completed' : ''}" onclick="showChapter('${chapter.id}')">
                        <div class="chapter-number">${chNum}</div>
                        <div class="chapter-info">
                            <h4>${chapter.title}</h4>
                            <p>${chapter.subtitle || ''}</p>
                        </div>
                        <div class="chapter-check ${isCompleted ? 'checked' : ''}"
                             onclick="event.stopPropagation(); toggleChapterComplete('${chapter.id}', this)">
                            ${isCompleted ? '✓' : ''}
                        </div>
                    </div>
                `;
                chNum++;
            }

            html += '</div></div>';
        }

        html += '</div>';
    }

    container.innerHTML = html;
}

// ============ RENDER: CHAPTER PAGE ============
function renderChapterPage(result) {
    const { chapter, level, subject, theme } = result;
    const levelData = getLevelData(level);
    const container = document.getElementById('chapter-page');
    const isCompleted = state.progress[chapter.id];

    // Find prev/next chapters
    const allChapters = getAllChapters().filter(c => c.level === level);
    const currentIndex = allChapters.findIndex(c => c.id === chapter.id);
    const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

    let html = `
        <div class="chapter-header">
            <div class="chapter-breadcrumb">
                <a onclick="showHome()">Accueil</a> ›
                <a onclick="showLevel('${level}')">${levelData.label}</a> ›
                <span>${chapter.title}</span>
            </div>
            <div class="chapter-title-section">
                <h2>${chapter.title}</h2>
                <p class="chapter-subtitle">${chapter.subtitle || ''}</p>
            </div>
        </div>
    `;

    // Table of contents
    if (chapter.sections && chapter.sections.length > 1) {
        html += '<div class="chapter-toc"><h3>📋 Sommaire</h3><ol>';
        chapter.sections.forEach((section, i) => {
            html += `<li onclick="document.getElementById('section-${i}').scrollIntoView({behavior:'smooth'})">${section.title}</li>`;
        });
        html += '</ol></div>';
    }

    // Sections
    if (chapter.sections) {
        chapter.sections.forEach((section, i) => {
            html += `
                <div class="lesson-section" id="section-${i}">
                    <h3>${section.title}</h3>
                    ${section.content}
                </div>
            `;
        });
    }

    // Mark complete button
    html += `
        <button class="mark-complete-btn ${isCompleted ? 'completed' : ''}"
                onclick="toggleChapterCompleteFromButton('${chapter.id}', this)">
            ${isCompleted ? '✅ Chapitre révisé !' : '📝 Marquer comme révisé'}
        </button>
    `;

    // Navigation
    html += '<div class="chapter-nav">';
    if (prevChapter) {
        html += `<button onclick="showChapter('${prevChapter.id}')">← ${prevChapter.title}</button>`;
    } else {
        html += '<button disabled>← Début</button>';
    }
    if (nextChapter) {
        html += `<button onclick="showChapter('${nextChapter.id}')">→ ${nextChapter.title}</button>`;
    } else {
        html += '<button disabled>Fin →</button>';
    }
    html += '</div>';

    container.innerHTML = html;
}

// ============ RENDER: PROGRESS PAGE ============
function renderProgressPage() {
    const container = document.getElementById('progress-page');
    const allChapters = getAllChapters();
    const completedCount = allChapters.filter(c => state.progress[c.id]).length;
    const totalCount = allChapters.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    // Per-level stats
    const levels = ['seconde', 'premiere', 'terminale'];
    const levelStats = levels.map(level => {
        const chapters = allChapters.filter(c => c.level === level);
        const completed = chapters.filter(c => state.progress[c.id]).length;
        return { level, total: chapters.length, completed, label: getLevelData(level)?.label || level };
    });

    let html = `
        <div class="progress-header">
            <h2>📊 Ma progression</h2>
            <p>Suis ton avancement dans le programme</p>
        </div>

        <div class="progress-stats">
            <div class="stat-card">
                <div class="stat-number">${percentage}%</div>
                <div class="stat-label">Progression globale</div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill seconde" style="width: ${percentage}%; background: var(--primary);"></div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${completedCount}/${totalCount}</div>
                <div class="stat-label">Chapitres révisés</div>
            </div>
        </div>

        <div class="progress-stats">
    `;

    for (const ls of levelStats) {
        const pct = ls.total > 0 ? Math.round((ls.completed / ls.total) * 100) : 0;
        html += `
            <div class="stat-card" style="cursor:pointer" onclick="showLevel('${ls.level}')">
                <div class="stat-number">${pct}%</div>
                <div class="stat-label">${ls.label}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill ${ls.level}" style="width: ${pct}%"></div>
                </div>
                <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">${ls.completed}/${ls.total} chapitres</div>
            </div>
        `;
    }

    html += '</div>';

    // List of all chapters with status
    html += '<div style="margin-top:24px;">';
    for (const ls of levelStats) {
        const chapters = allChapters.filter(c => c.level === ls.level);
        html += `<h3 style="margin: 24px 0 12px; font-size:1.2rem;">${ls.label}</h3>`;
        html += '<div class="chapter-list">';
        for (const ch of chapters) {
            const done = state.progress[ch.id];
            html += `
                <div class="chapter-card ${done ? 'completed' : ''}" onclick="showChapter('${ch.id}')">
                    <div class="chapter-info">
                        <h4>${ch.title}</h4>
                        <p>${ch.subjectLabel} - ${ch.theme}</p>
                    </div>
                    <div class="chapter-check ${done ? 'checked' : ''}"
                         onclick="event.stopPropagation(); toggleChapterComplete('${ch.id}', this)">
                        ${done ? '✓' : ''}
                    </div>
                </div>
            `;
        }
        html += '</div>';
    }
    html += '</div>';

    container.innerHTML = html;
}

// ============ PROGRESS TRACKING ============
function toggleChapterComplete(chapterId, element) {
    state.progress[chapterId] = !state.progress[chapterId];
    saveProgress();

    if (element) {
        element.classList.toggle('checked');
        element.textContent = state.progress[chapterId] ? '✓' : '';
        const card = element.closest('.chapter-card');
        if (card) card.classList.toggle('completed');
    }
}

function toggleChapterCompleteFromButton(chapterId, button) {
    state.progress[chapterId] = !state.progress[chapterId];
    saveProgress();

    button.classList.toggle('completed');
    button.textContent = state.progress[chapterId] ? '✅ Chapitre révisé !' : '📝 Marquer comme révisé';
}

function saveProgress() {
    localStorage.setItem('hg-progress', JSON.stringify(state.progress));
}

// ============ SEARCH ============
function handleSearch(query) {
    const resultsContainer = document.getElementById('search-results');

    if (query.length < 2) {
        resultsContainer.classList.remove('active');
        return;
    }

    const allChapters = getAllChapters();
    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const results = allChapters.filter(ch => {
        const searchStr = `${ch.title} ${ch.subtitle || ''} ${ch.theme} ${ch.subjectLabel} ${ch.levelLabel}`
            .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return searchStr.includes(q);
    }).slice(0, 8);

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-result-item"><div class="result-title">Aucun résultat</div></div>';
    } else {
        resultsContainer.innerHTML = results.map(r => `
            <div class="search-result-item" onclick="showChapter('${r.id}'); document.getElementById('search-results').classList.remove('active'); document.getElementById('search-input').value = '';">
                <div class="result-level">${r.levelLabel} - ${r.subjectLabel}</div>
                <div class="result-title">${r.title}</div>
            </div>
        `).join('');
    }

    resultsContainer.classList.add('active');
}

// Close search on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.getElementById('search-results').classList.remove('active');
    }
});

// ============ DARK MODE ============
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode', state.darkMode);
    localStorage.setItem('hg-dark', state.darkMode);
    document.getElementById('theme-toggle').textContent = state.darkMode ? '☀️' : '🌙';
}

// ============ SCROLL ============
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});

// ============ INIT ============
function init() {
    // Apply saved dark mode
    if (state.darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '☀️';
    }

    // Show home
    showHome();
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
