
document.addEventListener("DOMContentLoaded", function() {

    // Sélectionner les éléments
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");

    // Générer une couleur aléatoire
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";

        for (var i = 0; i < 6; i++) {
            color = color + letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    // Changer la couleur au clic
    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();
    });

});
