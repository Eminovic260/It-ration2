const url = 'https://api.adviceslip.com/advice';
const container = document.getElementById('conseils-container');
const nombreDeConseils = 5;

for (let i = 0; i < nombreDeConseils; i++) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement("div");
            div.className = "conseil";
            div.innerHTML = `Conseil #${i + 1} : "${data.slip.advice}"`;
            container.appendChild(div);
        });
}

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
    location.reload();
});