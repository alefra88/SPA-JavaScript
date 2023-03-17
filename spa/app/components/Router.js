import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./contactForm.js";
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
    const urlSearch = new URLSearchParams(window.location.hash.slice(8));
    const search = urlSearch.get("search");
    if (search !== null && search !== undefined && search !== "") {
      await ajax({
        url: `${api.SEARCH}`,
        cbSuccess: async (posts) => {
          console.log(search);
          let html = "";
          posts.forEach((post) => {
            const title = post.title.rendered.toLowerCase();
            if (title.includes(search)) location.hash = "#/" + post.slug;
          });
          $main.innerHTML = html;
        },
      });
    }
    // d.querySelector(".loader").style.display  = "none";
  } else if (hash === "#/contacto") {
    // $main.innerHTML = "<h2> Secciòn de Contacto </h2>";
    $main.appendChild(ContactForm());
    // d.querySelector(".loader").style.display = "none";
  } else {
    // $main.innerHTML = "<h2>Contenido</h2>";
    // console.log(`${api.POST}/${hash}`);
    // let urls = window.location.hash.slice(2);
    await ajax({
      url: `${api.POST}?slug=${hash.slice(2)}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
