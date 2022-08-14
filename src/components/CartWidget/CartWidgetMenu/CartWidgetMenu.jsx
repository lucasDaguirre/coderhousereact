import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import CartWidgetMenuItem from './CartWidgetMenuItem';
import './CartWidgetMenu.scss';
import Button from '../../Button/Button';

const CartWidgetMenu = ({price, units}) => {
    const { cartProducts, setCartProducts, cartEmpty, cartToggle } = useContext(CartContext);
  return (
    <div className="cartWidgetMenu">
          <div>
              <p>{`TU CARRITO (${units})`}</p>
              <button onClick={cartToggle}>X</button>
          </div>
          <div>
            {(cartProducts.length > 0) ? cartProducts.map((product, index) => <CartWidgetMenuItem key={index} productData={product}/>) : <p>Tu carrito esta vacío.</p>}
          </div>
          <div>
            <p>Subtotal: ${price},00</p>
            <Button text="Vaciar Carrito" onClick={cartEmpty}/>
          </div>
    </div>
  )
}

export default CartWidgetMenu