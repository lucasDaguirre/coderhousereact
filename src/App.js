import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Product from './pages/Product/Product';
import Page404 from './pages/Page404/Page404';
import CartProvider from './context/CartContext';
import CartPage from './pages/CartPage/CartPage';


const App = () => {
  return (
    <div className="appWrap">
    <CartProvider>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:category" element={<Category/>}/>
          <Route path="/:category/:id" element={<Product/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
    </div>
    
  )
}

export default App