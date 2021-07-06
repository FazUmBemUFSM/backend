import { getInstitutionRow } from '../models/institution.model.js';


export const getAllInstitution = async (): Promise<Response> => getInstitutionRow();
