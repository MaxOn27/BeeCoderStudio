"use client"

import React, {Fragment} from 'react';
import Image from 'next/image';

import github from '../../../public/icons/github.svg'
import linkedin from '../../../public/icons/linkedin.svg'
import Link from "next/link";
import {Typography} from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="w-full flex justify-around items-center">
      <Typography
        as="div"
        color="white" className="flex items-center relative m-6 font-bold text-xlont-bold">
          <p className="p-2 bg-black text-yellow-500 rounded-l-lg">BEE CODER</p>
          <p className="p-2 bg-yellow-500 text-black rounded-r-lg">STUDIO</p>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/max-tyzhnenko-9a5a321b4/">
            <Image
              className="text-white m-6"
              src={linkedin}
              alt="Watch my GitHub"
              width={25}
              height={25}
            ></Image>
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MaxOn27">
            <Image
              className="text-white m-6"
              src={github}
              alt="Watch my GitHub"
              width={25}
              height={25}
            ></Image>
          </Link>
        </li>
      </ul>
      <Typography color="white" className="font-bold">
        &copy; 2023 BeeCoderStudio
      </Typography>
    </div>

  );
};

export default Footer;