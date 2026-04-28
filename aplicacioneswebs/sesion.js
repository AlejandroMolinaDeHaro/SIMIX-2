// Cerrar sesión - volver a página principal
function cerrarSesion(e) {
  if (e) e.preventDefault();
  localStorage.removeItem("logueado");
  window.location.href = "index.html";
}

// Mostrar botón cerrar sesión si está logueado
if (localStorage.getItem("logueado") === "true") {
  document.querySelectorAll(".cerrar-sesion").forEach(el => el.style.display = "inline");
  document.querySelectorAll(".login-link").forEach(el => el.style.display = "none");
}