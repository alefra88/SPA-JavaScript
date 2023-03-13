export function Loader() {
  const $loader = document.createElement("img");
  $loader.src =
    "https://raw.githubusercontent.com/alefra88/Proyectos-DOM-JavaScript/d8db6f6012761ba766fa5fd07692037dee898e51/assets/loader.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");
  return $loader;
}
