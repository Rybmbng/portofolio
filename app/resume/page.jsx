
"use client";

import { FaHtml5, FaPhp,FaGithub,FaWhatsapp,FaCertificate } from "react-icons/fa";
import { SiCplusplus, SiJavascript,SiArduino, SiEspressif } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaFreeCodeCamp } from "react-icons/fa";
import  Image  from "next/image";
import { motion } from "framer-motion";

const about=
    {
        title: "About me",
        description: "Here Description About me",
        info:[
            {
                fieldName: "Name",
                fieldValue: "Reyvans Pahlevi",
            },{
                fieldName: "Phone",
                fieldValue: "(+62) 831 8249 5598",
            },{
                icon:<FaWhatsapp />,
                fieldName: "Whatsapp",
                fieldValue: "(+62) 831 8249 5598",
                chatme : "https://wa.me/+6283182495598",

            },{
                fieldName: "Experience",
                fieldValue: "3+ Years",
                
            },{
                fieldName: "Nationality",
                fieldValue: "Indonesian",
            },{
                fieldName: "Email",
                fieldValue: "Reyvans.pahlevi04@gmail.com",
            },{
                fieldName: "Freelance",
                fieldValue: "Available",
            },{
                fieldName: "Language",
                fieldValue: "Bahasa,English",
            }
        ]
    };

const certificates = {
    icon: <FaCertificate />,
    title: "Certificates",
    description: "This is my certificate",
    info:[
        {
            judul: "HTML Dasar",
            teknologi: "HTML",
            penyelenggara: "Skilvul",
            url:"https://badgr.com/public/assertions/nBzqiY4TSemvRbxPash2SQ?identity__email=reyvans.pahlevi04@gmail.com&trk=public_profile_see-credential",
            icon:"/assets/logo/skilvul.png",
        },
        {
            judul: "Responsive Web Design",
            teknologi: "HTML",
            penyelenggara: "Freecodecamp.org",
            url:"https://freecodecamp.org/certification/rybmbng/responsive-web-design?trk=public_profile_see-credential",
            icon:<faFreCodeCamp />,
        },{
            judul: "JavaScript Dasar",
            teknologi: "JavaScript",
            penyelenggara: "Skilvul",
            url:"https://badgr.com/public/assertions/9rlAtKJTSbmHMzuD922Ewg?identity__email=reyvans.pahlevi04@gmail.com&trk=public_profile_see-credential",
            icon:"/assets/logo/skilvul.png",
        },
        {
            judul: "Legacy JavaScript Algorithms and Data Structures",
            teknologi: "JavaScript",
            penyelenggara: "Freecodecamp.org",
            url: "https://freecodecamp.org/certification/rybmbng/javascript-algorithms-and-data-structures?trk=public_profile_see-credential",
            icon:<faFreCodeCamp />
        },
        {
            judul: "JavaScript Algorithms and Data Structures(Beta)",
            teknologi: "JavaScript",
            penyelenggara: "Freecodecamp.org",
            url: "https://www.freecodecamp.org/certification/rybmbng/javascript-algorithms-and-data-structures-v8",
            icon:<faFreCodeCamp />
        },
        {
            judul: "C++ Dasar (Gold)",
            teknologi: "c++",
            penyelenggara: "SkilVul",
            url: "https://badgr.com/public/assertions/jheAqIivTzqNULauiWFpLA?identity__email=reyvans.pahlevi04@gmail.com",
            icon:"/assets/logo/skilvul.png",
        }
    ]

}

const education = {
        icon: <MdCastForEducation />,
        title: "My Education",
        description: "Information about my education",
        items:[
            {
                institution: "SMK Negeri 1 Lembah Melintang",
                course: "Teknik Komputer Dan Jaringan",
                duration: "2016-2019",
            },
            {
                institution: "Universitas Putra Indonesia YPTK Padang",
                course: "Sistem Komputer",
                duration: "2019-2023",
            },
            {
                institution: "FreeCodeCamp.org",
                course: "Web Development",
                duration: "2023-Present",
            },
        ]
}

const skill = {
    title: "My Skill",
    description: "Information about my skill",
    skillList:[
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <SiJavascript />,
            name: "JavaScript",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",    
        },
        {
            icon: <SiArduino />,
            name: "Arduino",
        },
        {
            icon: <SiEspressif />,
            name: "Espressif",
        }
        
    ]
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () =>{
    return(
    <motion.section 
        initial={{opacity:0}}
        animate={{opacity:1,transition:.4,ease:"easeIn"}}

        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
         <div className="container mx-auto">
            <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="certificate">Certificate</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>
                <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:.4,ease:"easeIn"}}

        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
                <ScrollArea className="min-h-[70vh] w-full">
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item,index)=>{
                                        return(
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.course}</h3> 
                                            <div className="flex items-center gap-3">
                                               <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60 ">{item.institution}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>  

                    <TabsContent value="certificate" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{certificates.title}</h3>
                            <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{certificates.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {certificates.info.map((item,index)=>{
                                        return(
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            
                                                <span className="text-accent">{item.teknologi}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.judul}</h3> 
                                                <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 ">{item.penyelenggara}</p>
                                            </div>
                                                 <span>
                                                    <Link href={item.url} className="text-white/60">
                                                    Certificate                                                    
                                                    <IoEyeSharp />
                                                    </Link> 
                                                </span>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="skills" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skill.title}</h3>
                            <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{skill.description}</p>
                                <ul className="grid h-[400px] grid-cols-2 flex justify-content:center   items-center lg:grid-cols-4 md:grid-cols-auto xl:gap-[30px]">
                                    {skill.skillList.map((item,index)=>{
                                        return(
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329]rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="about" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{about.description}</p>
                            <div className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {about.info.map((item,index)=>{
                                        return(
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            {item.icon && (
                                            <Link href={item.chatme} className="text-white/60">
                                                <div className="text-4xl text-accent mb-2">{item.icon}</div>
                                                </Link>
                                            )}
                                            
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.fieldName}</h3> 
                                            <div className="flex items-center gap-3">
                                                <p className="text-white/60 ">{item.fieldValue}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                </ScrollArea>
                </motion.div>
            </Tabs>
        </div>       
    </motion.section>
    )
}

export default Resume