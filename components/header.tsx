import { HiChevronDown } from 'react-icons/hi'

const Header = () => {
  return (
    <nav className='py-6 px-4'>
      <div className='container mx-auto w-full lg:w-10/12'>
        <h1 className='text-4xl font-extralight'>Restaurants</h1>
        <span className='block mt-4 font-extralight w-full lg:w-2/3 xl:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi dolor, cum quas eveniet distinctio. Repellendus earum enim dolore culpa assumenda eveniet esse iure voluptatibus itaque, deserunt odio adipisci doloremque!</span>
      </div>
      <div className='mt-4 py-6 px-4 border-y border-gray-400/50'>
        <div className='container mx-auto w-full lg:w-10/12 flex justify-between items-center'>
          <div className='flex flex-wrap items-center md:space-x-8 space-x-2'>
            <span>Filter By :</span>
            <button
              className='flex space-x-2 items-center border-b border-gray-400/50 py-1 md:px-2'
            >
              <div className='border border-gray-400 rounded-full h-3 w-3' />
              <span className='block'>Open now</span>
            </button>
            <div className='relative'>
              <div className='flex justify-between md:w-24 w-20 items-center border-b border-gray-400/50 py-1 px-2'>
                <span>Price</span>
                <HiChevronDown className='h-4 w-4' />
              </div>
            </div>
            <div className='relative'>
              <div className='flex justify-between md:w-36 w-28 items-center border-b border-gray-400/50 py-1 px-2'>
                <span>Category</span>
                <HiChevronDown className='h-4 w-4' />
              </div>
            </div>
          </div>
          <button
            className='w-36 px-4 py-2 rounded-md border border-gray-400 text-gray-400 uppercase text-sm'
          >
            Clear All
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
