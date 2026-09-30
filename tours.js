const toursData = [
    {
        id: 1,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2025/03/Cascada-Nymejan-4-dias-1024x1024.jpg",
        imageAlt: "Trekking Nymejan Sierra Nevada",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/IMG-20250119-WA0039-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/Cascada-Nymejan-4-dias-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/IMG-20250119-WA0029-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/Nymejan-4-dias--1024x1024.jpg"
        ]
    },
    {
        id: 2,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2025/03/Palacio-de-las-nubes-2-1024x1024.jpg",
        imageAlt: "Palacio de las Nubes Sierra Nevada",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/Palacio-de-las-nubes-2-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/IMG-20260122-WA0059-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/IMG-20260122-WA0037-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/03/IMG-20260122-WA0028-1024x1024.jpg"
        ]
    },
    {
        id: 3,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2025/10/Terraza-en-Bunkuany-en-la-sierra-nevada-de-santa-marta-1024x1024.webp",
        imageAlt: "Bunkuany Sierra Nevada",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2025/10/Terraza-en-Bunkuany-en-la-sierra-nevada-de-santa-marta-1024x1024.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/10/Disfruta-del-rio-en-el-tour-a-bunkuany-1024x1024.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/10/Terraza-en-Bunkuany-2-1024x1024.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/10/Camino-a-Bunkuany-1024x1024.webp"
        ]
    },
    {
        id: 4,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2025/07/Lost-City-trekking-4-days-1024x1024.webp",
        imageAlt: "Ciudad Perdida Sierra Nevada",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2025/07/Lost-City-trekking-4-days-1024x1024.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/07/Lost-city-tour-trekking-santa-marta.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/07/Comunidad-de-la-sierra-nevadad-de-santa-marta-en-el-tour-ciudad-perdida-trekking-santa-marta.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2025/07/Montanas-de-la-sierra-nevada-de-santa-marta.webp"
        ]
    },
    {
        id: 5,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2026/09/P0100010-1024x1024.jpg",
        imageAlt: "Ecotopia Wimake Sierra Nevada",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/P0100010-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/IMG-20260611-WA0012.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/IMG-20260212-WA0009-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/DJI_0284-1024x1024.jpg"
        ]
    },
    {
        id: 6,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2026/04/1000413102-1024x1024.jpg",
        imageAlt: "Poblado Indígena Wimake",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2026/04/1000413102-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/04/1000413101-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/04/1000413098-1024x1024.jpg",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/04/1000413097-1024x1024.jpg"
        ]
    },
    {
        id: 7,
        image: "https://trekkingsantamarta.com/wp-content/uploads/2026/09/1000414036-1024x768.webp",
        imageAlt: "Laguna Sagrada Sierra Nevada",
        images: [
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/1000414036-1024x768.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/1000414042-1024x768.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/1000414052-1024x768.webp",
            "https://trekkingsantamarta.com/wp-content/uploads/2026/09/1000414057-1024x768.webp"
        ]
    }
];

let translations = {};
let currentLang = localStorage.getItem('lang') || 'es';

function t(key) {
    return translations[currentLang]?.ui?.[key] || '';
}

function tourField(tourId, field) {
    return translations[currentLang]?.tours?.[String(tourId)]?.[field] || '';
}

async function loadTranslations() {
    try {
        const [esRes, enRes] = await Promise.all([
            fetch('es.json'),
            fetch('en.json')
        ]);
        translations.es = await esRes.json();
        translations.en = await enRes.json();
    } catch (err) {
        console.error('Error loading translations:', err);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = t(key);
        if (val) {
            if (el.tagName === 'TITLE') {
                document.title = val;
            } else {
                el.innerHTML = val;
            }
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    applyTranslations();
    renderFeaturedTour(1);
    renderTours();
}

function createTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';

    const title = tourField(tour.id, 'title') || tour.imageAlt;
    const desc = tourField(tour.id, 'description') || '';
    const meta = tourField(tour.id, 'meta') || [];
    const metaItems = meta.map(item => `<span class="meta-item">${item}</span>`).join('');

    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.imageAlt || title}" class="tour-image">
        <div class="tour-content">
            <h3 class="tour-title">${title}</h3>
            <p class="tour-description">${desc}</p>
            <div class="tour-meta">${metaItems}</div>
            <button class="btn btn-details" data-id="${tour.id}">${t('btnDetails') || 'Ver Detalles'}</button>
        </div>
    `;

    return card;
}

function renderTours(containerSelector = '.tours-grid') {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.innerHTML = '';
    toursData.forEach(tour => {
        container.appendChild(createTourCard(tour));
    });
}

function renderFeaturedTour(tourId = 1) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    const card = document.getElementById('featuredCard');
    const title = tourField(tour.id, 'title') || tour.imageAlt;
    const desc = tourField(tour.id, 'description') || '';
    const meta = tourField(tour.id, 'meta') || [];
    const metaItems = meta.map(item => `<span class="meta-item">${item}</span>`).join('');

    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.imageAlt || title}">
        <div class="featured-content">
            <span class="featured-badge">${t('featuredBadge') || 'Tour Favorito'}</span>
            <h2>${title}</h2>
            <p>${desc}</p>
            <div class="featured-meta">${metaItems}</div>
            <button class="btn btn-details" data-id="${tour.id}">${t('btnDetails') || 'Ver Detalles'}</button>
        </div>
    `;
}

function openModal(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    const modal = document.getElementById('tourModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    const meta = document.getElementById('modalMeta');
    const gallery = document.getElementById('modalGallery');

    title.textContent = tourField(tour.id, 'title') || tour.imageAlt;
    description.innerHTML = tourField(tour.id, 'longDescription') || tourField(tour.id, 'description') || '';
    meta.innerHTML = (tourField(tour.id, 'meta') || []).map(item => `<span class="meta-item">${item}</span>`).join('');

    const allImages = [tour.image, ...(tour.images || []).filter(img => img !== tour.image)];
    gallery.innerHTML = allImages.map(img =>
        `<img src="${img}" alt="${tour.imageAlt || title}" loading="lazy">`
    ).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('tourModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    applyTranslations();
    renderFeaturedTour(1);
    renderTours();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    document.querySelector('.featured-card').addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-details');
        if (!btn) return;
        e.preventDefault();
        openModal(Number(btn.dataset.id));
    });

    document.querySelector('.tours-grid').addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-details');
        if (!btn) return;
        e.preventDefault();
        openModal(Number(btn.dataset.id));
    });

    document.getElementById('modalClose').addEventListener('click', closeModal);

    document.getElementById('tourModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
