import React from 'react';
import products_1 from "../../../public/assets/images/p1.png";
import products_2 from "../../../public/assets/images/p2.png";
import products_3 from "../../../public/assets/images/p3.png";
import products_4 from "../../../public/assets/images/p4.png";
import products_5 from "../../../public/assets/images/p5.png";
import products_6 from "../../../public/assets/images/p6.png";
import products_7 from "../../../public/assets/images/p7.png";
import products_8 from "../../../public/assets/images/p8.png";
import shop_img from "../../../public/assets/images/saving-img.png";
import { Link } from '@inertiajs/react';

const Shop = () => {

    const products = [
        {
            image: products_1,
            name: "Ring",
            price: "$200"
        },
        {
            image: products_2,
            name: "Watch",
            price: "$300"
        },
        {
            image: products_3,
            name: "Teddy Bear",
            price: "$110"
        },
        {
            image: products_4,
            name: "Flower Bouquet",
            price: "$45"
        },
        {
            image: products_5,
            name: "Teddy Bear",
            price: "$95"
        },
        {
            image: products_6,
            name: "Flower Bouquet",
            price: "$70"
        },
        {
            image: products_7,
            name: "Watch",
            price: "$400"
        },
        {
            image: products_8,
            name: "Ring",
            price: "$450"
        },
    ]

    return (
        <section id='shop'>
            <section className='section_1 py-20'>
                <h1 className='title pb-10 text-4xl text-center font-bold uppercase'>
                    Latest Products
                </h1>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        products.map((product, index) => (
                            <div key={index} className='product bg-gray-200 text-center'>
                                <div>
                                    <p className='bg-white rounded-full pt-4 m-2 w-14 h-14'>New</p>
                                </div>
                                <div>
                                    <img loading='lazy' className='h-40 mx-auto my-0' src={product.image} alt="products-img" />
                                </div>
                                <div className='flex justify-between items-center p-4'>
                                    <Link href='#' className='text-sky-950 font-bold'>{product.name}</Link>
                                    <Link href='#'>Price <span className='text-rose-600'>{product.price}</span></Link>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
                <div className='text-center my-16'>
                    <Link className='text-white bg-rose-400 border-rose-400 uppercase py-4 px-8 rounded-md hover:bg-transparent hover:border-rose-500 border-1 w-44' href='#'>View All Products</Link>
                </div>
            </section>
            <section className='section_2 bg-blue-400 rounded-md text-white flex items-center gap-14 p-10'>
                <div className='w-1/2 width'>
                    <img loading='lazy' src={shop_img} alt="shop-img" />
                </div>
                <div className='w-1/2 width flex flex-col gap-10'>
                    <h1 className='text-4xl font-bold uppercase'>
                        Best Savings on new arrivals
                    </h1>
                    <p>
                        Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
                    </p>
                    <div className='flex gap-10 items-center'>
                        <Link className='bg-blue-700 border-blue-700 py-3 px-10 hover:bg-transparent hover:text-blue-700 hover:border-blue-700 border-1' href='#'>Buy Now</Link>
                        <Link className='bg-white text-black border-white py-3 px-10 hover:bg-transparent hover:text-white hover:border-white border-1' href='#'>See More</Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Shop;
