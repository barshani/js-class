const crypto = require("crypto");

function hash(text) {
    if(!text) return null;

    const salt = "thisIsCool"; 

    return crypto.createHmac("sha512", salt).update(text).digest("hex");
}

module.exports = { hash };