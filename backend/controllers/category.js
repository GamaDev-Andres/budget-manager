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
export const updateCategory = async (req, res) => {

  const { name } = req.body
  const { id } = req.params
  const { user_id } = req.user
  try {
    const category = await Category.findOne({ where: { category_id: id } })
    if (!category) {
      return res.status(400).json({
        ok: false,
        errors: [{ msg: "No existe la categoria que desea eliminar" }]
      })
    }
    if (category.user_id !== user_id) {
      return res.status(403).json({
        ok: false,
        errors: [{ msg: "No tiene permiso de actualizar esta categoria" }]
      })
    }
    category.name = name
    await category.save()
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
export const deleteCategory = async (req, res) => {

  const { id } = req.params
  const { user_id } = req.user
  try {
    const category = await Category.findOne({ where: { category_id: id } })
    if (!category) {
      return res.status(400).json({
        ok: false,
        errors: [{ msg: "No existe la categoria que desea eliminar" }]
      })
    }
    if (category.user_id !== user_id) {
      return res.status(403).json({
        ok: false,
        errors: [{ msg: "No tiene permiso de eliminar esta categoria" }]
      })
    }
    await category.destroy()

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
export const getCategories = async (req, res) => {

  const { user_id } = req.user
  try {
    const categories = await Category.findAll({ where: { user_id }, attributes: ["name", "category_id"] })

    res.json({
      ok: true,
      categories
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}