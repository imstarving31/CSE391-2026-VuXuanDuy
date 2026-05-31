const form = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");
const submitButton = document.querySelector("#submitButton");
const strengthBar = document.querySelector("#strengthBar");
const modal = document.querySelector("#successModal");
const modalDetails = document.querySelector("#modalDetails");
const closeModalButton = document.querySelector("#closeModal");

const statusElements = {
    name: document.querySelector("#nameStatus"),
    email: document.querySelector("#emailStatus"),
    password: document.querySelector("#passwordStatus"),
    confirmPassword: document.querySelector("#confirmStatus"),
    phone: document.querySelector("#phoneStatus"),
};

function setStatus(field, isValid, message) {
    const status = statusElements[field];
    status.textContent = `${isValid ? "✓" : "✗"} ${message}`;
    status.className = isValid ? "valid" : "invalid";
}

function getPasswordStrength(password) {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isStrong =
        password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        hasNumber &&
        /[^a-zA-Z0-9]/.test(password);

    if (isStrong) {
        return "strong";
    }
    if (password.length >= 8 && hasLetters && hasNumber) {
        return "medium";
    }
    return "weak";
}

function renderPasswordStrength(strength) {
    const settings = {
        weak: ["Yếu", "33%", "#d4444f"],
        medium: ["Trung bình", "66%", "#d59a25"],
        strong: ["Mạnh", "100%", "#26844d"],
    };
    const [label, width, color] = settings[strength];

    strengthBar.style.width = width;
    strengthBar.style.backgroundColor = color;
    setStatus("password", strength !== "weak", `Mật khẩu ${label}`);
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    return [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7, 10)]
        .filter(Boolean)
        .join("-");
}

function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const phoneDigits = phoneInput.value.replace(/\D/g, "");

    const validity = {
        name: name.length >= 2 && name.length <= 50,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        password: getPasswordStrength(password) !== "weak",
        confirmPassword: confirmInput.value !== "" && confirmInput.value === password,
        phone: /^\d{10}$/.test(phoneDigits),
    };

    setStatus("name", validity.name, validity.name ? "Tên hợp lệ" : "Tên phải có từ 2 đến 50 ký tự");
    setStatus("email", validity.email, validity.email ? "Email hợp lệ" : "Vui lòng nhập đúng định dạng email");
    renderPasswordStrength(getPasswordStrength(password));
    setStatus(
        "confirmPassword",
        validity.confirmPassword,
        validity.confirmPassword ? "Mật khẩu khớp" : "Mật khẩu xác nhận chưa khớp"
    );
    setStatus("phone", validity.phone, validity.phone ? "Số điện thoại hợp lệ" : "Số điện thoại phải gồm 10 chữ số");

    submitButton.disabled = !Object.values(validity).every(Boolean);
}

form.addEventListener("input", event => {
    if (event.target === phoneInput) {
        phoneInput.value = formatPhone(phoneInput.value);
    }

    validateForm();
});

form.addEventListener("submit", event => {
    event.preventDefault();
    validateForm();

    if (submitButton.disabled) {
        return;
    }

    modalDetails.textContent = `Tên: ${nameInput.value.trim()} | Email: ${emailInput.value.trim()} | SĐT: ${phoneInput.value}`;
    modal.hidden = false;
    closeModalButton.focus();
});

closeModalButton.addEventListener("click", () => {
    modal.hidden = true;
    submitButton.focus();
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.hidden = true;
        submitButton.focus();
    }
});

validateForm();
