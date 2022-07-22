
/*ENDPOINTS*/
const NAME_SITE = "css-tricks",
    DOMAIN      = `https://${NAME_SITE}.com`,
    SITE        = `${DOMAIN}/wp-json`,
    API_WP      = `${SITE}/wp/v2`,
    PER_PAGE    = 10,
    POSTS       = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
    POST        = `${API_WP}/posts`,
    SEARCH      = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`,
    CATEGORIES  = `${API_WP}/categories`

    let page = 1;

    export default {
        NAME_SITE,
        DOMAIN,
        SITE,
        API_WP,
        PER_PAGE,
        POSTS,
        POST,
        SEARCH,
        page,
        CATEGORIES,
    }