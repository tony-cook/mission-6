import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ListProperty from './ListProperty.js'
import './Style.css';

function Content() {
    const [listings, setListings] = useState({});
    const [fetchVariable, setFetchsVariable] = useState('all')
    const [isLoading, setIsLoading] = useState(true)

    const handleChangePrice = () => {
        setFetchsVariable('quicksort/price')
    }
    const handleChangeSuburb = () => {
        setFetchsVariable('quicksort/suburb')
    }

    useEffect(() => {
        axios.get(`api/api/propertys/${fetchVariable}`)
             .then(res => {
                 setListings(res.data.data)
                 setIsLoading(false)
                 
             })
    },[fetchVariable])

  return (
      <>
        <div className='button-container'>
            <button onClick={handleChangeSuburb}>Quick Sort by Suburb</button>
            <button onClick={handleChangePrice}>Quick Sort By Price</button>
        </div>
      <div className="content-container">
        <ListProperty listings={listings} isLoading={isLoading}/>
      </div>

      </>
  )
}

export default Content