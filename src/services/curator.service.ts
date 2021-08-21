/* eslint-disable @typescript-eslint/no-explicit-any */
import Curator from '../models/curator.model';
import { Model } from 'sequelize';
import { compare } from 'bcrypt';

export const getAllCurators = async (): Promise<Model<any, any>[]> => {
    return Curator.findAll();
};

export const saveCurator = async (
    name: string,
    email: string,
    encryptedPassword: string,
    curator_id?: number,
): Promise<any> => {
    return Curator.create({ id: curator_id, name, email, password: encryptedPassword });
};

export const destroyCurator = async (curator_id: number): Promise<any> => {
    return Curator.destroy({ where: { id: curator_id } });
};

export const checkCuratorLogin = async (email: string, password: string): Promise<any> => {
    const result = await Curator.findAll({
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
