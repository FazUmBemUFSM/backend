import express from 'express';
import bp from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import router from './routes';

const { json, urlencoded } = bp;

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api', router);

export const start = (): void => {
    const port = process.env.PORT;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};
