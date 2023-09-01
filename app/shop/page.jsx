'use client'
import util from '../../page/api/api/index';
import { useState } from 'react';

export default function Page() {
  const [foodItem, setFoodItem] = useState('')
  function search(e){
    e.preventDefault()
    setFoodItem(e.target.value)
    async function retrieve(e){
      const data = await util.retrieveAPI(foodItem)
    }
  }

  return (
    <form onSubmit={search} >
      <input type="text" onChange={search}/>
      <button type='submit'>Search</button>
    </form>
  )
}
