const container = document.querySelector(".container");

const url = "";

async function fetchGame() {

    try {
        const response = await fetch(url);
        // const details = await response.json();

        // console.log(details);

        // createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}


fetchGame();


// function createHtml(details) {
//     container.innerHTML = `<h1>${details.name}</h1>
//                             <div class="details-image" 
//                                     style="background-image: url('${details.background_image}')"></div>
//                                 <div class="details-description">${details.description}</div>
//                                 <time class="details-date">Released: ${details.released}</time>`;
// }