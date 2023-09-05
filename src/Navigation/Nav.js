import './Nav.css';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai';

export default function Nav() {
  return (
    <div className="nav--container">
      <div>
        <input type="text" placeholder="Search for your shoes"/>
      </div>
      <div>
        <AiOutlineHeart />
        <AiOutlineSearch />
        <AiOutlineShoppingCart />
      </div>
    </div>
  )
}
