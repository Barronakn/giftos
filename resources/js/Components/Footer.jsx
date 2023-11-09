import { Link } from '@inertiajs/react';
import React from 'react';

const Footer = () => {
    return (
        <footer className='my-10 bg-gray-900 text-gray-300'>
            <div className='footer-top flex gap-16 justify-center p-20'>
                <div className='w-1/4 width'>
                    <h2 className='text-2xl font-bold'>ABOUT US</h2>
                    <div className='flex flex-col gap-3 pt-8'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                        </p>
                    </div>
                </div>
                <div className='w-1/4 width flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold'>Newsletter</h2>
                    <form action="#">
                        <input className='w-full h-10 text-gray-500' type="email" name="email" id="email" placeholder='Enter your email' />
                        <input className='bg-rose-400 text-white px-6 py-2 hover:cursor-pointer hover:bg-rose-500 uppercase font-bold' type="submit" value="Subscribe" />
                    </form>
                </div>
                <div className='w-1/4 width'>
                    <h2 className='text-2xl font-bold'>NEED HELP</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                    </p>
                </div>
                <div className='w-1/4 width'>
                    <h2 className='text-2xl font-bold'>CONTACT US</h2>
                    <div className=' flex flex-col gap-3 pt-8'>
                        <Link className='hover:text-gray-50' href='#'>Gb road 123 london Uk</Link>
                        <Link className='hover:text-gray-50' href='#'>+01 12345678901</Link>
                        <Link className='hover:text-gray-50' href='#'>demo@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div className='footer-bottom mx-44'>
                <hr />
                <p className='text-center py-4'>
                    © 2023 All Rights Reserved <Link href='#'> By Free Html Templates</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
