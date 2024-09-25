import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from './ui/sheet';
import Link from 'next/link';


const Nav = () => {
  return (
    <div className='w-[100dvw] h-[7dvh] flex items-center sticky z-10 top-0 left-0 backdrop-blur-3xl justify-between shadow border-b-2 rounded-b-lg'>
      <div className='flex space-x-10 justify-between px-5'>
        <div className='lg:hidden flex items-center'>
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent className='h-full'>
              <div className='h-full relative'>
                <SheetHeader><Link href={'/'}>Home</Link></SheetHeader>
                <SheetHeader><Link href={'/dashboard'}>Dashboard</Link></SheetHeader>
                <SheetHeader><Link href={'/about'}>About</Link></SheetHeader>
                <SheetHeader><Link href={'/contactus'}>Contact Us</Link></SheetHeader>
                <SheetFooter className='absolute bottom-6 left-0'><Link href={'/signup'}>Sign Up</Link></SheetFooter>
                <SheetFooter className='absolute bottom-0 left-0'><Link href={'/login'}>Login</Link></SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Link href={'/'} >
          <div className='text-3xl text-white'>EmailGo</div>
        </Link>
      </div>
      <div className='flex items-center pr-6'>
        <div className='lg:flex space-x-10 justify-evenly px-10 hidden'>
          <Link href={'/'} >
            <div className='text-white text-lg'>Home</div>
          </Link>
          <Link href={'/dashboard'} >
            <div className='text-white text-lg'>Dashboard</div>
          </Link>
          <Link href={'/about'} >
            <div className='text-lg text-white'>About</div>
          </Link>
          <Link href={'/contactus'} >
            <div className='text-white text-lg'>Contact Us</div>
          </Link>
        </div>
        <div className='flex items-center space-x-1'>
          <Link href={'/login'} >
            <div className='text-white text-lg'>Login</div>
          </Link>
          <div className='text-2xl'>/</div>
          <Link href={'/signup'} >
            <div className='border bg-white text-black text-lg border-white rounded-xl group px-2'>Signup{" "}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav