
function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        document.getElementById("message").innerText = "Passwords match!";

        setTimeout(function() {
            window.location.href = "paginaV.html"; // Cambiar "nueva_pagina.html" por la URL de la página deseada
        }, 2000);
    } else {
        document.getElementById("message").innerText = "Passwords do not match!";
    }
}