import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Nav = () => {
    const { url } = usePage();

    const menus = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Shop",
            link: "/#shop"
        },
        {
            name: "Why Us",
            link: "/#whyus"
        },
        {
            name: "Testimonial",
            link: "/#testimonial"
        },
        {
            name: "Contact Us",
            link: "/#contact"
        }
    ]

    return (
        <nav className='fixed mx-20 left-0 right-0 bg-white'>
            <div className='text-center py-4'>
                <Link className='text-3xl uppercase font-bold' href='/'>Giftos</Link>
            </div>
            <ul className=' bg-rose-100 uppercase flex justify-evenly p-4 items-center rounded-ss-lg rounded-se-lg'>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <Link className={url === menu.link ? "bg-white p-2" : ""} href={menu.link}>{menu.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
