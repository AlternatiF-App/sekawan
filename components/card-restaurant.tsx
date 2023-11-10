import Image from 'next/image'
import Link from 'next/link'
import { BsStarFill, BsStar } from 'react-icons/bs'
import Star from './star'

const CardRestaurant = ({ data }: { data: any }) => {
  const { name, photo, cuisine, price_level, is_closed, rating, location_id } = data
  const rate = parseInt(rating)
  const open = is_closed ? 'bg-red-400' : 'bg-green-400'

  return (
    <div>
      <div className='h-56 w-full'>
        <Image
          src={photo?.images.original.url}
          className='h-full rounded-md object-cover'
          alt={name}
          title={name}
          width={1280}
          height={865}
        />
      </div>
      <div className='my-2 px-4'>
        <h1 className='font-light h-14'>{ name }</h1>
        <Star rate={rate} page='list' />
        
        <div className='mt-3 flex justify-between items-center'>
          <div className='text-xs text-gray-400 flex items-center space-x-2'>
            <span className='block'>{ cuisine?.length > 0 && cuisine[0]?.name }</span>
            <div className='h-1 w-1 bg-gray-400 rounded-full' />
            <span className='block'>{ price_level }</span>
          </div>
          <div className='text-xs text-gray-400 flex items-center space-x-2'>
            <div className={`h-2 w-2 rounded-full ${open}`} />
            <span className='block uppercase'>{ is_closed ? 'Closed' : 'Open Now' }</span>
          </div>
        </div>

        <Link href={`/restaurant/${location_id}`}>
          <button
            className='w-full rounded-md bg-blue-950 text-white uppercase px-4 py-2 mt-4'
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardRestaurant