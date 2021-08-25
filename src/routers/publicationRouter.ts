import { Router } from 'express';
import {
    createPublication,
    deletePublication,
    findAllPublications,
    updatePublication,
} from '../controllers/publication.controller';

const publicationRouter = Router({ mergeParams: true });

publicationRouter.route('/').get(findAllPublications).post(createPublication);

publicationRouter.route('/:publicationId').put(updatePublication).delete(deletePublication);

export default publicationRouter;
