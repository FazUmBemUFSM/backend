import { Router } from 'express';
import { createAddress, deleteAddress, findAllAddresses, updateAddress } from '../controllers/address.controller';

const AddressRouter = Router({ mergeParams: true });

AddressRouter.route('/').get(findAllAddresses).post(createAddress);

AddressRouter.route('/:addressId').put(updateAddress).delete(deleteAddress);

export default AddressRouter;
