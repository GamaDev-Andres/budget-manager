import { Router } from 'express';
import { check } from 'express-validator';
import { loginUser, renovarToken } from '../controllers/auth.js';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validateJWT.js';
const router = Router()

/* /api/auth */

router.post("/", [
  check("email", "El email es obligatorio").isEmail(),
  check("password", "La contraseña es obligatoria").notEmpty(),
], validateFields, loginUser)
router.get('/', validateJWT, renovarToken);


export default router