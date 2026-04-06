// Product Data - Using actual images (placeholder service), no prices
const products = [
    {
        id: 1,
        name: "Gold Necklace",
        category: "necklaces",
        image: "https://placehold.co/280x250/d4af37/white?text=Necklace",
        description: "Quality gold-plated necklace, ready to wear."
    },
    {
        id: 2,
        name: "Classic Chain",
        category: "chains",
        image: "https://placehold.co/280x250/4a4a4a/white?text=Chain",
        description: "Solid chain with a clean look."
    },
    {
        id: 3,
        name: "Simple Watch",
        category: "watches",
        image: "https://placehold.co/280x250/2c2c2c/white?text=Watch",
        description: "Everyday watch with clear dial."
    },
    {
        id: 4,
        name: "Elegant Ring",
        category: "rings",
        image: "https://placehold.co/280x250/b8941e/white?text=Ring",
        description: "Stylish ring for any occasion."
    },
    {
        id: 5,
        name: "Pearl Earrings",
        category: "earrings",
        image: "https://placehold.co/280x250/e8e8e8/333333?text=Earrings",
        description: "Freshwater pearl studs, gold-tone."
    },
    {
        id: 6,
        name: "Layered Necklace",
        category: "necklaces",
        image: "https://placehold.co/280x250/8b6914/white?text=Necklace",
        description: "Multi-layer necklace, adjustable."
    },
    {
        id: 7,
        name: "Figaro Chain",
        category: "chains",
        image: "https://placehold.co/280x250/3d3d3d/white?text=Chain",
        description: "Classic Figaro pattern design."
    },
    {
        id: 8,
        name: "Leather Watch",
        category: "watches",
        image: "https://placehold.co/280x250/5c4033/white?text=Watch",
        description: "Leather strap watch, minimalist face."
    },
    {
        id: 9,
        name: "Signet Ring",
        category: "rings",
        image: "https://placehold.co/280x250/c0c0c0/333333?text=Ring",
        description: "Traditional signet style ring."
    },
    {
        id: 10,
        name: "Gold Hoops",
        category: "earrings",
        image: "https://placehold.co/280x250/daa520/white?text=Earrings",
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
