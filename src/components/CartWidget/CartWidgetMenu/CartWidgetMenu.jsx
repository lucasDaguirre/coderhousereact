import { useContext, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import CartWidgetMenuItem from './CartWidgetMenuItem';
import './CartWidgetMenu.scss';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { formattedCurrency } from '../../../utils/utilFunctions';

const CartWidgetMenu = ({price, units}) => {
    const { cartProducts, totalQuantity, totalPrice, cartToggle } = useContext(CartContext);
  return (
    <div className="cartWidgetMenu">
          <div>
              <p className="text2">{`TU CARRITO (${units})`}</p>
              <button onClick={cartToggle}>X</button>
          </div>
          <div>
            {(cartProducts.length > 0) ? cartProducts.map((product, index) => <CartWidgetMenuItem key={index} productData={product}/>) : <p>Tu carrito esta vacío.</p>}
          </div>
          <div>
            <p>Subtotal: {formattedCurrency(totalPrice)}</p>
            <Link to="/cart">
              <Button text="IR AL CARRITO" onClick={cartToggle}/>
            </Link>
          </div>
    </div>
  )
}

export default CartWidgetMenu