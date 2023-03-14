export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <span>-</span>
  <a href="#search">Búsqueda</a>
  <span>-</span>
  <a href="#contacto">Contacto</a>
  <span>-</span>
  <a href="https://github.com/alefra88" target="_blank" rel="noopener">About Me</a>
  `;
  return $menu;
}
