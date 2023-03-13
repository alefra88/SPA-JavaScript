import api from "../helpers/wp_api.js";

export function Title() {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = `
  <a href="${api.DOMAIN}">${api.NAME.toLocaleUpperCase()}</a>  
  `;
  return $h1;
}
