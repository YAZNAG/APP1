import React, { useContext } from 'react';
import { StateContext } from '../../context/GlobalState';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { addToCart } = useContext(StateContext);
    const { productId } = useParams();
    const { products } = useContext(StateContext);

    const thisProduct = products.find((product) => product.id === parseInt(productId, 10)); // Convertir l'ID en nombre

    function cartButton() {
        return (
            <button onClick={() => addToCart(thisProduct)} className="add-cart-btn">
                Add to Cart
            </button>
        );
    }

    return (
        <section>
            <div className="product-detail">
                <div className="product-detail-image">
                    <img src={thisProduct.image} alt="product" style={{ width: '500px', height: '400px' }}/> {/* Utilisez la propriété `image` pour afficher l'image */}
                </div>
                <div className="product-detail-info">
                    <h3>{thisProduct.name}</h3>
                    <h4>${thisProduct.price}</h4>
                    <p className="lead">{thisProduct.description}</p>
                    {cartButton()}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
