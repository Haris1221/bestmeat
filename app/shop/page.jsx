'use client'
import util from '../../page/api/api/index';
import { useState, useEffect } from 'react';

export default function Page() {
  // const [foodItem, setFoodItem] = useState('')
  const [meatData, setMeatData] = useState([])


  // function search(e){
  //   e.preventDefault()
  //   setFoodItem(e.target.value)
  //   async function retrieve(e){
  //     const data = await util.retrieveAPI(foodItem)
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const data = await util.meat();
      setMeatData(data);
    
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className='text-white'>
    {meatData.map((elem, index) => (
      <p key={index}>{elem.name} &nbsp; &nbsp; {elem.price}</p>
    ))} 
  </div>
</div>

  )
}
