/* parte de codigo que hace las llamadas a la API y recoge los gifs */
import 'whatwg-fetch';

export const getGifs = async(category) => {
   
    const apiKey = '0XQtTI7m87qfQa3opURSG6TU5pfTTW4g';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}