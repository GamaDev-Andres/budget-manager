import { Router } from 'express';
import { check } from 'express-validator';
import { createUser } from '../controllers/user.js';
import { emailExiste } from '../helpers/db-validators.js';
import { validateFields } from '../middlewares/validate-fields.js';
const router = Router()

/* /api/user */

router.post("/", [
  check("email", "El email es obligatorio").isEmail(),
  check("email").custom(emailExiste),
  check("password", "La contraseña debe tener minimo 6 caracteres").isLength({ min: 6, max: 254 }),
  check("name", "El nombre es obligatorio").notEmpty(),
], validateFields, createUser)

export default router