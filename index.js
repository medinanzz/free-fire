document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("MyButton").addEventListener("click", function() {
        alert("Se você está lendo, é porque esta vivo!");
    });
});

function redirecionar(url) {
    window.location.href = url;
}