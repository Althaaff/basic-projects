// API Dictionary Project :
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');


btn.addEventListener("click", () => {
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <div class="word">
        <h3>${inpWord}</h3>
        <button class="cursor" onclick="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
     </div>

     <div class="details">
        <p>${data[0].meanings[1].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
     </div>

     <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>

     <p class="word-example">
        ${data[0].meanings[0].definitions[0].
        example || ""}
     </p>`;

console.log("Audio URL:", data[0].phonetics[0].audio);
sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);

    })
    .catch( () => {
        result.innerHTML = `<h3 class="error">Couldn't Find the words!!</h3>`
    })
});

function playSound() {
    sound.play();
}
