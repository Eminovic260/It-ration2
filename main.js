// const url = 'https://api.adviceslip.com/advice';
console.log("JS bien chargé");
const url = 'https://v2.jokeapi.dev/joke/Any?lang=fr';
const container = document.getElementById('blague-container');
const nombreDeBlagues = 5;
genererBlague();





const hamburgerButton = document.querySelector(".navToggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}



const formulaireButton = document.querySelector("#formulaire")
formulaireButton.addEventListener('click', toggleForm);
const formulaireContainer = document.getElementById("formulaire-container");

function toggleForm() {
    formulaireContainer.classList.toggle("active");
}







function genererBlague() {
    for (let i = 0; i < nombreDeBlagues; i++) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement("div");
                div.className = "blague";

                let contenu = '';
                if (data.type === "single") {
                    contenu = `<strong>Blague ${i + 1} :</strong> ${data.joke}`;
                } else {
                    contenu = `<strong>Blague ${i + 1} :</strong> ${data.setup} ${data.delivery}`;
                }

                div.innerHTML = contenu;
                container.appendChild(div);
            })
            .catch(error => {
                const div = document.createElement("div");
                div.className = "erreur";
                div.innerText = "Erreur lors du chargement de la blague.";
                container.appendChild(div);
                console.error("Erreur API :", error);
            });
    }
}


const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
    container.innerHTML = '';
    genererBlague();
}
);


// ajout de blague manuelle
const formulaire = document.querySelector('form');
const blagueInput = document.getElementById('blague-input');

formulaire.addEventListener('submit', function (e) {
    e.preventDefault(); // empêche le rechargement

    const texteBlague = blagueInput.value.trim();

    if (texteBlague.length > 0) {
        const div = document.createElement("div");
        div.className = "blague";
        div.innerHTML = `<strong>Blague :</strong> ${texteBlague}`;
        container.appendChild(div);
        blagueInput.value = ''; // vide le champ
    } else {
        alert("Merci d'écrire une blague avant de l'envoyer !");
    }
});