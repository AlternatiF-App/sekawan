"use client"

import CardRestaurant from '@/components/card-retaurant'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(8)

  const getRestaurant = async () => {
    await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list/?location_id=297705&limit=${limit}&currency=USD`, {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fa9961b872msh604419c7e4c4a9bp16df07jsnb1faa2a21f39',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    })
      .then((results) => {
        setData(results.data.data)
      })
  }

  const handleLoadMore = () => {
    setLimit((p: number) => p + 8)
  }

  useEffect(() => {
    getRestaurant()
  }, [limit])

  return (
    <main className='md:py-8 py-2 px-8 mx-auto'>
      <h1 className='text-2xl font-extralight'>All Restaurants</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
        {
          data?.filter((item: any) => item.detail !== '0').map((item: any, index: number) => (
            <CardRestaurant key={index} data={item} />
          ))
        }
      </div>
      <div className='flex justify-center my-6 w-full'>
        <button
          className='rounded-md md:w-80 w-64 border border-blue-950 text-blue-950 uppercase px-4 py-2'
          onClick={() => handleLoadMore()}
        >
          Load More
        </button>
      </div>
    </main>
  )
}

export default Home