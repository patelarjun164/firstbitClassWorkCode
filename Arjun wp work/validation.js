userNameInput = document.getElementById("username")
passwordInput = document.getElementById("password")
unameErrorMessage = document.getElementById("uname-error-message")
passwordErrorMessage = document.getElementById("pw-error-message")
isFormValid = true;
userNameInput.addEventListener("blur", function () {
    if (userNameInput.value.trim() === "") {
        unameErrorMessage.innerHTML = "Enter username";
        unameErrorMessage.style.display = "block";
        document.getElementById("submit").setAttribute("disabled", true);
        document.getElementById("submit").style.cursor = "not-allowed";
    }
    else {
        unameErrorMessage.style.display = "none";
        document.getElementById("submit").setAttribute("disabled", false);
    }
})

passwordInput.addEventListener("blur", function () {
    if (passwordInput.value.trim() === "") {
        passwordErrorMessage.innerHTML = "Enter Password";
        passwordErrorMessage.style.display = "block";
        document.getElementById("submit").setAttribute("disabled", true);
        document.getElementById("submit").style.cursor = "not-allowed";
    }
    else if (passwordInput.value.trim().length < 7) {
        passwordErrorMessage.innerHTML = "Password length should be greater than 7!";
        passwordErrorMessage.style.display = "block";
        document.getElementById("submit").setAttribute("disabled", true);
        document.getElementById("submit").style.cursor = "not-allowed";
    }
    else {
        passwordErrorMessage.style.display = "none";
        document.getElementById("submit").setAttribute("disabled", false);
    }
})
