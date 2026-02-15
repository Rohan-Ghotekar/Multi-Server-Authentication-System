const connection = require("../util/db.js");

const addUserDao = async (user) => {
    const sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    const params = [user.username, user.password, user.email];

    try {
        const conn = await connection;
        const [result] = await conn.execute(sql, params);
        console.log(result);
        return result.affectedRows > 0;

    } catch (err) {
        console.log("Error:", err.message);
        return false;
    }
};

module.exports = { addUserDao };