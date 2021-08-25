/* eslint-disable @typescript-eslint/no-explicit-any */
import Publication from '../models/publication.model';
import { Model } from 'sequelize';

export const getAllPublications = async (): Promise<Model<any, any>[]> => {
    return Publication.findAll();
};

export const savePublication = async (
    title: string,
    content: string,
    status: string,
    institution_id: number,
    publication_id?: number,
): Promise<any> => {
    return Publication.create({ id: publication_id, title, content, status, institution_id });
};

export const destroyPublication = async (publication_id: number): Promise<any> => {
    return Publication.destroy({ where: { id: publication_id } });
};
