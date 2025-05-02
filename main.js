// const url = 'https://api.adviceslip.com/advice';
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
formulaireButton.addEventListener('click', toggleForm)

function toggleForm() {
    formulaireButton.classList.toggle("active")
}







function genererBlague() {
    for (let i = 0; i < nombreDeBlagues; i++) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement("div");
                div.className = "blague";

                div.innerHTML = `<strong>Blague</strong> ${i + 1} : ${data.setup} ${data.delivery}`;
                container.appendChild(div);
            });
    }
}

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
    container.innerHTML = '';
    genererBlague();
}
);