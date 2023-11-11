import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Navbar = async () => {
  const { userId } = auth();

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 flex items-center justify-between md:px-12 px-5 py-3 bg-slate-100 shadow-lg'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='md:text-lg text-sm font-bold uppercase'>
            Resturants App
          </div>
        </Link>
      </div>
      <div className='flex items-center'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='md:text-base text-xs'
            >
              SignIn or SignUp
            </Link>
          </>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar
