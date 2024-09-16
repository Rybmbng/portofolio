"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

const formatDescription = (text) => text.replace(/\n/g, '<br />');
const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'We offer web development services that cover a range of technologies to meet your needs:\n\n1. HTML: The foundation of every website. We use HTML to create the basic structure of your web pages, ensuring content is neatly organized and easily accessible.\n2. PHP: A server-side programming language that enables the creation of dynamic and interactive features. We use PHP to develop the backend of your website, including data management and user interaction.\n3. Laravel: A modern PHP framework that accelerates web application development by providing a robust structure and advanced features such as authentication, routing, and ORM. We use Laravel to build scalable and secure web applications.\n4. Next.js: A React framework for building fast and efficient web applications with server-side rendering (SSR) and static page generation. Next.js enables a better user experience and faster loading times.',
    href: "#", // Placeholder link
  },
  {
    num: '02',
    title: 'IoT Project',
    description:
      'We develop Internet of Things (IoT) solutions that encompass various devices and platforms to enhance efficiency and connectivity. Our services include:\n\n1.Arduino & ESP: We design and build systems based on Arduino and ESP to connect various sensors and actuators for data collection and control.\n2.Raspberry Pi: We utilize Raspberry Pi for IoT applications that require further processing or server capabilities, such as monitoring, control, and automation.\n3.Applications & Web: We develop mobile and web applications to monitor and manage your IoT devices, ensuring data is easily accessible and controllable from anywhere.',
    href: "#", // Placeholder link
  },
  {
    num: '03',
    title: 'Android Project',
    description:
      'We create Android applications designed to provide a smooth and responsive user experience. Using Android Studio and Kotlin programming language, we offer:\n\n 1.Application Development: Building Android apps with advanced functionality, attractive design, and optimal performance.\n 2.System Integration: Integrating the app with various services and APIs to provide additional features and enhance interactivity.\n3.Testing & Maintenance: Ensuring app quality through thorough testing and regular maintenance to keep the app running smoothly.',
    href: "#", // Placeholder link
  },
  {
    num: '04',
    title: 'Design',
    description:
      'We offer design services covering various aspects to help you create a strong visual identity. Our services include:\n\n1.UI/UX Design: Designing user interfaces (UI) and user experiences (UX) to ensure your applications and websites are not only visually appealing but also easy to use.\n2.Logo Design: Creating logos that reflect your brand identity and make a strong impression on your audience.\n3.Mockup & Prototyping: Providing mockups and prototypes for visualizing and testing design concepts before final implementation.',
    href: "#", // Placeholder link
  },
];



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols:2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                <span className="text-5xl font-extrabold text-outline 
                    group-hover:text-outline-hover
                    transition-all duration-500">
                    {service.num}.
                </span>

                  <Link href={service.href}>
                      <BsArrowDown className="w-[70px] h-[70px] rounded-full border border-[3px] border-white/10
                      bg-primary text-outline  group-hover:bg-accent/60 transition-all duration-500
                      flex justify-center items-center hover:{rotate-90}" />
                      
                 </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none
                text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/70" dangerouslySetInnerHTML={{ __html: formatDescription(service.description) }} />
              <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
