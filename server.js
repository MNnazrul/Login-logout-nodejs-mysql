const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const users = [];

app.set("view-engine", "ejs");
app.get("/", (req, res) => {
    const name = "john";
    res.render("index.ejs", { name });
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.post("/register", (req, res) => {});

app.listen(3000, () => console.log(`server running at 3000`));
