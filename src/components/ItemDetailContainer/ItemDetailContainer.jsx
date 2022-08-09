import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productDB from "../../utils/productDB";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [listProducts, setProducts] = useState ([]);
    const [dataLoaded, setDataLoaded] = useState (false);
    const [productData, setProductData] = useState({});
    useEffect(() => {
      const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(productDB)}, 100)
     });
     getProducts
     .then((response) => {
       setProducts(response);
       setDataLoaded(true)
       filterById()
     });
    },[id])

    const filterById = () => {
        productDB.some( (product) => {
            if(product.id == id) {
                setProductData(product)
            }
        }
    )
    }
    return(
        <div className="container-item-detail">
            {dataLoaded ? <ItemDetail productData={productData}/> : <></>}
        </div>
    )

}

export default ItemDetailContainer