/* eslint-disable @typescript-eslint/no-explicit-any */
import Institution from '../models/institution.model';
import { Model } from 'sequelize';
import { compare } from 'bcrypt';

export const getAllInstitutions = async (): Promise<Model<any, any>[]> => {
    return Institution.findAll();
};

export const saveInstitution = async (
    name: string,
    email: string,
    encryptedPassword: string,
    status: string,
    address_id: number,
): Promise<any> => {
    return Institution.create({ name, email, password: encryptedPassword, status, address_id });
};

export const checkInstitutionLogin = async (email: string, password: string): Promise<any> => {
    const result = await Institution.findAll({
        where: {
            email,
        },
    });

    const encryptedPassword = result[0];
    // achar um jeito para pegar o result[0].password que vem do banco

    if (compare(password, String(encryptedPassword))) {
        return {}; // retornar objeto com os dados
    } else {
        return null;
    }
};
