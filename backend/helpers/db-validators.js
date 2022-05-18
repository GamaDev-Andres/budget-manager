import { User } from '../models/User.js';

export const emailExiste = async (email = '') => {

  const existeEmail = await User.findOne({ where: { email } });
  if (existeEmail) {
    throw new Error(`El email: ${email}, ya está registrado`);
  }
}
