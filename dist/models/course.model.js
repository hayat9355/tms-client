"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
//
const polyfill_1 = require("@js-temporal/polyfill");
function describeCourse(status) {
    switch (status.status) {
        case "DRAFT":
            return `the Draft one ${status.createdAt}/n CreatedBY${status.createdBy}`;
        case "PUBLISHED":
            return `Published at ${status.publishedAt}`;
        case "ACTIVE":
            return `Active with  ${status.enrolledCount} `;
        case "ARCHIVED":
            return `Archived by ${status.archivedAt}`;
        case "CANCELLED":
            return `Archived by ${status.reason}`;
        default: {
            // Exhaustive check guard
            const exhaustiveCheck = status;
            throw new Error(`Unhandled course status case: ${JSON.stringify(exhaustiveCheck)}`);
        }
    }
}
const DRAFT = {
    status: "DRAFT",
    createdBy: "stu-001",
    createdAt: polyfill_1.Temporal.Now.instant(),
};
console.log(describeCourse(DRAFT));
