// Product Data - Real images from loremflickr (jewelry photos)
const products = [
    // Necklaces
    {
        id: 1,
        name: "Gold Necklace",
        category: "necklaces",
        image: "https://loremflickr.com/280/250/necklace+gold?lock=1",
        description: "Quality gold-plated necklace."
    },
    {
        id: 2,
        name: "Pearl Necklace",
        category: "necklaces",
        image: "https://loremflickr.com/280/250/necklace+pearl?lock=2",
        description: "Elegant pearl necklace."
    },
    {
        id: 3,
        name: "Chain Necklace",
        category: "necklaces",
        image: "https://loremflickr.com/280/250/necklace+chain?lock=3",
        description: "Simple chain, everyday wear."
    },
    // Rings
    {
        id: 4,
        name: "Gold Ring",
        category: "rings",
        image: "https://loremflickr.com/280/250/ring+gold?lock=4",
        description: "Solid gold band ring."
    },
    {
        id: 5,
        name: "Diamond Ring",
        category: "rings",
        image: "https://loremflickr.com/280/250/ring+diamond?lock=5",
        description: "Elegant diamond ring."
    },
    {
        id: 6,
        name: "Silver Ring",
        category: "rings",
        image: "https://loremflickr.com/280/250/ring+silver?lock=6",
        description: "Sterling silver design."
    },
    // Earrings
    {
        id: 7,
        name: "Gold Hoops",
        category: "earrings",
        image: "https://loremflickr.com/280/250/earring+hoop?lock=7",
        description: "Classic gold hoop earrings."
    },
    {
        id: 8,
        name: "Diamond Studs",
        category: "earrings",
        image: "https://loremflickr.com/280/250/earring+stud?lock=8",
        description: "Sparkling diamond studs."
    },
    {
        id: 9,
        name: "Pearl Earrings",
        category: "earrings",
        image: "https://loremflickr.com/280/250/earring+pearl?lock=9",
        description: "Freshwater pearl earrings."
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
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
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
