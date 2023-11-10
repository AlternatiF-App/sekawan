import { BsStarFill, BsStar } from 'react-icons/bs'

const Star = ({ rate, page }: { rate: number, page: string }) => {
  return (
    <div className='flex items-center space-x-0.5'>
      <BsStarFill className={`w-4 h-4 ${ rate >= 1 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`w-4 h-4 ${ rate >= 2 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`w-4 h-4 ${ rate >= 3 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`w-4 h-4 ${ rate >= 4 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
      <BsStarFill className={`w-4 h-4 ${ rate >= 5 ? (page === 'detail' ? 'text-yellow-500' : 'text-blue-950') : 'text-gray-400' }`} />
    </div>
  )
}

export default Star
