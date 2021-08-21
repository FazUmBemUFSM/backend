import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

interface IInstitutionAttributes extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    status: string;
    address_id: string;
}

const Institution = db.define<IInstitutionAttributes>('Institution', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('registered', 'approved', 'rejected'),
        defaultValue: 'registered',
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Addresses', key: 'id' },
    },
});

export default Institution;
