import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
  
  const d = document;
  const w = window,
    $main = d.getElementById("main");

  let {hash} = location;

  console.log(hash)

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);

        let html = "";
        posts.forEach((post) => {
          html += PostCard(post);
        });
        // d.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
    
    
  } else if (hash.includes("#/search")) {

    let query = localStorage.getItem("wpSearch");

    if (!query) return false;

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        // $main.innerHTML = Post(post);
      },
    });
    
    // $main.innerHTML = "<h2> Vista del Buscador </h2>";
    // d.querySelector(".loader").style.display = "none";
  } else {
    $main.innerHTML = "<h2> Acá se carga elcontenido elcontenido del post seleccionado </h2>";
   
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        // console.log(post);
        $main.innerHTML = Post(post);
        
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
