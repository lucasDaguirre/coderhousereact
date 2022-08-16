import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidgetMenu from './CartWidgetMenu/CartWidgetMenu';

const CartWidget = () => {
  const {cartProducts, cartToggle} = useContext(CartContext);
  let totalprice = 0;
  let totalunits = 0;
  cartProducts.forEach((product) => {
    totalunits = totalunits + product.quantity;
    totalprice = product.price * product.quantity});
    
    return (
      <div className="cartWidget">
        <button onClick={cartToggle} className="cartWidgetBtn">
            <i className="bi bi-cart2 navIcon">
              {(totalunits > 0) ? <div className="cartCounter"><span>{totalunits}</span></div> : null}
            </i>
        </button>
        <CartWidgetMenu price={totalprice} units={totalunits}/>
      </div>
    )
  }
  
  export default CartWidget