export function SearchForm() {
  const d = document,
    $form = document.createElement("form"),
    $input = document.createElement("input");

  $form.classList.add("form-search");
  $input.text = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";

  $form.appendChild($input);
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }
  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });
  d.addEventListener("submit", (e) => {
    if (!e.target.matches("search-form")) return false;
    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
    // window.location.hash =
    //   "#/search?search=" + e.target.search.value.toLowerCase();
    // const urlSearch = new URLSearchParams(window.location.hash.slice(8));
    // const search = urlSearch.get("search");
  });
  return $form;
}
