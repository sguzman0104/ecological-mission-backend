import { Schema, model } from 'mongoose';


const misionCinco = new Schema({

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
    },
    r5:{
        type: String
    }

});

export default model('Misión 5', misionCinco);