import { useState } from "react"
// import setCategories from "../GifExpertApp"

export const AddCategory = ( {onNewCategory, onNewMount} ) => {
  
    const [inputValue, setInputValue] = useState('')
    const [limit, setLimit] = useState('')


    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onLimitChange = (event) => {
        setLimit( event.target.value )
    }
  
    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;
        else if (limit <= 0) return;


        onNewCategory( inputValue.trim() );
        onNewMount(limit);
        // setCategories([...categories, inputValue ])
        setInputValue('')
        setLimit('')
    }

    return (
    <form onSubmit={ onSubmit }>
            <input 
            className="search"
            type='text'
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />

            <input 
            className='limit' 
            type="number"
            placeholder="Cantidad de Gifs" 
            value={ limit }
            onChange={ onLimitChange }
            />

            <input value="Buscar" className="submit" type='submit' />
    </form>
    

  )
}

 
