import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { checkCuratorLogin } from '../services/curator.service';
import { checkInstitutionLogin } from '../services/institution.service';

const { SECRET } = process.env;

export const login = async (req: Request, res: Response): Promise<Response> => {
    const [, hash] = (req.headers.authorization || '').split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

    let token = null;

    try {
        const institutions = await checkInstitutionLogin(email, password);
        if (institutions == null) {
            const curator = await checkCuratorLogin(email, password);

            if (curator == null)
                return res.status(401).json({
                    status: 'error',
                    message: 'Error while login',
                    payload: { auth: false, token: null },
                });

            token = jwt.sign({ data: curator }, SECRET as string);
        }

        token = jwt.sign({ data: institutions }, SECRET as string);

        return res.status(200).json({
            status: 'success',
            message: 'Login successfully',
            payload: { auth: true, token },
        });
    } catch (err) {
        return res.status(401).json({
            status: 'error',
            message: err.message || 'Error while login',
            payload: [err],
        });
    }
};

export const logout = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({
        status: 'success',
        message: 'success logout',
        payload: { auth: false, token: null },
    });
};
