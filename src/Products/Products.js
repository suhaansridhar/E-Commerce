import {AiOutlineStar} from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs';
import './Products.css';

function Products(){
  return(
    <div className="products--container">
      <section className="products--container--image">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="show image" />
      </section>
      <section className="product--container--name">Shoe</section>
      <section className="product--container--stars">
        <AiOutlineStar className='product--container--stars--item'/>
        <AiOutlineStar className='product--container--stars--item'/>
        <AiOutlineStar className='product--container--stars--item'/>
        <AiOutlineStar className='product--container--stars--item'/>
      </section>
      <section className="product--container--price"><del>300</del>200</section>
      <section className="product--container--bag"><BsFillBagHeartFill /></section>
    </div>
  )
}

export default Products;