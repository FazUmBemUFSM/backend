import { Router } from 'express';
import { createCurator, findAllCurators, updateCurator, deleteCurator } from '../controllers/curator.controller';

const institutionRouter = Router({ mergeParams: true });

institutionRouter.route('/').get(findAllCurators).post(createCurator);

institutionRouter.route('/:curatorId').put(updateCurator).delete(deleteCurator);

export default institutionRouter;
