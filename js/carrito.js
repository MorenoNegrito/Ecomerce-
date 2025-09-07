// carrito.js

// Mostrar carrito si existe en la página
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = carrito.reduce((acc, item) => acc + item.precio, 0);

document.addEventListener("DOMContentLoaded", mostrarCarrito);

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito(); // solo funciona si existe el contenedor
  alert(nombre + " agregado al carrito");
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  if (!lista) return; // si no existe, salir
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  const totalElem = document.getElementById("total");
  if(totalElem) totalElem.textContent = total;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}
