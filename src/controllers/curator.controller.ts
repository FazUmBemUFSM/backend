import { Request, Response } from 'express';
import { getAllCurators, saveCurator } from '../services/curator.service';
import { encrypt } from '../utils/crypt';

export const findAllCurators = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await getAllCurators();

        return res.status(200).json({
            status: 'success',
            message: 'All curators returned',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while find curators',
            payload: [err],
        });
    }
};

export const createCurator = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password } = req.body;

        const encryptedPassword = encrypt(password);

        const result = await saveCurator(name, email, String(encryptedPassword));

        return res.status(200).json({
            status: 'success',
            message: 'new curator created',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while creating new curator',
            payload: [err],
        });
    }
};
