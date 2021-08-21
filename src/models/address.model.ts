import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

interface IAddressAttributes extends Model {
    id: number;
    street: string;
    number: string;
    district: string;
    zip_code: string;
}

const Address = db.define<IAddressAttributes>('Address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Address;
