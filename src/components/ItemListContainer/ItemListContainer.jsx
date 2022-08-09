import './ItemListContainer.scss';
import productDB from '../../utils/productDB';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
  return (
    <div className="itemListContainer">
        <div className="itemListHeader">
          <h2 style={{textTransform: 'uppercase'}}>{title}</h2>
        </div>
        <div className="itemListBody">
            <ItemList products={productDB} />
        </div>
    </div>
  )
}

export default ItemListContainer