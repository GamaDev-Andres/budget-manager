import { Router } from 'express';
import { check } from 'express-validator';
import { createTransaction } from '../controllers/transaction.js';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validateJWT.js';
const router = Router()

/* /api/transaction */
router.use(validateJWT)
router.post("/", [
  check("value", "El valor debe ser tipo numero").custom(value => typeof value === "number"),
  check("value", "El valor debe ser mayor a 0").custom(value => value > 0),
  check("concept", "el concepto es obligatorio").isString().notEmpty(),
  check("category", "la categoria debe ser numerica").optional().isNumeric(),
  check("type", "el tipo es incorrecto").custom(type => type === "ingreso" || type === "egreso"),
], validateFields, createTransaction)


export default router