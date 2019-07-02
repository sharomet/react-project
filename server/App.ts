import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import mongoose from 'mongoose'

import config from './config/config.json'
import { Routes } from './routes/Routes'

class App {
    public app: express.Application;
    public route: Routes = new Routes();
    public mongoUrl: string = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();     
        this.route.index(this.app);
        this.app.use('*', (req, res) => {
            res.sendFile(path.join(__dirname, config.pathToClient + 'index.html'));
        });
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, config.pathToClient)));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;