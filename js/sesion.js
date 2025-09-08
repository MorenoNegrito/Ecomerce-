document.addEventListener("DOMContentLoaded", () => {
    const sesionIniciada = localStorage.getItem("sesionIniciada");

    if (sesionIniciada === "true") {
        const email = localStorage.getItem("usuarioEmail");

        const navLinks = document.querySelector(".nav-links");

        if (navLinks) {
            const loginItem = navLinks.querySelector("a[href='login.html']");
            if (loginItem) loginItem.parentElement.remove();

            const registerItem = navLinks.querySelector("a[href='registro.html']")
            if (registerItem) registerItem.parentElement.remove();

            const liUsuario = document.createElement("li");
            liUsuario.innerHTML = `
                <span>👤 ${email}</span> 
                <button id="cerrarSesion" style="margin-left:10px; cursor:pointer;">Cerrar sesión</button>
            `;
            navLinks.appendChild(liUsuario);
        }

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