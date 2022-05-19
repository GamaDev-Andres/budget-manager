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

    const token = await generarJWT(user.user_id);
    res.json({
      ok: true,
      user,
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