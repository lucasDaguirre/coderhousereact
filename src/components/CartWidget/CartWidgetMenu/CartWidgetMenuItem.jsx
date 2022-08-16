import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidgetMenuItem = ({productData}) => {
    const { cartProducts, setCartProducts, deleteProduct } = useContext(CartContext);
    const {title, image, price, quantity, size} = productData;
  return (
    <div className="cartWidgetItem">
        <div>
            <img src={`../assets/${image}`} alt="Product" />
        </div>
        <div>
            <p>{title}</p>
            <p>Cantidad: {quantity}</p>
            <p>Talle: {size}</p>
        </div>
        <div>
            <p>${price * quantity},00</p>
            <button onClick={() => deleteProduct(productData)}><i className="bi bi-trash3"></i></button>
        </div>
    </div>
  )
}

export default CartWidgetMenuItem