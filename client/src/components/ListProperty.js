import React from 'react'
import './Style.css';

function ListProperty({listings, isLoading}) {

  return (
    <div className='listings-container'>
        {isLoading ? "" : listings.map((listing,index) => (
            <div key={index} className="single-listing-container">
            <img src='house.jpg' alt=""></img>
            <div className="listing-name">{listing.suburb}</div>
            <br />
            <div className="listing-info">
                {listing.location}
            </div>
            <div className="listing-price">   
                ${listing.price} per week
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListProperty