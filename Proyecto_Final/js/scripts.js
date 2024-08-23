let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    if (!isAuthenticated()) {
        window.location.href = '../html/login.html';
        return;
    }
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
    document.getElementById('total-carrito').textContent = total;
}

function isAuthenticated() {
    return sessionStorage.getItem('authenticated') === 'true';
}

function logout() {
    sessionStorage.removeItem('authenticated');
    window.location.href = '../html/index.html';
}