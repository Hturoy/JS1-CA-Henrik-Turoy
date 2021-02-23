// https://rawg-video-games-database.p.rapidapi.com/games/4332


const getUrl = document.location.search
console.log (getUrl)

const para = new URLSearchParams(getUrl)
const id = para.get("id")
console.log (id)
const box = document.querySelector (".detailsDiv")
const url = `https://rawg-video-games-database.p.rapidapi.com/games/${id}`
console.log(window.location.href)


listGames = (game) => {
	box.innerHTML = "";

	let newContent = `
	<ul>
		<h1>${game.name}</h1>
		<p><h3>Description:</h3> ${game.description}</p>
		<p><strong>Release</strong>: ${game.released}</p>
		<p><strong>Last updated</strong>: ${game.updated}</p>
	</ul>`;
		box.innerHTML += newContent;
        document.title = (game.name)
		
	
}



fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3713bb56d2msh095eea4b2b371d6p122884jsne8dd845e6aa5",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(data => listGames(data))
.catch(error =>{
	console.error(error.message);
	box.innerHTML = `<div class="error">An error has occurred</div>`

})
.finally(()=> box.classList.remove("spinner-grow"));