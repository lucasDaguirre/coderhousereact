import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        setTotals(cartProducts);
    }, [cartProducts]);

    const addProduct = (product) => {
        const checkDupe = cartProducts.find(cartItem => cartItem.id === product.id && cartItem.size === product.size);
        if (!checkDupe) {
            setCartProducts([...cartProducts, product]);
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
        const cart = (cartProducts.filter( (cartProduct) => cartProduct.id !== product.id || cartProduct.size !== product.size));
        const updatedProduct = (cartProducts.filter((cartProduct) => cartProduct.id == product.id && cartProduct.size == product.size ));
        updatedProduct[0].quantity = parseInt(updatedProduct[0].quantity + product.quantity);
        setCartProducts([...cart, updatedProduct[0]]);
    }

    const updateQuantity = (quantity, product) => {
        if(quantity > 0){
            const cart = (cartProducts.filter( (cartProduct) => cartProduct.id !== product.id || cartProduct.size !== product.size));
            const updatedProduct = (cartProducts.filter((cartProduct) => cartProduct.id == product.id && cartProduct.size == product.size ));
            updatedProduct[0].quantity = quantity;
        setCartProducts([...cart, updatedProduct[0]]);
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