import { useState, useContext } from 'react';
import { formattedCurrency } from '../../utils/utilFunctions';
import { CartContext } from '../../context/CartContext';
import db from '../../utils/dbConfig';
import { collection, addDoc } from 'firebase/firestore';

const CartModal = ({data}) => {
    const { cartProducts, setCartProducts, cartEmpty, totalQuantity, totalPrice } = useContext(CartContext);
    const [success, setSuccess] = useState()
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        if (formData.name == formData.phone == formData.email == ""){
            pushData({...order, buyer: formData})
        }
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

  return (
    <div className="cartModal">
        {success ? (
        <div className="successMessage">
            <h2>Su orden se generó de forma exitosa.</h2>
            <p>Codigo de compra: {success}</p>
        </div>
    ) : (
        <form onSubmit={submitData}>
            <input 
                type='text' 
                name='name' 
                placeholder='Ingrese el nombre'
                onChange={handleChange}
                value={formData.name}
                required
            />
            <input 
                type='number' 
                name='phone' 
                placeholder='Ingrese el telefono' 
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <input 
                type='email' 
                name='email' 
                placeholder='Ingrese el mail'
                value={formData.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    )}
    </div>
  )
}

export default CartModal