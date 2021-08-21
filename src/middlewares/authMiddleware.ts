/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const { SECRET } = process.env;

export default (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            status: 'error',
            message: 'Unauthorized',
        });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        jwt.verify(token, SECRET as string);
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'error',
            message: err.message,
        });
    }
};
