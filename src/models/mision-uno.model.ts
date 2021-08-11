import { Schema, model } from 'mongoose';


const misionUno = new Schema({

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
    }

});

export default model('Misión 1', misionUno);