/* ========================================
   БЕСТИАРИЙ D&D 5e24 — Город Тысячи Воронов
   App logic: одна страница (50/50 иллюстрация / статы), редактирование, промпты
   ======================================== */

// --- Конфигурация ---
const DATA_URL = 'data/monsters.json';
const EXPORT_FILENAME = 'bestiary-monsters.json';

// --- Текстуры пергамента (привязаны к индексу страницы) ---
// Используем новые страницы
const textureImages = [
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%201.jpg',
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%202.jpg',
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%203.jpg',
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%204.jpg',
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%205.jpg',
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%206.jpg',
    'images/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%207.jpg',
];

// --- Установка текстуры по индексу страницы (циклически) ---
function setTextureForPage(pageIndex) {
    const textureIndex = pageIndex % textureImages.length;
    const texturePath = textureImages[textureIndex];
    const root = document.documentElement;
    root.style.setProperty('--paper-texture-url', `url('${texturePath}')`);
    root.style.setProperty('--paper-bg', `linear-gradient(135deg, #f5e6d3 0%, #e6d8c2 100%)`);
}

// --- Первоначальная установка текстуры для обложки (индекс 0) ---
setTextureForPage(0);

// --- Состояние ---
let monsters = [];           // Загруженные монстры
let currentPageIndex = 0;    // Текущая страница (0 = обложка, 1+ = монстры)
let currentEditId = null;    // ID редактируемого монстра
let isEditMode = false;      // Режим редактирования (вкл/выкл через nav)

// --- DOM элементы ---
const bookContainer = document.getElementById('book-container');
const navPrev = document.getElementById('navPrev');
const navNext = document.getElementById('navNext');
const pageIndicator = document.getElementById('pageIndicator');
const thumbnailsBtn = document.getElementById('thumbnailsBtn');
const thumbnailsPanel = document.getElementById('thumbnailsPanel');
const thumbnailsClose = document.getElementById('thumbnailsClose');
const thumbnailsGrid = document.getElementById('thumbnailsGrid');
const loadingOverlay = document.getElementById('loadingOverlay');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const toastContainer = document.getElementById('toastContainer');
const btnEditMode = document.getElementById('btnEditMode');

// --- Инициализация ---
document.addEventListener('DOMContentLoaded', () => {
    init();
});

async function init() {
    try {
        showLoading(true);

        // 1. Загружаем данные монстров
        await loadMonsters();

        // 2. Рендерим первую страницу
        renderPage(currentPageIndex);

        // 3. Навешиваем события навигации
        setupNavigation();

        // 4. Навешиваем события редактирования
        setupEditing();

        // 5. Клавиатурная навигация
        setupKeyboard();

        showLoading(false);
    } catch (err) {
        console.error('Ошибка инициализации:', err);
        showToast('Ошибка загрузки бестиария: ' + err.message, 'error');
        showLoading(false);
    }
}

/* ========================================
   ЗАГРУЗКА ДАННЫХ
   ======================================== */
async function loadMonsters() {
    const response = await fetch(DATA_URL + '?v=' + Date.now());
    if (!response.ok) throw new Error('Не удалось загрузить monsters.json');
    monsters = await response.json();

    // Сортируем по CR (числовое значение)
    monsters.sort((a, b) => crToNumber(a.cr) - crToNumber(b.cr));

    showToast(`Загружено монстров: ${monsters.length}`, 'info', 1500);
}

// Преобразует CR в число для сортировки (1/8 = 0.125, 1/2 = 0.5, 30 = 30)
function crToNumber(cr) {
    if (!cr) return 999;
    const s = String(cr).trim();
    if (s.includes('/')) {
        const parts = s.split('/');
        return parseFloat(parts[0]) / parseFloat(parts[1]);
    }
    return parseFloat(s);
}

/* ========================================
   РЕНДЕР СТРАНИЦЫ
   ======================================== */
function renderPage(index) {
    // Очищаем контейнер
    bookContainer.innerHTML = '';

    if (index === 0) {
        // Обложка
        bookContainer.appendChild(createCoverPage());
    } else {
        // Страница монстра (index - 1 = индекс в массиве монстров)
        const monsterIndex = index - 1;
        if (monsterIndex >= 0 && monsterIndex < monsters.length) {
            bookContainer.appendChild(createMonsterPage(monsters[monsterIndex], index));
        }
    }

    updateNavigationUI();
    updateThumbnails();
}

