export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6F1WIwzBHdZl3Kh3a3ZwOo0vL4mTtYkc&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.downsized.url
        }
    })
    return gifs;
}
