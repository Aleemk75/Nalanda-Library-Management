import express from 'express';
import {
    getActiveMembers,
    getBookAvailability,
    getMostBorrowedBooks,
    getOverdueBooks
} from '../controllers/report.controller.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';
import { authorizeRole } from '../middlewares/role.middleware.js';

const router = express.Router();

// All report routes are Admin only
router.get(
    '/most-borrowed-books',
    authenticateUser,
    authorizeRole('Admin'),
    getMostBorrowedBooks
);

router.get('/active-members', authenticateUser, authorizeRole('Admin'), getActiveMembers);

router.get(
    '/book-availability',
    authenticateUser,
    authorizeRole('Admin'),
    getBookAvailability
);

router.get('/overdue-books', authenticateUser, authorizeRole('Admin'), getOverdueBooks);

export default router;