# Nalanda Library Management System

A robust and scalable Library Management System backend built with Node.js, Express, and GraphQL. This system provides a comprehensive API for managing books, users, and library operations.

## 🚀 Features

-   **GraphQL API**: Flexible and efficient data querying using Apollo Server.
-   **Authentication**: Secure user authentication using JSON Web Tokens (JWT) and bcryptjs.
-   **Book Management**: CRUD operations for books.
-   **User Management**: Handling user roles and permissions.
-   **Database**: MongoDB integration using Mongoose for data modeling.
-   **Validation**: Request validation using `express-validator`.

## 🛠️ Tech Stack

-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **API Query Language**: [GraphQL](https://graphql.org/)
-   **GraphQL Server**: [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
-   **Database**: [MongoDB](https://www.mongodb.com/)
-   **ODM**: [Mongoose](https://mongoosejs.com/)
-   **Authentication**: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) & [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

## 📂 Project Structure

```
Server/src/
├── configs/        # Configuration files (DB, etc.)
├── controllers/    # REST API controllers (if applicable)
├── graphQL/        # GraphQL type definitions and resolvers
├── middlewares/    # Express middlewares (Auth, Validation)
├── models/         # Mongoose models (User, Book, etc.)
├── routes/         # Express routes
├── seeds/          # Database seeding scripts
├── utils/          # Utility functions
└── server.js       # Entry point of the application
```

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd "Nalanda Lib Managment"
    ```

2.  **Navigate to the Server directory**

    ```bash
    cd Server
    ```

3.  **Install dependencies**

    ```bash
    npm install
    ```

### ⚙️ Configuration

Create a `.env` file in the `Server` directory and add the following environment variables:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
JWT_ENCRYPTION_KEY=your_encription_key
```

### 🏃‍♂️ Running the Application

Start the development server:

```bash
npm run dev
```

The server will start, and you can access the GraphQL Playground (if enabled) or API endpoints at `http://localhost:4000` (or your configured port).

## 📝 API Documentation

The API is primarily exposed via GraphQL. You can explore the schema and test queries using the Apollo Sandbox or GraphQL Playground typically available at the server root or `/graphql` endpoint when running in development mode.

## 🔌 REST API Endpoints

In addition to GraphQL, the server provides the following REST API endpoints:

### Authentication
-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Login user.

### Books
-   `GET /api/books`: Get all books (Public).
-   `GET /api/books/:id`: Get book by ID (Public).
-   `POST /api/books`: Add a new book (Admin).
-   `PATCH /api/books/:id`: Update a book (Admin).
-   `DELETE /api/books/:id`: Delete a book (Admin).

### Borrows
-   `POST /api/borrows/:id`: Borrow a book (Member/Admin).
-   `PATCH /api/borrows/return/:id`: Return a book (Member/Admin).
-   `GET /api/borrows/my-history`: Get borrow history (Member/Admin).
-   `GET /api/borrows`: Get all borrowed books (Admin).

### Reports
-   `GET /api/reports/most-borrowed-books`: Get most borrowed books (Admin).
-   `GET /api/reports/active-members`: Get active members (Admin).
-   `GET /api/reports/book-availability`: Get book availability (Admin).
-   `GET /api/reports/overdue-books`: Get overdue books (Admin).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
