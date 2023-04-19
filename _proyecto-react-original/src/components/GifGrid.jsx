/* Componente que recoge cada categoria de gifs */
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div key={category}>
            <h3>{category}</h3>
            
            { isLoading && ( <h2>Cargando</h2> ) }
        
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} // envia como props todas las propiedades de image
                        />
                    ))
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}


