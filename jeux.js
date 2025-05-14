const url = "https://mocki.io/v1/61bdf241-fdba-4ede-a410-3d78f1f89873";
console.log("oui" + url);


const hamburgerButton = document.querySelector(".navToggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}



const startBtn = document.getElementById("startBtn");
const difficultySelect = document.getElementById("difficulty");
const cardGrid = document.getElementById('cardGrid');
const gameInfo = document.getElementById("gameInfo");

startBtn.addEventListener('click', () => {
    const selectedDifficulty = difficultySelect.value;
    fetchGameData(selectedDifficulty);
});

function fetchGameData(difficulty) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur récupération de l'API");
            }
            return response.json();
        })
        .then(data => {
            const gameData = data.difficulties[difficulty];
            const cards = [...gameData.cards, ...gameData.cards];
            const shiffledCards = shuffle(cards);

            displayCards(shiffledCards);
            showGameInfo(difficulty, gameData.numberOfPairs, gameData.timeLimit, data.player.name)
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayCards(cards) {
    cardGrid.innerHTML = '';
    cards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = 'cards';
        const img = document.createElement('img');
        img.src = card.image;
        img.alt = 'carte';
        cardDiv.appendChild(img);
        cardGrid.appendChild(cardDiv);
    });
}

function showGameInfo(difficulty, pairs, time, playerName) {
    gameInfo.innerHTML =
        `
    <p><strong>Joueur :</strong> ${playerName}</p>
    <p><strong>Difficulté :</strong> ${difficulty.toUpperCase()}</p>
    <p><strong>Paires à trouver :</strong> ${pairs}</p>
    <p><strong>Temps imparti :</strong> ${time} secondes</p>
  `;
}



function revealCards () {
    
}