import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = ['Coder'] }) => {
    // No se hace con const a menos que el array no vaya a cambiar
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     const newElement = prompt('Qué elemento quiere agregar?');
    //     setCategories([...categories, newElement]);
    //     //Otra forma
    //     //setCategories( cats => [...cats, newElement]);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory 
              setCategories={ setCategories }
          /> 
          <hr />  

          <ol>
              {
                  categories.map( (category) => 
                        <GifGrid 
                            key= { category }
                            category={ category }
                        />
                      )
              } 
          </ol>

        </>                                                                                                                                           
    )
}

export default GifExpertApp
