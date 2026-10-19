/* script.js - JavaScript compartido por todas las páginas */

// 1) Menú móvil: al pulsar ☰ añadimos/quitamos la clase "abierto" al menú
const boton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav ul');
boton.addEventListener('click', () => menu.classList.toggle('abierto'));

// 2) Año actual automático en el pie de página (no hay que editarlo cada año)
document.getElementById('anio').textContent = new Date().getFullYear();
