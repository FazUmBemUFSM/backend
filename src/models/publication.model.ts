import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

import Institution from './institution.model';

interface IPublicationAttributes extends Model {
    id: number;
    title: string;
    content: string;
    status: string;
    temporary: Date;
    temporary_start_date: Date | null;
    temporary_end_date: Date | null;
    institution_id: number;
}

const Publication = db.define<IPublicationAttributes>('Publication', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('created', 'published', 'removed'),
        defaultValue: 'created',
    },
    temporary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    temporary_start_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    temporary_end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    institution_id: {
        type: DataTypes.INTEGER,
        references: { model: Institution, key: 'id' },
    },
});

export default Publication;
