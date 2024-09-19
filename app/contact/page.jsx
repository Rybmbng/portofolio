"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        content: "(+62) 831 8249 5598",
    }, {
        icon: <FaEnvelope />,
        title: "Email",
        content: "Reyvans.pahlevi04@gmail.com",
    }, {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        content: "Jakarta, Indonesia",
    }
];

const Contact = () => {
    const [service, setService] = useState("");
    const [submitMethod, setSubmitMethod] = useState("whatsapp"); // default ke WhatsApp

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        if (submitMethod === "whatsapp") {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=+6283182495598&text=Hai%2C+Saya+${firstname}+${lastname}%0AEmail%3A+${email}%0AService%3A+${service}%0AMessage%3A+${message}`;
            window.open(whatsappUrl, '_blank');
        } else if (submitMethod === "email") {
            const mailtoUrl = `mailto:Reyvans.pahlevi04@gmail.com?subject=${encodeURIComponent('Contact Form Submission')}&body=Hai, Saya ${firstname} ${lastname}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
            window.open(mailtoUrl, '_blank');
        }
    };

    return (
        <motion.section 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: .4, ease: "easeIn"}}
            className="py-6"
        > 
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-4xl text-accent"> Let's Work Together </h3>
                            <p className="text-white/60">Looking to develop innovative and efficient digital solutions? We're here to help! With experience in IoT development and web technologies, we offer reliable services tailored to your business needs. Let's collaborate to achieve our shared goals! Contact us today to discuss how we can work together.</p>
                            <div className="grid">
                                <Input type="text" placeholder="Firstname" name="firstname" required />
                                <Input type="text" placeholder="Lastname" name="lastname" required />
                                <Input type="email" placeholder="Email" name="email" required />
                                <Input type="text" placeholder="Phone" name="phone" required />
                            </div>

                            <Select onValueChange={setService}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="iOT Project">iOT Project</SelectItem>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Design">Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className="h-[200px]" placeholder="Type your message" name="message" required />

                           
                                <Button 
                                    onClick={() => setSubmitMethod('whatsapp')} 
                                    variant={submitMethod === 'whatsapp' ? "primary" : "outline"}
                                >
                                    Send via WhatsApp
                                </Button>
                                <Button 
                                    onClick={() => setSubmitMethod('email')} 
                                    variant={submitMethod === 'email' ? "primary" : "outline"}
                                >
                                    Send via Email
                                </Button>


                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">       
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.content}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;
