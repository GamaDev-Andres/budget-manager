import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const validateJWT = async (req, res, next) => {

  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      errors: [{
        msg: 'there is not token'
      }]

    });
  }
  try {
    const { id } = jwt.verify(token, process.env.FRASE_SECRETA);
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        ok: false,
        errors: [{
          msg: 'there is not user with that id'
        }]
      })
    }

    req.user = user;
    next();

  } catch (error) {

    console.log(error);
    res.status(401).json({
      ok: false,
      errors: [{
        msg: 'Token is invalid'
      }]
    })
  }

}
