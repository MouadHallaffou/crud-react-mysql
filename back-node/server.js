const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();
const PORT = 8000;
const db = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    database: 'crud_node_mysql',
    password: ''
});

// use cors to allow cross-origin requests
app.use(cors());
app.use(express.json());

// listes all posts
app.get("/api/posts", (req, res) => {
    db.query("SELECT * FROM posts", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
// create a new post
app.post("/api/post", (req, res) => {
    const { title, body } = req.body;
    db.query("INSERT INTO posts (title, body) VALUES (?, ?)", [title, body], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, title, body });
    });
});
// get post details 
app.get("/api/post/:id", (req, res) => {
    db.query("SELECT * FROM posts WHERE id = ?", [req.params.id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }  
        res.json(rows[0]);
    });
});

// edit post
app.put("/api/post/:id", (req, res) => {
    const { title, body } = req.body;
    db.query("UPDATE posts SET title=?, body=? WHERE id= ?", [title, body, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: req.params.id, title: title, body: body });
    });
});

// delete a post
app.delete("/api/post/:id", (req, res) => {
    db.query("DELETE FROM posts WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Post deleted successfully" });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});