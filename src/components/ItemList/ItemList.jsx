import ItemCard from '../ItemCard/ItemCard';
const ItemList = ({products}) => {
  return (
    <>
      {products.map(product => <ItemCard key={product.id} data={product}/>)}
    </>
  )
}

export default ItemList