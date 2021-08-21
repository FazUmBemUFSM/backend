import { Request, Response } from 'express';
import { getAllCurators, saveCurator, destroyCurator } from '../services/curator.service';
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
            message: 'New curator created',
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

export const updateCurator = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password } = req.body;

        const { curatorId } = req.params;

        const encryptedPassword = encrypt(password);

        await destroyCurator(Number(curatorId));

        const result = await saveCurator(name, email, String(encryptedPassword), Number(curatorId));

        return res.status(200).json({
            status: 'success',
            message: 'Curator updated',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while updating curator',
            payload: [err],
        });
    }
};

export const deleteCurator = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { curatorId } = req.params;

        const result = await destroyCurator(Number(curatorId));

        return res.status(200).json({
            status: 'success',
            message: 'Curator deleted',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while destroying curator',
            payload: [err],
        });
    }
};
