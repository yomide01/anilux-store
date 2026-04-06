// Product Data - Images only, no prices, simple names
const products = [
    {
        id: 1,
        name: "Gold Necklace",
        category: "necklaces",
        image: "images/necklace-1.jpg",
        description: "Quality gold-plated necklace, ready to wear."
    },
    {
        id: 2,
        name: "Classic Chain",
        category: "chains",
        image: "images/chain-1.jpg",
        description: "Solid chain with a clean look."
    },
    {
        id: 3,
        name: "Simple Watch",
        category: "watches",
        image: "images/watch-1.jpg",
        description: "Everyday watch with clear dial."
    },
    {
        id: 4,
        name: "Elegant Ring",
        category: "rings",
        image: "images/ring-1.jpg",
        description: "Stylish ring for any occasion."
    },
    {
        id: 5,
        name: "Pearl Earrings",
        category: "earrings",
        image: "images/earring-1.jpg",
        description: "Freshwater pearl studs, gold-tone."
    },
    {
        id: 6,
        name: "Layered Necklace",
        category: "necklaces",
        image: "images/necklace-2.jpg",
        description: "Multi-layer necklace, adjustable."
    },
    {
        id: 7,
        name: "Figaro Chain",
        category: "chains",
        image: "images/chain-2.jpg",
        description: "Classic Figaro pattern design."
    },
    {
        id: 8,
        name: "Leather Watch",
        category: "watches",
        image: "images/watch-2.jpg",
        description: "Leather strap watch, minimalist face."
    },
    {
        id: 9,
        name: "Signet Ring",
        category: "rings",
        image: "images/ring-2.jpg",
        description: "Traditional signet style ring."
    },
    {
        id: 10,
        name: "Gold Hoops",
        category: "earrings",
        image: "images/earring-2.jpg",
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
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <button class="order-btn"
                        onclick="orderNow('${product.name}', '${product.category}')">
                    Inquire on WhatsApp
                </button>
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

// Order via WhatsApp
function orderNow(productName, category) {
    const message = `Hi Anilux Store! I'm interested in:

*Product:* ${productName}
*Category:* ${category}

Please send me details and photos of this item.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

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
