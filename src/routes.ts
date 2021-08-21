import { Router } from 'express';
import { Request, Response } from 'express';
import authRouter from './routers/auth.router';
import institutionRouter from './routers/institution.router';
import curatorRouter from './routers/curator.router';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.use('/institutions', authMiddleware, institutionRouter);
router.use('/curators', authMiddleware, curatorRouter);
router.use('/auth', authRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
