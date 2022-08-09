import './ItemCard.scss';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemCard = ({data}) => {
    return (
      <Link to={`/products/${data.id}`}><div className="itemCard">
          <div className="itemCard-img">
            <img src={`../assets/${data.image}`} alt="" />
          </div>
          <div className="itemCard-body">
              <p>{data.title}</p>
              <p className="itemCard-price">$ {data.price},00</p>
              <Button text="COMPRAR"/>
          </div>
      </div>
      </Link>
    )
  }
  
  export default ItemCard