import { Router } from 'express';
import { check } from 'express-validator';

import { createCategory, deleteCategory, getCategories, updateCategory } from '../controllers/category.js';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validateJWT.js';
const router = Router()

/* /api/category */

router.use(validateJWT)
router.post("/", [
  check("name", "el name es obligatorio, debe ser string(max:100 caracteres)").isString().isLength({ min: 1, max: 100 }),
], validateFields, createCategory)

router.put("/:id", [check("name", "name no puede estar vacio").isString().isLength({ min: 1, max: 100 })], validateFields, updateCategory)
router.delete("/:id", deleteCategory)
router.get("/", getCategories)
export default router