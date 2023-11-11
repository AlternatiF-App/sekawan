import { HiChevronDown } from 'react-icons/hi'

const Header = () => {

  return (
    <nav className='w-full'>
      <div className='container mx-auto md:w-11/12 w-10/12 md:mt-20 mt-16'>
        <h1 className='md:text-4xl text-2xl font-extralight'>Restaurants</h1>
        <span className='block md:mt-4 mt-2 font-extralight w-2/3 md:text-lg text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi dolor, cum quas eveniet distinctio. Repellendus earum enim dolore culpa assumenda eveniet esse iure voluptatibus itaque, deserunt odio adipisci doloremque!</span>
      </div>

      <div className='mt-4 py-6 border-y border-gray-400/50'>
        <div className='container mx-auto md:w-11/12 w-10/12 flex justify-between items-center'>
          <div className='flex flex-wrap items-center md:space-x-8 space-x-3'>
            <span className='md:text-lg text-sm'>Filter By :</span>
            <button
              className='flex space-x-2 items-center border-b border-gray-400/50 py-1 md:px-2'
            >
              <div className='border border-gray-400 rounded-full h-3 w-3' />
              <span className='block md:text-lg text-sm'>Open now</span>
            </button>
            <div className='relative'>
              <div className='flex justify-between md:w-24 w-14 items-center border-b border-gray-400/50 py-1 md:px-2'>
                <span className='md:text-lg text-sm'>Price</span>
                <HiChevronDown className='h-4 w-4' />
              </div>
            </div>
            <div className='relative'>
              <div className='flex justify-between md:w-36 w-24 items-center border-b border-gray-400/50 py-1 md:px-2'>
                <span className='md:text-lg text-sm'>Category</span>
                <HiChevronDown className='h-4 w-4' />
              </div>
            </div>
          </div>
          <button
            className='md:w-24 w-32 px-2 py-2 rounded-lg border border-gray-400 text-gray-400 uppercase md:text-sm text-xs text-center'
          >
            Clear All
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Header