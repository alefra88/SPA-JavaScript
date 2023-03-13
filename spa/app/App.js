import { ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";

export function App() {
  document.getElementById("root").innerHTML = `<h1>Mi Primer S P A</h1>`;
  console.log(api);
}

ajax({
  url: api.POSTS,
  cbSuccess: (posts) => {
    console.log(posts);
  },
});

ajax({
  url: api.CATEGORIES,
  cbSuccess: (categories) => {
    console.log(categories);
  },
});
