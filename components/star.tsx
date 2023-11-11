import { BsStarFill, BsStar } from 'react-icons/bs'

const Star = ({ rate, page }) => {
  return (
    <div className='flex items-center space-x-0.5'>
      <BsStarFill className={`md:w-4 w-3 md:h-4 h-3 ${ rate >= 1 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`md:w-4 w-3 md:h-4 h-3 ${ rate >= 2 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`md:w-4 w-3 md:h-4 h-3 ${ rate >= 3 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`md:w-4 w-3 md:h-4 h-3 ${ rate >= 4 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`md:w-4 w-3 md:h-4 h-3 ${ rate >= 5 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
    </div>
  )
}

export default Star