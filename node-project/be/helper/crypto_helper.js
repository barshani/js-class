const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");
const config=require('../config.json');
const cookieOptions = {
    httpOnly: true,
    expires: dayjs().add(config.token.cookie.expiryPeriod, config.token.cookie.expiryType).toDate(),
};

function hash(text) {
    if(!text) return null;

    // Create a Hash from the given text using SHA512 algorithm and output HEXADECIMAL result
    return crypto.createHmac("sha512", config.salts.hash).update(text).digest("hex");
}

function jwtSign(object) {
    return jwt.sign({ object }, config.salts.jwt, { expiresIn: config.token.expiry });
}

function jwtVerify(token, callFunction) {

    jwt.verify(token, config.salts.jwt, (err, payload) => {
        if (err && err.message === "jwt expired") {
            callFunction({status: 403, message: "Your session has expired."});
            return;
        }
        if (err) {
            callFunction({status: 401, message: "You are not authorized to access this resource."});
            return;
        }
        callFunction();
    });
}

module.exports = {
    hash,
    jwtSign,
    jwtVerify,
    cookieOptions
};