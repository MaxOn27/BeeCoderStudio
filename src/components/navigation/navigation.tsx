import React from 'react';
import Link from 'next/link';

import {Button, Navbar, Typography, Input} from "@material-tailwind/react";

import "./navigation.css"

const Navigation = () => {
  return (
    <Navbar
      variant="gradient"
      color="transparent"
      className="w-full mx-auto max-w-screen-xl px-2 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="div"
          variant="h2"
          className="flex items-center relative m-6 font-bold text-xl"
        >
          <p className="p-2 bg-black text-yellow-500 rounded-l-lg">BEE CODER</p>
          <p className="p-2 bg-yellow-500 text-black rounded-r-lg">STUDIO</p>
        </Typography>
        <div id="navigation" className="ml-auto gap-1 md:mr-4">
          <ul className='flex items-center uppercase text-xl text m-6'>
            <li className='mx-8'>
              <Link href='/' className="from-center">Home</Link>
            </li>
            <li className='mx-8'>
              <Link href='/articles/create' className="from-center">Create article</Link>
            </li>
          </ul>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            crossOrigin=""
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;

// <nav id="navigation" className='w-full text-black flex justify-around items-center relative bg-blue-gray-700'>
//   <div className="w-2/5 flex items-center relative m-6 font-bold text-xl">
//     <p className="p-2 bg-black text-yellow-500 rounded-l-lg">BEE CODER</p>
//     <p className="p-2 bg-yellow-500 text-black rounded-r-lg">STUDIO</p>
//   </div>
//   <ul className='flex items-center uppercase text-xl text m-6'>
//     <li className='mx-8'>
//       <Link href='/' className="from-center">Home</Link>
//     </li>
//     <li className='mx-8'>
//       <Link href='/articles/create' className="from-center">Create article</Link>
//     </li>
//   </ul>
// </nav>