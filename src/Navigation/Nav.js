import './Nav.css';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai';

export default function Nav() {
  return (
    <div className="nav--container--outer">
      <div className="nav--container--inner">
        <div>
          <input type="text" placeholder="Search for your shoes"/>
        </div>
        <div className='nav--container--icons'>
          <AiOutlineHeart className='nav--container--icons--items'/>
          <AiOutlineSearch className='nav--container--icons--items'/>
          <AiOutlineShoppingCart className='nav--container--icons--items'/>
        </div>
      </div>
    </div>
  )
}
