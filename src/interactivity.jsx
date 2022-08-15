import { useState } from 'react';
import React from 'react'
import { AddCategory , GifGrid } from './components'


export const Interactivity = () => {
  
  const [categorias, setCategorias] = useState(['Oneponc' , 'dragon ball'])

     console.log(categorias); 

    const onAddCategoria = ( newCategoria ) =>{

      console.log(newCategoria) 
      // categorias.push(nuevaCategoria);
      
      if( categorias.includes(newCategoria)) 
        return;
      
      
      setCategorias([newCategoria, ...categorias ])
    }

     return (
    <>
        <h1>interactivity</h1>

      <AddCategory
      //  Categorias={setCategorias}
      onNewCategoria= {(value)=>onAddCategoria(value)}

       />    
          {
          categorias.map((category) => {
            return(
           <GifGrid 
           key={category} 
           category={category}/>
            )
          })
        }
        
    </>
  )
}
