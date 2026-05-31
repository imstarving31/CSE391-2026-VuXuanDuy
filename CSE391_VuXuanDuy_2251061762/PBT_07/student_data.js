const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function classify(average) {
    if (average >= 8) {
        return "Giỏi";
    }
    if (average >= 6.5) {
        return "Khá";
    }
    if (average >= 5) {
        return "Trung bình";
    }
    return "Yếu";
}

const classificationCounts = {
    "Giỏi": 0,
    "Khá": 0,
    "Trung bình": 0,
    "Yếu": 0,
};

let highestStudent = null;
let lowestStudent = null;
let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;
let maleTotal = 0;
let maleCount = 0;
let femaleTotal = 0;
let femaleCount = 0;

console.log("| STT | Tên    | TB   | Xếp loại   |");
console.log("|-----|--------|------|------------|");

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    student.average = student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
    student.classification = classify(student.average);

    console.log(
        `| ${String(i + 1).padEnd(3)} | ${student.name.padEnd(6)} | ${student.average.toFixed(1).padEnd(4)} | ${student.classification.padEnd(10)} |`
    );

    classificationCounts[student.classification]++;

    if (highestStudent === null || student.average > highestStudent.average) {
        highestStudent = student;
    }

    if (lowestStudent === null || student.average < lowestStudent.average) {
        lowestStudent = student;
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCs += student.cs;

    if (student.gender === "M") {
        maleTotal += student.average;
        maleCount++;
    } else if (student.gender === "F") {
        femaleTotal += student.average;
        femaleCount++;
    }
}

console.log("\nSố sinh viên theo xếp loại:");
console.log(`- Giỏi: ${classificationCounts["Giỏi"]}`);
console.log(`- Khá: ${classificationCounts["Khá"]}`);
console.log(`- Trung bình: ${classificationCounts["Trung bình"]}`);
console.log(`- Yếu: ${classificationCounts["Yếu"]}`);

console.log(`\nSinh viên có điểm TB cao nhất: ${highestStudent.name} (${highestStudent.average.toFixed(1)})`);
console.log(`Sinh viên có điểm TB thấp nhất: ${lowestStudent.name} (${lowestStudent.average.toFixed(1)})`);

console.log("\nĐiểm TB toàn lớp theo từng môn:");
console.log(`- Toán: ${(totalMath / students.length).toFixed(2)}`);
console.log(`- Vật lý: ${(totalPhysics / students.length).toFixed(2)}`);
console.log(`- Tin học: ${(totalCs / students.length).toFixed(2)}`);

console.log("\nĐiểm TB theo giới tính:");
console.log(`- Nam: ${(maleTotal / maleCount).toFixed(2)}`);
console.log(`- Nữ: ${(femaleTotal / femaleCount).toFixed(2)}`);
