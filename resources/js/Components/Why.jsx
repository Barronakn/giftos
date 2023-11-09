import React from 'react';
import free from "../../../public/assets/images/free.svg"
import high_quality from "../../../public/assets/images/high-quality.svg"
import truck from "../../../public/assets/images/truck.svg"
import why_img from '../../../public/assets/images/gifts.png';
import { Link } from '@inertiajs/react';

const Why = () => {
    return (
        <section id='whyus' className='py-20'>
            <section className='pb-20'>
                <h1 className='title pb-10 text-4xl text-center font-bold uppercase'>
                    Why Shop With Us
                </h1>
                <div className='why-card flex gap-10 items-center justify-center mx-14'>
                    <div className='bg-gray-200 flex flex-col rounded-md justify-center items-center p-6'>
                        <img loading='lazy' className='h-16' src={truck} alt="truck-svg-img" />
                        <h3 className='py-4 text-lg'>Fast Delivery</h3>
                        <p className='text-center'>variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className='bg-gray-200 flex flex-col rounded-md justify-center items-center p-6'>
                        <img loading='lazy' className='h-16' src={free} alt="free-svg-img" />
                        <h3 className='py-4 text-lg'>Free Shiping</h3>
                        <p className='text-center'>variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className='bg-gray-200 flex flex-col rounded-md justify-center items-center p-6'>
                        <img loading='lazy' className='h-16' src={high_quality} alt="high_quality-svg-img" />
                        <h3 className='py-4 text-lg'>Best Quality</h3>
                        <p className='text-center'>variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
            </section>
            <section className='bg-violet-800 rounded-md text-white flex items-center gap-14 p-10'>
                <div className='w-1/2 width-img'>
                    <img loading='lazy' src={why_img} alt="why-img" />
                </div>
                <div className='w-1/2 width flex flex-col gap-10'>
                    <h1 className='text-4xl font-bold uppercase'>
                        Gifts for your loved ones
                    </h1>
                    <p>
                        Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                    </p>
                    <div className='flex gap-10 items-center'>
                        <Link className='bg-white text-black border-white py-3 px-10 hover:bg-transparent hover:text-white hover:border-white border-1' href='#'>Buy Now</Link>
                        <Link className='bg-violet-600 border-violet-600 py-3 px-10 hover:bg-transparent hover:text-violet-600 hover:border-violet-600 border-1' href='#'>See More</Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Why;