function createCoverPage() {
    const div = document.createElement('div');
    div.className = 'page book-cover page-flip-enter';
    div.innerHTML = `
        <img src="images/cover.png" alt="Обложка бестиария" class="cover-image cover-desktop">
        <img src="images/cover1.jpg" alt="Обложка бестиария" class="cover-image cover-mobile">
    `;
    return div;
}

function createMonsterPage(monster, pageNum) {
    const div = document.createElement('div');
    div.className = 'page monster-page page-flip-enter';
    div.dataset.pageIndex = pageNum;
    div.dataset.monsterId = monster.id;

    const illustrationUrl = monster.illustration || '';
    const hasImage = !!illustrationUrl;

    const crBadge = `<span class="cr-badge-page">ОП <span class="number-white">${escapeHtml(monster.cr)}</span></span>`;
    const typeBadge = `<span class="type-badge-page">${escapeHtml(monster.typeRu || monster.type)}</span>`;
    const sizeBadge = `<span class="size-badge-page">${escapeHtml(monster.size)}</span>`;
    const alignmentBadge = `<span class="alignment-badge-page">${escapeHtml(monster.alignment || '—')}</span>`;
    const sourceBadge = `<span class="source-badge-page">${escapeHtml(monster.source || '—')}</span>`;

    const abilities = monster.abilities || {};
    const abilityMod = (val) => {
        const m = Math.floor((val - 10) / 2);
        return (m > 0 ? '+' : '') + m;
    };

    const speed = monster.speed || {};

    // Таблица статов (AC, HP, Speed)
    const statsHtml = `
        <div class="stats-block-page">
            <div class="stat-item-page">
                <div class="stat-item-label-page">Класс доспеха</div>
                <div class="stat-item-value-page number-white">${escapeHtml(monster.ac || '—')}</div>
            </div>
            <div class="stat-item-page">
                <div class="stat-item-label-page">Хиты</div>
                <div class="stat-item-value-page number-white">${escapeHtml(monster.hp || '—')}</div>
            </div>
            <div class="stat-item-page">
                <div class="stat-item-label-page">Скорость</div>
                <div class="stat-item-value-page number-white">
                    ${speed.walk ? `${speed.walk} фт` : '—'}${speed.fly ? `, полёт ${speed.fly} фт` : ''}${speed.swim ? `, плавание ${speed.swim} фт` : ''}${speed.climb ? `, лазание ${speed.climb} фт` : ''}
                </div>
            </div>
        </div>
    `;

    const descriptionHtml = `
        <div class="description-content-page">
            <p>${escapeHtml(monster.description || 'Описание отсутствует.').replace(/\n/g, '<br>')}</p>
        </div>
    `;

    const actionsHtml = renderActions(monster);

    const prompt = monster.promptOverride || generatePrompt(monster);
    const negativePrompt = monster.negativePrompt || generateNegativePrompt(monster);

    const editBtnHtml = isEditMode
        ? `<button class="btn btn-small btn-warning edit-page-btn" data-monster-id="${monster.id}" title="Редактировать">✎</button>`
        : '';

    div.innerHTML = `
        <div class="page-illustration-wrapper" style="padding-right: 0px; padding-left: 50px;">
            <span class="page-number">${pageNum}</span>
            <div class="monster-illustration-frame" style="border-bottom-width: 200px; margin-bottom: 0px; margin-top: 50px;">
                ${hasImage
                    ? `<img src="${escapeHtml(illustrationUrl)}?v=${Date.now()}" alt="${escapeHtml(monster.name)}" style="width:78%;height:78%;object-fit:cover;" onerror="this.style.display='none'; this.parentElement.querySelector('.illustration-placeholder').style.display='flex';">`
                    : (monster.name === 'Тараск'
                        ? `<img src="images/Тараск.png" alt="${escapeHtml(monster.name)}" style="width:400px;height:439px;object-fit:cover;">`
                        : monster.name === 'Гоблин'
                            ? `<img src="images/Гоблин.png" alt="${escapeHtml(monster.name)}" style="width:400px;height:439px;object-fit:cover;">`
                            : `<img src="images/шаблон монстров.png" alt="${escapeHtml(monster.name)}" style="width:400px;height:439px;object-fit:cover;">`)
                }
                <div class="illustration-placeholder" style="${hasImage ? 'display:none' : 'display:none'}">
                    <span class="placeholder-icon">🖼</span>
                    <p>Нет иллюстрации</p>
                    <small>Добавьте URL в режиме редактирования</small>
                </div>
                <div class="illustration-crow">🐦‍⬛</div>
            </div>
        </div>

        <div class="page-details-wrapper">
            <div class="page-header-sticky">
                <div class="page-header-row">
                    <h2 class="monster-name-page">${escapeHtml(monster.name)}</h2>
                </div>
                ${editBtnHtml}
            </div>
            <div class="detail-tabs-page">
                <button class="tab-btn-page active" data-tab="stats">Статы</button>
                <button class="tab-btn-page" data-tab="description">Описание</button>
                <button class="tab-btn-page" data-tab="actions">Действия</button>
            </div>
            <div style="flex: 1;">
                <div class="tab-panel-page active" id="tabStats">
                    <div class="monster-meta-page">
                        ${crBadge}${typeBadge}${sizeBadge}${alignmentBadge}${sourceBadge}
                    </div>
                    ${statsHtml}

                    <div class="stats-grid-page">
                        <div class="stat-block-page">
                            <div class="stat-label-page">СИЛ</div>
                            <div class="stat-value-page number-white">${abilities.str || 10}</div>
                            <div class="stat-mod-page ${abilityMod(abilities.str) > 0 ? 'positive' : abilityMod(abilities.str) < 0 ? 'negative' : ''}">${abilityMod(abilities.str)}</div>
                        </div>
                        <div class="stat-block-page">
                            <div class="stat-label-page">ЛОВ</div>
                            <div class="stat-value-page number-white">${abilities.dex || 10}</div>
                            <div class="stat-mod-page ${abilityMod(abilities.dex) > 0 ? 'positive' : abilityMod(abilities.dex) < 0 ? 'negative' : ''}">${abilityMod(abilities.dex)}</div>
                        </div>
                        <div class="stat-block-page">
                            <div class="stat-label-page">ТЕЛ</div>
                            <div class="stat-value-page number-white">${abilities.con || 10}</div>
                            <div class="stat-mod-page ${abilityMod(abilities.con) > 0 ? 'positive' : abilityMod(abilities.con) < 0 ? 'negative' : ''}">${abilityMod(abilities.con)}</div>
                        </div>
                        <div class="stat-block-page">
                            <div class="stat-label-page">ИНТ</div>
                            <div class="stat-value-page number-white">${abilities.int || 10}</div>
                            <div class="stat-mod-page ${abilityMod(abilities.int) > 0 ? 'positive' : abilityMod(abilities.int) < 0 ? 'negative' : ''}">${abilityMod(abilities.int)}</div>
                        </div>
                        <div class="stat-block-page">
                            <div class="stat-label-page">МДР</div>
                            <div class="stat-value-page number-white">${abilities.wis || 10}</div>
                            <div class="stat-mod-page ${abilityMod(abilities.wis) > 0 ? 'positive' : abilityMod(abilities.wis) < 0 ? 'negative' : ''}">${abilityMod(abilities.wis)}</div>
                        </div>
                        <div class="stat-block-page">
                            <div class="stat-label-page">ХАР</div>
                            <div class="stat-value-page number-white">${abilities.cha || 10}</div>
                            <div class="stat-mod-page ${abilityMod(abilities.cha) > 0 ? 'positive' : abilityMod(abilities.cha) < 0 ? 'negative' : ''}">${abilityMod(abilities.cha)}</div>
                        </div>
                    </div>

                    <div style="margin-top: 1.5rem;">
                        <div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Навыки</div>
                        <p style="color: var(--ink-muted);">${escapeHtml(monster.skills || '—')}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Сопротивления</div>
                        <p style="color: var(--ink-muted);">${escapeHtml(monster.resistances || '—')}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Иммунитеты</div>
                        <p style="color: var(--ink-muted);">${escapeHtml(monster.immunities || '—')}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Чувства</div>
                        <p style="color: var(--ink-muted);">${escapeHtml(monster.senses || '—')}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Языки</div>
                        <p style="color: var(--ink-muted);">${escapeHtml(monster.languages || '—')}</p>
                    </div>
                </div>

                <div class="tab-panel-page" id="tabDescription">
                    ${descriptionHtml}
                </div>

                <div class="tab-panel-page" id="tabActions">
                    ${actionsHtml}
                </div>

                <div class="tab-panel-page" id="tabPrompt">
                    <div class="prompt-section-page">
                        <label>Промпт для GPT Image 2.5 (Цепной / Город Тысячи Воронов)</label>
                        <textarea class="prompt-textarea-page" readonly>${escapeHtml(prompt)}</textarea>
                        <div class="prompt-actions-page">
                            <button class="btn btn-small btn-primary copy-prompt-page" data-type="full">Копировать полный</button>
                            <button class="btn btn-small btn-secondary copy-prompt-page" data-type="short">Копировать короткий</button>
                        </div>
                    </div>
                    <div class="prompt-section-page">
                        <label>Negative Prompt</label>
                        <textarea class="prompt-textarea-page" readonly>${escapeHtml(negativePrompt)}</textarea>
                        <button class="btn btn-small btn-secondary copy-negative-page" style="margin-top:0.5rem">Копировать negative</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return div;
}

function renderActions(monster) {
    const actionsRaw = monster.actions || '';
    const legendaryRaw = monster.legendary || '';
    const lairRaw = monster.lairActions || '';
    const regionalRaw = monster.regionalEffects || '';
    const traitsRaw = monster.traits || '';

    const typeRu = {
        'trait': 'особенность',
        'action': 'действие',
        'bonus': 'бонусное',
        'reaction': 'реакция',
        'legendary': 'легендарное',
        'lair': 'логово',
        'regional': 'регион'
    };

    let html = '';

    // Траиты
    if (traitsRaw.trim()) {
        html += `<div style="margin-bottom: 1rem;"><div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Особенности</div>`;
        traitsRaw.split('|').forEach(trait => {
            const t = trait.trim();
            if (!t) return;
            const parts = t.split('|');
            const name = parts[0].trim();
            const desc = parts.slice(1).join('|').trim();
            const typeLabel = typeRu['trait'] || 'особенность';
            html += `<div class="action-item-page"><div class="action-header-page"><div class="action-name-page">${escapeHtml(name)}</div><div class="action-type-page trait">${typeLabel}</div></div><div class="action-desc-page">${escapeHtml(desc)}</div></div>`;
        });
        html += `</div>`;
    }

    // Действия
    if (actionsRaw.trim()) {
        html += `<div style="margin-bottom: 1rem;"><div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Действия</div>`;
        actionsRaw.split('|').forEach((action, i) => {
            const a = action.trim();
            if (!a) return;
            const parts = a.split('|');
            const type = parts[parts.length - 1].trim();
            const name = parts[0].trim();
            const desc = parts.slice(1, -1).join('|').trim();
            const typeClass = type || 'action';
            const typeLabel = typeRu[type] || type || 'действие';
            html += `<div class="action-item-page"><div class="action-header-page"><div class="action-name-page">${escapeHtml(name)}</div><div class="action-type-page ${typeClass}">${escapeHtml(typeLabel)}</div></div><div class="action-desc-page">${escapeHtml(desc)}</div></div>`;
        });
        html += `</div>`;
    }

    // Легендарные действия
    if (legendaryRaw.trim()) {
        html += `<div style="margin-bottom: 1rem;"><div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Легендарные действия</div>`;
        legendaryRaw.split('|').forEach((action, i) => {
            const a = action.trim();
            if (!a) return;
            const parts = a.split('|');
            const name = parts[0].trim();
            const desc = parts.slice(1, -1).join('|').trim();
            const uses = parts[parts.length - 1].trim();
            const typeLabel = typeRu['legendary'] || 'легендарное';
            html += `<div class="action-item-page"><div class="action-header-page"><div class="action-name-page">${escapeHtml(name)}</div><div class="action-type-page legendary">${typeLabel}</div></div><div class="action-desc-page">${escapeHtml(desc)}${uses ? ` (использований: ${escapeHtml(uses)})` : ''}</div></div>`;
        });
        html += `</div>`;
    }

    // Действия логова
    if (lairRaw.trim()) {
        html += `<div style="margin-bottom: 1rem;"><div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Действия логова</div>`;
        lairRaw.split('|').forEach((action, i) => {
            const a = action.trim();
            if (!a) return;
            const typeLabel = typeRu['lair'] || 'логово';
            html += `<div class="action-item-page"><div class="action-header-page"><div class="action-name-page">Действие ${i + 1}</div><div class="action-type-page lair">${typeLabel}</div></div><div class="action-desc-page">${escapeHtml(a)}</div></div>`;
        });
        html += `</div>`;
    }

    // Региональные эффекты
    if (regionalRaw.trim()) {
        html += `<div style="margin-bottom: 1rem;"><div style="font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: var(--ink-muted); margin-bottom: 0.5rem;">Региональные эффекты</div>`;
        regionalRaw.split('|').forEach((effect, i) => {
            const e = effect.trim();
            if (!e) return;
            const typeLabel = typeRu['regional'] || 'регион';
            html += `<div class="action-item-page"><div class="action-header-page"><div class="action-name-page">Эффект ${i + 1}</div><div class="action-type-page regional">${typeLabel}</div></div><div class="action-desc-page">${escapeHtml(e)}</div></div>`;
        });
        html += `</div>`;
    }

    return html || '<p style="color: var(--ink-muted);">Нет описания действий.</p>';
}

/* ========================================
   НАВИГАЦИЯ
   ======================================== */
function setupNavigation() {
    navPrev.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            setTextureForPage(currentPageIndex);
            renderPage(currentPageIndex);
        }
    });

    navNext.addEventListener('click', () => {
        const maxPage = monsters.length; // обложка + монстры
        if (currentPageIndex < maxPage) {
            currentPageIndex++;
            setTextureForPage(currentPageIndex);
            renderPage(currentPageIndex);
        }
    });

    thumbnailsBtn.addEventListener('click', () => {
        thumbnailsPanel.classList.toggle('open');
    });

    thumbnailsClose.addEventListener('click', () => {
        thumbnailsPanel.classList.remove('open');
    });

    btnEditMode.addEventListener('click', toggleEditMode);
}

function toggleEditMode() {
    isEditMode = !isEditMode;

    if (isEditMode) {
        btnEditMode.style.background = '#2d6b3a';
        btnEditMode.style.color = '#fff';
        btnEditMode.style.borderColor = '#2d6b3a';
        showToast('Режим редактирования включён', 'info', 1500);
    } else {
        btnEditMode.style.background = '';
        btnEditMode.style.color = '';
        btnEditMode.style.borderColor = '';
        showToast('Режим редактирования выключен', 'info', 1500);
    }

    // Перерисовываем текущую страницу, чтобы показать/скрыть кнопку редактирования
    renderPage(currentPageIndex);
}

function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (currentPageIndex > 0) {
                currentPageIndex--;
                setTextureForPage(currentPageIndex);
                renderPage(currentPageIndex);
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const maxPage = monsters.length;
            if (currentPageIndex < maxPage) {
                currentPageIndex++;
                setTextureForPage(currentPageIndex);
                renderPage(currentPageIndex);
            }
        } else if (e.key === 'Home') {
            e.preventDefault();
            currentPageIndex = 0;
            setTextureForPage(currentPageIndex);
            renderPage(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            currentPageIndex = monsters.length;
            setTextureForPage(currentPageIndex);
            renderPage(currentPageIndex);
        } else if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            thumbnailsPanel.classList.toggle('open');
        } else if (e.key === 'Escape') {
            thumbnailsPanel.classList.remove('open');
            if (editModal.open) editModal.close();
        } else if (e.key === 'e' || e.key === 'E') {
            e.preventDefault();
            toggleEditMode();
        }
    });
}

function updateNavigationUI() {
    const maxPage = monsters.length;
    navPrev.disabled = currentPageIndex <= 0;
    navNext.disabled = currentPageIndex >= maxPage;

    if (currentPageIndex === 0) {
        pageIndicator.textContent = 'Обложка';
    } else {
        const monster = monsters[currentPageIndex - 1];
        pageIndicator.textContent = monster ? `Монстр ${currentPageIndex} из ${maxPage}: ${monster.name}` : `Страница ${currentPageIndex}`;
    }
}

/* ========================================
   МИНИАТЮРЫ
   ======================================== */
function updateThumbnails() {
    thumbnailsGrid.innerHTML = '';
    const totalPages = monsters.length + 1; // обложка + монстры

    for (let i = 0; i < totalPages; i++) {
        const item = document.createElement('div');
        item.className = 'thumbnail-item' + (i === currentPageIndex ? ' active' : '');
        item.dataset.pageIndex = i;

        let typeLabel = '';
        let imgSrc = '';
        let label = '';

        if (i === 0) {
            typeLabel = 'ОБЛОЖКА';
            imgSrc = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23f5e6d3"/><text x="50" y="55" font-family="serif" font-size="14" fill="%235a4a3a" text-anchor="middle">Обложка</text></svg>';
            label = 'Обложка';
        } else {
            const monster = monsters[i - 1];
            typeLabel = monster.typeRu ? monster.typeRu.toUpperCase() : 'МОНСТР';
            imgSrc = monster.illustration || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23e6d8c2"/><text x="50" y="55" font-family="serif" font-size="12" fill="%238c7a66" text-anchor="middle">Монстр</text></svg>';
            label = monster ? monster.name : `Монстр ${i}`;
        }

        item.innerHTML = `
            <img src="${imgSrc}" alt="${typeLabel}" loading="lazy">
            <div class="thumb-type">${escapeHtml(typeLabel)}</div>
            <div class="thumb-label">${escapeHtml(label)}</div>
        `;

        item.addEventListener('click', () => {
            currentPageIndex = i;
            setTextureForPage(currentPageIndex);
            renderPage(i);
            thumbnailsPanel.classList.remove('open');
        });

        thumbnailsGrid.appendChild(item);
    }
}

/* ========================================
   РЕДАКТИРОВАНИЕ
   ======================================== */
function setupEditing() {
    modalClose.addEventListener('click', () => editModal.close());
    modalCancel.addEventListener('click', () => editModal.close());
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveMonsterFromForm();
    });

    // Делегирование событий
    bookContainer.addEventListener('click', (e) => {
        // Переключение табов (всегда работает)
        const tabBtn = e.target.closest('.tab-btn-page');
        if (tabBtn) {
            const tabName = tabBtn.dataset.tab;
            const wrapper = tabBtn.closest('.page-details-wrapper');
            if (wrapper) {
                wrapper.querySelectorAll('.tab-btn-page').forEach(b => b.classList.remove('active'));
                wrapper.querySelectorAll('.tab-panel-page').forEach(p => p.classList.remove('active'));
                tabBtn.classList.add('active');
                const panel = wrapper.querySelector(`#tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
                if (panel) panel.classList.add('active');
            }
            return;
        }

        if (!isEditMode) return;

        const editBtn = e.target.closest('.edit-page-btn');
        if (editBtn) {
            const monsterId = editBtn.dataset.monsterId;
            openEditModal(monsterId);
        }

        const copyBtn = e.target.closest('.copy-prompt-page');
        if (copyBtn) {
            const type = copyBtn.dataset.type;
            const textarea = copyBtn.closest('.prompt-section-page').querySelector('.prompt-textarea-page');
            copyToClipboard(textarea.value, type === 'full' ? 'Промпт скопирован' : 'Короткий промпт скопирован');
        }

        const copyNegBtn = e.target.closest('.copy-negative-page');
        if (copyNegBtn) {
            const textarea = copyNegBtn.closest('.prompt-section-page').querySelector('.prompt-textarea-page');
            copyToClipboard(textarea.value, 'Negative prompt скопирован');
        }
    });
}

