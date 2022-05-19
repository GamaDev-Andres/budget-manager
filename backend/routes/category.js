import { Router } from 'express';
import { check } from 'express-validator';

import { createCategory } from '../controllers/category.js';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validateJWT.js';
const router = Router()

/* /api/category */

router.use(validateJWT)
router.post("/", [
  check("name", "el name es obligatorio, debe ser string(max:100 caracteres)").isString().isLength({ min: 1, max: 100 }),
], validateFields, createCategory)


export default router