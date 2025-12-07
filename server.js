const express = require("express");
const app = express();

// API cộng
app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ result: a + b });
});

// API trừ
app.get("/sub", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ result: a - b });
});

// API nhân
app.get("/mul", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ result: a * b });
});

// API chia
app.get("/div", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
        res.json({ result: "Lỗi chia cho 0" });
    } else {
        res.json({ result: (a / b).toFixed(2) });
    }
});

// Chạy server
app.listen(3000, () => {
    console.log("API chạy tại http://localhost:3000");
});
