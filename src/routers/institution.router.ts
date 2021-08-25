import { Router } from 'express';
import {
    createInstitution,
    findAllInstitutions,
    updateInstitution,
    deleteInstitution,
} from '../controllers/institution.controller';

const institutionRouter = Router({ mergeParams: true });

institutionRouter.route('/').get(findAllInstitutions).post(createInstitution);

institutionRouter.route('/:institutionId').put(updateInstitution).delete(deleteInstitution);

export default institutionRouter;
