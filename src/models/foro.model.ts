import { Schema, model } from 'mongoose';


const foro = new Schema({

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
    description:{
        type: String
    },
    img:{
        type: String
    }

});

export default model('Foro', foro);