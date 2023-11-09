import React from 'react';
import header_img from '../../../public/assets/images/slider-img.png';
import { Link } from '@inertiajs/react';
const Header = () => {
    return (
        <header className='bg-rose-400 text-white flex justify-center items-center pt-44 px-24'>
            <div className='w-2/3 width flex flex-col items-start gap-16'>
                <h1 className='text-6xl font-bold'>
                    Welcome To Our Gift Shop
                </h1>
                <p>
                    Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                </p>
                <Link className='bg-rose-600 border-rose-600 uppercase py-4 px-8 rounded-md hover:bg-transparent hover:border-rose-700 border-1 w-44' href='#contact'>Contact Us</Link>
            </div>
            <div className='w-1/3 width'>
                <img loading='lazy' src={header_img} alt="header-img" />
            </div>
        </header>
    );
};

export default Header;
