import { Schema, model } from 'mongoose';


const misionCuatro = new Schema({

    id_user:{
        type: String,
        required: true
    },
    imgUser:{
        type: String,
        required: true
    },
    nameUser:{
        type: String,
        required: true
    },
    r1:{
        type: String
    },
    r2:{
        type: String
    },
    r3:{
        type: String
    },
    r4:{
        type: String
    }

});

export default model('Misión 4', misionCuatro);