import express from 'express';
import bp from 'body-parser';
import cors from 'cors';
import router from './routes.js';

const { json, urlencoded } = bp;

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', router);

export const start = (): void => {
    app.listen(3333, () => {
        console.log(`Server running on port 3333`);
    });
};