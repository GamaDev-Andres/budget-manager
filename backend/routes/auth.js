import { Router } from 'express';
import { check } from 'express-validator';
import { loginUser } from '../controllers/auth.js';
import { validateFields } from '../middlewares/validate-fields.js';
const router = Router()

/* /api/auth */

router.post("/", [
  check("email", "El email es obligatorio").isEmail(),
  check("password", "La contraseña es obligatoria").notEmpty(),
], validateFields, loginUser)

export default router