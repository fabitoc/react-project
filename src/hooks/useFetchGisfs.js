import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGisfs = (category)=> {
  
 const [imagenes, setimagenes] = useState([])
 const [isLoading, setisLoading] = useState(true)


 const getImagenes = async ()=>{
   const newImagenes = await getGifs(category);
   setimagenes(newImagenes)
   setisLoading(false)
}


useEffect(()=>{
  getImagenes();
},[])

return{
    imagenes,
    isLoading

}


}