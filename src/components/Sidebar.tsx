import React, {useState} from 'react'
import {BiBook, BiBookOpen} from "react-icons/bi";

const Sidebar = () => {
    const [side, setSide] = useState(false)
    const handleSide = () => {
        setSide(!side)
    }


    return (
        <div className='text-white select-none'>
            <div className='ml-2 md:ml-3 mt-60 fixed top-0 md:left-1/6'>
                <ul className='hidden md:block border-1 border-dashed bg-[#634848]'>
                    <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>upcoming shows.</li>
                    <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>merchandise.</li>
                    <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>media.</li>
                    <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>about.</li>
                    <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>contact.</li>
                </ul>

                <div onClick={ handleSide } className='fixed top-25 block md:hidden'>
                    { !side ? <BiBook size={20}/> : <BiBookOpen size={20}/> }
                </div>
                <div className={ !side ? 'fixed top-36 w-auto md:hidden' : 'fixed left-[-100%]' }>
                    <ul className='border-1 border-dashed bg-[#634848]'>
                        <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>upcoming shows.</li>
                        <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>merchandise.</li>
                        <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>media.</li>
                        <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>about.</li>
                        <li className='hover:border-1 hover:bg-[#C06E6E] p-2 py-5 pr-8 text-lg'>contact.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar