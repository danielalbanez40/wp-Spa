export function PostCard(props) {

    const {title, date, slug, featured_media_src_url} = props;

    let dateformat = new Date(date).toLocaleString();
    let urlPoster = featured_media_src_url ? featured_media_src_url : 'app/assets/no-image.png';

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}" />
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="">${dateformat}</time>
                <a href="#/${slug}" class="publicacion">Ver Publicación</a>
            </p>
        </article>
    `;
}