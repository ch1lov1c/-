// Products Database
const PRODUCTS = [
  {
    id: 'red-velvet',
    title: 'Торт «Красный бархат»',
    category: 'cakes',
    categoryLabel: 'Торт',
    price: 1890,
    weight: '1.2 кг (6-8 порций)',
    image: 'hero.jpg',
    shortDesc: 'Влажный бархатистый бисквит с благородным какао, сливочно-сырным кремом на маскарпоне и сочной красной смородиной.',
    fullDesc: 'Фирменный фаворит нашей кондитерской. Идеальный баланс мягкого бисквита с тонким шоколадным послевкусием, тающего сливочного крема и яркой ягодной кислинки свежей смородины. Прекрасно подойдёт для дня рождения или семейного торжества.',
    calories: '340 ккал / 100 г',
    bju: 'Б: 5.2 г | Ж: 18.4 г | У: 38.6 г',
    ingredients: 'Мука пшеничная в/с, сыр творожный Cremette, масло сливочное 82.5%, сливки 33%, сахар, яйца фермерские, какао-порошок натуральный, красная смородина свежая, экстракт мадагаскарской ванили.',
    allergens: 'Глютен, лактоза, яйца.'
  },
  {
    id: 'berry-pie',
    title: 'Домашний ягодный пирог',
    category: 'bakery',
    categoryLabel: 'Пирог',
    price: 950,
    weight: '800 г (4-6 порций)',
    image: 'pirog.jpg',
    shortDesc: 'Рассыпчатое песочное тесто с плетеным узором, наполненное сочной лесной малиной и рубиновой красной смородиной.',
    fullDesc: 'Традиционный открытый пирог с хрустящей золотистой решёткой из сладкого песочного теста. Начинка из цельных ягод томится с добавлением корицы и капли тростникового сахара, сохраняя всю природную пользу и сочность.',
    calories: '280 ккал / 100 г',
    bju: 'Б: 3.8 г | Ж: 12.1 г | У: 41.5 г',
    ingredients: 'Мука пшеничная, масло сливочное фермерское, свежая малина, красная смородина, тростниковый сахар, кукурузный крахмал, щепотка корицы, сахарная пудра.',
    allergens: 'Глютен, молочный белок.'
  },
  {
    id: 'medovik',
    title: 'Торт «Медовик классический»',
    category: 'cakes',
    categoryLabel: 'Торт',
    price: 1650,
    weight: '1.1 кг (6-8 порций)',
    image: 'medovik.jpg',
    shortDesc: 'Тончайшие медовые коржи на натуральном гречишном меду с нежнейшим заварным сметанным кремом.',
    fullDesc: 'Легендарный десерт, приготовленный по классическому старинному рецепту. Коржи раскатываются вручную толщиной всего в пару миллиметров и пропитываются шелковистым кремом из натуральной фермерской сметаны с капелькой ванили.',
    calories: '360 ккал / 100 г',
    bju: 'Б: 6.1 г | Ж: 17.5 г | У: 46.2 г',
    ingredients: 'Мука пшеничная в/с, мёд гречишный натуральный пасечный, сметана 25%, масло сливочное 82.5%, сахар, яйца, сода пищевая, ванильный сахар.',
    allergens: 'Мёд, глютен, лактоза, яйца.'
  },
  {
    id: 'krendel',
    title: 'Баварский сахарный крендель',
    category: 'bakery',
    categoryLabel: 'Выпечка',
    price: 220,
    weight: '180 г',
    image: 'krendel.jpg',
    shortDesc: 'Ароматная сдобная выпечка с хрустящей золотистой корочкой и крупными кристаллами сахара.',
    fullDesc: 'Традиционная сдоба с неповторимым карамельно-сливочным ароматом. Мы замешиваем пышное дрожжевое тесто на тёплом молоке, вручную плетём крендель и посыпаем хрустящим жемчужным сахаром перед выпеканием.',
    calories: '310 ккал / 100 г',
    bju: 'Б: 7.4 г | Ж: 9.8 г | У: 48.0 г',
    ingredients: 'Мука пшеничная, молоко цельное 3.2%, масло сливочное, яйца, дрожжи живые, сахар жемчужный крупный, щепотка морской соли.',
    allergens: 'Глютен, лактоза, яйца.'
  },
  {
    id: 'eclair',
    title: 'Французские эклеры с малиной',
    category: 'pastry',
    categoryLabel: 'Набор (3 шт.)',
    price: 680,
    weight: '320 г (3 шт.)',
    image: 'eclair.jpg',
    shortDesc: 'Нежнейшее заварное тесто с кремом дипломат, бельгийским шоколадом, сочной малиной и фисташками.',
    fullDesc: 'Истинная парижская классика. Идеально полые внутри трубочки из заварного теста choux наполнены воздушным заварным кремом с натуральными стручками ванили бурбон, покрыты глянцевым шоколадным ганашем 70% какао и украшены свежей малиной.',
    calories: '325 ккал / 100 г',
    bju: 'Б: 5.6 г | Ж: 19.2 г | У: 34.0 г',
    ingredients: 'Мука, сливочное масло, молоко, яйца, шоколад тёмный бельгийский Callebaut, сливки 33%, свежая малина, дроблёные фисташки, натуральная ваниль.',
    allergens: 'Глютен, лактоза, яйца, орехи (фисташка).'
  }
];

