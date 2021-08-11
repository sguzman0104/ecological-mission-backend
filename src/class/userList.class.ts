import { User } from './user.class';

export class UserList {

    private list: User[];

    constructor() {
        this.list = [];
    }

    public add( user: User ) {
        this.list.push(user);
        return user
    }

    public updateName( id: string, name: string ) {
        for (let  user of this.list) {
           if (user.id === id) {
               user.name = name;
               break;
           }
        }
    }

    public getList() {
        return this.list.filter( user => user.name !== 'sin-nombre' );
    }

    public getUser( id: string ) {
        return this.list.find( user => user.id === id );
    }

    public deleteUser( id: string ) {
        const tempUser = this.getUser( id );
        this.list = this.list.filter( user => user.id !== id );
        return tempUser
    }
    
}