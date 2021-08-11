"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
class UserList {
    constructor() {
        this.list = [];
    }
    add(user) {
        this.list.push(user);
        return user;
    }
    updateName(id, name) {
        for (let user of this.list) {
            if (user.id === id) {
                user.name = name;
                break;
            }
        }
    }
    getList() {
        return this.list.filter(user => user.name !== 'sin-nombre');
    }
    getUser(id) {
        return this.list.find(user => user.id === id);
    }
    deleteUser(id) {
        const tempUser = this.getUser(id);
        this.list = this.list.filter(user => user.id !== id);
        return tempUser;
    }
}
exports.UserList = UserList;
