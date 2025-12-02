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
```

### 🏃‍♂️ Running the Application

Start the development server:

```bash
npm run dev
```

The server will start, and you can access the GraphQL Playground (if enabled) or API endpoints at `http://localhost:4000` (or your configured port).

## 📝 API Documentation

The API is primarily exposed via GraphQL. You can explore the schema and test queries using the Apollo Sandbox or GraphQL Playground typically available at the server root or `/graphql` endpoint when running in development mode.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
