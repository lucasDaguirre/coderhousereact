import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const CartItem = ({productData}) => {
  const { cartProducts, setCartProducts, updateQuantity, deleteProduct } = useContext(CartContext);
  const { title, image, price, quantity, size } = productData;
  const { selectedProduct, setSelectedProduct} = useState({});

  return (
    <div className="cartItem">
        <div>
          <img src={`../assets/${image}`} alt="Product"/>
        </div>
        <div>
          <p>{title}</p>
          <p>Talle: {size}</p>
          <div>
            <ItemCount title="Cantidad:" setQuantity={updateQuantity} startingQuantity={quantity} params={productData}/>
          </div>
        </div>
        <div>
            <span>$ {price * quantity},00</span>
            <div>
              <i className="bi bi-heart"></i>
              <button onClick={() => deleteProduct(productData)}><i className="bi bi-trash3"></i></button>
            </div>
        </div>
    </div>
  )
}

export default CartItem