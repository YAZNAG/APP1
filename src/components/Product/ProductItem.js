import React, { useContext, useState } from 'react';
import { StateContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import './ProductItem.css'; // Importez le fichier CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 

function ProductItem({ product }) {
  const { addToCart, favoriteItems, addToFavorite, removeFromFavorite } = useContext(StateContext);

  // État local pour le bouton de favori
  const [isFavorited, setIsFavorited] = useState(favoriteItems.some(item => item.id === product.id));

  function handleFavoriteClick() {
    if (isFavorited) {
      removeFromFavorite(product.id);
    } else {
      addToFavorite(product);
    }
    // Mettez à jour l'état local
    setIsFavorited(!isFavorited);
  }

  const cartButton = (
    <button onClick={() => addToCart(product)} className="add-cart-btn">
      Add to Cart
    </button>
  );

  return (
    <div key={product.id} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <h4>{product.price}$</h4>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={handleFavoriteClick}
          className={`favorite favorite-btn ${isFavorited ? 'favorited' : ''}`}
        />
        {cartButton}
        <Link to={`/product/${product.id}`} className="product-details-link">
          <button className="view-detail-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
