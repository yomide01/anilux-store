// Product Data - 4 categories: necklaces, rings, earrings, watches. Images match category & description.
const products = [
    // Necklaces (3)
    {
        id: 1,
        name: "Gold Necklace",
        category: "necklaces",
        image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=280&h=250&fit=crop",
        description: "Quality gold-plated necklace."
    },
    {
        id: 2,
        name: "Pearl Necklace",
        category: "necklaces",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=280&h=250&fit=crop",
        description: "Elegant pearl necklace."
    },
    {
        id: 3,
        name: "Chain Necklace",
        category: "necklaces",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce3d1?w=280&h=250&fit=crop",
        description: "Simple chain, everyday wear."
    },
    // Rings (3)
    {
        id: 4,
        name: "Gold Band Ring",
        category: "rings",
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=280&h=250&fit=crop",
        description: "Solid gold band ring."
    },
    {
        id: 5,
        name: "Diamond Ring",
        category: "rings",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=280&h=250&fit=crop",
        description: "Elegant diamond ring."
    },
    {
        id: 6,
        name: "Silver Ring",
        category: "rings",
        image: "https://images.unsplash.com/photo-1565123409695-30b4d95a8ee7?w=280&h=250&fit=crop",
        description: "Sterling silver design."
    },
    // Earrings (3)
    {
        id: 7,
        name: "Gold Hoops",
        category: "earrings",
        image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=280&h=250&fit=crop",
        description: "Classic gold hoop earrings."
    },
    {
        id: 8,
        name: "Diamond Studs",
        category: "earrings",
        image: "https://images.unsplash.com/photo-1617038260897-41a1e83e3a7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=280&h=250&q=80",
        description: "Sparkling diamond studs."
    },
    {
        id: 9,
        name: "Pearl Earrings",
        category: "earrings",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=280&h=250&fit=crop",
        description: "Freshwater pearl earrings."
    },
    // Watches (3) - using same quality watch image
    {
        id: 10,
        name: "Classic Watch",
        category: "watches",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=280&h=250&fit=crop",
        description: "Timeless classic watch."
    },
    {
        id: 11,
        name: "Modern Watch",
        category: "watches",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=280&h=250&fit=crop",
        description: "Modern design watch."
    },
    {
        id: 12,
        name: "Leather Watch",
        category: "watches",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=280&h=250&fit=crop",
        description: "Leather strap watch."
    }
];

// WhatsApp contact info
const WHATSAPP_NUMBER = "2349012948688";
const EMAIL = "padekunle539@gmail.com";

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const tabButtons = document.querySelectorAll('.tab-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const contactForm = document.getElementById('contact-form');

// Render Products
function renderProducts(category = 'all') {
    const filteredProducts = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" onerror="this.src='https://via.placeholder.com/280x250?text=Image+unavailable'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
            </div>
        </div>
    `).join('');
}

// Category Tab Switching
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const productInterest = document.getElementById('product-interest').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `New inquiry:

*Name:* ${name}
*Phone:* ${phone}
*Interested in:* ${productInterest}
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    // Show success feedback
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Sent!';
    submitBtn.style.background = '#28a745';

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        contactForm.reset();
    }, 2000);
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Initialize
renderProducts();

console.log('Anilux Store - Quality Accessories');
console.log('WhatsApp:', WHATSAPP_NUMBER);
console.log('Email:', EMAIL);
