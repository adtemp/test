function sbb() {
    let btn = document.getElementById("side-bar-button");
    let ae = btn.getAttribute("aria-expanded");
    ae = ae === "true" ? "false" : "true";
    btn.setAttribute("aria-expanded", ae);
}
let btn = document.getElementById("side-bar-button");
btn.onclick = sbb;
