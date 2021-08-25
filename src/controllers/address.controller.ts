import { Request, Response } from 'express';
import { destroyAddress, getAllAddresses, saveAddress } from '../services/address.service';

export const findAllAddresses = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await getAllAddresses();

        return res.status(200).json({
            status: 'success',
            message: 'All addresses returned',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while find addresses',
            payload: [err],
        });
    }
};

export const createAddress = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { street, number, district, zip_code } = req.body;

        const result = await saveAddress(street, number, district, zip_code);

        return res.status(201).json({
            status: 'success',
            message: 'New address created',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while creating new address',
            payload: [err],
        });
    }
};

export const updateAddress = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { street, number, district, zip_code } = req.body;

        const { addressId } = req.params;

        await destroyAddress(Number(addressId));

        const result = await saveAddress(street, number, district, zip_code, Number(addressId));

        return res.status(200).json({
            status: 'success',
            message: 'Address updated',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while updating address',
            payload: [err],
        });
    }
};

export const deleteAddress = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { addressId } = req.params;

        const result = await destroyAddress(Number(addressId));

        return res.status(200).json({
            status: 'success',
            message: 'Address deleted',
            payload: result,
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message || 'Error while destroying address',
            payload: [err],
        });
    }
};
