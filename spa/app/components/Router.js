import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  const $posts = document.getElementById("posts");
  let { hash } = location;
  console.log(hash);

  $posts.innerHTML = null;

  if (!hash || hash === "#/") {
    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        document.querySelector(".loader").style.display = "none";
        $posts.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2> Secciòn del Buscador </h2>";
  } else if (hash === "#/contacto") {
    $posts.innerHTML = `<h2> Secciòn de Contacto </h2>`;
  } else {
    $posts.innerHTML = `<h2> Contenido del post seleccionado </h2>`;
  }
}
