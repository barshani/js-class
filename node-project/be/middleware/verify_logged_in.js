const jwt = require("jsonwebtoken");

function verify_logged_in(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("You are not authorized to access this resource1.");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).send("You are not authorized to access this resource2.");
    }
    jwt.verify(token, "b4r4sdf", (err, payload) => {
        
        if (err && err.message === "jwt expired") {
            return res.status(403).send("Your session has expired.");
        }

        if (err) {
            return res.status(401).send("You are not authorized to access this resource3.");
        }
        next();
    });
}
module.exports = verify_logged_in;