import './Products.css';

import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs';

export default function Products() {
  return (
    <div className='products--container'>
      <section className="card">
        <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
          alt='shoe'/>
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </section>
          <del>300</del>200
          <BsFillBagFill />
        </div>
      </section>
      
    </div>
  )
}
