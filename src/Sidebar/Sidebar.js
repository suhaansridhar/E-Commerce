import Price from './Price/Price';
import Category from './Category/Category';
import Colors from './Colors/Colors';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function Sidebar(){
    return( 
        <div className="sidebar--container--outer">
            <div className="sidebar--container--logo">
                <AiOutlineShoppingCart />
            </div>
            <div className='sidebar--container--options'>
                <Category />
                <Price />
                <Colors />
            </div>
        </div>
    )
}

export default Sidebar;