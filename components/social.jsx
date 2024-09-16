import Link from "next/link";

import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/rybmbng"},
    {icon: <FaLinkedin />, path: "https://id.linkedin.com/in/reyvans-pahlevi-166642140"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/rybmbng/"},
]
const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
          {
            socials.map((item,index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })
          }
        </div>
    )
}

export default Social