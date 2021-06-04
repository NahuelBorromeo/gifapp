import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    //Cuando se utilice el useFetchGifs tendremos un estado que va a estar cargando por defecto.
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                
                    setState({
                        data: imgs,
                        loading: false
                    })
                
            });

    }, [ category ]) 



    return state; // El state es: { data:[], loading: true};

}