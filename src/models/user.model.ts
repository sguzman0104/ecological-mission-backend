import {Schema, model } from 'mongoose';
import { IUser } from '../configs/interfaces/user.interface';


const user = new Schema({

    id_Socket:{
        type: String
    },
    name:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String
    }
    
});

user.method('toJSON', function() {
    const object = this.toObject() as IUser;
    delete object.__v;
    delete object.password
    return object;
})

export default model('User',user);