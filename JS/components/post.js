console.log("hello")
const container = document.querySelector(".container")


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "http://actsblog.local/wp-json/wp/v2/posts/" + id

async function fetchPost(url){
    const response = await fetch(url);
    const post = await response.json();
    console.log(post)
    var title = post.title.rendered
    console.log(title)
    var content = post.content.rendered
    console.log(post.content.rendered)
    // console.log(post.excerpt.rendered)
    container.innerHTML +=
    `<h1>${title}</h1>` + content

 
  }

  fetchPost(url)








