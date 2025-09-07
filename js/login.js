document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");
    const mensajeError = document.getElementById("Mensaje-error-login");

    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();

            const correoIngresado = document.getElementById("correo").value.trim();
            const contrasenaIngresada = document.getElementById("contrasena").value.trim();

            // Obtener credenciales almacenadas en localStorage
            const correoGuardado = localStorage.getItem("usuarioEmail");
            const contrasenaGuardada = localStorage.getItem("usuarioContrasena");

            // Validación
            if (correoIngresado === correoGuardado && contrasenaIngresada === contrasenaGuardada) {
                // Guardamos que la sesión está activa
                localStorage.setItem("sesionIniciada", "true");

                alert("Inicio de sesión exitoso");
                window.location.href = "index.html"; // Redirige a home
            } else {
                mensajeError.textContent = "Correo o contraseña incorrectos. Intenta de nuevo.";
            }
        });
    }
});
// ESTE ARCHIVO SE DEBE DEJAR UNICAMENTE EN "login.js" YA QUE, EN CASO DE CERRAR SESIÓN
// Y DESEAR ENTRAR CON LA MISMA CUENTA CREADA, ESTÁ QUEDARÁ GUARDADA