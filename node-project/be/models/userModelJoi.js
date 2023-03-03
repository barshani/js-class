const JOI = require("joi");
class userModelJOI {
    constructor(object) {
        this.email = object.email;
        this.password = object.password;
    }
    static #baselineValidation = {
        email: JOI.string().required().min(10).max(20),
        password: JOI.string().required().min(8).max(12)
    };

    static #registerValidation = JOI.object( userModelJOI.#baselineValidation );
    static #loginValidation = JOI.object( userModelJOI.#baselineValidation );

    validateRegistration() {

        const result = userModelJOI.#registerValidation.validate(this, {abortEarly: false});
        return result.error ? result.error : null;
    }

    validateLogin() {
        const result = AuthUserModelJOI.#loginValidation.validate(this, {abortEarly: false});
        return result.error ? result.error : null;
    }
}

module.exports = userModelJOI;