import React from 'react'

export default function Colors() {
  return (
    <div className='colors--container'>
      <div className="colors--container--heading">
        <h3>colors</h3>
      </div>
      <div className="colors--container--options">
        <div>
          <input type="radio" name='All' value="All"/>
          <label htmlFor="All">All</label>
        </div>
        <div>
          <input type="radio" name='Black' value="Black"/>
          <label htmlFor="Black">Black</label> 
        </div>
        <div>
          <input type="radio" name='Green' value="Green"/>
          <label htmlFor="Green">Green</label>
        </div>
        <div>
          <input type="radio" name='Red' value="Red"/>
          <label htmlFor="Red">Red</label>
        </div>
        <div>
          <input type="radio" name='Yellow' value="Yellow"/>
          <label htmlFor="Yellow">Yellow</label>
        </div>
      </div>
    </div>
  )
}
