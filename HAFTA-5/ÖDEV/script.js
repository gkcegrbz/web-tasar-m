const categories = [
    {
        name: 'Spor / Outdoor',
        icon: 'fa-running',
        subcategories: [
            'Kamp Malzemeleri',
            'Spor Giyim',
            'Fitness Ekipmanları',
            'Bisiklet & Aksesuarları',
            'Doğa Sporları Ürünleri',
            'Su Sporları Malzemeleri',
            'Koşu & Yürüyüş Ayakkabıları'
        ]
    },
    {
        name: 'Giyim / Ayakkabı',
        icon: 'fa-tshirt',
        subcategories: [
            'Kadın Giyim',
            'Erkek Giyim',
            'Çocuk Giyim',
            'Spor Ayakkabı',
            'Günlük Ayakkabı',
            'Çanta & Cüzdan',
            'Dış Giyim (Mont, Ceket, Kaban)'
        ]
    },
    {
        name: 'Takı / Mücevher',
        icon: 'fa-gem',
        subcategories: [
            'Kolye',
            'Küpe',
            'Bileklik',
            'Yüzük',
            'Saat',
            'Altın & Gümüş Takılar',
            'Bijuteri Ürünleri'
        ]
    },
    {
        name: 'Saat / Gözlük / Aksesuar',
        icon: 'fa-glasses',
        subcategories: [
            'Güneş Gözlüğü',
            'Akıllı Saat',
            'Klasik Saat',
            'Şapka & Bere',
            'Kemer & Kravat',
            'Cüzdan & Kartlık'
        ]
    },
    {
        name: 'Kozmetik / Sağlık / Bakım',
        icon: 'fa-spray-can',
        subcategories: [
            'Cilt Bakımı',
            'Makyaj Ürünleri',
            'Saç Bakımı',
            'Ağız & Diş Bakımı',
            'Vücut Bakımı',
            'Parfüm & Deodorant',
            'Vitamin & Takviye'
        ]
    },
    {
        name: 'Anne / Bebek / Oyuncak',
        icon: 'fa-baby',
        subcategories: [
            'Bebek Bezi & Islak Mendil',
            'Bebek Giyim',
            'Emzirme Ürünleri',
            'Oyuncaklar',
            'Bebek Arabası & Mama Sandalyesi',
            'Hamile Giyim',
            'Bebek Odası Ürünleri'
        ]
    },
    {
        name: 'Kitap / Film / Müzik',
        icon: 'fa-book',
        subcategories: [
            'Roman',
            'Kişisel Gelişim',
            'Eğitim Kitapları',
            'Çizgi Roman & Manga',
            'CD / DVD',
            'Plak & Müzik Aksesuarları'
        ]
    },
    {
        name: 'Hobi / Oyun Konsolu',
        icon: 'fa-gamepad',
        subcategories: [
            'Oyun Konsolları',
            'Oyunlar',
            'Model & Maket',
            'Puzzle',
            'Boyama & Sanat Malzemeleri',
            'RC Araçlar (Drone, Araba vb.)'
        ]
    },
    {
        name: 'Kırtasiye / Ofis',
        icon: 'fa-pen',
        subcategories: [
            'Defter & Kalem',
            'Ofis Malzemeleri',
            'Yazıcı & Kartuş',
            'Dosyalama Ürünleri',
            'Okul Çantası',
            'Ajanda & Planlayıcı'
        ]
    },
    {
        name: 'Oto Aks / Yapı Market / Bahçe',
        icon: 'fa-car',
        subcategories: [
            'Oto Bakım Ürünleri',
            'Oto Aksesuarları',
            'Elektrikli El Aletleri',
            'Bahçe Aletleri',
            'Aydınlatma Ürünleri',
            'Boya & Hırdavat',
            'Su & Hortum Sistemleri'
        ]
    },
    {
        name: 'Ev Dekorasyonu / Mobilya',
        icon: 'fa-couch',
        subcategories: [
            'Salon Mobilyaları',
            'Mutfak & Yemek Odası',
            'Yatak Odası',
            'Dekoratif Aksesuarlar',
            'Aydınlatma Ürünleri',
            'Halı & Kilim',
            'Perde & Stor'
        ]
    },
    {
        name: 'Pet Shop',
        icon: 'fa-paw',
        subcategories: [
            'Kedi Ürünleri',
            'Köpek Ürünleri',
            'Kuş Ürünleri',
            'Akvaryum & Balık',
            'Mama & Ödül',
            'Kafes & Aksesuar',
            'Pet Bakım Ürünleri'
        ]
    },
    {
        name: 'Süpermarket',
        icon: 'fa-shopping-basket',
        subcategories: [
            'Gıda Ürünleri',
            'İçecekler',
            'Temizlik Malzemeleri',
            'Kişisel Bakım',
            'Atıştırmalıklar',
            'Kahvaltılık Ürünler',
            'Ev Gereçleri'
        ]
    }
];

