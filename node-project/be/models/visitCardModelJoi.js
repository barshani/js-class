const JOI = require("joi");
class visitCardModelJOI {
    constructor(object) {
        this.name = object.name;
        this.description = object.description;
        this.address = object.address;
        this.phone = object.phone;
        this.photo = object.photo;
    }
    static #baselineValidation = {
        name: JOI.string().required().min(2).max(20),
        description: JOI.string(),
        address: JOI.string().required().min(8).max(50),
        phone: JOI.string().required().min(10).max(10),
        photo: JOI.string()
    };

    static #registerValidation = JOI.object( visitCardModelJOI.#baselineValidation );
    static #loginValidation = JOI.object( visitCardModelJOI.#baselineValidation );

    validateRegistration() {

        const result = visitCardModelJOI.#registerValidation.validate(this, {abortEarly: false});
        return result.error ? result.error : null;
    }

    validateLogin() {
        const result = visitCardModelJOI.#loginValidation.validate(this, {abortEarly: false});
        return result.error ? result.error : null;
    }
}

module.exports = visitCardModelJOI;