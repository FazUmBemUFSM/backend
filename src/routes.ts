import { Router } from 'express';
import { Request, Response } from 'express';
import authRouter from './routers/auth.router';
import institutionRouter from './routers/institution.router';
import curatorRouter from './routers/curator.router';

const router = Router();

router.use('/institutions', institutionRouter);
router.use('/curators', curatorRouter);
router.use('/auth', authRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