const products = {
    bestsellers: [
        { id: 1, name: 'Premium Spor Ayakkabı', category: 'Giyim', price: 899.90, oldPrice: 1299.90, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', rating: 4.8, badge: '-31%' },
        { id: 2, name: 'Kablosuz Kulaklık', category: 'Elektronik', price: 499.90, oldPrice: 799.90, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: 4.7, badge: '-38%' },
        { id: 3, name: 'Akıllı Saat Pro', category: 'Aksesuar', price: 1499.90, oldPrice: 2499.90, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: 4.9, badge: '-40%' },
        { id: 4, name: 'Deri Çanta', category: 'Aksesuar', price: 599.90, oldPrice: 899.90, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400', rating: 4.6, badge: '-33%' },
        { id: 5, name: 'Makyaj Seti', category: 'Kozmetik', price: 349.90, oldPrice: 549.90, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.8, badge: '-36%' },
        { id: 6, name: 'Yoga Matı Premium', category: 'Spor', price: 199.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400', rating: 4.7, badge: '-43%' },
        { id: 7, name: 'Laptop Çantası', category: 'Aksesuar', price: 279.90, oldPrice: 449.90, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', rating: 4.5, badge: '-38%' },
        { id: 8, name: 'Parfüm 100ml', category: 'Kozmetik', price: 449.90, oldPrice: 699.90, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.9, badge: '-36%' }
    ],
    new: [
        { id: 9, name: 'Bluetooth Hoparlör', category: 'Elektronik', price: 699.90, oldPrice: 999.90, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', rating: 4.8, badge: 'YENİ' },
        { id: 10, name: 'Modern Sırt Çantası', category: 'Aksesuar', price: 399.90, oldPrice: 599.90, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', rating: 4.6, badge: 'YENİ' },
        { id: 11, name: 'Cilt Bakım Seti', category: 'Kozmetik', price: 549.90, oldPrice: 849.90, image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400', rating: 4.9, badge: 'YENİ' },
        { id: 12, name: 'Güneş Gözlüğü', category: 'Aksesuar', price: 299.90, oldPrice: 499.90, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400', rating: 4.7, badge: 'YENİ' },
        { id: 13, name: 'Fitness Eldiveni', category: 'Spor', price: 149.90, oldPrice: 249.90, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', rating: 4.5, badge: 'YENİ' },
        { id: 14, name: 'Termos 500ml', category: 'Outdoor', price: 179.90, oldPrice: 299.90, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400', rating: 4.8, badge: 'YENİ' },
        { id: 15, name: 'Telefon Kılıfı Premium', category: 'Aksesuar', price: 129.90, oldPrice: 199.90, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400', rating: 4.6, badge: 'YENİ' },
        { id: 16, name: 'Saç Kurutma Makinesi', category: 'Kozmetik', price: 649.90, oldPrice: 999.90, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400', rating: 4.7, badge: 'YENİ' }
    ],
    favorites: [
        { id: 17, name: 'Kışlık Mont', category: 'Giyim', price: 799.90, oldPrice: 1299.90, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', rating: 4.9, badge: '❤️' },
        { id: 18, name: 'Oyun Konsolu', category: 'Elektronik', price: 4999.90, oldPrice: 5999.90, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400', rating: 5.0, badge: '❤️' },
        { id: 19, name: 'Kedi Oyuncağı Seti', category: 'Pet Shop', price: 99.90, oldPrice: 149.90, image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400', rating: 4.8, badge: '❤️' },
        { id: 20, name: 'Masa Lambası LED', category: 'Ev Dekorasyonu', price: 249.90, oldPrice: 399.90, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', rating: 4.7, badge: '❤️' },
        { id: 21, name: 'Kahve Makinesi', category: 'Ev Eşyası', price: 1299.90, oldPrice: 1899.90, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400', rating: 4.9, badge: '❤️' },
        { id: 22, name: 'Roman Seti 5li', category: 'Kitap', price: 199.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400', rating: 4.6, badge: '❤️' },
        { id: 23, name: 'Yoga Kıyafeti', category: 'Spor', price: 299.90, oldPrice: 499.90, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400', rating: 4.8, badge: '❤️' },
        { id: 24, name: 'Bluetooth Mouse', category: 'Elektronik', price: 179.90, oldPrice: 299.90, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400', rating: 4.5, badge: '❤️' }
    ],
    discounts: [
        { id: 25, name: 'Elektrikli Diş Fırçası', category: 'Sağlık', price: 299.90, oldPrice: 699.90, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400', rating: 4.7, badge: '-57%' },
        { id: 26, name: 'Bebek Arabası', category: 'Bebek', price: 1499.90, oldPrice: 2999.90, image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400', rating: 4.9, badge: '-50%' },
        { id: 27, name: 'Duvar Saati Dekoratif', category: 'Ev Dekorasyonu', price: 149.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400', rating: 4.6, badge: '-57%' },
        { id: 28, name: 'Outdoor Çadır 4 Kişilik', category: 'Kamp', price: 899.90, oldPrice: 1799.90, image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400', rating: 4.8, badge: '-50%' },
        { id: 29, name: 'Mutfak Robot', category: 'Ev Eşyası', price: 1999.90, oldPrice: 3999.90, image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400', rating: 4.9, badge: '-50%' },
        { id: 30, name: 'Ofis Koltuğu Ergonomik', category: 'Ofis', price: 1299.90, oldPrice: 2499.90, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400', rating: 4.7, badge: '-48%' },
        { id: 31, name: 'Halı 160x230', category: 'Ev Dekorasyonu', price: 799.90, oldPrice: 1599.90, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400', rating: 4.5, badge: '-50%' },
        { id: 32, name: 'Oto Lastik Seti 4lü', category: 'Oto Aksesuar', price: 2499.90, oldPrice: 3999.90, image: 'https://images.unsplash.com/photo-1563349112-b9cf2d4aa3ea?w=400', rating: 4.8, badge: '-38%' }
    ],
    limited: [
        { id: 33, name: 'Limited Edition Sneaker', category: 'Giyim', price: 1999.90, oldPrice: 2999.90, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400', rating: 5.0, badge: 'SON 3' },
        { id: 34, name: 'Drone 4K Kamera', category: 'Elektronik', price: 3499.90, oldPrice: 4999.90, image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400', rating: 4.9, badge: 'SON 5' },
        { id: 35, name: 'Vintage Plak Çalar', category: 'Müzik', price: 1799.90, oldPrice: 2799.90, image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400', rating: 4.8, badge: 'SON 2' },
        { id: 36, name: 'Antik Masa Saati', category: 'Aksesuar', price: 899.90, oldPrice: 1499.90, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400', rating: 4.7, badge: 'SON 4' },
        { id: 37, name: 'Koleksiyonluk Figür', category: 'Hobi', price: 499.90, oldPrice: 799.90, image: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400', rating: 4.9, badge: 'SON 6' },
        { id: 38, name: 'Retro Kamera', category: 'Fotoğraf', price: 2499.90, oldPrice: 3999.90, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400', rating: 4.8, badge: 'SON 3' },
        { id: 39, name: 'Designer Güneş Gözlüğü', category: 'Aksesuar', price: 799.90, oldPrice: 1299.90, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', rating: 4.7, badge: 'SON 7' },
        { id: 40, name: 'Limited Parfüm Set', category: 'Kozmetik', price: 999.90, oldPrice: 1699.90, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400', rating: 5.0, badge: 'SON 2' }
    ]
};

function generateCategoryMenu() {
    const menuContainer = document.getElementById('categoryMenu');
    let menuHTML = '';
    
    categories.forEach(category => {
        menuHTML += `
            <div class="category-item">
                <a href="#" class="category-link">
                    <span>
                        <i class="fas ${category.icon}"></i>
                        ${category.name}
                    </span>
                    <i class="fas fa-chevron-right"></i>
                </a>
                <div class="subcategory-menu">
                    ${category.subcategories.map(sub => 
                        `<a href="product.html?cat=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(sub)}" class="subcategory-link">${sub}</a>`
                    ).join('')}
                </div>
            </div>
        `;
    });
    
    menuContainer.innerHTML = menuHTML;
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    if (thumbnails[currentSlide]) {
        thumbnails[currentSlide].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function scrollThumbnails(direction) {
    const container = document.getElementById('thumbnailsContainer');
    const scrollAmount = 150;
    container.scrollLeft += (direction * scrollAmount);
}

setInterval(() => {
    changeSlide(1);
}, 5000);

let currentTab = 'bestsellers';

function switchTab(tabName) {
    currentTab = tabName;
    
    document.querySelectorAll('.leaf-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    const titles = {
        bestsellers: 'Çok Satanlar',
        new: 'Yeni Eklenenler',
        favorites: 'Beğenilenler',
        discounts: 'İndirimdekiler',
        limited: 'Sınırlı Stok'
    };
    document.getElementById('sectionTitle').textContent = titles[tabName];
    
    loadProducts(tabName);
}

function loadProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    const productList = products[category];
    
    let productsHTML = '';
    productList.forEach(product => {
        productsHTML += `
            <div class="product-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <div class="product-badge">${product.badge}</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <button class="overlay-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})"><i class="fas fa-heart"></i></button>
                        <button class="overlay-btn" onclick="event.stopPropagation(); quickView(${product.id})"><i class="fas fa-eye"></i></button>
                        <button class="overlay-btn" onclick="event.stopPropagation(); addToCart(${product.id})"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">${product.price.toFixed(2)} ₺</span>
                        <span class="old-price">${product.oldPrice.toFixed(2)} ₺</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Sepete Ekle
                    </button>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = productsHTML;
}

let cart = [];

function addToCart(productId) {
    let product = null;
    for (let category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (product) {
        cart.push(product);
        updateCartBadge();
        showNotification('Ürün sepete eklendi!', 'success');
    }
}

function addToWishlist(productId) {
    showNotification('Ürün favorilere eklendi!', 'success');
}

function quickView(productId) {
    showNotification('Hızlı görünüm açılıyor...', 'info');
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    badge.textContent = cart.length;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4caf50, #45a049)' : 'linear-gradient(135deg, #2196F3, #1976D2)'};
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function submitSuggestion(event) {
    event.preventDefault();
    showNotification('Mesajınız alındı! Teşekkür ederiz.', 'success');
    event.target.reset();
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateCategoryMenu();
    loadProducts('bestsellers');
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);