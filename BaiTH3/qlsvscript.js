const STORAGE_KEY = "qlsv_students";

let students = [];
let editIndex = -1;

const btnOpenForm = document.getElementById("btnOpenForm");
const btnCloseForm = document.getElementById("btnCloseForm");
const btnCancel = document.getElementById("btnCancel");
const modalOverlay = document.getElementById("modalOverlay");
const studentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");
const messageBox = document.getElementById("messageBox");
const totalStudents = document.getElementById("totalStudents");
const classAverage = document.getElementById("classAverage");
const formTitle = document.getElementById("formTitle");
const btnSave = document.getElementById("btnSave");
const scoreHint = document.getElementById("scoreHint");

const inputStudentId = document.getElementById("studentId");
const inputFullName = document.getElementById("fullName");
const inputBirthday = document.getElementById("birthday");
const inputClassName = document.getElementById("className");
const inputAverageScore = document.getElementById("averageScore");
const inputEmail = document.getElementById("email");
const inputConfirmInfo = document.getElementById("confirmInfo");
const errorMessages = document.querySelectorAll("[data-error-for]");

function loadStudents() {
    const data = localStorage.getItem(STORAGE_KEY);
    students = data ? JSON.parse(data) : [];
}

function saveStudents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function renderStudents() {
    if (students.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td class="empty-row" colspan="7">Chưa có sinh viên nào trong danh sách.</td>
            </tr>
        `;
        updateStatistics();
        return;
    }

    tableBody.innerHTML = students.map((student, index) => `
        <tr>
            <td>${student.studentId}</td>
            <td>${student.fullName}</td>
            <td>${student.birthday}</td>
            <td>${student.className}</td>
            <td>${student.averageScore.toFixed(1)}</td>
            <td>${student.email}</td>
            <td>
                <div class="action-group">
                    <button class="btn btn-warning" type="button" data-action="edit" data-index="${index}">Sửa</button>
                    <button class="btn btn-danger" type="button" data-action="delete" data-index="${index}">Xóa</button>
                </div>
            </td>
        </tr>
    `).join("");

    updateStatistics();
}

function updateStatistics() {
    totalStudents.innerText = students.length;

    if (students.length === 0) {
        classAverage.innerText = "0.00";
        return;
    }

    const totalScore = students.reduce((sum, student) => sum + student.averageScore, 0);
    classAverage.innerText = (totalScore / students.length).toFixed(2);
}

function showMessage(content, type = "success") {
    messageBox.textContent = content;
    messageBox.classList.toggle("error", type === "error");

    setTimeout(() => {
        messageBox.textContent = "";
        messageBox.classList.remove("error");
    }, 2500);
}

function openForm(mode = "add") {
    modalOverlay.classList.remove("hidden");

    if (mode === "add") {
        formTitle.innerText = "Thêm sinh viên";
        btnSave.innerText = "Lưu sinh viên";
    } else {
        formTitle.innerText = "Cập nhật sinh viên";
        btnSave.innerText = "Cập nhật";
    }
}

function closeForm() {
    modalOverlay.classList.add("hidden");
    resetForm();
}

function resetForm() {
    studentForm.reset();
    editIndex = -1;
    btnSave.disabled = true;
    scoreHint.textContent = "Nhập điểm từ 0 đến 10.";
    scoreHint.className = "score-hint";
    clearValidationErrors();
}

function getStudentFromForm() {
    return {
        studentId: inputStudentId.value.trim(),
        fullName: inputFullName.value.trim(),
        birthday: inputBirthday.value,
        className: inputClassName.value,
        averageScore: Number(inputAverageScore.value),
        email: inputEmail.value.trim()
    };
}

function fillForm(student, index) {
    editIndex = index;
    inputStudentId.value = student.studentId;
    inputFullName.value = student.fullName;
    inputBirthday.value = student.birthday;
    inputClassName.value = student.className;
    inputAverageScore.value = student.averageScore;
    inputEmail.value = student.email;
    inputConfirmInfo.checked = true;
    btnSave.disabled = false;
    updateScoreHint();
    clearValidationErrors();
}

function isDuplicateStudentId(studentId) {
    return students.some((student, index) => {
        return student.studentId.toLowerCase() === studentId.toLowerCase() && index !== editIndex;
    });
}

function clearValidationErrors() {
    errorMessages.forEach((errorElement) => {
        const inputId = errorElement.dataset.errorFor;
        const input = document.getElementById(inputId);

        errorElement.textContent = "";

        if (input) {
            input.classList.remove("invalid");
        }
    });
}

function showFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.querySelector(`[data-error-for="${inputId}"]`);

    if (input) {
        input.classList.add("invalid");
    }

    if (errorElement) {
        errorElement.textContent = message;
    }
}

function validateStudentForm(student) {
    let isValid = true;
    clearValidationErrors();

    if (student.studentId === "") {
        showFieldError("studentId", "Vui lòng nhập mã sinh viên.");
        isValid = false;
    } else if (!/^SV\d{3,}$/i.test(student.studentId)) {
        showFieldError("studentId", "Mã sinh viên cần có dạng SV001.");
        isValid = false;
    } else if (isDuplicateStudentId(student.studentId)) {
        showFieldError("studentId", "Mã sinh viên đã tồn tại.");
        isValid = false;
    }

    if (student.fullName.length < 2) {
        showFieldError("fullName", "Họ và tên cần có ít nhất 2 ký tự.");
        isValid = false;
    }

    if (student.birthday === "") {
        showFieldError("birthday", "Vui lòng chọn ngày sinh.");
        isValid = false;
    } else if (new Date(student.birthday) > new Date()) {
        showFieldError("birthday", "Ngày sinh không được ở tương lai.");
        isValid = false;
    }

    if (student.className === "") {
        showFieldError("className", "Vui lòng chọn lớp học.");
        isValid = false;
    }

    if (inputAverageScore.value === "" || Number.isNaN(student.averageScore)) {
        showFieldError("averageScore", "Vui lòng nhập điểm hợp lệ.");
        isValid = false;
    } else if (student.averageScore < 0 || student.averageScore > 10) {
        showFieldError("averageScore", "Điểm phải nằm trong khoảng 0 đến 10.");
        isValid = false;
    }

    if (student.email === "") {
        showFieldError("email", "Vui lòng nhập email.");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
        showFieldError("email", "Email chưa đúng định dạng.");
        isValid = false;
    }

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();

    const student = getStudentFromForm();

    if (!validateStudentForm(student)) {
        showMessage("Vui lòng kiểm tra lại các lỗi trong form.", "error");
        return;
    }

    if (editIndex === -1) {
        students.push(student);
        showMessage("Đã thêm sinh viên mới.");
    } else {
        students[editIndex] = student;
        showMessage("Đã cập nhật thông tin sinh viên.");
    }

    saveStudents();
    renderStudents();
    closeForm();
}

function handleTableClick(event) {
    const button = event.target.closest("button");

    if (!button || !tableBody.contains(button)) {
        return;
    }

    const action = button.dataset.action;
    const index = Number(button.dataset.index);
    const row = button.closest("tr");
    const studentName = row.children[1].textContent;

    if (action === "edit") {
        fillForm(students[index], index);
        openForm("edit");
    }

    if (action === "delete") {
        const isConfirmed = confirm(`Bạn có chắc muốn xóa sinh viên ${studentName}?`);

        if (isConfirmed) {
            students.splice(index, 1);
            saveStudents();
            renderStudents();
            showMessage("Đã xóa sinh viên.");
        }
    }
}

function updateScoreHint() {
    const score = Number(inputAverageScore.value);
    scoreHint.className = "score-hint";

    if (inputAverageScore.value === "") {
        scoreHint.textContent = "Nhập điểm từ 0 đến 10.";
        return;
    }

    if (score < 0 || score > 10) {
        scoreHint.textContent = "Điểm không hợp lệ.";
        scoreHint.classList.add("danger");
    } else if (score >= 8) {
        scoreHint.textContent = "Sinh viên đang có kết quả tốt.";
        scoreHint.classList.add("good");
    } else if (score >= 5) {
        scoreHint.textContent = "Sinh viên đạt mức trung bình khá.";
        scoreHint.classList.add("warning");
    } else {
        scoreHint.textContent = "Sinh viên cần cải thiện điểm.";
        scoreHint.classList.add("danger");
    }
}

function updateSaveButtonState() {
    btnSave.disabled = !inputConfirmInfo.checked;
}

btnOpenForm.addEventListener("click", () => {
    resetForm();
    openForm("add");
});

btnCloseForm.addEventListener("click", closeForm);
btnCancel.addEventListener("click", closeForm);
studentForm.addEventListener("submit", handleSubmit);
tableBody.addEventListener("click", handleTableClick);
inputAverageScore.addEventListener("change", updateScoreHint);
inputConfirmInfo.addEventListener("change", updateSaveButtonState);

studentForm.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", () => {
        validateStudentForm(getStudentFromForm());
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
        closeForm();
    }
});

loadStudents();
renderStudents();
