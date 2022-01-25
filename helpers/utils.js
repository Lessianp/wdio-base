"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate2FAcode = void 0;
const speakeasy = require('speakeasy');
/**
 * Used to generate 2FA code.
 * @param token Secret Token obtained when configuring 2FA.
 * @returns code to input in the 2FA modal.
 */
async function generate2FAcode(token) {
    const code = speakeasy.totp({
        secret: token,
        encoding: 'base32'
    });
    return code;
}
exports.generate2FAcode = generate2FAcode;
;
