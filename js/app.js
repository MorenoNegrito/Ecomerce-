document.addEventListener("DOMContentLoaded", function () {
    console.log("El script se ha cargado correctamente."); // Verifica si el JS se ejecuta correctamente

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            setTimeout(() => {
                form.reset(); // Limpia el formulario después de enviarlo
                console.log("Formulario reseteado.");
            }, 500); // Retraso para asegurar que el envío se realice
        });
    }
});