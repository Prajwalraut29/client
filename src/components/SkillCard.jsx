import React from 'react'

const SkillCard = ({ title, value }) => {
    return (
        <div className='flex mb-4  gap-5 items-center justify-between backdrop-blur-xl  shadow-xl p-3 border-2 rounded-lg border-gray-400 mr-2'>
            <h3 className='text-xl text-white font-bold'>{title} </h3>
            <progress className='progress-bar ' max='100' value={value}></progress>
        </div>
    )
}

export default SkillCard
