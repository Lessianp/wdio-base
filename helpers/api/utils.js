"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequest = void 0;
const axios = require("axios");
async function sendRequest(baseUrl, methodType, endpoint, headersOpts, dataInput) {
    const opts = {
        method: methodType,
        url: `${baseUrl}${endpoint}`,
        headers: headersOpts,
        data: dataInput
    };
    const response = await axios(opts).catch((err) => {
        throw new Error(`${err.message} when sending ${methodType} request to ${baseUrl}${endpoint}`);
    });
    return response;
}
exports.sendRequest = sendRequest;
