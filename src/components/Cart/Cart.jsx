import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import Button from '../Button/Button';
import { formattedCurrency } from '../../utils/utilFunctions';

const Cart = () => {
    const { cartProducts, setCartProducts, cartEmpty, totalQuantity, totalPrice } = useContext(CartContext);

  return (
      <div className="cartContainer w75">
        <div>
          <div>
            <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
            <div>
            <span>Envío gratís con tu compra desde $5000.</span>
            <button className="textButton" onClick={cartEmpty}>ELIMINAR TODO</button>
          </div>
          </div>
          <div className="cartItemContainer">
            {( cartProducts.length > 0) ? cartProducts.map((product, index) => <CartItem key={index} productData={product}/>) : <p>Tu carrito esta vacío.</p>}
          </div>
        </div>
        <div>
          <div className="cartSummary">
            <p>RESUMEN DEL PEDIDO</p>
            <div>
              <div>
                <p>{(totalQuantity == 1) ? `1 PRODUCTO` : `${totalQuantity} Productos`}</p>
                <p>{formattedCurrency(totalPrice)}</p>
              </div>
              <div>
                <p>ENVÍO</p>
                <p>GRATIS</p>
              </div>
              <div>
                <p>TOTAL</p>
                <p>{formattedCurrency(totalPrice)}</p>
              </div>
            </div>
          </div>
          <Button text="FINALIZAR COMPRA"/>
          <div>
            <p>MEDIOS DE PAGO</p>
            <img src="../assets/medios-de-pagos.webp" alt="medios de pago" />
          </div>
        </div>
      </div>
  )
}

export default Cart