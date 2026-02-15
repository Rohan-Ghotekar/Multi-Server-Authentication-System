function loginUser() {
    let button =document.getElementById("submit");
    button.disabled=true;

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password })
    };
    fetch("http://localhost:1234/webservice/login", options)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem("username", data.username);
                localStorage.setItem("email", data.email);
                // localStorage.setItem("role", data.role);
                window.location.href = "welcome.html";
            } else {
                button.disabled=false;
                alert(data.message);
            }
        });
    return false;
}

function registerUser(){
    let button =document.getElementById("submit");
    button.disabled=true;

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email=document.getElementById("email").value;

    const options={
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({username,password,email})
    }

    fetch("http://localhost:1234/webservice/register",options)
    .then(res=>res.json())
    .then(data=>{
        // console.log("ui:"+data)
        console.log("data.Success:"+data.success);
        if(data.success){
            alert(data.message+" ...Please Login..")
            window.location.href = "login.html";
        }else{
            button.disabled=false;
            alert(data.message)
        }
    });
    return false;
}

function logoutAlert(){
    alert("Logout Successfully.....");
}

