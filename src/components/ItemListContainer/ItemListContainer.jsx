import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../utils/dbConfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title, filters}) => {
  const {category} = useParams()
  const [a, b, c] = filters;
  const [productData, setProductData] = useState([]);


  const getProducts = async () => {
    const productCollection = collection(db, "products");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product
    });
    setProductData(productList);
  } 
  
  const getFilteredProducts = async () => {
    const q = query(collection(db, "products"), where(`${a}`, `${b}`, `${category}`));
    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product
    });
    setProductData(productList);
  }

  const checkFilter = () => {
    if(a && b && c){
      getFilteredProducts()
    } else { getProducts() }
  }


  useEffect(() => {
    checkFilter();
  }, [category]);

  return (
    <div className="itemListContainer w75">
        <div className="text2">
          <h2 style={{textTransform: 'uppercase'}}>{title}</h2>
        </div>
        <div className="itemListBody">
            <ItemList products={productData} />
        </div>
    </div>
  )
}

export default ItemListContainer