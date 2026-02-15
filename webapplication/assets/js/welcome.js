const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    if (!username || !email) {
        window.location.href = "login.html";
    }

    document.getElementById("username").innerText = username;
    document.getElementById("email").innerText = email;

    function logout() {
        localStorage.clear();
        window.location.href = "login.html";
    }