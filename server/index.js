import express  from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-Parser';

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({extended: true}));

app.use(cors());

app.use('/',Routes);


dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password)

app.listen(8080, ()=>{
    console.log('server is created')
})