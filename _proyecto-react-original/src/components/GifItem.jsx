/* Componente que contiene el gif unitario */
import PropTypes from 'prop-types';

export const GifItem = ({title, url}) => {
    
    return (
        <div className="card">
                    <img src={url} alt="" />
                    <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}


