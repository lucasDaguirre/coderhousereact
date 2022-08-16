import './ItemDetail.scss';
import ItemDetailBody from './ItemDetailBody/ItemDetailBody';
import ItemDetailBuy from './ItemDetailBuy/ItemDetailBuy';
import ItemDetailImg from './ItemDetailImg/ItemDetailImg';
const ItemDetail = ({productData}) => {
  return (
    <div className='itemDetailContainer'>
        <div className='itemDetailHead'>
          <ItemDetailImg item={productData}/>
          <ItemDetailBuy item={productData}/>
        </div>
        <div className='itemDetailBody'>
          <h2 className="text1">Descripción del producto</h2>
        </div>
    </div>
  )
}

export default ItemDetail