// Cart State (loaded from localStorage)
let cart = [];
try {
  const saved = localStorage.getItem('provence_cart');
  if (saved) cart = JSON.parse(saved);
} catch (e) {
  cart = [];
}

// Elements
const productsGrid = document.getElementById('productsGrid');
const categoryTabs = document.querySelectorAll('.tab-btn');
const cartBadge = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDeliveryCost = document.getElementById('cartDeliveryCost');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');

// Modals
const productModalOverlay = document.getElementById('productModalOverlay');
const productModalBody = document.getElementById('productModalBody');
const closeProductModal = document.getElementById('closeProductModal');

const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutTotalAmount = document.getElementById('checkoutTotalAmount');

const successModalOverlay = document.getElementById('successModalOverlay');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const orderNumberSpan = document.getElementById('orderNumber');

// Mobile Menu
const burgerBtn = document.getElementById('burgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Toast
const toast = document.getElementById('toast');
let toastTimer = null;

// ================== Render Products ==================
function renderProducts(filter = 'all') {
  if (!productsGrid) return;
  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  productsGrid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="product-card-media" onclick="openProductQuickView('${item.id}')">
        <img src="${item.image}" alt="${item.title}" class="product-card-img" loading="lazy">
        <span class="product-tag">${item.categoryLabel}</span>
        <span class="product-weight">${item.weight}</span>
      </div>
      <div class="product-card-body">
        <h3 class="product-title" onclick="openProductQuickView('${item.id}')">${item.title}</h3>
        <p class="product-desc">${item.shortDesc}</p>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-val">${item.price.toLocaleString('ru-RU')} ₽</span>
            <span class="price-sub">за порцию</span>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            В корзину
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Tabs Click
categoryTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryTabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ================== Cart Management ==================
function saveCart() {
  try {
    localStorage.setItem('provence_cart', JSON.stringify(cart));
  } catch (e) {}
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalCount;

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">🧺</div>
        <p>Ваша корзина пока пуста</p>
        <small>Выберите понравившиеся десерты в меню выше</small>
      </div>
    `;
    cartSubtotal.textContent = '0 ₽';
    cartDeliveryCost.textContent = '0 ₽';
    cartTotal.textContent = '0 ₽';
    if (proceedCheckoutBtn) proceedCheckoutBtn.disabled = true;
    return;
  }

  if (proceedCheckoutBtn) proceedCheckoutBtn.disabled = false;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = subtotal >= 2000 ? 0 : 250;
  const grandTotal = subtotal + delivery;

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">${(item.price * item.quantity).toLocaleString('ru-RU')} ₽</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Удалить">&times;</button>
    </div>
  `).join('');

  cartSubtotal.textContent = `${subtotal.toLocaleString('ru-RU')} ₽`;
  cartDeliveryCost.textContent = delivery === 0 ? 'Бесплатно' : `${delivery} ₽`;
  cartTotal.textContent = `${grandTotal.toLocaleString('ru-RU')} ₽`;
  if (checkoutTotalAmount) {
    checkoutTotalAmount.textContent = `${grandTotal.toLocaleString('ru-RU')} ₽`;
  }
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  showToast(`«${product.title}» добавлен в корзину!`);
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast('Товар удален из корзины');
}

if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (confirm('Очистить всю корзину?')) {
      cart = [];
      saveCart();
      showToast('Корзина очищена');
    }
  });
}

