import { Request, Response } from 'express';
import { getAllInstitution } from '../services/institution.service';

export const findAllInstitution = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await getAllInstitution();

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
}