function openEditModal(monsterId) {
    currentEditId = monsterId;
    const isNew = !monsterId;

    document.getElementById('modalTitle').textContent = isNew ? 'Добавить монстра' : 'Редактировать монстра';
    document.getElementById('editIsNew').value = isNew;

    editForm.reset();

    if (!isNew) {
        const monster = monsters.find(m => m.id === monsterId);
        if (!monster) return;
        fillFormFromMonster(monster);
    }

    editModal.showModal();
}

function fillFormFromMonster(monster) {
    document.getElementById('editId').value = monster.id;
    document.getElementById('editName').value = monster.name || '';
    document.getElementById('editNameEn').value = monster.nameEn || '';
    document.getElementById('editCr').value = monster.cr || '';
    document.getElementById('editType').value = monster.type || '';
    document.getElementById('editTypeRu').value = monster.typeRu || '';
    document.getElementById('editSize').value = monster.size || '';
    document.getElementById('editAlignment').value = monster.alignment || '';
    document.getElementById('editSource').value = monster.source || '';
    document.getElementById('editIllustration').value = monster.illustration || '';
    document.getElementById('editDescription').value = monster.description || '';

    const abilities = monster.abilities || {};
    document.querySelector('input[name="str"]').value = abilities.str || 10;
    document.querySelector('input[name="dex"]').value = abilities.dex || 10;
    document.querySelector('input[name="con"]').value = abilities.con || 10;
    document.querySelector('input[name="int"]').value = abilities.int || 10;
    document.querySelector('input[name="wis"]').value = abilities.wis || 10;
    document.querySelector('input[name="cha"]').value = abilities.cha || 10;

    const speed = monster.speed || {};
    document.querySelector('input[name="walk"]').value = speed.walk || 30;
    document.querySelector('input[name="fly"]').value = speed.fly || 0;
    document.querySelector('input[name="swim"]').value = speed.swim || 0;
    document.querySelector('input[name="climb"]').value = speed.climb || 0;

    document.getElementById('editSkills').value = monster.skills || '';
    document.getElementById('editResistances').value = monster.resistances || '';
    document.getElementById('editImmunities').value = monster.immunities || '';
    document.getElementById('editConditionImmunities').value = monster.conditionImmunities || '';
    document.getElementById('editSenses').value = monster.senses || '';
    document.getElementById('editLanguages').value = monster.languages || '';
    document.getElementById('editTraits').value = monster.traits || '';
    document.getElementById('editActions').value = monster.actions || '';
    document.getElementById('editLegendary').value = monster.legendary || '';
    document.getElementById('editLairActions').value = monster.lairActions || '';
    document.getElementById('editRegionalEffects').value = monster.regionalEffects || '';
    document.getElementById('editPromptOverride').value = monster.promptOverride || '';
    document.getElementById('editNegativePrompt').value = monster.negativePrompt || '';
}

