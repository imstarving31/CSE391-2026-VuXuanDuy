function formatMoney(amount) {
    return amount.toLocaleString("vi-VN");
}

function createCart() {
    let items = [];
    let discountCode = null;

    function getSubtotal() {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return {
        addItem(product, quantity = 1) {
            if (!Number.isInteger(quantity) || quantity <= 0) {
                return false;
            }

            const existingItem = items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }

            return true;
        },

        removeItem(productId) {
            const oldLength = items.length;
            items = items.filter(item => item.id !== productId);
            return items.length < oldLength;
        },

        updateQuantity(productId, newQuantity) {
            if (!Number.isInteger(newQuantity)) {
                return false;
            }

            if (newQuantity <= 0) {
                return this.removeItem(productId);
            }

            const item = items.find(item => item.id === productId);
            if (!item) {
                return false;
            }

            item.quantity = newQuantity;
            return true;
        },

        getTotal() {
            const subtotal = getSubtotal();

            if (discountCode === "SALE10") {
                return subtotal * 0.9;
            }
            if (discountCode === "SALE20") {
                return subtotal * 0.8;
            }
            if (discountCode === "FREESHIP") {
                return Math.max(0, subtotal - 30000);
            }

            return subtotal;
        },

        applyDiscount(code) {
            const validCodes = ["SALE10", "SALE20", "FREESHIP"];

            if (!validCodes.includes(code)) {
                return false;
            }

            discountCode = code;
            return true;
        },

        printCart() {
            console.log("-------------------------------------------------------------------");
            console.log("| # | Sản phẩm       | SL | Đơn giá        | Thành tiền          |");
            console.log("-------------------------------------------------------------------");

            items.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                console.log(
                    `| ${String(index + 1).padEnd(1)} | ${item.name.padEnd(14)} | ${String(item.quantity).padStart(2)} | ${formatMoney(item.price).padStart(14)} | ${formatMoney(itemTotal).padStart(19)} |`
                );
            });

            console.log("-------------------------------------------------------------------");
            console.log(`| Tổng thanh toán: ${`${formatMoney(this.getTotal())}đ`.padStart(47)} |`);
            console.log("-------------------------------------------------------------------");
        },

        getItemCount() {
            return items.reduce((total, item) => total + item.quantity, 0);
        },

        clearCart() {
            items = [];
            discountCode = null;
        },
    };
}

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

console.log("=== GIỎ HÀNG BAN ĐẦU ===");
cart.printCart();

cart.applyDiscount("SALE10");
console.log("\n=== SAU KHI ÁP DỤNG SALE10 ===");
cart.printCart();

console.log("\nSố SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());
