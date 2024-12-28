import React from 'react'
import Image from 'next/image'

const Navbar = () => {

    return (
        <nav className="logo bg-white w-[80vw] left-[10vw]  p-3 rounded-xl sticky top-10 flex justify-between items-center ">
            <div className='flex items-center gap-8'>
                <div className="logo flex items-center">
                    <Image src="/Branchify.png" width={50} height={50} alt='Logo' />
                    <h1 className='font-bold text-lg'>Branchify</h1>
                </div>
                <div className=''>
                    <ul className='flex items-center  gap-4'>
                        <li>Templates</li>
                        <li>Discover</li>
                        <li>Pricing</li>
                        <li>Learn</li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <button className='font-semibold border-2 border-black rounded p-2 text-sm'>Login</button>
                <button className='font-semibold border-2 border-black rounded p-2 text-sm'>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar
