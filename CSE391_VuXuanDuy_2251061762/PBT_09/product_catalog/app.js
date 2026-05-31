const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/400?text=iPhone+16", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S24", price: 22990000, category: "phone", image: "https://placehold.co/400?text=Samsung+S24", rating: 4.4, inStock: true },
    { id: 3, name: "Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/400?text=Pixel+9", rating: 4.6, inStock: false },
    { id: 4, name: "MacBook Pro", price: 45990000, category: "laptop", image: "https://placehold.co/400?text=MacBook+Pro", rating: 4.8, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/400?text=Dell+XPS+15", rating: 4.7, inStock: true },
    { id: 6, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/400?text=ThinkPad+X1", rating: 4.5, inStock: true },
    { id: 7, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/400?text=iPad+Air", rating: 4.6, inStock: true },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://placehold.co/400?text=Xiaomi+Pad+6", rating: 4.2, inStock: true },
    { id: 9, name: "Galaxy Tab", price: 12990000, category: "tablet", image: "https://placehold.co/400?text=Galaxy+Tab", rating: 4.3, inStock: false },
    { id: 10, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/400?text=AirPods+Pro", rating: 4.3, inStock: true },
    { id: 11, name: "Galaxy Buds", price: 3490000, category: "accessory", image: "https://placehold.co/400?text=Galaxy+Buds", rating: 4.1, inStock: true },
    { id: 12, name: "Magic Mouse", price: 2490000, category: "accessory", image: "https://placehold.co/400?text=Magic+Mouse", rating: 4.0, inStock: true },
];

const state = {
    category: "all",
    keyword: "",
    sort: "default",
    cartCount: 0,
};

function createElement(tag, options = {}) {
    const element = document.createElement(tag);

    if (options.className) element.className = options.className;
    if (options.text) element.textContent = options.text;
    if (options.attributes) {
        Object.entries(options.attributes).forEach(([name, value]) => element.setAttribute(name, value));
    }

    return element;
}

const header = createElement("header", { className: "header" });
const title = createElement("h1", { text: "Product Catalog" });
const headerActions = createElement("div", { className: "header-actions" });
const darkModeButton = createElement("button", { text: "Dark mode", attributes: { type: "button" } });
const cart = createElement("div", { className: "cart", text: "Giỏ hàng" });
const cartBadge = createElement("span", { className: "badge", text: "0" });
cart.appendChild(cartBadge);
headerActions.append(darkModeButton, cart);
header.append(title, headerActions);

const controls = createElement("section", { className: "controls" });
const searchInput = createElement("input", {
    attributes: { type: "search", placeholder: "Tìm sản phẩm...", "aria-label": "Tìm sản phẩm" },
});
const sortSelect = createElement("select", { attributes: { "aria-label": "Sắp xếp sản phẩm" } });
[
    ["default", "Mặc định"],
    ["price-asc", "Giá tăng dần"],
    ["price-desc", "Giá giảm dần"],
    ["name-asc", "Tên A-Z"],
    ["rating-desc", "Đánh giá cao nhất"],
].forEach(([value, label]) => {
    const option = createElement("option", { text: label, attributes: { value } });
    sortSelect.appendChild(option);
});
controls.append(searchInput, sortSelect);

const categories = createElement("section", { className: "categories" });
[
    ["all", "Tất cả"],
    ["phone", "Điện thoại"],
    ["laptop", "Laptop"],
    ["tablet", "Máy tính bảng"],
    ["accessory", "Phụ kiện"],
].forEach(([value, label]) => {
    const button = createElement("button", {
        className: `category${value === "all" ? " active" : ""}`,
        text: label,
        attributes: { type: "button", "data-category": value },
    });
    categories.appendChild(button);
});

const productGrid = createElement("main", { className: "grid" });
document.body.append(header, controls, categories, productGrid);

function formatPrice(price) {
    return `${price.toLocaleString("vi-VN")}đ`;
}

function filterByCategory(items) {
    return state.category === "all"
        ? items
        : items.filter(product => product.category === state.category);
}

function searchProducts(items) {
    const keyword = state.keyword.trim().toLowerCase();
    return items.filter(product => product.name.toLowerCase().includes(keyword));
}

function sortProducts(items) {
    const sorted = [...items];
    const sorters = {
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
        "name-asc": (a, b) => a.name.localeCompare(b.name),
        "rating-desc": (a, b) => b.rating - a.rating,
    };

    return sorters[state.sort] ? sorted.sort(sorters[state.sort]) : sorted;
}

function openProductModal(product) {
    const backdrop = createElement("div", { className: "modal-backdrop" });
    const modal = createElement("section", { className: "modal", attributes: { role: "dialog", "aria-modal": "true" } });
    const closeButton = createElement("button", { className: "close-modal", text: "X", attributes: { type: "button", "aria-label": "Đóng" } });
    const image = createElement("img", { attributes: { src: product.image, alt: product.name } });
    const name = createElement("h2", { text: product.name });
    const price = createElement("p", { className: "price", text: formatPrice(product.price) });
    const details = createElement("p", {
        className: "meta",
        text: `Danh mục: ${product.category} | Đánh giá: ${product.rating} | ${product.inStock ? "Còn hàng" : "Hết hàng"}`,
    });

    function closeModal() {
        backdrop.remove();
    }

    closeButton.addEventListener("click", closeModal);
    backdrop.addEventListener("click", event => {
        if (event.target === backdrop) closeModal();
    });

    modal.append(closeButton, image, name, price, details);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
}

function createProductCard(product) {
    const card = createElement("article", { className: "card" });
    const image = createElement("img", { attributes: { src: product.image, alt: product.name } });
    const content = createElement("div", { className: "card-content" });
    const name = createElement("h2", { text: product.name });
    const price = createElement("p", { className: "price", text: formatPrice(product.price) });
    const details = createElement("p", {
        className: "meta",
        text: `Đánh giá: ${product.rating} | ${product.inStock ? "Còn hàng" : "Hết hàng"}`,
    });
    const addButton = createElement("button", {
        className: "add-cart",
        text: product.inStock ? "Thêm giỏ" : "Hết hàng",
        attributes: { type: "button" },
    });

    addButton.disabled = !product.inStock;
    addButton.addEventListener("click", event => {
        event.stopPropagation();
        state.cartCount++;
        cartBadge.textContent = state.cartCount;
    });
    card.addEventListener("click", () => openProductModal(product));

    content.append(name, price, details, addButton);
    card.append(image, content);
    return card;
}

function renderProducts() {
    const visibleProducts = sortProducts(searchProducts(filterByCategory(products)));
    const fragment = document.createDocumentFragment();

    visibleProducts.forEach(product => fragment.appendChild(createProductCard(product)));
    productGrid.replaceChildren(fragment);

    if (visibleProducts.length === 0) {
        productGrid.appendChild(createElement("p", { className: "empty", text: "Không tìm thấy sản phẩm." }));
    }
}

searchInput.addEventListener("input", () => {
    state.keyword = searchInput.value;
    renderProducts();
});

sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    renderProducts();
});

categories.addEventListener("click", event => {
    const button = event.target.closest(".category");
    if (!button) return;

    state.category = button.dataset.category;
    categories.querySelectorAll(".category").forEach(item => item.classList.toggle("active", item === button));
    renderProducts();
});

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeButton.textContent = document.body.classList.contains("dark-mode") ? "Light mode" : "Dark mode";
});

renderProducts();
