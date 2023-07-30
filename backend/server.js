import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"
import colors from "colors";

// configure dotenv
dotenv.config();

// connect database
connectDB();

// app object
const app = express();

// app PORT
const PORT = process.env.PORT || 8000;

// app middlewares
app.use(express.json());

// app routes
app.use('/api/auth', authRoute)

// app api
app.get('/', (req, res) => {
    res.send(`<h1 style="text-align: center">Welcome to the backend server!</h1>`);
})
app.get('*', (req, res) => {
    res.send(`<h1 style="text-align: center">Page not found!</h1>`);
})

// listen server
app.listen(PORT, () => {
    console.log(`\n🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂\n------------------------------------------------------------------------`) // used for decorating dev console
    console.log(`Happy coding with: ` + `${process.env.DEVELOPER_NAME}`.green.bold)
    console.log(`Backend server is running in ${process.env.DEV_MODE} mode on: ` + `http://localhost:${PORT}`.green.bold);
})