function saveMonsterFromForm() {
    const id = document.getElementById('editId').value || generateId();
    const isNew = document.getElementById('editIsNew').value === 'true';

    const monster = {
        id,
        name: document.getElementById('editName').value.trim(),
        nameEn: document.getElementById('editNameEn').value.trim(),
        cr: document.getElementById('editCr').value.trim(),
        type: document.getElementById('editType').value,
        typeRu: document.getElementById('editTypeRu').value.trim(),
        size: document.getElementById('editSize').value,
        alignment: document.getElementById('editAlignment').value.trim(),
        source: document.getElementById('editSource').value.trim(),
        illustration: document.getElementById('editIllustration').value.trim(),
        description: document.getElementById('editDescription').value.trim(),
        abilities: {
            str: parseInt(document.querySelector('input[name="str"]').value) || 10,
            dex: parseInt(document.querySelector('input[name="dex"]').value) || 10,
            con: parseInt(document.querySelector('input[name="con"]').value) || 10,
            int: parseInt(document.querySelector('input[name="int"]').value) || 10,
            wis: parseInt(document.querySelector('input[name="wis"]').value) || 10,
            cha: parseInt(document.querySelector('input[name="cha"]').value) || 10,
        },
        speed: {
            walk: parseInt(document.querySelector('input[name="walk"]').value) || 30,
            fly: parseInt(document.querySelector('input[name="fly"]').value) || 0,
            swim: parseInt(document.querySelector('input[name="swim"]').value) || 0,
            climb: parseInt(document.querySelector('input[name="climb"]').value) || 0,
        },
        skills: document.getElementById('editSkills').value.trim(),
        resistances: document.getElementById('editResistances').value.trim(),
        immunities: document.getElementById('editImmunities').value.trim(),
        conditionImmunities: document.getElementById('editConditionImmunities').value.trim(),
        senses: document.getElementById('editSenses').value.trim(),
        languages: document.getElementById('editLanguages').value.trim(),
        traits: document.getElementById('editTraits').value.trim(),
        actions: document.getElementById('editActions').value.trim(),
        legendary: document.getElementById('editLegendary').value.trim(),
        lairActions: document.getElementById('editLairActions').value.trim(),
        regionalEffects: document.getElementById('editRegionalEffects').value.trim(),
        promptOverride: document.getElementById('editPromptOverride').value.trim(),
        negativePrompt: document.getElementById('editNegativePrompt').value.trim(),
    };

    if (isNew) {
        monsters.push(monster);
    } else {
        const idx = monsters.findIndex(m => m.id === id);
        if (idx >= 0) monsters[idx] = monster;
    }

    monsters.sort((a, b) => crToNumber(a.cr) - crToNumber(b.cr));

    editModal.close();
    showToast(isNew ? 'Монстр добавлен' : 'Монстр обновлён', 'success', 2000);

    renderPage(currentPageIndex);
}

