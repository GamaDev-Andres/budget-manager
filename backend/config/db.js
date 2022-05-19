import '../models/Category.js';
import '../models/Transaction.js';
import "../models/User.js"
import { sequelize } from './sequelize.js';

const conectarDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    console.log("Error iniciando db");
    process.exit(1);
  }

}
export default conectarDB