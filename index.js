import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://cat-fact.herokuapp.com/facts/random");
        res.render("index.ejs", { data: JSON.stringify(result.data)});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})