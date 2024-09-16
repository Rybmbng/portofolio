"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
// Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
const texts = ["Rey", "Rybmbng"]; 
const [currentText, setCurrentText] = useState(texts[0]);
const [isRemoving, setIsRemoving] = useState(false);
useEffect(() => {
    const interval = setInterval(() => {
        setIsRemoving(true);
    }, 2000); 
    const timeout = setTimeout(() => {
        setIsRemoving(false);
        setCurrentText((prev) => {
            const currentIndex = texts.indexOf(prev);
            return texts[(currentIndex + 1) % texts.length];
        });
    }, 3000); 
    return () => {
        clearInterval(interval);
        clearTimeout(timeout);
    };
}, [currentText]);

    return (
        <header className="py-8 xl:px-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-4xl font-semibold">
                <motion.span
                        className="relative inline-block"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isRemoving ? 0 : 1 }}
                        transition={{ duration: 1 }}
                    >
                        {currentText}
                        <span className="text-accent">.</span>
                    </motion.span>
                </Link>
                {/* Desktop Navbar dan Button Hire Me */}
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                <Button>Hire Me</Button>
                </Link>
                </div>

                {/* Mobile Navbar dan Button Hire Me */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;

