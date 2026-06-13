"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Session 1
const polyfill_1 = require("@js-temporal/polyfill");
const student_models_1 = require("./models/student.models");
const assessment_model_1 = require("./models/assessment.model");
const course_model_1 = require("./models/course.model");
const api_response_model_1 = require("./models/api-response.model");
const student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: polyfill_1.Temporal.Now.instant(),
};
student.id = "STU-999";
//console.log(student.gpa.toFixed(2));
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");
//Exercise 3
function processStudent(raw) {
    if ((0, student_models_1.isStudent)(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
//ParseStudent 
console.log((0, student_models_1.parseStudent)({ id: "STU-001", name: "Hana" }));
(0, student_models_1.parseStudent)({ id: "42", name: "Test" });
//import the AssessmentItem,calculateGrade
const quiz = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10,
};
const lab = {
    id: "LAB-001",
    kind: "lab",
    title: "REST API Project",
    functionalityScore: 85,
    codeQualityScore: 90,
};
console.log(`Quiz grade: ${(0, assessment_model_1.calculateGrade)(quiz)}%`);
console.log(`Lab grade: ${(0, assessment_model_1.calculateGrade)(lab)}%`);
//import the Course
const webDev = {
    status: "ACTIVE",
    enrolledCount: 28,
    startDate: polyfill_1.Temporal.PlainDate.from("2026-09-01"),
};
console.log((0, course_model_1.describeCourse)(webDev));
//import the api-response
const studentRes = {
    status: "success",
    data: {
        id: "STU-001",
        name: "Dawit Bekele",
        enrollmentDate: polyfill_1.Temporal.Now.instant(),
        gpa: 3.4,
    },
    fetchedAt: polyfill_1.Temporal.Now.instant(),
};
console.log((0, api_response_model_1.renderResponse)(studentRes, (s) => `${s.name} GPA: ${s.gpa ?? "N/A"}`));
//
const courseListRes = {
    status: "success",
    data: [
        { id: "CRS-101", title: "Web Development Fundamentals",
            capacity: 30,
            startDate: polyfill_1.Temporal.PlainDate.from("2026-09-01"),
        },
    ],
    fetchedAt: polyfill_1.Temporal.Now.instant(),
};
console.log((0, api_response_model_1.renderResponse)(courseListRes, (courses) => courses.map((c) => c.title).join(", ")));
//Record the exact moment an enrollment is approved (UTC)
const approvedAt = polyfill_1.Temporal.Now.instant();
console.log(`Approved at (UTC): ${approvedAt}`);
//  Display in local timezone
const addisTime = approvedAt.toZonedDateTimeISO("Africa/Addis_Ababa");
const londonTime = approvedAt.toZonedDateTimeISO("Europe/London");
console.log(`Addis: ${addisTime.toPlainTime()}`);
console.log(`London: ${londonTime.toPlainTime()}`);
// Same moment, different wall-clock time
//Course start date (date only, no time)
const courseStart = polyfill_1.Temporal.PlainDate.from("2026-09-01");
const today = polyfill_1.Temporal.Now.plainDateISO();
const daysUntilStart = today.until(courseStart).total({ unit: "days" });
console.log(`${Math.floor(daysUntilStart)} days until course starts`);
// Assignment deadline duration
const deadline = polyfill_1.Temporal.PlainDate.from("2026-12-15");
const remaining = today.until(deadline);
console.log(`${remaining.total({ unit: "days" })} days until assignment is due`);
