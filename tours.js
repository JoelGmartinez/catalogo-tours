const toursData = [
    {
        id: 1,
        title: "Fiordos Noruegos",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        imageAlt: "Fiordos Noruegos",
        description: "7 días explorando los majestuosos fiordos, pueblos vikingos y auroras boreales en Noruega.",
        longDescription: "Embárcate en una aventura inolvidable por los fiordos de Noruega, uno de los paisajes naturales más espectaculares del mundo. Durante 7 días recorrerás aguas cristalinas rodeadas de montañas imponentes, visitarás pintorescos pueblos vikingos con arquitectura tradicional y tendrás la oportunidad de contemplar las auroras boreales iluminando el cielo nocturno. Incluye excursiones en barco, caminatas guiadas por senderos naturales y experiencias culturales auténticas con la comunidad local.",
        meta: ["7 días", "Grupo pequeño", "Moderado"],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=800",
            "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"
        ]
    },
    {
        id: 2,
        title: "Italia Esencial",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
        imageAlt: "Venecia Italia",
        description: "10 días recorriendo Roma, Florencia, Venecia y la Costa Amalfitana con guía experto.",
        longDescription: "Sumérgete en la esencia de Italia con un recorrido de 10 días por sus destinos más icónicos. Comienza en Roma explorando el Coliseo, el Vaticano y las fuentes históricas, continúa hacia Florencia para admirar la arquitectura renacentista y la gastronomía toscana, navega por los canales de Venecia en góndola y finaliza recorriendo la espectacular Costa Amalfitana con sus pueblos colgantes y vistas al Mediterráneo. Guía experto local incluido en cada destino.",
        meta: ["10 días", "Privado", "Relax"],
        images: [
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
            "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800"
        ]
    },
    {
        id: 3,
        title: "Safari en Kenia",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
        imageAlt: "Safari África",
        description: "8 días de aventura en la sabana africana, avistando los Big Five y viviendo con tribus Masái.",
        longDescription: "Vive la experiencia definitiva del safari africano en Kenia durante 8 días de pura aventura. Recorrerás los parques nacionales más famosos del mundo, avistando leones, elefantes, rinocerontes, búfalos y leopardos en su hábitat natural. Además, vivirás una experiencia cultural única conviviendo con la tribu Masái, aprendiendo sobre sus costumbres, danzas tradicionales y estilo de vida ancestral. Incluye alojamiento en campamentos de lujo y transporte en vehículos 4x4.",
        meta: ["8 días", "Máx. 12 pax", "Aventura"],
        images: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
            "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800",
            "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800"
        ]
    },
    {
        id: 4,
        title: "Perú Místico",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800",
        imageAlt: "Machu Picchu",
        description: "12 días desde Lima hasta Machu Picchu, explorando el Valle Sagrado y la selva amazónica.",
        longDescription: "Descubre la magia de Perú en un recorrido de 12 días que combina historia, cultura y naturaleza. Comienza en Lima explorando su gastronomía reconocida mundialmente, continúa hacia el Valle Sagrado de los Incas visitando comunidades andinas y ruinas arqueológicas, culmina con la visita a Machu Picchu al amanecer y finaliza con una expedición a la selva amazónica donde observarás una biodiversidad incomparable. Incluye todas las entradas, guías locales y experiencias gastronómicas típicas.",
        meta: ["12 días", "Grupo", "Moderado"],
        images: [
            "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800",
            "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800",
            "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800",
            "https://images.unsplash.com/photo-1509299349698-dd22323b5963?w=800"
        ]
    },
    {
        id: 5,
        title: "Japón Imperial",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        imageAlt: "Tokio Japón",
        description: "9 días entre tradición y modernidad: Tokio, Kioto, Osaka y el Monte Fuji.",
        longDescription: "Explora Japón durante 9 días descubriendo la fascinante mezcla entre tradición milenaria y tecnología de vanguardia. Comienza en Tokio visitando sus templos ancestrales, el cruce de Shibuya y los barrios más modernos, viaja a Kioto para recorrer sus jardines de bambú y templos dorados, disfruta de la gastronomía callejera de Osaka y culmina con una excursión al Monte Fuji para contemplar las vistas más icónicas de Japón. Experiencias culturales incluidas como ceremonia del té y visita a un ryokan tradicional.",
        meta: ["9 días", "Privado", "Relax"],
        images: [
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
            "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800"
        ]
    },
    {
        id: 6,
        title: "Maldivas Paradise",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        imageAlt: "Maldivas",
        description: "6 días de relax total en resort 5 estrellas sobre el agua.",
        longDescription: "Disfruta de 6 días de lujo y relajación absoluta en uno de los resorts más exclusivos de las Maldivas, ubicado sobre el agua en una villa privada con piso de cristal para observar la vida marina. El paquete incluye desayuno diario, spa con tratamientos relajantes, deportes acuáticos como snorkel, kayak y buceo, cena romántica en la playa y excursión en barco para avistamiento de delfines. Un paraíso tropical diseñado para parejas que buscan una experiencia única e inolvidable.",
        meta: ["6 días", "Pareja", "Relax"],
        images: [
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
        ]
    }
];

function createTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';

    const metaItems = (tour.meta || []).map(item => `<span class="meta-item">${item}</span>`).join('');

    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.imageAlt || tour.title}" class="tour-image">
        <div class="tour-content">
            <h3 class="tour-title">${tour.title}</h3>
            <p class="tour-description">${tour.description}</p>
            <div class="tour-meta">${metaItems}</div>
            <button class="btn btn-details" data-id="${tour.id}">Ver Detalles</button>
        </div>
    `;

    return card;
}

function renderTours(tours = toursData, containerSelector = '.tours-grid') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = '';
    tours.forEach(tour => {
        container.appendChild(createTourCard(tour));
    });
}

function openModal(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    const modal = document.getElementById('tourModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    const meta = document.getElementById('modalMeta');
    const gallery = document.getElementById('modalGallery');

    title.textContent = tour.title;
    description.textContent = tour.longDescription || tour.description;
    meta.innerHTML = (tour.meta || []).map(item => `<span class="meta-item">${item}</span>`).join('');

    const allImages = [tour.image, ...(tour.images || []).filter(img => img !== tour.image)];
    gallery.innerHTML = allImages.map(img =>
        `<img src="${img}" alt="${tour.imageAlt || tour.title}" loading="lazy">`
    ).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('tourModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    renderTours(toursData, '.tours-grid');

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
