export const getGifs = async() =>{
    const url = 'http://api.giphy.com/v1/gifs/search?api_key=cBg8V9YZJWsjt3nvPsV0TjmW1wB7OCHz&q=${category}&limit=10';
    const resp = await fetch ( url );
    const {data} = await resp.json()
    console.log(data)

    
  const gifs = data.map( img => ({
      
    id: img.id,
    title: img.title,
    url: img.images.downsized_still.url


  }) );

 
  return gifs ;

  }