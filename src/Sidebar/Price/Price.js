import React from 'react'

export default function Price() {
  return (
    <div className='price--container'>
      <div className="price--container--heading">
        <h3>Price</h3>
      </div>
      <div className="price--container--options">
        <div>
          <input type="radio" name='All' value="All"/>
          <label htmlFor="All">All</label>
        </div>
        <div>
          <input type="radio" name='Sneakers' value="Sneakers"/>
          <label htmlFor="Sneakers">Sneakers</label> 
        </div>
        <div>
          <input type="radio" name='Flats' value="Flats"/>
          <label htmlFor="Flats">Flats</label>
        </div>
        <div>
          <input type="radio" name='Sandals' value="Sandals"/>
          <label htmlFor="Sandals">Sandals</label>
        </div>
        <div>
          <input type="radio" name='Heels' value="Heels"/>
          <label htmlFor="Heels">Heels</label>
        </div>
      </div>
    </div>
  )
}
