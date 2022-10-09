const $searchInput = document.getElementById("search-input");
const $searchIcon = document.getElementById("search-icon");


$searchInput.addEventListener("focus", () => {
    $searchInput.value = "";
})

$searchIcon.addEventListener("click", () => {
    $searchInput.type = "text";
    $searchInput.value = "Search";
})
