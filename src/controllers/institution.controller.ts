import { Request, Response } from 'express';
import { getAllInstitutions, saveInstitution, destroyInstitution } from '../services/institution.service';
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

export const updateInstitution = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password, status, address_id } = req.body;

        const { institutionId } = req.params;

        const encryptedPassword = encrypt(password);

        await destroyInstitution(Number(institutionId));

        const result = await saveInstitution(
            name,
            email,
            String(encryptedPassword),
            status,
            address_id,
            Number(institutionId),
        );

        return res.status(200).json({
            status: 'success',
            message: 'Institution updated',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while updating new institution',
            payload: [err],
        });
    }
};

export const deleteInstitution = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { institutionId } = req.params;

        const result = await destroyInstitution(Number(institutionId));

        return res.status(200).json({
            status: 'success',
            message: 'Institution deleted',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while destroying institution',
            payload: [err],
        });
    }
};
