import { useState , useEffect } from "react";
import { getGifs } from '../helpers/getGifs'
import { Imagens } from "./imagens";
import { useFetchGisfs } from "../hooks/useFetchGisfs";
import React from 'react'

export const GifGrid = ({category}) => {

    

  const {imagenes , isLoading } = useFetchGisfs(category);

  
      
 
  return (
    <>
        
        <h3>{category}</h3>
        
    
      {/* desestructuraacion imagenes .map (images) li key=images  */}
         
         <div className="card-grid">
          {
           imagenes.map((images) =>
              <Imagens       
              key={images.id}
              {... images}
              />
           
              )
          }
         </div>
        
               


    </>
  )
}
