import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
  host: process.env.HOST_DB,
  dialect: 'mysql'
});
const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    console.log("Error iniciando db");
    process.exit(1);
  }

}
export default conectarDB