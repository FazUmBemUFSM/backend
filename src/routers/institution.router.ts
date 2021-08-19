import { Router } from 'express';
import { createInstitution, findAllInstitutions } from '../controllers/institution.controller';

const institutionRouter = Router();

institutionRouter.route('/').get(findAllInstitutions).post(createInstitution);

export default institutionRouter;
