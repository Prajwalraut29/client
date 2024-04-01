import React from 'react'
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
const Data = [
    {
        id: 1,
        name: " Tasty-Bites - Food Orderning Platform",
        img: "https://rb.gy/28n3aj",
        desc: "Easily find your favorite food items ",
        github: "https://github.com/Prajwalraut29/TastyBites",
        hostlink: "https://tasty-bites-azure.vercel.app/"
    },
    {
        id: 2,
        name: " Swadesh-Chat - Online Chat-app  ",
        img: "https://rb.gy/w22270",
        desc: "creating a chat application using Socket.io ",
        github: "https://github.com/Prajwalraut29/swadesh-chat",
        hostlink: "https://app-frontend-chat.onrender.com/"
    }, {
        id: 3,
        name: " Shopie - Online Shopping Site",
        img: "https://rb.gy/amtc2z",
        desc: "Quick Food Search : Easily find your favorite ",
        github: "https://github.com/Prajwalraut29/shopie-ecommerece-webapp",
        hostlink: "https://shopie-ecommerece-webapp.vercel.app"
    }, {
        id: 4,
        name: " Mba-chai-wala Clone Site  ",
        img: "",
        desc: "we served the best chai to you totoototototoo",
        github: "https://github.com/Prajwalraut29/Mba-chai-wala",
        hostlink: "https://mbachaiwala2.netlify.app/"
    },
    {
        id: 4,
        name: "HomeChef- recipe Webapp  ",
        img: "",
        desc: "HomeChef - get Best recipe for your Food",
        github: "https://github.com/Prajwalraut29/HomeChef.com",
        hostlink: "https://recipe-mernapp.vercel.app/"
    },
    {
        id: 5,
        name: "Chocklate-Saga  ",
        img: "",
        desc: "eat chocklate and play games with us ",
        github: "https://github.com/Prajwalraut29/choco-saga",
        hostlink: "https://choco-saga.vercel.app/"
    },
    {
        id: 6,
        name: "Advanced-Todo App  ",
        img: "",
        desc: "App that enhaced your productivity ",
        github: "https://github.com/Prajwalraut29/advanced-todo-app",
        hostlink: "https://advanced-todo-app-sable.vercel.app/"
    }
]

const ProjectCard = () => {
    return (
        <div data-aos="flip-down" className='p-4 m-4 flex gap-5 items-center'>
            {
                Data.map((item) => {
                    return <div key={item.id} className>
                        <div className='h-fit w-[300px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl'>
                            <a href="">
                                <img className='lg:h-48 h-[200px] w-full object-cover object-center' src={item.img} alt="" />
                            </a>
                            <div className='p-4 flex flex-col lg:gap-3'>
                                <h1 className='text-2xl text-white'>{item.name}</h1>
                                <p className='text-lg lg:text-xl font-bold text-gray-400'>
                                    {item.desc}
                                </p>
                                <div className='flex items-center justify-between mx-4 '>
                                    <a href={item.github}> <FaGithub className='text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer' size={20} /></a>
                                    <a href={item.hostlink}><GrDeploy className='text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer' size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProjectCard
