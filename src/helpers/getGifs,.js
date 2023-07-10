export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0itCCj0tO7z46qlLDzF6ocuDsUiR15Dp&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img  => {
        return {
            id: img.id,
            url: img.images.downsized_medium.url,
            title: img.title
        }
    })

    return gifs;

};
