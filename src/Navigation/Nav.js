import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
import './Nav.css';
function Nav(){
  return(
    <div className="nav--container--outer">
      <div className="nav--container--inner">
        <div className="nav--container--inner--1">
          <input type="text" placeholder="Enter your shoe"/>
        </div>
        <div className="nav--container--inner--icons">
          <AiOutlineHeart className='nav--container--icons--items'/>
          <AiOutlineShoppingCart className='nav--container--icons--items'/>
          <AiOutlineUser className='nav--container--icons--items'/>
        </div>
       </div> 
    </div>
  )
}

export default Nav;