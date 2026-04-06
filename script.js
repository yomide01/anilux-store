// Product Data
const products = [
    {
        id: 1,
        name: "Golden Elegance Necklace",
        category: "necklaces",
        price: "₦45,000",
        description: "18k gold-plated necklace with cubic zirconia pendant. Perfect for special occasions.",
        icon: "📿"
    },
    {
        id: 2,
        name: "Royal Gold Chain",
        category: "chains",
        price: "₦38,500",
        description: "Solid gold-filled link chain, 20 inches. Classic design for everyday luxury.",
        icon: "⛓️"
    },
    {
        id: 3,
        name: "Chronos Elite Watch",
        category: "watches",
        price: "₦120,000",
        description: "Swiss movement luxury watch with leather strap. Water-resistant and timeless.",
        icon: "⌚"
    },
    {
        id: 4,
        name: "Diamond Solitaire Ring",
        category: "rings",
        price: "₦85,000",
        description: "Sterling silver ring with brilliant-cut cubic zirconia solitaire.",
        icon: "💍"
    },
    {
        id: 5,
        name: "Pearl Drop Earrings",
        category: "earrings",
        price: "₦22,000",
        description: "Freshwater pearl studs with gold-plated accents. Elegant and delicate.",
        icon: "💎"
    },
    {
        id: 6,
        name: "Velvet Gold Choker",
        category: "necklaces",
        price: "₦31,200",
        description: "Adjustable velvet choker with gold-tone chain overlay. Bold statement piece.",
        icon: "📿"
    },
    {
        id: 7,
        name: "Tennis Bracelet Chain",
        category: "chains",
        price: "₦55,000",
        description: "Delicate tennis-style bracelet chain. 7 inches, extendable to 8 inches.",
        icon: "⛓️"
    },
    {
        id: 8,
        name: "Classic Date Watch",
        category: "watches",
        price: "₦95,000",
        description: "Minimalist analog watch with genuine leather band. Weekday/date display.",
        icon: "⌚"
    },
    {
        id: 9,
        name: "Signet Style Ring",
        category: "rings",
        price: "₦42,000",
        description: "Victorian-style signet ring with engraved family crest design (customizable).",
        icon: "💍"
    },
    {
        id: 10,
        name: "Hoops of Gold",
        category: "earrings",
        price: "₦18,500",
        description: "14k gold-plated hoop earrings, 1.5 inch diameter. Lightweight and comfortable.",
        icon: "💎"
    },
    {
        id: 11,
        name: "Layered Pearl Necklace",
        category: "necklaces",
        price: "₦52,000",
        description: "Multi-strand freshwater pearl necklace with gold clasp. Vintage-inspired.",
        icon: "📿"
    },
    {
        id: 12,
        name: "Figaro Link Chain",
        category: "chains",
        price: "₦47,800",
        description: "Classic Figaro pattern chain in yellow gold finish. Unisex design.",
        icon: "⛓️"
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
                ${product.icon}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="order-btn"
                        onclick="orderNow('${product.name}', '${product.category}')">
                    Order via WhatsApp
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
    const message = `Hi Anilux Store! I'm interested in ordering:

*Product:* ${productName}
*Category:* ${category}

Please provide details on availability, pricing, and delivery options to my phone number.

Thank you!`;

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

    const whatsappMessage = `New Order Inquiry:

*Name:* ${name}
*Phone:* ${phone}
*Interested in:* ${productInterest}
*Message:* ${message}

Please contact me soon!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    // Show success feedback
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Message Sent!';
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

console.log('Anilux Store - Premium Jewelry & Accessories');
console.log('WhatsApp:', WHATSAPP_NUMBER);
console.log('Email:', EMAIL);
