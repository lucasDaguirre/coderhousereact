import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProduct = (product) => {
        const checkDupe = cartProducts.find(cartItem => cartItem.id === product.id && cartItem.size === product.size);
        if (!checkDupe) {
            setCartProducts([...cartProducts, product])
        } else {
            // en progreso xd
        }
    };

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id || cartProduct.size !== product.size) )
    };

    const cartEmpty = () => {
        setCartProducts([])
    };

    const cartToggle = () => {
        document.querySelector(".cartWidgetMenu").classList.toggle("cartActive")
    }

    
    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, cartEmpty, addProduct, deleteProduct, cartToggle}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

export { CartContext };