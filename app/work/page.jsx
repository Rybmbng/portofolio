"use client";

import { motion } from "framer-motion";
import React, { useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'Simpel Game With Javascript',
        description: 'a text-based game created with JavaScript. Players have attributes such as XP, health, and gold, and can fight against monsters such as slimes, fanged beasts, and dragons. Players can perform actions such as buying weapons, attacking, or dodging. This game has several locations such as town square, store, and cave, where each location offers different action options. Apart from that, there is also an Easter egg feature in the form of a number guessing game.',
        stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
        image:'/assets/project/simpel-js.png',
        live: "https://codepen.io/Rybmbng/pen/VwJoBWo",
        github: "https://github.com/Rybmbng/simpel-game-with-javascript",
    },
    {
        num: '02',
        category: 'frontend',
        title: 'Random Quotes With React',
        description: 'This website is a simple application that displays random quotes. When a user opens a page or clicks a button, a new quote appears. This app requires JavaScript to run properly and focuses on a simple, lightweight experience. This website was probably built using a modern framework such as React or Next.js',
        stack:[{name:"React.js"}, {name:"Node.js"}, {name:"Api"}],
        image:'/assets/project/random.png',
        live: "https://random-quotes-gamma-tawny.vercel.app/",
        github: "https://github.com/Rybmbng/Random-Quotes.git",
    },
    {
        num: '03',
        category: 'Embedded Project',
        title: 'Vending Machine Rice',
        description: 'This Arduino Mega based rice vending machine is an automated solution for rice distribution, utilizing several integrated electronic components and sensors to produce an efficient and easy to use system',
        stack:[{name:"Arduino"}, {name:"C++"}, {name:"Fritzing"}],
        image:'/assets/project/beras.png',
        live: "#",
        github: "https://github.com/Rybmbng/Vending-Machine-Rice.git",
    },    
    
]

const Work = () =>{
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]); 
    } 

    return(
        <motion.section 
        intial={{opacity:0}} 
        animate={{opacity:1, transition:{delay:2.5,duration:0.4,ease:"easeIn"}}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]"> 
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-beetween order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* {OUTLINE} */}
                            <div className="text-white text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duratio-500 capitalize">{project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                })}
                            </ul>
                            <div className="border border-white/20">
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link> 
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Swiper 
                        spaceBetween={30} 
                        slidesPerView={1} 
                        className="xl:h-[520px] xl:w-[600px] xl: mb-12"
                        onSlideChange={handleSlideChange}>
                            {projects.map((project,index)=>{
                                return <SwiperSlide key={index} className="w-full ">
                                    <div className="h-[440px] relative group flex justify-center
                                    items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image 
                                            src={project.image}
                                            fill
                                            className="object-cover"
                                            alt=""
                                            quality={100}
                                            />                                           

                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <div className="h-full w-full flex justify-between">
                            <WorkSliderBtns  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                            xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex
                            justify-center items-center transition-all duration-500"
                            />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work