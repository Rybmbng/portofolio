"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from 'next/link'; // Correct import
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import React from "react";
const links = [
    {
        name: 'home',
        path: '/',
    }, {
        name: 'services',
        path: '/services',
    }, {
        name: 'resume',
        path: '/resume',
    }, {
        name: 'work',
        path: '/work',
    }, {
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col ">
                <div className="relative gap-y-20">
                    <Image 
                    src="/assets/logo/logo.png" 
                    priority
                    width={100}
                    height={100}
                    quality={100}
                    className=""
                    alt="log" />
                </div>

                {links.map((link) => (
                    <Link key={link.name} href={link.path} className={link.path === pathname ? 'text-accent' : ''}>
                        {link.name}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
