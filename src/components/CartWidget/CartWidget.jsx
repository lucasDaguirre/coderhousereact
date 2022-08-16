import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartWidgetMenu from './CartWidgetMenu/CartWidgetMenu';

const CartWidget = () => {
  const {cartToggle, totalQuantity, totalPrice} = useContext(CartContext);
    
    return (
      <div className="cartWidget">
        <button onClick={cartToggle} className="cartWidgetBtn">
            <i className="bi bi-cart2 navIcon">
              {(totalQuantity > 0) ? <div className="cartCounter"><span>{totalQuantity}</span></div> : null}
            </i>
        </button>
        <CartWidgetMenu price={totalPrice} units={totalQuantity}/>
      </div>
    )
  }
  
  export default CartWidget