function formatMoney(amount) {
    return `${Math.round(amount).toLocaleString("vi-VN")}đ`;
}

function printRestaurantBill(items, date, includeTip) {
    let subtotal = 0;

    console.log("==============================================");
    console.log("              HÓA ĐƠN NHÀ HÀNG");
    console.log("----------------------------------------------");

    for (let i = 0; i < items.length; i++) {
        const itemTotal = items[i].price * items[i].quantity;
        subtotal += itemTotal;

        console.log(
            `${i + 1}. ${items[i].name.padEnd(14)} x${String(items[i].quantity).padEnd(3)} @${formatMoney(items[i].price).padEnd(10)} = ${formatMoney(itemTotal)}`
        );
    }

    let discountRate = 0;
    if (subtotal > 1000000) {
        discountRate = 0.15;
    } else if (subtotal > 500000) {
        discountRate = 0.1;
    }

    const isWednesday = date.getDay() === 3;
    if (isWednesday) {
        discountRate += 0.05;
    }

    const discount = subtotal * discountRate;
    const afterDiscount = subtotal - discount;
    const vat = afterDiscount * 0.08;
    const tip = includeTip ? afterDiscount * 0.05 : 0;
    const total = afterDiscount + vat + tip;

    console.log("----------------------------------------------");
    console.log(`Tổng cộng:             ${formatMoney(subtotal)}`);
    console.log(`Giảm giá (${discountRate * 100}%):         ${formatMoney(discount)}`);
    console.log(`VAT (8%):              ${formatMoney(vat)}`);
    console.log(`Tip (${includeTip ? "5" : "0"}%):              ${formatMoney(tip)}`);
    console.log("----------------------------------------------");
    console.log(`THANH TOÁN:            ${formatMoney(total)}`);
    console.log("==============================================");
}

const items = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
];

printRestaurantBill(items, new Date("2026-06-03"), true);
