// Base de datos de productos ECUs con imágenes
const productos = [
    {
        id: 1,
        nombre: "ECU Motor Ford F-150",
        marca: "ford",
        modelo: "F-150 2010-2020",
        descripcion: "Computadora de motor para Ford F-150. Compatible con versiones gasolina y diésel.",
        precio: 180,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        nombre: "ECU Motor Ford Fiesta Power",
        marca: "ford",
        modelo: "Fiesta Power 2008-2020",
        descripcion: "ECU reprogramada y diagnosticada. Mejora rendimiento y eficiencia del Fiesta Power.",
        precio: 120,
        imagen: "https://images.unsplash.com/photo-1590362891990-f8ddef7926bd?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        nombre: "ECU Motor Ford Fiesta Move",
        marca: "ford",
        modelo: "Fiesta Move 2010-2019",
        descripcion: "Computadora diagnosticada y optimizada para Fiesta Move. Funcionamiento probado.",
        precio: 130,
        imagen: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        nombre: "ECU Motor Ford Mustang",
        marca: "ford",
        modelo: "Mustang 2015-2023",
        descripcion: "Computadora original con garantía. Soporte técnico incluido.",
        precio: 250,
        imagen: "https://images.unsplash.com/photo-1605559424843-9e4c3ff86981?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        nombre: "ECU Motor Renault Duster",
        marca: "renault",
        modelo: "Duster 2012-2021",
        descripcion: "ECU diagnosticada para Renault Duster. Comprobado funcionamiento.",
        precio: 150,
        imagen: "https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        nombre: "ECU Motor Renault Sandero",
        marca: "renault",
        modelo: "Sandero 2014-2020",
        descripcion: "Computadora con certificado de funcionamiento. Envío rápido.",
        precio: 130,
        imagen: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        nombre: "ECU Motor Renault Mégane",
        marca: "renault",
        modelo: "Mégane 2016-2022",
        descripcion: "ECU original Renault. Garantía de 6 meses.",
        precio: 200,
        imagen: "https://images.unsplash.com/photo-1553882900-f2b6fc498375?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        nombre: "ECU Motor Luv Dmax",
        marca: "luv",
        modelo: "Dmax 2012-2021",
        descripcion: "Computadora diagnosticada para Luv Dmax. Motor sin fallas.",
        precio: 170,
        imagen: "https://images.unsplash.com/photo-1606611281537-130038073a84?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        nombre: "ECU Motor Luv D-Max 2.2",
        marca: "luv",
        modelo: "D-Max 2.2 2015-2023",
        descripcion: "ECU con prueba de funcionamiento. Incluye asesoría técnica.",
        precio: 190,
        imagen: "https://images.unsplash.com/photo-1605559424843-9e4c3ff86981?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        nombre: "ECU Motor Chevrolet Cruze",
        marca: "otros",
        modelo: "Cruze 2012-2020",
        descripcion: "Computadora Chevrolet certificada. Diagnosticada completamente.",
        precio: 140,
        imagen: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        nombre: "ECU Motor Honda Civic",
        marca: "otros",
        modelo: "Civic 2014-2022",
        descripcion: "ECU Honda original. Con garantía y soporte técnico.",
        precio: 160,
        imagen: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        nombre: "ECU Motor Toyota Corolla",
        marca: "otros",
        modelo: "Corolla 2013-2021",
        descripcion: "Computadora diagnosticada y reprogramada. Eficiencia probada.",
        precio: 145,
        imagen: "https://images.unsplash.com/photo-1550523506-83efbcecaaeb?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        nombre: "ECU Motor Nissan Altima",
        marca: "otros",
        modelo: "Altima 2015-2022",
        descripcion: "ECU original Nissan. Motor sin problemas de funcionamiento.",
        precio: 175,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
];

// Carrito
let carrito = [];

// Elementos del DOM
const productosGrid = document.getElementById('productosGrid');
const filtroMarca = document.getElementById('marca');
const filtroPrecio = document.getElementById('precio');
const filtroSearch = document.getElementById('buscar');
const btnCarrito = document.getElementById('btnCarrito');
const carritoModal = document.getElementById('carritoModal');
const contadorCarrito = document.getElementById('contadorCarrito');
const carritoItems = document.getElementById('carritoItems');
const totalCarrito = document.getElementById('totalCarrito');
const cerrarModal = document.querySelector('.cerrar');
const formularioContacto = document.getElementById('formularioContacto');
const btnContactarCarrito = document.getElementById('btnContactarCarrito');

// Funciones
function renderProductos(productosAMostrar = productos) {
    productosGrid.innerHTML = '';
    
    if (productosAMostrar.length === 0) {
        productosGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No se encontraron productos que coincidan con tus filtros</p>';
        return;
    }

    productosAMostrar.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/400x300?text=ECU+${encodeURIComponent(producto.modelo)}'">
            </div>
            <div class="producto-contenido">
                <div class="producto-marca">${obtenerNombreMarca(producto.marca)}</div>
                <div class="producto-nombre">${producto.nombre}</div>
                <div class="producto-descripcion">${producto.descripcion}</div>
                <div class="producto-modelo" style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">Modelo: ${producto.modelo}</div>
                <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
                <div class="producto-botones">
                    <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                    <button class="btn-detalles" onclick="mostrarDetalles(${producto.id})">📋 Detalles</button>
                </div>
            </div>
        `;
        productosGrid.appendChild(card);
    });
}

function obtenerNombreMarca(marca) {
    const marcas = {
        'ford': 'Ford',
        'renault': 'Renault',
        'luv': 'Luv Dmax',
        'otros': 'Otras Marcas'
    };
    return marcas[marca] || marca;
}

function filtrarProductos() {
    let productosFiltrados = productos;

    // Filtro por búsqueda
    const termino = filtroSearch.value.toLowerCase();
    if (termino) {
        productosFiltrados = productosFiltrados.filter(p => 
            p.nombre.toLowerCase().includes(termino) ||
            p.descripcion.toLowerCase().includes(termino) ||
            p.modelo.toLowerCase().includes(termino)
        );
    }

    // Filtro por marca
    const marca = filtroMarca.value;
    if (marca) {
        productosFiltrados = productosFiltrados.filter(p => p.marca === marca);
    }

    // Filtro por precio
    const rango = filtroPrecio.value;
    if (rango) {
        productosFiltrados = productosFiltrados.filter(p => {
            if (rango === '0-150') return p.precio <= 150;
            if (rango === '150-300') return p.precio > 150 && p.precio <= 300;
            if (rango === '300-500') return p.precio > 300 && p.precio <= 500;
            if (rango === '500+') return p.precio > 500;
            return true;
        });
    }

    renderProductos(productosFiltrados);
}

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const itemEnCarrito = carrito.find(item => item.id === productoId);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarCarrito();
    mostrarNotificacion('Producto agregado al carrito ✓');
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    actualizarCarrito();
}

function actualizarCarrito() {
    contadorCarrito.textContent = carrito.length;
    renderCarrito();
    guardarCarrito();
}

function renderCarrito() {
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<p style="text-align: center; color: #999;">Tu carrito está vacío</p>';
        totalCarrito.textContent = '0.00';
        return;
    }

    carritoItems.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <div class="carrito-item-info">
                <h4>${item.nombre}</h4>
                <p>$${item.precio.toFixed(2)} x ${item.cantidad}</p>
            </div>
            <button class="carrito-item-eliminar" onclick="eliminarDelCarrito(${item.id})">🗑️</button>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    totalCarrito.textContent = total.toFixed(2);
}

function mostrarDetalles(productoId) {
    const producto = productos.find(p => p.id === productoId);
    alert(`${producto.nombre}\n\nMarca: ${obtenerNombreMarca(producto.marca)}\nModelo: ${producto.modelo}\nDescripción: ${producto.descripcion}\nPrecio: $${producto.precio.toFixed(2)}\n\nContacta con nosotros para más información.`);
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 300;
        animation: slideIn 0.3s ease-out;
    `;
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        contadorCarrito.textContent = carrito.length;
    }
}

