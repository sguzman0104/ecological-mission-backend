import mongoose  from 'mongoose';
import dotenv from 'dotenv';


class Connection {

    private uri: string;

    constructor() {
        dotenv.config();
        this.uri = process.env.URI || '';
    }

    async connect() {
        return await mongoose.connect(this.uri, { useUnifiedTopology: true, useNewUrlParser: true });
    }

}

export default new Connection().connect();