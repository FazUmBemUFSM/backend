import { Router } from 'express';
import { findAllInstitution } from '../controllers/institution.controller';

const institutionRouter = Router();

institutionRouter
    .route('/')
    .get(findAllInstitution)

export default institutionRouter;
