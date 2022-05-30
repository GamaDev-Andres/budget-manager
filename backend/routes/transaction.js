import { Router } from 'express';
import { check } from 'express-validator';
import { createTransaction, deleteTransaction, getTransactions, updateTransaction } from '../controllers/transaction.js';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validateJWT.js';
const router = Router()

/* /api/transaction */
router.use(validateJWT)
router.get("/", getTransactions)
router.post("/", [
  check("value", "El valor debe ser tipo numero").custom(value => typeof value === "number"),
  check("value", "El valor debe ser mayor a 0").custom(value => value > 0),
  check("concept", "el concepto es obligatorio").isString().notEmpty(),
  check("category", "la categoria debe ser string").optional().isString(),
  check("date", "la fecha debe ser string y es obligatoria").isString(),
  check("type", "el tipo es incorrecto").custom(type => type === "ingreso" || type === "egreso"),
], validateFields, createTransaction)
router.delete("/:id", deleteTransaction)
router.put("/:id", [
  check("value", "El valor debe ser tipo numero").optional().custom(value => typeof value === "number"),
  check("value", "El valor debe ser mayor a 0").optional().custom(value => value > 0),
  check("concept", "el concepto es obligatorio").optional().isString().notEmpty(),
  check("category", "la categoria debe ser numerica").optional().isString(),
  check("date", "la fecha debe ser string y es obligatoria").optional().isString(),
  check("type", "el tipo no se puede actualizar").isEmpty(),
], validateFields, updateTransaction)

export default router