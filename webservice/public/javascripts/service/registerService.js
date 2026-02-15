const { addUserDao } = require("../../../dao/registerDao.js");

async function addUser(username, password, email) {

    const user = { username, password, email };
    const result = await addUserDao(user);
    console.log(result);
    if(result)
    return { success: true, message: "Registration Successfull.." };
    else
    return { success: false, message: "Username Not Available!!"}
}

module.exports = { addUser };