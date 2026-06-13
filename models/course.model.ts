
//
import { Temporal } from "@js-temporal/polyfill";
export interface Course {
    readonly id: string;
    title: string;
    capacity: number;
    startDate?: Temporal.PlainDate;
}
//CourseStatus
export type CourseStatus =
| { status: "DRAFT";
     createdBy: string; createdAt: Temporal.Instant }
| { status: "PUBLISHED";
     publishedAt: Temporal.Instant; syllabus: string }
| {
status: "ACTIVE";
enrolledCount: number;startDate: Temporal.PlainDate;}
| {
status: "ARCHIVED";
archivedAt: Temporal.Instant;finalEnrollmentCount: number;
}
| { status: "CANCELLED";
     reason: string; cancelledAt: Temporal.Instant };

export function describeCourse(status: CourseStatus): string {
    switch(status.status){
        case "DRAFT":
                     return `the Draft one ${status.createdAt}/n CreatedBY${status.createdBy}`;
        case "PUBLISHED":
                      return `Published at ${status.publishedAt}`;
        case "ACTIVE":
                      return `Active with  ${status.enrolledCount} `;
        case"ARCHIVED":
                  return `Archived by ${status.archivedAt}`;
        case "CANCELLED":
                 return `Archived by ${status.reason}`;
        default: {
      // Exhaustive check guard
      const exhaustiveCheck: never = status;
      throw new Error(`Unhandled course status case: ${JSON.stringify(exhaustiveCheck)}`);
    }
    }
}
 
const DRAFT:CourseStatus={
    status:"DRAFT",
    createdBy:"stu-001",
    createdAt:Temporal.Now.instant(),
};
console.log(describeCourse(DRAFT));