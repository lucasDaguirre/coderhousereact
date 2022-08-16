import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from '../../components/Cart/Cart';
import CartEmpty from '../../components/Cart/CartEmpty';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import './CartPage.scss';

const CartPage = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div className="pageContainer">
      <h1 className="text1 w75">TU CARRITO {}</h1>
      {(totalQuantity > 0) ? <Cart/> : <CartEmpty/>}
      <ItemListContainer title="Articulos recomendados"/>
    </div>
  )
}

export default CartPage