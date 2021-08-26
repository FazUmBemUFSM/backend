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
    temporary: Date,
    temporary_start_date: Date | null,
    temporary_end_date: Date | null,
    institution_id: number,
    publication_id?: number,
): Promise<any> => {
    if (!temporary) {
        temporary_start_date = null;
        temporary_end_date = null;
    }
    return Publication.create({
        id: publication_id,
        title,
        content,
        status,
        temporary,
        temporary_start_date,
        temporary_end_date,
        institution_id,
    });
};

export const destroyPublication = async (publication_id: number): Promise<any> => {
    return Publication.destroy({ where: { id: publication_id } });
};
