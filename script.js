console.log("Is script linked? yes")

const content = document.querySelector (".theDiv")
// const detailContent = document.querySelector(".detailsDiv")
const url = "https://rawg-video-games-database.p.rapidapi.com/games?page=4"
// https://rawg-video-games-database.p.rapidapi.com/games/4332 For å få tak i ett spill med ID




listGames = (games) => {
	content.innerHTML = "";
	for (let i of games.results) {
		console.log(i)
		if (i === games.results[5]){
			break
		}
	let newContent = `
	<a href="./details.html?id=${i.id}"><ul>
		<h2>${i.name}</h2>
		<p>Metacritic Score: ${i.metacritic}</p>
		<p>Ratings: ${i.ratings_count}</p>
		<p>Reviews: ${i.reviews_count}</p>
	</ul></a>`;
		content.innerHTML += newContent;
		
	}
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
	content.innerHTML = `<div class="error">An error has occurred</div>`

})

.finally(()=> content.classList.remove("spinner-grow"));


