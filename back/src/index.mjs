import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config.mjs';
import userRouter from './router/users.mjs';
import authRouter from './router/auth.mjs';
import plantsRouter from './router/plants.mjs';
import cors from 'cors';

const app = express()
const port = config.PORT;

app.use(cors());

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/plants', plantsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})