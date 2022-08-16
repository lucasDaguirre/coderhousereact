import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Cart.scss';

const CartEmpty = () => {
  return (
    <div className="cartEmptyContainer w75">
      <h2>TU CARRITO ESTÁ VACÍO</h2>
      <p>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</p>
      <Link to="/">
        <Button text="VOLVER AL INICIO"/>
      </Link>
    </div>
  )
}

export default CartEmpty