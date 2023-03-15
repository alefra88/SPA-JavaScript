import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  const d = document,
    $main = d.getElementById("main");
  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2> Secciòn del Buscador </h2>";
    // d.querySelector(".loader").style.display  = "none";
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2> Secciòn de Contacto </h2>";
    // d.querySelector(".loader").style.display = "none";
  } else {
    // $main.innerHTML = "<h2>Contenido</h2>";
    // console.log(`${api.POST}/${hash}`);
    await ajax({
      url: `${api.POST}/${hash}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
