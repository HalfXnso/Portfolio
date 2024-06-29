const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;
const navLinks = document.querySelectorAll(".nav-list li a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.classList.add("no-scroll");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.classList.remove("no-scroll");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
        body.classList.remove("no-scroll");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('button[data-modal]');
    var modals = document.querySelectorAll('.modalContainer');
    var spans = document.querySelectorAll('.close');
    var body = document.body;

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
                body.style.position = "static";
                body.style.height = "100%";
                body.style.overflow = "hidden";
            }
        });
    });

    spans.forEach(function(span) {
        span.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "none";
                body.style.position = "relative";
                body.style.height = "auto";
                body.style.overflow = "auto";
            }
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
                body.style.position = "relative";
                body.style.height = "auto";
                body.style.overflow = "auto";
            }
        });
    });
});
