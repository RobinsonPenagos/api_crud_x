

import { Sequelize } from 'sequelize';
import {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './config'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {

  host: DB_HOST,
  dialect: 'mysql',
  port: DB_PORT
});

try {
  sequelize.authenticate();
  console.log('Conexion exitosa a mysql.');
} catch (error) {
  console.error('No se establecio la conexion a la db:', error);
}

export default sequelize;