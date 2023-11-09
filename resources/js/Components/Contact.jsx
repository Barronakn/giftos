import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='py-20'>
            <h1 className='title pb-10 text-4xl font-bold uppercase'>
                Contact Us
            </h1>
            <form className='flex flex-col gap-5 justify-center items-center' action="#">
                <input className='w-1/2' placeholder='Name' type="text" name="name" id="name" />
                <input className='w-1/2' placeholder='Email' type="email" name="email" id="email" />
                <input className='w-1/2' placeholder='Phone' type="tel" name="phone" id="phone" />
                <textarea className='w-1/2 resize-none' placeholder='Message' name="message" id="message" cols="30" rows="5"></textarea>
                <input className='text-white bg-rose-500 border-rose-500 uppercase py-3 px-6 hover:bg-transparent hover:text-rose-500 hover:border-rose-500 border-1 w-44 cursor-pointer' type="submit" value="Send" />
            </form>
        </section>
    );
}

export default Contact;
