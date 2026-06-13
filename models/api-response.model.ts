import { Temporal } from "@js-temporal/polyfill";
import { isStringLiteralOrJsxExpression } from "typescript";

export type ApiResponse<T> =
| { status: "loading" }
| { status: "success"; data: T; fetchedAt: Temporal.Instant }
| { status: "error"; message: string; statusCode: number };

export function renderResponse<T>
(respone : ApiResponse<T>,formatter:(data:T)=>string,):
string{
    switch(respone.status){
        case "loading":
            return `The response is loading ......`;
       case "success":
                // Pass the generic data into your formatter function
            const formattedData = formatter(respone.data);
            return `The response is successful. Data: ${formattedData} (Fetched at: ${respone.fetchedAt.toString()})`;
       case "error":
            return`Error ${respone.message}`;
        default: {
                // Exhaustive check safety guard
            const exhaustiveCheck: never = respone;
            throw new Error(`Unhandled API status case`);
    }
    }
}
