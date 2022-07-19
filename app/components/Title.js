import api from "../helpers/wp_api.js";

export function Title() {
    
    const $h1 = document.createElement('h1');

    $h1.innerHTML = `
        <a href="${api.DOMAIN}" target="_blank" rel="noopener" class=""> 
            ${api.NAME_SITE.toUpperCase()} 
        </a>
    `;

    return $h1;
}