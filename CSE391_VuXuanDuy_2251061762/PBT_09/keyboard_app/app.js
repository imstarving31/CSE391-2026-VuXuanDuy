const images = [
    { src: "https://placehold.co/960x540/5068d8/ffffff?text=Ảnh+1", alt: "Ảnh minh họa số 1" },
    { src: "https://placehold.co/960x540/8d64c9/ffffff?text=Ảnh+2", alt: "Ảnh minh họa số 2" },
    { src: "https://placehold.co/960x540/348e81/ffffff?text=Ảnh+3", alt: "Ảnh minh họa số 3" },
    { src: "https://placehold.co/960x540/c37948/ffffff?text=Ảnh+4", alt: "Ảnh minh họa số 4" },
    { src: "https://placehold.co/960x540/bb5262/ffffff?text=Ảnh+5", alt: "Ảnh minh họa số 5" },
    { src: "https://placehold.co/960x540/4d829d/ffffff?text=Ảnh+6", alt: "Ảnh minh họa số 6" },
];

const galleryImage = document.querySelector("#galleryImage");
const imageCounter = document.querySelector("#imageCounter");
const status = document.querySelector("#status");
const previousButton = document.querySelector("#previousImage");
const nextButton = document.querySelector("#nextImage");
const slideshowButton = document.querySelector("#toggleSlideshow");
const openImageButton = document.querySelector("#openImage");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const closeImageModalButton = document.querySelector("#closeImageModal");
const openPaletteButton = document.querySelector("#openPalette");
const paletteOverlay = document.querySelector("#paletteOverlay");
const commandSearch = document.querySelector("#commandSearch");
const commandList = document.querySelector("#commandList");

let currentIndex = 0;
let slideshowId = null;
let filteredCommands = [];
let selectedCommandIndex = 0;
let previousFocus = null;

function renderImage() {
    const image = images[currentIndex];
    galleryImage.src = image.src;
    galleryImage.alt = image.alt;
    imageCounter.textContent = `Ảnh ${currentIndex + 1}/${images.length}`;
}

function showStatus(message) {
    status.textContent = message;
}

function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    renderImage();
}

function nextImage() {
    showImage(currentIndex + 1);
}

function previousImage() {
    showImage(currentIndex - 1);
}

function toggleSlideshow() {
    if (slideshowId) {
        clearInterval(slideshowId);
        slideshowId = null;
        slideshowButton.textContent = "Phát slideshow";
        slideshowButton.setAttribute("aria-label", "Phát slideshow");
        showStatus("Đã dừng slideshow");
        return;
    }

    slideshowId = setInterval(nextImage, 2000);
    slideshowButton.textContent = "Dừng slideshow";
    slideshowButton.setAttribute("aria-label", "Dừng slideshow");
    showStatus("Đang phát slideshow");
}

function openImageModal() {
    modalImage.src = galleryImage.src;
    modalImage.alt = galleryImage.alt;
    imageModal.hidden = false;
    previousFocus = document.activeElement;
    closeImageModalButton.focus();
}

function closeImageModal() {
    imageModal.hidden = true;
    previousFocus?.focus();
}

const commands = [
    { name: "Ảnh tiếp theo", action: nextImage },
    { name: "Ảnh trước", action: previousImage },
    { name: "Phát hoặc dừng slideshow", action: toggleSlideshow },
    { name: "Mở ảnh hiện tại", action: openImageModal },
    { name: "Chọn ảnh đầu tiên", action: () => showImage(0) },
];

function renderCommands() {
    const keyword = commandSearch.value.trim().toLowerCase();
    filteredCommands = commands.filter(command => command.name.toLowerCase().includes(keyword));
    selectedCommandIndex = Math.min(selectedCommandIndex, Math.max(0, filteredCommands.length - 1));

    const fragment = document.createDocumentFragment();
    filteredCommands.forEach((command, index) => {
        const item = document.createElement("li");
        item.className = `command${index === selectedCommandIndex ? " selected" : ""}`;
        item.textContent = command.name;
        item.dataset.index = index;
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", index === selectedCommandIndex ? "true" : "false");
        fragment.appendChild(item);
    });
    commandList.replaceChildren(fragment);
}

function openPalette() {
    previousFocus = document.activeElement;
    paletteOverlay.hidden = false;
    commandSearch.value = "";
    selectedCommandIndex = 0;
    renderCommands();
    commandSearch.focus();
}

function closePalette() {
    paletteOverlay.hidden = true;
    previousFocus?.focus();
}

function runSelectedCommand() {
    const command = filteredCommands[selectedCommandIndex];
    if (!command) return;

    closePalette();
    command.action();
    showStatus(`Đã chạy lệnh: ${command.name}`);
}

previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);
slideshowButton.addEventListener("click", toggleSlideshow);
openImageButton.addEventListener("click", openImageModal);
closeImageModalButton.addEventListener("click", closeImageModal);
openPaletteButton.addEventListener("click", openPalette);

imageModal.addEventListener("click", event => {
    if (event.target === imageModal) closeImageModal();
});

paletteOverlay.addEventListener("click", event => {
    if (event.target === paletteOverlay) closePalette();
});

commandSearch.addEventListener("input", renderCommands);
commandSearch.addEventListener("keydown", event => {
    if (event.key === "ArrowDown") {
        event.preventDefault();
        selectedCommandIndex = Math.min(selectedCommandIndex + 1, filteredCommands.length - 1);
        renderCommands();
    }
    if (event.key === "ArrowUp") {
        event.preventDefault();
        selectedCommandIndex = Math.max(selectedCommandIndex - 1, 0);
        renderCommands();
    }
    if (event.key === "Enter") {
        event.preventDefault();
        runSelectedCommand();
    }
});

commandList.addEventListener("click", event => {
    const item = event.target.closest(".command");
    if (!item) return;

    selectedCommandIndex = Number(item.dataset.index);
    runSelectedCommand();
});

document.addEventListener("keydown", event => {
    const isTyping = event.target.matches("input, textarea, select");

    if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openPalette();
        return;
    }

    if (event.key === "Escape") {
        if (!paletteOverlay.hidden) closePalette();
        if (!imageModal.hidden) closeImageModal();
        return;
    }

    if (isTyping || !paletteOverlay.hidden || !imageModal.hidden) {
        return;
    }

    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") previousImage();
    if (event.key === " ") {
        event.preventDefault();
        toggleSlideshow();
    }

    const imageNumber = Number(event.key);
    if (Number.isInteger(imageNumber) && imageNumber >= 1 && imageNumber <= images.length) {
        showImage(imageNumber - 1);
    }
});

renderImage();
