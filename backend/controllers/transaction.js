import { Transaction } from '../models/Transaction.js'

export const createTransaction = async (req, res) => {

  const { value, type, concept, category = null } = req.body
  const { user_id } = req.user
  try {
    const transaction = await Transaction.create({ value, type, concept, category_id: category, user_id })

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