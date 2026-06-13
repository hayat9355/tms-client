"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderResponse = renderResponse;
function renderResponse(respone, formatter) {
    switch (respone.status) {
        case "loading":
            return `The response is loading ......`;
        case "success":
            // Pass the generic data into your formatter function
            const formattedData = formatter(respone.data);
            return `The response is successful. Data: ${formattedData} (Fetched at: ${respone.fetchedAt.toString()})`;
        case "error":
            return `Error ${respone.message}`;
        default: {
            // Exhaustive check safety guard
            const exhaustiveCheck = respone;
            throw new Error(`Unhandled API status case`);
        }
    }
}
