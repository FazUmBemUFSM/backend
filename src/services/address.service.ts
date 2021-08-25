/* eslint-disable @typescript-eslint/no-explicit-any */
import Address from '../models/address.model';
import { Model } from 'sequelize';

export const getAllAddresses = async (): Promise<Model<any, any>[]> => {
    return Address.findAll();
};

export const saveAddress = async (
    street: string,
    number: string,
    district: string,
    zip_code: string,
    address_id?: number,
): Promise<any> => {
    return Address.create({ id: address_id, street, number, district, zip_code });
};

export const destroyAddress = async (address_id?: number): Promise<any> => {
    return Address.destroy({ where: { id: address_id } });
};
