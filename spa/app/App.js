import { ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";
import { Title } from "./components/title.js";
import { Loader } from "./components/loader.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Title());
  $root.appendChild(Loader());
}
