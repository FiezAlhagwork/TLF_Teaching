"use client"
import { Facebook, Twitter, Instagram,  Menu, X } from "lucide-react"

import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'
import { navLinks } from "@/constant"

function Logo() {
    return (
        <div className="flex items-center gap-3">
            <Image
                src="/images/logo.jpg"
                alt="TF Logo"
                width={44}
                height={44}
                className="rounded-lg object-cover"
            />
            <span className="text-foreground font-semibold text-lg">
                تعلم<span className="block text-xs font-normal text-muted-foreground"> الإنجليزية</span>
            </span>
        </div>
    )
}


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="flex items-center justify-between px-5 lg:px-20 py-4 lg:py-6">
            {/* Logo */}
            <div className="hidden lg:block">
                <Logo />
            </div>

            {/* Phone Number - Desktop */}
            <div className="hidden lg:block">
                <a
                    href="tel:88006369912"
                    className="text-primary font-bold text-xl tracking-wider"
                >
                    0997013656
                </a>
            </div>

            {/* Mobile Logo - Right side on mobile */}
            <div className="lg:hidden">
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/images/logo.jpg"
                        alt="TF Logo"
                        width={40}
                        height={40}
                        className="rounded-lg object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-base leading-tight">
                            الإنجليزية
                        </span>
                        <span className="text-white/70 text-[10px]">مع آلان</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden z-50 w-10 h-10 bg-white/15 rounded-full flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="فتح القائمة"
            >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-background" />}
            </button>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-white font-medium hover:text-white/80 transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>


            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center px-8">
                    {/* Logo in menu */}
                    <div className="absolute top-12 right-5">
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/images/logo.jpg"
                                alt="TF Logo"
                                width={40}
                                height={40}
                                className="rounded-lg object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="text-background font-bold text-base leading-tight">
                                    الإنجليزية
                                </span>
                                <span className="text-white/70 text-[10px]">مع آلان</span>
                            </div>
                        </div>
                    </div>

                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-white text-2xl font-semibold hover:text-secondary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-10 flex flex-col items-center gap-4">
                        <a
                            href="tel:88006369912"
                            className="text-white/90 font-medium tracking-wider text-lg"
                        >
                            0997013656
                        </a>

                        {/* Social Links in menu */}
                        <div className="flex gap-4 mt-4">
                            <Link
                                href="#"
                                className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                                aria-label="فيسبوك"
                            >
                                <Facebook className="w-5 h-5 text-background" />
                            </Link>
                            <Link
                                href="#"
                                className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                                aria-label="تويتر"
                            >
                                <Twitter className="w-5 h-5 text-background" />
                            </Link>
                            <Link
                                href="#"
                                className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                                aria-label="انستغرام"
                            >
                                <Instagram className="w-5 h-5 text-background" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header