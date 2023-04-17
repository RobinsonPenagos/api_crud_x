import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('company', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Conexion exitosa a mysql.');
} catch (error) {
  console.error('No se establecio la conexion a la db:', error);
}

export default sequelize;