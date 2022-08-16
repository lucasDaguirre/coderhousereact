import './ItemListContainer.scss';
import productDB from '../../utils/productDB';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
  return (
    <div className="itemListContainer w75">
        <div className="text2">
          <h2 style={{textTransform: 'uppercase'}}>{title}</h2>
        </div>
        <div className="itemListBody">
            <ItemList products={productDB} />
        </div>
    </div>
  )
}

export default ItemListContainer