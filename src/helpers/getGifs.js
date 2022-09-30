const apiKey = 'AqY31XwtmnBQk6j8VLEx8DKH2FtMACP8';
export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    return gifs;
}