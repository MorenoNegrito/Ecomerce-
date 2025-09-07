document.addEventListener("DOMContentLoaded", () => {
    const sesionIniciada = localStorage.getItem("sesionIniciada");

    if (sesionIniciada === "true") {
        const email = localStorage.getItem("usuarioEmail");

        // Buscar en la barra de navegación dónde mostrar el usuario
        const navLinks = document.querySelector(".nav-links");

        if (navLinks) {
            // Eliminar opción de "Iniciar Sesión"
            const loginItem = navLinks.querySelector("a[href='login.html']");
            if (loginItem) loginItem.parentElement.remove();

            // Eliminar la opción de "Registro"
            const registerItem = navLinks.querySelector("a[href='registro.html']")
            if (registerItem) registerItem.parentElement.remove();

            // Agregar un texto con el email y botón para cerrar sesión
            const liUsuario = document.createElement("li");
            liUsuario.innerHTML = `
                <span>👤 ${email}</span> 
                <button id="cerrarSesion" style="margin-left:10px; cursor:pointer;">Cerrar sesión</button>
            `;
            navLinks.appendChild(liUsuario);
        }

        // Función de cerrar sesión
        const btnCerrar = document.getElementById("cerrarSesion");
        if (btnCerrar) {
            btnCerrar.addEventListener("click", () => {
                localStorage.setItem("sesionIniciada", "false");
                window.location.reload();
            });
        }
    }
});

// ESTE SOLO SE DEBE COLOCAR EN TODOS LOS HTML YA QUE MANTIENE LA SESIÓN ACTIVA Y ELIMINA LOS BOTONES
// "REGISTRO" E "INICAR SESIÓN" DE LA BARRA DE NAVEGACIÓN LUEGO DE CREADA LA CUENTA O INICIADA LA SESIÓN