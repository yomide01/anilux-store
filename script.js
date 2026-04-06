// Product Data - No external images, use styled placeholders
const products = [
    {
        id: 1,
        name: "Gold Necklace",
        category: "necklaces",
        color: "linear-gradient(135deg, #d4af37 0%, #f4e5b2 50%, #d4af37 100%)",
        description: "Quality gold-plated necklace, ready to wear."
    },
    {
        id: 2,
        name: "Classic Chain",
        category: "chains",
        color: "linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 50%, #2c2c2c 100%)",
        description: "Solid chain with a clean look."
    },
    {
        id: 3,
        name: "Simple Watch",
        category: "watches",
        color: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 50%, #1a1a1a 100%)",
        description: "Everyday watch with clear dial."
    },
    {
        id: 4,
        name: "Elegant Ring",
        category: "rings",
        color: "linear-gradient(135deg, #b8941e 0%, #d4af37 50%, #b8941e 100%)",
        description: "Stylish ring for any occasion."
    },
    {
        id: 5,
        name: "Pearl Earrings",
        category: "earrings",
        color: "linear-gradient(135deg, #e8e8e8 0%, #ffffff 50%, #e8e8e8 100%)",
        description: "Freshwater pearl studs, gold-tone."
    },
    {
        id: 6,
        name: "Layered Necklace",
        category: "necklaces",
        color: "linear-gradient(135deg, #8b6914 0%, #d4af37 50%, #8b6914 100%)",
        description: "Multi-layer necklace, adjustable."
    },
    {
        id: 7,
        name: "Figaro Chain",
        category: "chains",
        color: "linear-gradient(135deg, #3d3d3d 0%, #5a5a5a 50%, #3d3d3d 100%)",
        description: "Classic Figaro pattern design."
    },
    {
        id: 8,
        name: "Leather Watch",
        category: "watches",
        color: "linear-gradient(135deg, #5c4033 0%, #8b7355 50%, #5c4033 100%)",
        description: "Leather strap watch, minimalist face."
    },
    {
        id: 9,
        name: "Signet Ring",
        category: "rings",
        color: "linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 50%, #c0c0c0 100%)",
        description: "Traditional signet style ring."
    },
    {
        id: 10,
        name: "Gold Hoops",
        category: "earrings",
        color: "linear-gradient(135deg, #daa520 0%, #ffd700 50%, #daa520 100%)",
        description: "Classic gold-plated hoop earrings."
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
            <div class="product-image" style="background: ${product.color};">
                <div class="placeholder-icon">${getCategoryIcon(product.category)}</div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
            </div>
        </div>
    `).join('');
}

function getCategoryIcon(category) {
    const icons = {
        necklaces: '📿',
        chains: '⛓️',
        watches: '⌚',
        rings: '💍',
        earrings: '💎'
    };
    return icons[category] || '💎';
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
