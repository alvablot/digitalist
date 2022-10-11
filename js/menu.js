const $menyButton = document.getElementById("menu-button");
const $menyLayer1 = document.getElementById("menu-layer1");
const $x = document.getElementById("x");
const $transLayer = document.getElementById("trans-layer");
const $menuContainer = document.getElementById("menu-container");
const $arrow = document.getElementById("arrow");
const speed = 20;
let step = speed;
let count = -2000;
const $menuItems = [
    document.getElementById("menu-item1"),
    document.getElementById("menu-item2"),
    document.getElementById("menu-item3"),
    document.getElementById("menu-item4"),
    document.getElementById("menu-item5"),
    document.getElementById("menu-item6"),
    document.getElementById("menu-item7"),
];
const $menuItems2 = [
    document.getElementById("menu-item1-2").style,
    document.getElementById("menu-item2-2").style,
    document.getElementById("menu-item3-2").style,
    document.getElementById("menu-item4-2").style,
    document.getElementById("menu-item5-2").style,
    document.getElementById("menu-item6-2").style,
    document.getElementById("menu-item7-2").style,
];
$menuItems2.map((items) => {
    items.display = "none";
});

$menyButton.addEventListener("click", () => {
    step = speed;
    $menuContainer.style.zIndex = 20;
    $menyLayer1.style.display = "block";
    $transLayer.style.display = "block";
    window.requestAnimationFrame(playAnimation);
});
$x.addEventListener("click", () => {
    step = -speed;
    $menyLayer1.style.display = "block";
    $transLayer.style.display = "none";
    $menuContainer.style.right = "-1500px";
    $menuContainer.style.zIndex = 200;
});

$menuItems.forEach((items, i) => {
    items.addEventListener("click", () => {
        if ($menuItems2[i].display === "none") $menuItems2[i].display = "block";
        else if ($menuItems2[i].display === "block") $menuItems2[i].display = "none";
    });
});

function playAnimation() {
    if (step === speed) {
        if (count < 0) {
            count += step;
            $menuContainer.style.right = count + "px";
        }
    }
    if (step === -speed) {
        if (count > -2000) {
            count += step;
            $menuContainer.style.right = count + "px";
        }
    }
    window.requestAnimationFrame(playAnimation);
}
$arrow.addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
    });
});