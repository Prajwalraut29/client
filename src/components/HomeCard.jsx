import React from 'react'

const HomeCard = () => {
    return (
        <div className='flex text-white  flex-col lg:flex-row gap-10 lg:gap-0  justify-between items-center mb-20 lg:mb-36'>
            <div data-aos="fade-up-right" className='flex  flex-col gap- lg:w-[50%]'>
                <h1 className='text-5xl lg:text-7xl mb-10   bg-gradient-to-r inline-block text-transparent bg-clip-text   from-slate-100   to-purple-600'>Hey </h1>
                <p className='text-gray-300 text-xl lg:text-2xl'>My name is Prajwal, and I am a <span className='bg-gradient-to-r inline-block text-transparent bg-clip-text   from-red-400   to-purple-700'>Full Stack Developer</span>. I am 22 years old from india, focusing and creating web applications, design systems that adds growth to your businesses and more. Over these years, I have developed various Web-App, conducted workshops and collaborated on diverse projects  </p>
                <p className='text-gray-300 text-xl lg:text-2xl'>I'm committed to furthering my skills an achieving new milestones in my career. let's connect and create Something amazing together </p>
            </div>

            <div data-aos="fade-up-left" className='text-gray-300 text-xl lg:text-2xl'>
                <img className=' rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto  object-cover ' src='https://i.postimg.cc/gJgV7Jrx/photo-2024-05-10-12-52-53.jpg' alt="" />
            </div>

        </div>

    )
}

export default HomeCard
