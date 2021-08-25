import { Request, Response } from 'express';
import { destroyPublication, getAllPublications, savePublication } from '../services/publication.service';

export const findAllPublications = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await getAllPublications();

        return res.status(200).json({
            status: 'success',
            message: 'All publications returned',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while find publications',
            payload: [err],
        });
    }
};

export const createPublication = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, content, status, institution_id } = req.body;

        const result = await savePublication(title, content, status, institution_id);

        return res.status(201).json({
            status: 'success',
            message: 'New publication created',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while creating new publication',
            payload: [err],
        });
    }
};

export const updatePublication = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, content, status, institution_id } = req.body;

        const { publicationId } = req.params;

        await destroyPublication(Number(publicationId));

        const result = await savePublication(title, content, status, institution_id);

        return res.status(200).json({
            status: 'success',
            message: 'Publication updated',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while updating publication',
            payload: [err],
        });
    }
};

export const deletePublication = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { publicationId } = req.params;

        const result = await destroyPublication(Number(publicationId));

        return res.status(200).json({
            status: 'success',
            message: 'Publication deleted',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while destroying publication',
            payload: [err],
        });
    }
};
