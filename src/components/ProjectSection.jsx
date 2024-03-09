import React, { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
const ProjectSection = () => {
    const scrollref = useRef(null)

    const hScrollLeft = () => {
        scrollref.current.scrollLeft += 500;
    }
    const hScrollRight = () => {
        scrollref.current.scrollLeft -= 500;
    }
    return (
        <div data-aos="fade-left" className='mb-20'>
            <h1 className='text-5xl lg:text-7xl mb-10   bg-gradient-to-r inline-block text-transparent bg-clip-text   from-slate-100   to-purple-600'>My Projects</h1>
            <div ref={scrollref} className='scroll-hide flex gap-5 overflow-x-scroll lg:p-3 '>

                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className='flex items-center  gap-5 text-white justify-center'>
                <HiArrowSmLeft onClick={hScrollRight} className=' text-xl lg:text-2xl cursor-pointer text-yellow-500 lg:block' />
                <h1 className='text-lg text-white lg:bg-gradient-to-r inline-block text-transparent bg-clip-text from-red-00  to-purple-100'>Slide for more </h1>
                <HiArrowSmRight onClick={hScrollLeft} className='text-xl lg:text-2xl cursor-pointer text-yellow-500  lg:block' />

            </div>

        </div>
    )
}

export default ProjectSection
