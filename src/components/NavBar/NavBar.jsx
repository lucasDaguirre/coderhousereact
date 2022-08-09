import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="navBarTop">
        <div className="navBarLogo">
          <Link to='/'><img src='/assets/logo-main.png' alt="Store Logo"/></Link>
        </div>
        <div className="navBarSearch">
          <SearchBar placeholder="Buscar..."/>
        </div>
        <div className="navBarCustomer">
          <div className="navBarLogin">
            <button>
            <i className="bi bi-person navIcon"></i>
            </button>
          </div>
          <div className="navBarCart">
            <CartWidget/>
          </div>
        </div>
      </div>
      <nav className="navBarBottom">
          <ul className="navBarMenu">
            <Link to="/camisetas"><li>CAMISETAS</li></Link>
            <Link to="/shorts"><li>SHORTS</li></Link>
            <Link to="/camisetas"><li>CAMISETAS</li></Link>
            <Link to="/shorts"><li>SHORTS</li></Link>
            <Link to="/camisetas"><li>CAMISETAS</li></Link>
            <Link to="/shorts"><li>SHORTS</li></Link>
          </ul>
      </nav>
    </div>
  )
}

export default NavBar