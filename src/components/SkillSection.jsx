import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = () => {
    return (
        <div data-aos="fade-right" className='mb-20 lg:mb-36'>
            <h1 className='text-5xl lg:text-7xl mb-10   bg-gradient-to-r inline-block text-transparent bg-clip-text   from-slate-100   to-purple-600'>My Skills</h1>
            <div className='h-[300px] overflow-y-scroll select-none scroll-bar '>
                <SkillCard title={"Javascript"} value={90} />
                <SkillCard title={"ReactJS"} value={90} />
                <SkillCard title={"Redux"} value={95} />
                <SkillCard title={"NodeJS"} value={80} />
                <SkillCard title={"ExpressJs"} value={85} />
                <SkillCard title={"MongoDB"} value={85} />
                <SkillCard title={"C & C++"} value={80} />
                <SkillCard title={"Java"} value={75} />
                <SkillCard title={"MySQL"} value={75} />

            </div>

        </div>
    )
}

export default SkillSection
