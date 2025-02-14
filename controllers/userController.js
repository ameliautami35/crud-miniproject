const db = require('../config/db');

exports.getUsers = async (req, res) => {
    try {
        const [users] = await db.query("SELECT * FROM users");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const [user] = await db.query("SELECT * FROM users WHERE id = ?", [req.params.id]);
        if (user.length === 0) return res.status(404).json({ message: "User tidak ditemukan" });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        await db.query("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", [name, email, age]);
        res.status(201).json({ message: "User berhasil ditambahkan" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        await db.query("UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?", [name, email, age, req.params.id]);
        res.json({ message: "User berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await db.query("DELETE FROM users WHERE id = ?", [req.params.id]);
        res.json({ message: "User berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
