import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //El useEffect nos va a permitir ejecutar cierto codigo de manera condicional


    //usamos nuestro custom hook
    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])
    


    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>
                    { 
                        images.map( img => 
                            <GifGridItem 
                                    key={ img.id }
                                    { ...img }
                            />)
                    }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
