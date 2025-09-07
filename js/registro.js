// Esperamos a que se cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    const formRegistro = document.getElementById("formRegistro");

    if (formRegistro) {
        formRegistro.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const contrasena = document.getElementById("contrasena").value.trim();
            const contrasena2 = document.getElementById("contrasena2").value.trim();

            // Validar contraseñas
            if (contrasena !== contrasena2) {
                alert("Las contraseñas no coinciden");
                return;
            }

            // Guardar en localStorage
            localStorage.setItem("usuarioEmail", email);
            localStorage.setItem("usuarioContrasena", contrasena);
            localStorage.setItem("sesionIniciada", "true");

            alert("Registro exitoso. Sesión iniciada.");

            // Redirigir a la página principal
            window.location.href = "index.html";
        });
    }
});

// ESTE SOLO DEBE ENLAZARSE EN "registro.html", SIRVE PARA VALIDAR DATOS Y CREAR LA CUENTA