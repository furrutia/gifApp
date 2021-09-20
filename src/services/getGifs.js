
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Xd7KK2t2UxLoOYs0200DOFecnBIVM5LE`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( ( img ) => {
        
        const gif = { 
            id:img.id, 
            title: img.title, 
            url: img.images?.downsized_medium.url
        }
        return gif;

    });

    return gifs;

}