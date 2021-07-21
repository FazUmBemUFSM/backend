import { DataTypes } from 'sequelize/types';
import db from '../config/database';

import User from './user.model';

const Curator = db.define('Curator', {
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
    user_id: {
        type: DataTypes.INTEGER,
        references: { model: User, key: 'id' },
    },
});

export default Curator;
