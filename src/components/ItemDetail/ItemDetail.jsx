import './ItemDetail.scss';
import { formattedCurrency } from '../../utils/utilFunctions';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import OptionSelect from '../OptionSelect/OptionSelect';

const ItemDetail = ({productData}) => {
  const { addProduct } = useContext(CartContext);
  const {id, title, image, price, description, colors, stock} = productData;
  const [avaliableSizes, setAvailability] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setQuantity] = useState();  

  useEffect(() => {
    setOptions();
  }, []);

  const setOptions = () => {
    const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];
    let sizes = Object.entries(stock);
    sizes = Object.keys(Object.fromEntries(sizes.filter(([key, value]) => value > 0)))
    sizes.sort((a, b) => {
      return sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
    })
    setAvailability(sizes)
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
    <div className='itemDetailContainer'>
      <div className="itemDetailWrap">
        <div>
          <div>
            {/* En proceso */}
            <img src={`../assets/${image}`} alt="" />
          </div>
          <div>
          <img src={`../assets/${image}`} alt="" />
          <img src={`../assets/${image}`} alt="" />
          <img src={`../assets/${image}`} alt="" />
          <img src={`../assets/${image}`} alt="" />
          <img src={`../assets/${image}`} alt="" />
          </div>
        </div>
        <div>
          <h1>{title}</h1>
          <div>
              <span className="txt2">{formattedCurrency(price)}</span>
              <span>Hasta en 6 cuotas s/interés de {formattedCurrency(price/6)}.</span>
          </div>
          <span className='colorsList'>{colors.join(' / ')}</span>
          <p>{description}</p>
          <div className="option">
            <OptionSelect title="SELECCIONAR TALLE:" options={avaliableSizes} click={sizeSelect} identifier="btnSize"/>
          </div>
          <div>
            <ItemCount title="CANTIDAD:" setQuantity={setQuantity} startingQuantity={0}/>
          </div>
          <div className="newButton">
            <button onClick={() => toCart()}>AGREGAR AL CARRITO</button>
            <i className="bi bi-arrow-right"></i>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail