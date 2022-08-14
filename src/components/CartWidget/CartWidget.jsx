import './CartWidget.scss';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidgetMenu from './CartWidgetMenu/CartWidgetMenu';

const CartWidget = () => {
  const {cartProducts, cartToggle} = useContext(CartContext);
  let totalprice = 0;
  let totalunits = 0;
  const cartCount = cartProducts.forEach((product) => {
    totalunits = totalunits + product.quantity;
    totalprice = totalprice + product.price});
    return (
      <div className="cartWidget">
        <button onClick={cartToggle} className="cartWidgetBtn">
            <i className="bi bi-cart2 navIcon">
            <div className="cartCounter">
              <span>{totalunits}</span>
            </div>
            </i>
        </button>
        <CartWidgetMenu price={totalprice} units={totalunits}/>
      </div>
    )
  }
  
  export default CartWidget