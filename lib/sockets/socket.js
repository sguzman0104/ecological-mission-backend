"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foro = exports.getUsers = exports.configUser = exports.disconnect = exports.connectCliente = exports.usersConnect = void 0;
const userList_class_1 = require("../class/userList.class");
const user_class_1 = require("../class/user.class");
exports.usersConnect = new userList_class_1.UserList();
const connectCliente = (cliente, io) => {
    const user = new user_class_1.User(cliente.id);
    exports.usersConnect.add(user);
};
exports.connectCliente = connectCliente;
const disconnect = (cliente, io) => {
    cliente.on('disconnect', () => {
        exports.usersConnect.deleteUser(cliente.id);
        io.emit('users-activos', exports.usersConnect.getList());
    });
};
exports.disconnect = disconnect;
const configUser = (cliente, io) => {
    cliente.on('config-user', (payload, callback) => {
        exports.usersConnect.updateName(cliente.id, payload.nombre);
        io.emit('users-activos', exports.usersConnect.getList());
        callback({
            ok: true,
            mensaje: `user ${payload.nombre}, config.`
        });
    });
};
exports.configUser = configUser;
const getUsers = (cliente, io) => {
    cliente.on('get-users', () => {
        io.to(cliente.id).emit('users-active', exports.usersConnect.getList());
    });
};
exports.getUsers = getUsers;
const foro = (cliente, io) => {
    cliente.on('post', (payload) => {
        io.emit('post-nuevo', payload);
    });
};
exports.foro = foro;
