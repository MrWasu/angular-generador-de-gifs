import { useState } from "react";
import { AddCategory, GifGrid } from "./components" ;

export const GifApp = () => {

    const [category, setCategory] = useState(['final fantasy', 'Overwatch']);

    const onAddCategory = (newCategory) => {

        // se previene que haya una categoria repetida
        if (category.some(category => category.toLowerCase() === newCategory.toLowerCase())) return;

        setCategory([newCategory, ...category]);
    }

    return (
        <div>
            <h1>Generador de Gifs </h1>

            <AddCategory
                // setCategory={ setCategory } bastaria para hacer lo mismo:
                onNewCategory={event => onAddCategory(event)}
            /> 

            {   // se manda iterar el arreglo de las categorias con el componente propio de cada una
                category.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </div>
    )
}


