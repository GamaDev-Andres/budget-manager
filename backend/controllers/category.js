import { Category } from '../models/Category.js'

export const createCategory = async (req, res) => {

  const { name } = req.body
  const { user_id } = req.user
  try {
    const existCategory = await Category.findOne({ where: { user_id, name } })
    if (existCategory) {
      return res.status(400).json({
        ok: false,
        errors: [{ msg: "Ya tienes una categoria con este nombre" }]
      })
    }
    const category = await Category.create({ name, user_id })

    res.json({
      ok: true,
      category
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}