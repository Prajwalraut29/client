import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
const Contact = () => {
    return (
        <div data-aos="zoom-in-up" className='mb-20 lg:mb-36 flex flex-col items-center lg:flex-row justify-between'>
            <span className='text-3xl  lg:text-2xl font-bold  uppercase  bg-gradient-to-r inline-block text-transparent bg-clip-text   from-slate-100   to-purple-600 lg:mb-0 rotate-0 lg:-rotate-90'>Get Started!</span>

            <div className='flex flex-col   items-center'>
                <h1 className='text-6xl lg:text-7xl mb-10   bg-gradient-to-r inline-block text-transparent bg-clip-text   from-slate-100   to-purple-600'>Contact me </h1>
                <div className='flex flex-col items-center font-mono text-xl lg:text-3xl text-white gap-5 lg:flex-col'>
                    <a className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' href="mailto:prajwalraut36@gmail.com">prajwalraut36@gmail.com</a>
                    <a className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' href="tel:+917620384967">+91 7620384967</a>
                </div>
                <div className='flex gap-5 items-center text-3xl lg:text-5xl text-white py-5 '>
                    <AiFillGithub />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                    <AiFillTwitterCircle />
                </div>
            </div>

            <div  >
                <form className='flex flex-col p-3'>
                    <input className='bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]' type="text" name='name' placeholder='Enter your name ' />
                    <input className='bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]' type="text" name='email' placeholder='Enter your email ' />
                    <textarea className='bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]' name="message" id="" placeholder='Enter your message'></textarea>

                    <button className='px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg '>Send Message </button>
                </form>
            </div>

        </div>
    )
}

export default Contact
