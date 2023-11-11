"use client"

import CardRestaurant from '@/components/card-retaurant'
import Header from '@/components/header'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  const [filterCuisine, setFilterCuisine] = useState([])
  const [limit, setLimit] = useState(8)
  const [isClose, setIsClose] = useState(false)
  const [valuePrice, setValuePrice] = useState('')
  const [valueCategory, setValueCategory] = useState('')
  const [isLoading, setIsloading] = useState(true)

  const getRestaurant = async () => {
    setIsloading(true)
    await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list/?location_id=297705&limit=${limit}&currency=USD&combined_food=${valueCategory === '' ? 'all' : valueCategory}&prices_restaurants=${valuePrice}`, {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fa9961b872msh604419c7e4c4a9bp16df07jsnb1faa2a21f39',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    })
      .then((results) => {
        setData(results.data.data)
        setFilterCuisine(results.data.filters_v2.filter_sections[1].filter_groups[0].options)
        setIsloading(false)
      })
  }

  const handleLoadMore = () => {
    setLimit((p: number) => p + 8)
  }

  const handleClearFilter = () => {
    setValueCategory('')
    setValuePrice('')
    setIsClose(false)
  }

  useEffect(() => {
    getRestaurant()
  }, [limit, valueCategory, valuePrice])

  return (
    <main>
      <Header
        isClose={isClose}
        setIsClose={setIsClose}
        valuePrice={valuePrice}
        setValuePrice={setValuePrice}
        valueCategory={valueCategory}
        setValueCategory={setValueCategory}
        dataCuisine={filterCuisine}
        handleClearFilter={handleClearFilter}
      />
      
      <section className='container mx-auto w-full lg:w-10/12 mt-6 lg:mt-10 px-4 py-2'>
        <h1 className='text-2xl font-extralight'>All Restaurants</h1>

        <div className={`mt-8 ${isLoading ? 'flex flex-col items-center' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'}`}>
          {
            isLoading
              ? <div role='status' className='flex flex-col items-center px-4 py-24'>
                  <svg aria-hidden='true' className='inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-400/50 fill-green-700' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
                    <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/>
                  </svg>
                  <span className='block font-bold mt-2'>Loading...</span>
                </div>
              : data?.filter((item: any) => item.is_closed === isClose).map((item: any, index: number) => (
                  <CardRestaurant key={index} data={item} />
                ))
          }
        </div>
        {
          !isLoading && <div className='flex justify-center my-6 w-full'>
            <button
              className='rounded-md md:w-80 w-64 border border-blue-950 text-blue-950 uppercase px-4 py-2'
              onClick={() => handleLoadMore()}
            >
              Load More
            </button>
          </div>
        }
      </section>
    </main>
  )
}

export default Home