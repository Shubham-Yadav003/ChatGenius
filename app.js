import morgan from 'morgan' //shows logs
import express from 'express'
import connect from './db/db.js'
import userRoutes from './routes/user.routes.js'
connect();

const app = express();

app.use(morgan('dev')); //shows logs 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.get('/', (req,res)=>{
    res.send('hello world!');
})

export default app;