/* CustomHook que contiene las promesas para obtener los gifs y establece su estado y efectos secundarios*/

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isloading, setIsLoading] = useState(true);  

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // los hooks no pueden contener promesas, por eso se crea la función getImages
        getImages();
    }, [])

    return {
        //images: images,
        images,
        isloading: true,
    }
}