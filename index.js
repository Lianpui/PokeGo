const search = document.getElementById("name");
const button = document.getElementById("search");
const overlay = document.getElementsByClassName("overlay");
const modal = document.getElementsByClassName("modal")

button.addEventListener("click", fetchData);

function fetchData() {
    const name = search.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            document.getElementsByClassName("container")[0].innerHTML = `
                <div class="img">
                    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
                </div>
                <div class="info">
                    <h1>${data.name}</h1>
                    <p>Weight: ${data.weight}lb</p>
                    <p>Height: ${data.height}ft</p>
                </div>
            `;
        })
        .catch(error => {
            console.log("Pokemon not found", error);
        });
}
