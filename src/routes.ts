import { Router } from 'express';
import { Request, Response } from 'express';
import {
    findAllInstitution,
} from './controllers/institution.controller';

const router = Router();

router.route('/institutions').get(findAllInstitution)

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;