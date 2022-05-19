import bcryptjs from 'bcryptjs'
import generarJWT from '../helpers/jwt.js'
import { User } from '../models/User.js'

export const createUser = async (req, res) => {

  const { email, password, name } = req.body

  try {
    const user = User.build({ email, password, name })

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)
    const [_, token] = await Promise.all([user.save(), generarJWT(user.user_id, user.name)])
    res.json({
      ok: true,
      user,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}