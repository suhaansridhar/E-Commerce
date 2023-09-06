import React from 'react';
import "./Category.css";

export default function Category() {
  return (
    <div className='category--container'>
      <div className="category--container--heading">
        <h3>Category</h3>
      </div>
      <div className="category--container--options">
        <div>
          <input type="radio" name='All' value="All"/>
          <label htmlFor="All"> All</label>
        </div>
        <div>
          <input type="radio" name='Sneakers' value="Sneakers"/>
          <label htmlFor="Sneakers"> Sneakers</label> 
        </div>
        <div>
          <input type="radio" name='Flats' value="Flats"/>
          <label htmlFor="Flats"> Flats</label>
        </div>
        <div>
          <input type="radio" name='Sandals' value="Sandals"/>
          <label htmlFor="Sandals"> Sandals</label>
        </div>
        <div>
          <input type="radio" name='Heels' value="Heels"/>
          <label htmlFor="Heels"> Heels</label>
        </div>
      </div>
    </div>
  )
}
