import { price } from "@/dummy/data"

const Header = ({
  isClose, setIsClose, valuePrice, setValuePrice, valueCategory, setValueCategory, dataCuisine, handleClearFilter
}: {
  isClose: boolean,
  setIsClose: Function,
  valuePrice: string,
  setValuePrice: Function
  valueCategory: string,
  setValueCategory: Function,
  dataCuisine: any,
  handleClearFilter: Function
}) => {
  return (
    <nav className='w-full px-4 py-2'>
      <div className='container mx-auto w-full lg:w-10/12 md:mt-20 mt-16'>
        <h1 className='md:text-4xl text-2xl font-extralight'>Restaurants</h1>
        <span className='block md:mt-4 mt-2 font-extralight w-full md:w-3/5 lg:w-2/3 md:text-lg text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi dolor, cum quas eveniet distinctio. Repellendus earum enim dolore culpa assumenda eveniet esse iure voluptatibus itaque, deserunt odio adipisci doloremque!</span>
      </div>

      <div className='mt-4 py-6 border-y border-gray-400/50'>
        <div className='container mx-auto w-full lg:w-10/12 md:flex justify-between items-center'>
          <div className='flex flex-wrap items-center md:space-x-8 space-x-3'>
            <span className='md:text-lg text-sm'>Filter By :</span>
            <button
              onClick={() => setIsClose(!isClose)}
              className='flex space-x-2 items-center border-b border-gray-400/50 py-1 md:px-2'
            >
              <div className={`border ${isClose ? 'border-gray-400 bg-red-600' : 'border-gray-400 bg-green-600'} rounded-full h-3 w-3`} />
              <span className='block md:text-lg text-sm'>Open now</span>
            </button>
            <div className='relative'>
              <select
                value={valuePrice}
                onChange={(e:any) => setValuePrice(e.target.value)}
                className='flex justify-between md:w-36 w-24 items-center outline-none border-b border-gray-400/50 px-2 py-1'>
                <option disabled value='' className='md:text-lg text-sm'>Price</option>
                {
                  price.map((item: any, index: number) => (
                    <option key={index} value={item.value} className='md:text-lg text-sm'>{ item.name }</option>
                  ))
                }
              </select>
            </div>
            <div className='relative'>
              <select
                value={valueCategory}
                onChange={(e:any) => setValueCategory(e.target.value)}
                className='flex justify-between md:w-36 w-24 items-center outline-none border-b border-gray-400/50 px-2 py-1'>
                <option disabled value='' className='md:text-lg text-sm'>Category</option>
                {
                  dataCuisine.map((item: any, index: number) => (
                    <option key={index} value={item.value} className='md:text-lg text-sm'>{ item.label }</option>
                  ))
                }
              </select>
            </div>
          </div>
          <button
            onClick={() => handleClearFilter()}
            className='md:w-24 w-32 mt-4 px-2 py-2 rounded-lg border border-gray-400 text-gray-400 uppercase md:text-sm text-xs text-center'
          >
            Clear All
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Header