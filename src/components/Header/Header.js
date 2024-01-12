import React, { useContext } from 'react';
import { StateContext } from '../../context/GlobalState';
import { useAuth } from '../../components/AuthContext'; // Import useAuth hook
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { totalItems, favoriteItems } = useContext(StateContext);
  const { user } = useAuth(); // Get user information from AuthContext

  return (
    <nav>
      <div className="logo">
        <Link to='/'>AZER-TECH</Link>
      </div>
      <ul className="nav-items">
        <li><Link to='/'>Store</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <ul className="nav-icons">
        <li>
          <Link to='/wishlist'>
            <FontAwesomeIcon icon={faHeart} />
            <span className="item-count">{favoriteItems.length}</span>
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span className="item-count">{totalItems}</span>
          </Link>
        </li>
        {user && user.isAdmin && (
          <li>
            <Link to='/admin/manage-products'>Manage Products</Link>
          </li>
        )}
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
