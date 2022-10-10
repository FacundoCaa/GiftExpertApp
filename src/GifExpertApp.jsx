import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball'])
    const [mount, setMount] = useState('10')

    const onNewMount = ( newMount ) => {

        setMount(newMount)

    }
    
    const onAddCategory = ( newCategory ) => {
        
        

        if (categories.includes(newCategory)) return;
        
        setCategories([ newCategory, ...categories])
    }
    


    return (
        <>
            <h1>Busca tus gifs aqui!</h1>

            
            
            <AddCategory 
            onNewCategory={ event => onAddCategory(event) }
            onNewMount={ onNewMount }
            />


                {
                categories.map( category => (
                    <GifGrid 
                    key={ category } 
                    category={ category }
                    limit={ mount }
                    />
                ))
                }
        </>
    )
}

