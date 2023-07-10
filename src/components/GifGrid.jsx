import { GifItem } from "../components";

import { useFetchGifs } from "../hooks/useFetchGifs";

export function GifGrid ( { category } ) {

    const { images, isLoading  } = useFetchGifs( category );

    return (
        <>  
            <h3>{ category }</h3>
            {
                isLoading 
                ? (<h2>Cargando...</h2>)
                :null
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => {
                        return <GifItem key={ image.id } {...image} />
                    })
                }
            </div>
        </>
    )
}