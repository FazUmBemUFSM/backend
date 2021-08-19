import { Router } from 'express';
import { createCurator, findAllCurators } from '../controllers/curator.controller';

const institutionRouter = Router();

institutionRouter.route('/').get(findAllCurators).post(createCurator);

export default institutionRouter;
