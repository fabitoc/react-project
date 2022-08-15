import { useState } from "react"; 

export const AddCategory = ({onNewCategoria}) => {
  
  const [ inputValue, setInputvalue] = useState('');
  
    const onInputchance = ( { target })=> {
      setInputvalue( target.value );
    }

    const onSubmit = (event)=>{
       event.preventDefault();
       if (inputValue.trim().length <=1) return ; 
       onNewCategoria(inputValue.trim());
       setInputvalue('');
    }

    console.log(inputValue)

    return (
    <form onSubmit={ onSubmit }>
        <input
            type= "text"
            placeholder="agregar categoria"
            value={inputValue}
            onChange={onInputchance}
        
        />
    </form>
  )
}
