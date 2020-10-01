import express from "express"
import dotenv from "dotenv"



const app = express();
dotenv.config();


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello")
});




app.listen(port, () => console.log(`Listening on ${port}`));