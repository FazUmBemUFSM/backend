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
    institution_id?: number,
): Promise<any> => {
    return Institution.create({ id: institution_id, name, email, password: encryptedPassword, status, address_id });
};

export const destroyInstitution = async (institution_id: number): Promise<any> => {
    return Institution.destroy({ where: { id: institution_id } });
};

export const checkInstitutionLogin = async (email: string, password: string): Promise<any> => {
    const result = await Institution.findAll({
        where: {
            email,
        },
    });

    if (result.length > 0) {
        const { id, name } = result[0];
        const encryptedPassword = result[0].password;

        if (compare(password, String(encryptedPassword))) {
            return {
                id,
                name,
            };
        }
    } else {
        return null;
    }
};
