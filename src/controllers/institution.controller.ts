import { Request, Response } from 'express';
import { getAllInstitutions, saveInstitution } from '../services/institution.service';
import { encrypt } from '../utils/crypt';

export const findAllInstitutions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await getAllInstitutions();

        return res.status(200).json({
            status: 'success',
            message: 'All institutions returned',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while find institutions',
            payload: [err],
        });
    }
};

export const createInstitution = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password, status, address_id } = req.body;

        const encryptedPassword = encrypt(password);

        const result = await saveInstitution(name, email, String(encryptedPassword), status, address_id);

        return res.status(200).json({
            status: 'success',
            message: 'New institution created',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while creating new institution',
            payload: [err],
        });
    }
};
