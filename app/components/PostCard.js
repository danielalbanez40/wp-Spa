export function PostCard(props) {

    const {title, id, date, slug, featured_media_src_url} = props;

    let dateformat = new Date(date).toLocaleString();
    let urlPoster = featured_media_src_url ? featured_media_src_url : 'app/assets/no-image.png';

    document.addEventListener("click", e => {
        
        if (!e.target.matches(".post-card a")) return false;
        localStorage.setItem("wpPostId", e.target.dataset.id)
    });

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}" />
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="">${dateformat}</time>
                <a href="#/${slug}" class="publicacion" data-id="${id}">Ver Publicación</a>
            </p>
        </article>
    `;
}