// Drawer Handlers
function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}

if (openCartBtn) openCartBtn.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// ================== Quick View Modal ==================
function openProductQuickView(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  productModalBody.innerHTML = `
    <div class="product-modal-grid">
      <img src="${item.image}" alt="${item.title}" class="product-modal-img">
      <div class="product-modal-details">
        <span class="product-modal-tag">${item.categoryLabel} • ${item.weight}</span>
        <h2 class="product-modal-title">${item.title}</h2>
        <p class="product-modal-desc">${item.fullDesc}</p>
        
        <div class="product-modal-specs">
          <div class="spec-item">
            <strong>Энергетическая ценность:</strong>
            <span>${item.calories}</span>
          </div>
          <div class="spec-item">
            <strong>БЖУ:</strong>
            <span>${item.bju}</span>
          </div>
          <div class="spec-item" style="grid-column: span 2;">
            <strong>Состав:</strong>
            <span>${item.ingredients}</span>
          </div>
          <div class="spec-item" style="grid-column: span 2;">
            <strong>Аллергены:</strong>
            <span>${item.allergens}</span>
          </div>
        </div>

        <div class="product-modal-footer">
          <div class="modal-price">${item.price.toLocaleString('ru-RU')} ₽</div>
          <button class="btn btn-primary" onclick="addToCart('${item.id}'); closeQuickView();">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  `;

  productModalOverlay.classList.add('open');
}

function closeQuickView() {
  productModalOverlay.classList.remove('open');
}

if (closeProductModal) closeProductModal.addEventListener('click', closeQuickView);
if (productModalOverlay) {
  productModalOverlay.addEventListener('click', (e) => {
    if (e.target === productModalOverlay) closeQuickView();
  });
}

// ================== Checkout Modal ==================
if (proceedCheckoutBtn) {
  proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCart();
    // Default tomorrow's date
    const dateInput = document.getElementById('orderDate');
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    checkoutModalOverlay.classList.add('open');
  });
}

function closeCheckout() {
  checkoutModalOverlay.classList.remove('open');
}

if (closeCheckoutModal) closeCheckoutModal.addEventListener('click', closeCheckout);
if (checkoutModalOverlay) {
  checkoutModalOverlay.addEventListener('click', (e) => {
    if (e.target === checkoutModalOverlay) closeCheckout();
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    orderNumberSpan.textContent = orderNumber;
    
    // Clear cart after order
    cart = [];
    saveCart();

    closeCheckout();
    successModalOverlay.classList.add('open');
  });
}

// Quick consultation form
const quickOrderForm = document.getElementById('quickOrderForm');
if (quickOrderForm) {
  quickOrderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    orderNumberSpan.textContent = orderNumber;
    document.getElementById('successMessage').innerHTML = `Заявка принята! Номер обращения <strong>#${orderNumber}</strong>. Кондитер перезвонит вам в течение 5 минут.`;
    quickOrderForm.reset();
    successModalOverlay.classList.add('open');
  });
}

if (closeSuccessModal) {
  closeSuccessModal.addEventListener('click', () => {
    successModalOverlay.classList.remove('open');
  });
}
if (successModalOverlay) {
  successModalOverlay.addEventListener('click', (e) => {
    if (e.target === successModalOverlay) successModalOverlay.classList.remove('open');
  });
}

// ================== Mobile Drawer ==================
function toggleMobileMenu(open) {
  if (open) {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
  } else {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
  }
}

if (burgerBtn) burgerBtn.addEventListener('click', () => toggleMobileMenu(true));
if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', () => toggleMobileMenu(false));
if (mobileOverlay) mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => toggleMobileMenu(false));
});

// ================== Toast ==================
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ================== Init ==================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
});
