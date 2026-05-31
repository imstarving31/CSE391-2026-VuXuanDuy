const answer = Math.floor(Math.random() * 100) + 1;
const guessedNumbers = {};
const maxAttempts = 7;
let attempts = 0;
let hasWon = false;

while (attempts < maxAttempts && !hasWon) {
    const input = prompt(`Lượt ${attempts + 1}/${maxAttempts}: Nhập một số từ 1 đến 100`);

    if (input === null) {
        alert(`Bạn đã kết thúc trò chơi. Đáp án là ${answer}.`);
        break;
    }

    const guess = Number(input);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        alert("Input không hợp lệ. Vui lòng nhập một số nguyên từ 1 đến 100.");
        continue;
    }

    if (guessedNumbers[guess]) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers[guess] = true;
    attempts++;

    if (guess === answer) {
        hasWon = true;
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
    } else if (guess < answer) {
        alert("Cao hơn");
    } else {
        alert("Thấp hơn");
    }
}

if (!hasWon && attempts === maxAttempts) {
    alert(`Bạn đã hết lượt. Đáp án là ${answer}.`);
}
