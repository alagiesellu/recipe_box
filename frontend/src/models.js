export default class Auth {
    constructor(data) {
        this.data = data;
    }

    getName() {
        return this.data.name;
    }
    getId() {
        return this.data.id;
    }
}
