const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"));

let todos = []; 

app.get("/", (req, res) => {
    res.render("index", { todos });
});

app.post("/add", (req, res) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
