'use client'

import Star from '@/components/star'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiFillPhone, AiOutlineComment } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { BiFoodMenu } from 'react-icons/bi'

const DetailPage = () => {
  const params = useParams()
  const [data, setData] = useState<any>([])
  const [reviews, setReviews] = useState<any>([])

  const getRestaurant = async () => {
    await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list/?location_id=${params.id}`, {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '564acb2c3cmsh08fdd079bc6f745p19e200jsn0ac5a09eba9e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    })
      .then((results) => {
        setData(results.data.data)
      })
  }

  const getReviews = async () => {
    await axios.get(`https://travel-advisor.p.rapidapi.com/reviews/list/?location_id=${params.id}&limit=20`, {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '564acb2c3cmsh08fdd079bc6f745p19e200jsn0ac5a09eba9e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    })
      .then((results) => {
        setReviews(results.data.data)
        console.log('cok', results.data.data)
      })
  }

  useEffect(() => {
    getRestaurant()
    getReviews()
  }, [])

  return (
    <div>
      <div className='w-full h-[500px] relative'>
        <Image
          src={data[0]?.photo.images.original.url}
          className='w-full h-full object-cover'
          alt={data[0]?.name}
          height={720}
          width={1280}
        />
        
        <div className='absolute w-full h-[500px] bg-black/60 top-0 text-white'>
          <nav className='container mx-auto w-10/12 py-4 px-6'>
            <div className='flex space-x-8 items-center'>
              <div className='flex items-center'>
                <AiFillPhone className='h-5 w-5 mr-2' />
                { data[0]?.phone }
              </div>
              <div className='flex items-center'>
                <FaLocationDot className='h-5 w-5 mr-2' />
                { data[0]?.address }
              </div>
            </div>
            <div className='flex flex-col py-20 items-center justify-center space-y-4'>
              <h2 className='text-2xl'>Welcome To</h2>
              <h1 className='font-bold text-6xl' >{ data[0]?.name}</h1>
              <div className='flex items-center space-x-4'>
                <Star rate={parseInt(data[0]?.rating)} page='detail' />
                <span className='block pt-1'>{ data[0]?.rating } ({ data[0]?.num_reviews }) </span>
              </div>
              <p className='bg-blue-950 px-4 py-2 rounded-md w-28'>
                { data[0]?.is_closed ? 'Closed' : 'Open Now' }
              </p>
            </div>
          </nav>
        </div>
      </div>

      <div className='container mx-auto w-10/12 px-6 py-4'>
        <div className='flex items-center'>
          <BiFoodMenu className='w-5 h-5 text-blue-950 mr-2' />
          <span className='block mr-2'>Cuisine : </span>
          {
            data[0]?.cuisine.map((item: any, index: number) => {
              return <span key={index} className='block' >{ item.name }{ data[0]?.cuisine.length !== index + 1 && ', ' }</span>
            })
          }
        </div>

        <div className='mt-6 font-extralight'>
          <span className='block text-2xl'>Description</span>
          <p className='text-justify'>{ data[0]?.description !== '' ? data[0]?.description : 'Tidak ada deskripsi' }</p>
        </div>

        <div className='mt-6 font-extralight'>
          <span className='block text-2xl'>Review</span>
          <div className='w-full overflow-x-auto flex space-x-6 py-4'>
            {
              reviews?.map((review: any, index: number) => (
                <div key={index} className='rounded-md px-4 py-4 border border-blue-950/20 shadow-md'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12'>
                      <Image
                        className='w-full h-full object-cover rounded-full'
                        src={review?.user.avatar.small.url}
                        alt={review.user.username}
                        height={480}
                        width={480}
                      />
                    </div>
                    <div>
                      <h1>{ review.user.username }</h1>
                    </div>
                  </div>

                  <div className='w-[300px] py-4'>
                    <span className='font-bold flex items-center'>
                      <AiOutlineComment className='h-5 w-5 mr-2' />
                      { review.title }
                    </span>
                    <div className='text-justify mt-4'>
                      { review.text.substring(0, 100) }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
