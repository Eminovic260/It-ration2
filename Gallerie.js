console.log("JS bien chargé");



const hamburgerButton = document.querySelector(".navToggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}




const photoContainer = document.querySelector(".photoContainer");
const btnMosaique = document.getElementById("btn-mosaique");
const btnColumn = document.getElementById("btn-column");

btnMosaique.addEventListener("click", mosaique);
btnColumn.addEventListener("click", column);

function mosaique() {
    photoContainer.classList.remove("column");
    photoContainer.classList.add("mosaique");
}

function column() {
    photoContainer.classList.remove("mosaique");
    photoContainer.classList.add("column");
}