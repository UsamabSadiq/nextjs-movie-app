import Image from 'next/image'
import Link from 'next/link'
// import { IoMdMenu } from "react-icons/io";
import React, { useState } from 'react'
const Header = () => {
    // const [show, setShow] = useState(false)
    return (
        <>
            <nav className='main shadow-xl'>
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 place-items-start">
                    <div className="logo">
                        <Link href="/">
                            <Image src="/images/movie_logo.png" alt="" height={100} width={100} />
                        </Link>
                    </div>
                    {/* <IoMdMenu className='sm:block md:hidden' /> */}
                    <div className='px-3 h-full w-full font-bold flex gap-5 justify-end items-center'>
                        <Link className='hover:text-red-600' href='/'>  Home </Link>
                        <Link className='hover:text-red-600' href='/about'>  About Us </Link>
                        <Link className='hover:text-red-600' href='/contact'>  Contact </Link>
                        <Link className='hover:text-red-600' href='/movie'>  Movie </Link>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
