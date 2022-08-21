import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import db from "../../utils/dbConfig";
import {doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [listProducts, setProducts] = useState ([]);
    const [dataLoaded, setDataLoaded] = useState (false);
    const [productData, setProductData] = useState({});

    useEffect(() => {
        getProduct()
        .then((res) => {
            setProductData(res);
            setDataLoaded(true);
        })
    },[])

    const getProduct = async () => {
        const docRef = doc(db, "products", id);
        const docSnapshot = await getDoc(docRef);
        let product = docSnapshot.data();
        product.id = docSnapshot.id;
        return product;
    };

    return(
        <div className="container-item-detail">
            {dataLoaded ? <ItemDetail productData={productData}/> : <></>}
        </div>
    )

}

export default ItemDetailContainer