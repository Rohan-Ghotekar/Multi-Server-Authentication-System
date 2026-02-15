const { validateUserDao } = require("../../../dao/loginDao");


async function validateUser(username, password) {

    const users = await validateUserDao(username);

    if (users === null) {
        return { success: false, message: "User not found" };
    }

    if (users.password !== password) {
        return { success: false, message: "Invalid password" };
    }

    return {
        success: true,
        username: username,
        email: users.email,
    };
}

module.exports = { validateUser };
