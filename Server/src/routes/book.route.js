import express from 'express';
import {
    addBook,
    deleteBook,
    getBookById,
    getBooks,
    updateBook
} from '../controllers/book.controller.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';
import { authorizeRole } from '../middlewares/role.middleware.js';

import {
    bookUpdateValidation,
    bookValidation,
    objectIdValidation,
    paginationValidation,
    validate
} from '../utils/validators.js';

const router = express.Router();

// Public routes
router.get('/', paginationValidation, validate, getBooks);
router.get('/:id', objectIdValidation, validate, getBookById);

// Protected routes - Admin only can access
router.post(
    '/',
    authenticateUser,
    authorizeRole('Admin'),
    bookValidation,
    validate,
    addBook
);

router.patch(
    '/:id',
    authenticateUser,
    authorizeRole('Admin'),
    objectIdValidation,
    bookUpdateValidation,
    validate,
    updateBook
);

router.delete(
    '/:id',
    authenticateUser,
    authorizeRole('Admin'),
    objectIdValidation,
    validate,
    deleteBook
);

export default router;