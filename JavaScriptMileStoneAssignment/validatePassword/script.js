document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const userEmail = document.querySelector("#user-email");
    const userPassword = document.querySelector("#user-password");
    const displayMsg = document.querySelector("#display-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

            if(userEmail.value.includes("@gmail.com") && userPassword.value.length >= 8){
                displayMsg.innerHTML = "Valid Email and Password...";
                displayMsg.style.color = "Green";
            } else {
                displayMsg.innerHTML = "Invalid Email or Password...";
                displayMsg.style.color = "Red";
            }
        })

    })















