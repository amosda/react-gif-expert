import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp () {
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
    };

    return (
        <>  
            <h1> GifExpertApp </h1> 


            <AddCategory
                onNewCategory= { onAddCategory }
             />

            {
              categories.map( (category) => {
                 return <GifGrid 
                          key={ category } 
                          category={ category }
                          />
                    })
            }
        </>
    )
}