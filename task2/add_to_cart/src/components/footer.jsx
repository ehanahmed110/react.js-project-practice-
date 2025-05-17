import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    

    return (
        <>
            <footer className=' bg-black text-white mt-6 pt-4 pb-4'>
                <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 space-x-16 p-4 '>
                <div>
                    <h1 className='text-3xl font-semibold capitalize'>our luxuries Store</h1>
                    <p className='text-[14px] mt-2 mb-4'>manage your home with our luxury Store.we provide you with our best</p>
                    <form action="#" method='post'>
                        <input className='p-1 border-amber-50 border-2' type="email" placeholder='Email Adress' />
                    </form>
                </div>
                <div>
                <ul className=' capitalize font-semibold'>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='/'>home</Link>         </li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./about' >about</Link>   </li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./service' >services</Link></li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./contact' >contact</Link> </li>
                   </ul>
                </div>
                <div>
                <ul className=' capitalize font-semibold'>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='/'>home</Link>         </li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./aout' >about</Link>   </li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./service' >services</Link></li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./contact' >contact</Link> </li>
                   </ul>
                </div>
                 <div>
                 <ul className=' capitalize font-semibold'>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='/'>home</Link>         </li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./about' >about</Link>   </li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./service' >services</Link></li>
                        <li className='hover:text-gray-400 cursor-pointer mt-2'><Link to='./contact' >contact</Link> </li>
                   </ul>
                 </div>
                 </div>
            </footer>
        </>
    )
}