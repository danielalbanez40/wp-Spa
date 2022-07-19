import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";

export function App() {

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            console.log(posts);
        }
    })
    
    ajax({
        url: api.CATEGORIES,
        cbSuccess: (categories) => {
            console.log(categories);
        }
    })

    console.log(api);
}