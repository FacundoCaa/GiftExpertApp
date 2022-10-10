import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from "./GifItem";

export const GifGrid = ( { category, limit } ) => {
  
    const { images, isLoading } = useFetchGifs( category, limit );


    return (
    <>
        <h3>{ category }</h3>

        <h4> Cantidad de gifs: {limit} </h4>

        {
            isLoading && ( <h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {images.map((image) => (
                <GifItem 
                key={image.id}
                {...image}
                />
            ))}
        </div>
    </>
  )
}
