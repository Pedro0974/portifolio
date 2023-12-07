// evento para scroll nav bar
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        // Verifica se a posição de rolagem é maior que 5.5rem do topo
        if (window.scrollY > 5.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            navbar.classList.add("blurred");
        } else {
            navbar.classList.remove("blurred");
        }
    });
});