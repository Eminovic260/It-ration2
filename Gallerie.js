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
const supprimerPhoto = document.getElementById("btn-sup");
const inputPhoto = document.getElementById("add-photo");


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













inputPhoto.addEventListener("change", function (event) {
    if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0]);

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Image ajoutée";
        img.style.objectFit = "cover";
        img.classList.add("photo-ajoutee");

        photoContainer.appendChild(img);
    }
});


supprimerPhoto.addEventListener("click", supPhoto)

function supPhoto() {
    const imagesAjoutée = photoContainer.querySelectorAll(".photo-ajoutee");
    imagesAjoutée.forEach(img => img.remove());
}
