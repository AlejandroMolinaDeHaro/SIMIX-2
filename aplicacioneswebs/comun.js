// Funciones comunes para todas las páginas

function comprobarSesion() {
  if (localStorage.getItem("logueado") === "true") {
    const cerrarLinks = document.querySelectorAll('.cerrar-sesion-link');
    const loginLinks = document.querySelectorAll('.login-link');
    
    cerrarLinks.forEach(el => el.style.display = "inline");
    loginLinks.forEach(el => el.style.display = "none");
  }
}

function cerrarSesion(e) {
  if (e) e.preventDefault();
  localStorage.removeItem("logueado");
  window.location.href = "login.html";
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', comprobarSesion);