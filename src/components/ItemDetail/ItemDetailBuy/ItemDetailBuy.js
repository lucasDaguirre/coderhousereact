import './ItemDetailBuy.scss'
import { useState, useEffect } from 'react';
import OptionSelect from '../../OptionSelect/OptionSelect'
import ItemCount from '../../ItemCount/ItemCount'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';

const ItemDetailBuy = ( {item} ) => {
  const [avaliableSizes, setAvailability] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedStock, setSelectedStock] = useState();
  const [selectedQuantity, setQuantity] = useState();
  const [checkout, setCheckout] = useState(true);

  useEffect(() => {
    setOptions();
  }, []);

  const setOptions = () => {
    let sizes = Object.entries(item.stock);
    sizes = Object.keys(Object.fromEntries(sizes.filter(([key, value]) => value > 0)))
    setAvailability(sizes)
  };

  const sizeSelect = (e) => {
    const button = e.target;
    const selection = e.target.innerText;
    setSelectedSize(selection);
    setButtons(button);
  }

  const setStock     = (selection) => {
    const totalStock = Object.entries(item.stock);
    const itemStock = totalStock.filter(item => item[0] === selectedSize)[0];
    console.log(itemStock[1])
  }

  const setButtons = (selection) => {
    const buttons = document.querySelectorAll(".btnSelected");
    buttons.forEach(button => button.classList.remove("btnSelected"));
    selection.classList.add("btnSelected");
  }

  const toCart = () => {
    if(selectedQuantity > 0){
      setCheckout(false);
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
        
        {checkout ? <ItemCount title="CANTIDAD:" setQuantity={setQuantity} stock={5}/> : <></>}
        {checkout ? <Button text="AGREGAR AL CARRO" onClick={toCart}/> : <></>}
        {!checkout ? <Link to="/checkout"><Button text="FINALIZAR COMPRA" onClick={toCart}/></Link> : <></>}
      </div>
    </div>
  )
}

export default ItemDetailBuy;