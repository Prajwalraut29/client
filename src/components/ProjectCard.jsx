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
        name: " Jobify - Search Your Job",
        img: "data:image/png;base64,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",
        desc: "jobify is the job platform to user get their job more faster no more struggle ",
        github: "https://github.com/Prajwalraut29/TastyBites",
        hostlink: "https://tasty-bites-azure.vercel.app/"
    },

    {
        id: 3,
        name: "HomeChef- recipe Webapp  ",
        img: "data:image/jpeg;base64,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",
        desc: "HomeChef - get Best recipe for your Food",
        github: "https://github.com/Prajwalraut29/HomeChef.com",
        hostlink: "https://recipe-mernapp.vercel.app/"
    },
    {
        id: 4,
        name: "Chocklate-Saga web App ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1duCFLiZIPKXYLunlwhcHrwkI3m1dk6Q_ng&s",
        desc: "eat chocklate and play games with us ",
        github: "https://github.com/Prajwalraut29/choco-saga",
        hostlink: "https://choco-saga.vercel.app/"
    },
    {
        id: 5,
        name: "Advanced-Todo web App  ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwu-PoDKsazxzc3IUxcx17ZpOy0EARw7M60Q&usqp=CAU",
        desc: "App that enhaced your productivity ",
        github: "https://github.com/Prajwalraut29/advanced-todo-app",
        hostlink: "https://advanced-todo-app-sable.vercel.app/"
    },
    {
        id: 6,
        name: " Swadesh-Chat - Online Chat-app  ",
        img: "https://rb.gy/w22270",
        desc: "creating a chat application using Socket.io ",
        github: "https://github.com/Prajwalraut29/swadesh-chat",
        hostlink: "https://app-frontend-chat.onrender.com/"
    }, {
        id: 7,
        name: " Shopie - Online Shopping Site",
        img: "https://rb.gy/amtc2z",
        desc: "Quick Food Search : Easily find your favorite ",
        github: "https://github.com/Prajwalraut29/shopie-ecommerece-webapp",
        hostlink: "https://shopie-ecommerece-webapp.vercel.app"
    }, {
        id: 8,
        name: " Mba-chai-wala Clone Site  ",
        img: "",
        desc: "we served the best chai to you totoototototoo",
        github: "https://github.com/Prajwalraut29/Mba-chai-wala",
        hostlink: "https://mbachaiwala2.netlify.app/"
    },


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
