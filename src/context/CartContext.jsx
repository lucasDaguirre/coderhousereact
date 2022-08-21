import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotals(cartProducts);
    }, [cartProducts]);

    const addProduct = (product) => {
        const newCart = [...cartProducts];
        const checkDupe = cartProducts.find(cartItem => cartItem.id === product.id && cartItem.size === product.size);
        if (!checkDupe) {
            setCartProducts([...newCart, product]);
            cartToggle();
        } else {
            updateCart(product);
            cartToggle();
        }
    };

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id || cartProduct.size !== product.size) )
    };

    const updateCart = (product) => {
        const newCart = [...cartProducts];
        const updatedItem = newCart.findIndex(cartItem => cartItem.id === product.id && cartItem.size === product.size);
        if (updatedItem !== -1){
            newCart[updatedItem].quantity = newCart[updatedItem].quantity + product.quantity;
            setCartProducts(newCart);
        }
    }

    const updateQuantity = (quantity, product) => {
        const newCart = [...cartProducts];
        const updatedItem = newCart.findIndex(cartItem => cartItem.id === product.id && cartItem.size === product.size);
        if(updatedItem !== -1 && quantity > 0){
            newCart[updatedItem].quantity = quantity;
            setCartProducts(newCart);
        } else {
            deleteProduct(product);
        }
    }

    const cartEmpty = () => {
        setCartProducts([])
    };

    const cartToggle = () => {
        document.querySelector(".cartWidgetMenu").classList.toggle("cartActive")
        document.querySelector(".pageOverlay").classList.toggle("pageOverlayActive")
    }

    const setTotals = (products) => {
        let units = 0;
        let price = 0;
        products.forEach(product => {
            units = parseInt(units + product.quantity);
            price = parseInt(price + product.quantity * product.price);
        });
        setTotalQuantity(units);
        setTotalPrice(price);
    };



    
    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, cartEmpty, addProduct, deleteProduct, totalQuantity, totalPrice, updateQuantity, cartToggle}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

export { CartContext };