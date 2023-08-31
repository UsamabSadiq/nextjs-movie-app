import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Herosection = ({ title, url }) => {
    return (
        <>
            <div className="main my-3 ">
                <div className="backcolor bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center  p-3 gap-4 h-auto md:h-[80vh]">

                        <div className='child_1'>
                            <h3 className='uppercase font-extrabold text-5xl mb-7'>{title}</h3>
                            <p className='uppercase font-semibold text-md mb-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum perspiciatis ullam maiores numquam sed!</p>
                            <Link href='/movie'>
                                <button className='font-semibold bg-black text-white hover:bg-white hover:text-black rounded-full px-4 py-2'>
                                    Expolre Movies
                                </button>
                            </Link>
                        </div>

                        <div className='child_2'>
                            <Image src={url} height={400} width={400} />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection
