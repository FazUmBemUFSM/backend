import { getInstitutionRow } from '../models/institution.model';

export const getAllInstitution = async (): Promise<Response> => getInstitutionRow();
