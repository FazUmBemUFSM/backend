import { Router } from 'express';
import { Request, Response } from 'express';
import institutionRouter from './routers/institution.router';

const router = Router();

router.use('/institutions', institutionRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
