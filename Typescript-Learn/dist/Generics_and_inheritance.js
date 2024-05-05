"use strict";
class State {
    constructor() {
        this.data = [];
    }
    add(t) {
        this.data.push(t);
    }
    getState() {
        return this.data;
    }
}
class DeleteState extends State {
    delete(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class UserState extends State {
    resetPassword() {
    }
}
const userState = new UserState();
const deleteState = new DeleteState();
deleteState.delete;
//# sourceMappingURL=Generics_and_inheritance.js.map