function generateId() {
    return 'monster-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

/* ========================================
   ПРОМПТЫ
   ======================================== */
function generatePrompt(monster) {
    const typeMap = {
        aberration: 'аберрация, необычное существо',
        beast: 'зверь, дикое животное',
        celestial: 'небожитель, ангельское существо',
        construct: 'конструкт, големая фигура',
        dragon: 'дракон, чешуйчатое чудовище',
        elemental: 'элементаль, стихийное существо',
        fey: 'фея, волшебное создание',
        fiend: 'исчадие, демонское создание',
        giant: 'великан, огромное человекообразное',
        humanoid: 'гуманоид, разумное существо',
        monster: 'монстр, ужасное создание',
        monstrosity: 'монструозность, мутант',
        ooze: 'удой, слизистое создание',
        plant: 'растение, антропоморфная флора',
        undead: 'нежить, оживленный труп'
    };
    const typeDesc = typeMap[monster.type] || 'существо';

    const sizeMap = {
        Tiny: 'крошечный',
        Small: 'маленький',
        Medium: 'средний',
        Large: 'большой',
        Huge: 'огромный',
        Gargantuan: 'громадан'
    };
    const sizeDesc = sizeMap[monster.size] || 'средний';

    return `Noir fantasy illustration of a ${sizeDesc} ${typeDesc} named "${monster.name}", D&D 5e Monster Manual 2024 style, City of a Thousand Crows setting. Eternal rain, crows flying, monochrome sepia and gold palette, chiaroscuro lighting, wet cobblestone streets, gas lamps, foggy noir atmosphere, detailed character art, book illustration, parchment texture, cinematic composition, high detail, 8k, oil painting texture`;
}

function generateNegativePrompt(monster) {
    return `bright colors, cartoon, anime, 3d render, low resolution, blurry, distorted, bad anatomy, extra limbs, missing limbs, mutated, text, watermark, signature, logo, modern clothing, neon, cyberpunk, clean, sterile, smiling, happy, cheerful, day, sunlight`;
}

/* ========================================
   ЭКСПОРТ / ИМПОРТ JSON
   ======================================== */
function exportJson() {
    const dataStr = JSON.stringify(monsters, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = EXPORT_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Экспортировано ${monsters.length} монстров`, 'success', 2000);
}

function handleFileImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            if (!Array.isArray(imported)) throw new Error('Неверный формат');

            if (confirm(`Импортировать ${imported.length} монстров? Текущие данные будут заменены.`)) {
                monsters = imported;
                renderPage(currentPageIndex);
                showToast(`Импортировано ${monsters.length} монстров`, 'success', 2000);
            }
        } catch (err) {
            showToast('Ошибка импорта: ' + err.message, 'error');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

/* ========================================
   УТИЛИТЫ
   ======================================== */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(message, 'success', 1500);
    }).catch(() => {
        showToast('Не удалось скопировать в буфер обмена', 'error');
    });
}

function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-message">${escapeHtml(message)}</span>
        <button class="toast-close" aria-label="Закрыть">×</button>
    `;
    toastContainer.appendChild(toast);

    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.remove();
    });

    if (duration > 0) {
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, duration);
    }
}

function showLoading(show) {
    if (show) {
        loadingOverlay.style.display = 'flex';
    } else {
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 300);
    }
}
