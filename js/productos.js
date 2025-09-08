let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`${nombre} agregado al carrito 🛒`);
}

document.querySelectorAll(".producto").forEach((productoDiv) => {
    const nombre = productoDiv.querySelector("h3").textContent;
    const precioTexto = productoDiv.querySelector("p:nth-of-type(2)").textContent;
    
    const precio = parseInt(precioTexto.replace("$", "").replace(".", "").trim());

    const boton = productoDiv.querySelector(".agregar");
    boton.addEventListener("click", () => {
        agregarAlCarrito(nombre, precio);
    });
});
