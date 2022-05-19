import { Category } from '../models/Category.js'
import { Transaction } from '../models/Transaction.js'

export const createTransaction = async (req, res) => {

  const { value, type, concept, category = null } = req.body
  const { user_id } = req.user
  try {
    const transaction = await Transaction.create({ value, type, concept, category_id: category, user_id })
    const categoryObj = await Category.findOne({ where: { category_id: transaction.category_id }, attributes: ["name", "category_id"] })
    const transactionResponse = { ...transaction.toJSON(), category: categoryObj || null }
    delete transactionResponse.category_id
    res.json({
      ok: true,
      transaction: transactionResponse
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}
export const deleteTransaction = async (req, res) => {

  const { id } = req.params
  const { user_id } = req.user
  try {

    const transaction = await Transaction.findOne({ where: { transaction_id: id } })
    if (transaction.user_id !== user_id) {
      return res.status(403).json({
        ok: false,
        errors: [{ msg: "No tiene permiso de eliminar esta transaccion." }]
      })
    }
    await transaction.destroy()
    res.json({
      ok: true,
      transaction
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}
export const updateTransaction = async (req, res) => {

  const { id } = req.params
  const { user_id } = req.user
  try {

    const transaction = await Transaction.findOne({ where: { transaction_id: id } })
    if (transaction.user_id !== user_id) {
      return res.status(403).json({
        ok: false,
        errors: [{ msg: "No tiene permiso de actualizar esta transaccion." }]
      })
    }
    transaction.set({ ...req.body })
    const [_, category] = await Promise.all([transaction.save(), Category.findOne({ where: { category_id: transaction.category_id }, attributes: ["name", "category_id"] })])
    const transactionResponse = { ...transaction.toJSON(), category: category || null }
    delete transactionResponse.category_id
    res.json({
      ok: true,
      transaction: transactionResponse
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}
export const getTransactions = async (req, res) => {

  const { user_id } = req.user
  try {

    const transactions = await Transaction.findAll({
      where: { user_id },
      attributes: {
        exclude: ['category_id', 'updatedAt', 'user_id']
      },
      include: {
        model: Category,
        as: "category",
        attributes: {
          exclude: ["user_id"]
        },
      }
    })

    res.json({
      ok: true,
      transactions
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      errors: [{ msg: "Server error" }]
    })
  }
}