function generarMensajeWhatsApp() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos primero.');
        return;
    }

    let mensaje = '¡Hola! Me interesa comprar los siguientes ECUs:\n\n';
    carrito.forEach(item => {
        mensaje += `• ${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}\n`;
    });
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    mensaje += `\nTotal: $${total.toFixed(2)}\n\n¿Puedo realizar el pedido?`;

    const numeroWhatsApp = '584160453678';
    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, '_blank');
}

// Event Listeners
filtroMarca.addEventListener('change', filtrarProductos);
filtroPrecio.addEventListener('change', filtrarProductos);
filtroSearch.addEventListener('input', filtrarProductos);

btnCarrito.addEventListener('click', () => {
    carritoModal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    carritoModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === carritoModal) {
        carritoModal.style.display = 'none';
    }
});

btnContactarCarrito.addEventListener('click', generarMensajeWhatsApp);

formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = formularioContacto.children[0].value;
    const email = formularioContacto.children[1].value;
    const mensaje = formularioContacto.children[2].value;

    const numeroWhatsApp = '584160453678';
    const texto = `Mensaje desde la web:\n\nNombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`;
    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(enlace, '_blank');
    formularioContacto.reset();
    mostrarNotificacion('Mensaje enviado por WhatsApp ✓');
});

// Agregar animación de slide
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    renderProductos();
});
