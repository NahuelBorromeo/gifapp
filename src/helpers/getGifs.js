

    //Acá recibimos la categoría y hacemos una peticion http
export  const getGifs = async( category ) => {

        //No olvidar agregar el https:// al url
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=7&api_key=7985FGV679xswiMbtjfg9vRd8zIzAjgy`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        //Con esto recorremos la data anterior para poder crear un arreglo de objetos solo con los elementos que nos sirven
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
        
    }