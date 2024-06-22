import React from 'react';
import { Menu } from 'lucide-react';
import {Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';


const Nav = () => {
  return (
    <div className='w-full h-[7dvh] flex items-center justify-between shadow border-b-2 rounded-b-lg'>
        <div className='flex space-x-10 justify-between px-5'>
            <Sheet>
              <SheetTrigger><Menu /></SheetTrigger>
              <SheetContent>
                <SheetHeader>Hello</SheetHeader>
              </SheetContent>
            </Sheet>
            <Button className='text-3xl text-white'>EmailGo</Button>
        </div>
        <div className='flex space-x-10 justify-evenly px-10'>
          <Button className='text-white text-lg'>Home</Button>
          <Button className='text-white text-lg'>Dashboard</Button>
          <Button className='text-lg text-white'>About</Button>
          <Button className='text-white text-lg'>Contact Us</Button>
          <div className='flex items-center space-x-1'>
            <Button className='text-white text-lg'>Login</Button>
            <div className='text-2xl'>/</div>
            <Button className='border text-white text-lg border-white rounded-lg px-2'>Signup</Button>
          </div>
        </div>
    </div>
  )
}

export default Nav