import React, { useEffect } from 'react'
import PortfolioCard from '../components/PortfolioCard'
import HomeCard from '../components/HomeCard'
import AboutPage from '../components/AboutPage'
import ProjectSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'
import Contact from '../components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        }, [])
    })
    return (
        <div className='w-[80vw] my-20 mx-auto  '>
            <PortfolioCard />
            <HomeCard />
            <AboutPage />
            <SkillSection />
            <ProjectSection />
            <Contact />
        </div>
    )
}

export default Home
