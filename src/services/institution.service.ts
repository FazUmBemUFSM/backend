import Institution from '../models/institution.model';
import { Model } from 'sequelize';

export const getAllInstitution = async (): Promise<Model<any, any>[]> => {
  return Institution.findAll();
}
