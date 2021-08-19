/* eslint-disable @typescript-eslint/no-explicit-any */
import Curator from '../models/curator.model';
import { Model } from 'sequelize';
import { compare } from 'bcrypt';

export const getAllCurators = async (): Promise<Model<any, any>[]> => {
    return Curator.findAll();
};

export const saveCurator = async (name: string, email: string, encryptedPassword: string): Promise<any> => {
    return Curator.create({ name, email, password: encryptedPassword });
};

export const checkCuratorLogin = async (email: string, password: string): Promise<any> => {
    const result = await Curator.findAll({
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
