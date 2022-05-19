import bcryptjs from 'bcryptjs';
import generarJWT from '../helpers/jwt.js';
import { User } from '../models/User.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {

    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(400).json({
        ok: false,
        errors: [{ msg: 'wrong email or password' }]
      });
    }
    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        errors: [{ msg: 'wrong email or password' }]
      });
    }

    const { name, user_id } = user
    const token = await generarJWT(user_id, name);

    res.json({
      ok: true,
      user: { name, user_id },
      token
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }

}
export const renovarToken = async (req, res) => {

  const { user } = req;

  if (!user) {
    return res.status(500).json({
      ok: false,
      errors: [{
        msg: 'there is not user in request.'
      }]
    })
  }
  try {
    const { name, user_id } = user
    const token = await generarJWT(user_id, name);
    res.json({
      ok: true,
      user: { name, user_id },
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{
        msg: 'token renew error'
      }]
    })
  }

}