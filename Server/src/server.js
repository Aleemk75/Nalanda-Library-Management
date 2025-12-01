import express from "express"
import  dotenv from "dotenv"
import connectDB from "./configs/db.js";
dotenv.config()
const app = express();
import authRouter from "./routes/auth.route.js"
import bookRouter from "./routes/book.route.js"
import borrowRouter from "./routes/borrow.route.js"
import reportRouter from "./routes/report.route.js"
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test' , (req,res)=>{
    res.send("ok");
})

app.use('/api/auth', authRouter);
app.use('/api/books', bookRouter);
app.use('/api/borrows', borrowRouter);
app.use('/api/reports', reportRouter);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});