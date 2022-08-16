import './ItemDetailBuy.scss'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import OptionSelect from '../../OptionSelect/OptionSelect'
import ItemCount from '../../ItemCount/ItemCount'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';

const ItemDetailBuy = ( {item} ) => {
  const { addProduct } = useContext(CartContext);
  const [avaliableSizes, setAvailability] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedStock, setSelectedStock] = useState();
  const [selectedQuantity, setQuantity] = useState();  
  const {id, title, image, price} = item;

  useEffect(() => {
    setOptions();
  }, []);

  const setOptions = () => {
    let sizes = Object.entries(item.stock);
    sizes = Object.keys(Object.fromEntries(sizes.filter(([key, value]) => value > 0)))
    setAvailability(sizes)
  };

  const setStock = (selection) => {
    const totalStock = Object.entries(item.stock);
    const itemStock = totalStock.filter(item => item[0] === selectedSize)[0];
    console.log(itemStock[1])
  }

  const setButtons = (selection) => {
    const buttons = document.querySelectorAll(".btnSelected");
    buttons.forEach(button => button.classList.remove("btnSelected"));
    selection.classList.add("btnSelected");
  }

  const sizeSelect = (e) => {
    const button = e.target;
    const selection = e.target.innerText;
    setSelectedSize(selection);
    setButtons(button);
  }

  const allSelections = {
    id: id,
    title: title,
    image: image,
    quantity: selectedQuantity,
    size: selectedSize,
    price: price
  };

  const toCart = () => {
    if(selectedQuantity > 0 && selectedSize){
      addProduct(allSelections);
    }
  }

  return (
    <div className='itemBuy'>
      <div className='itemBuyInfo'>
        <h1>{item.title}</h1>
        <p>${item.price},00</p>
      </div>
      <div className='itemBuySelect'>
        <OptionSelect title="SELECCIONAR TALLE:" options={avaliableSizes} click={sizeSelect} identifier="btnSize"/>
        <ItemCount title="CANTIDAD:" setQuantity={setQuantity} startingQuantity={0}/>
        <Button text="AGREGAR AL CARRO" onClick={toCart}/>
      </div>
    </div>
  )
}

export default ItemDetailBuy;