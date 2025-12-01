import express from 'express';
import {
    borrowBook,
    getAllBorrowedBooks,
    getMyBorrowedBooksHistory,
    returnBook
} from '../controllers/borrow.controller.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';
import { authorizeRole } from '../middlewares/role.middleware.js ';
import { objectIdValidation, validate } from '../utils/validators.js';

const router = express.Router();

// Member routes
router.post(
    '/:id',
    authenticateUser,
    authorizeRole('Member', 'Admin'),
    objectIdValidation,
    validate,
    borrowBook
);

router.patch(
    '/return/:id',
    authenticateUser,
    authorizeRole('Member', 'Admin'),
    objectIdValidation,
    validate,
    returnBook
);

router.get(
    '/my-history',
    authenticateUser,
    authorizeRole('Member', 'Admin'),
   getMyBorrowedBooksHistory
);

// Admin routes
router.get('/', authenticateUser, authorizeRole('Admin'), getAllBorrowedBooks);

export default router;