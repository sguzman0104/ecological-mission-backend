import mongoose from 'mongoose';


export interface IUser extends mongoose.Document {
    id_socket: string;
    name: string;
    email: string;
    password?: string;
}