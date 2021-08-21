import { Model, DataTypes } from 'sequelize';
import db from '../config/database';

interface ICuratorAttributes extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}

const Curator = db.define<ICuratorAttributes>('Curator', {
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
});

export default Curator;
