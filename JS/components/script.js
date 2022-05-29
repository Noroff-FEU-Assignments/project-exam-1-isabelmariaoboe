const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const page = params.get("page");

var currentPage=((page===null)? 1 : page)
console.log(currentPage)

const url = "http://actsblog.local/wp-json/wp/v2/posts?per_page=10&page=" + currentPage
const postContainer = document.querySelector(".results")

async function getPosts(url){
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts)
  posts.forEach(function(post){
      var title = post.title.rendered
      var id= post.id;
      var excerpt=post.excerpt.rendered
      console.log(id)
      console.log(title)

    postContainer.innerHTML +=
        `<a class = "postTitle" href="./post.html?id=${id}"<h1>${title}</h1></a>
        <div class=""><p>${excerpt}</p>
        `
   
  })
}

getPosts(url);

