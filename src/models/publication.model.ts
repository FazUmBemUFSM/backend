import { DataTypes } from 'sequelize';
import db from '../config/database';

import Institution from './institution.model';

const Publication = db.define('Publication', {
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
    institution_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Institution', key: 'id' },
    },
});

export default Publication;
