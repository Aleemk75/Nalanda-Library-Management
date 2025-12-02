import { expressMiddleware } from '@apollo/server/express4';
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./configs/db.js";
import { createGraphQLServer, graphqlContext } from './graphQL/index.js';
// RestAPI routes
import authRouter from "./routes/auth.route.js"
import bookRouter from "./routes/book.route.js"
import borrowRouter from "./routes/borrow.route.js"
import reportRouter from "./routes/report.route.js"

dotenv.config()

//DB Connection
connectDB();

async function startServer() {
  const app = express();

  // ✅ Global middleware
  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true
  }));

  // ✅ Body parser middleware - MUST be before routes
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/test', (req, res) => {
    res.send("ok");
  })

  // REST API routes
  app.use('/api/auth', authRouter);
  app.use('/api/books', bookRouter);
  app.use('/api/borrows', borrowRouter);
  app.use('/api/reports', reportRouter);

  // Initialize GraphQL Server
  const graphqlServer = await createGraphQLServer();

  // ✅ GraphQL endpoint - middleware is already applied globally above
  app.use(
    '/graphql',
    cors({
      origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
      credentials: true
    }),
    express.json(),
    expressMiddleware(graphqlServer, {
      context: graphqlContext,
    })
  );

  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
    console.log(`GraphQL → http://localhost:${port}/graphql`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});