import socketIO, { Socket } from 'socket.io';
import { UserList } from '../class/userList.class';
import { User } from '../class/user.class';


export const usersConnect = new UserList();

export const connectCliente = ( cliente: Socket, io: socketIO.Server ) => {

    const user = new User( cliente.id );
    usersConnect.add( user );

}

export const disconnect = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('disconnect', () => {
        usersConnect.deleteUser( cliente.id );
        io.emit('users-activos', usersConnect.getList()  );
    });

}

export const configUser = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('config-user', (  payload: { nombre: string }, callback: Function  ) => {
        usersConnect.updateName( cliente.id, payload.nombre );
        io.emit('users-activos', usersConnect.getList()  );
        callback({
            ok: true,
            mensaje: `user ${ payload.nombre }, config.`
        });
    });

}

export const getUsers = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('get-users', () => {
        io.to(cliente.id).emit('users-active', usersConnect.getList());
    });

}

export const foro = ( cliente: Socket, io: socketIO.Server ) => {

    cliente.on('post', ( payload: { de: string, cuerpo: {id_user: string, description: string, img: File}})=>{
        io.emit('post-nuevo', payload);
    });

}