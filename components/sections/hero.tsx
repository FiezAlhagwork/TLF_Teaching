"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Play, Menu, X } from "lucide-react"
import { useState } from "react"

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

function FloatingSquare({ className }: { className?: string }) {
  return (
    <div
      className={`w-4 h-4 bg-secondary rounded-sm animate-float ${className}`}
    />
  )
}

function FloatingCircle({ className, variant = "white" }: { className?: string; variant?: "white" | "teal" | "outline" }) {
  const variants = {
    white: "bg-white",
    teal: "bg-accent",
    outline: "border-2 border-accent bg-transparent"
  }

  return (
    <div
      className={`rounded-full animate-float-slow ${variants[variant]} ${className}`}
    />
  )
}

function PlayButton({ className }: { className?: string }) {
  return (
    <button
      className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform ${className}`}
      aria-label="تشغيل الفيديو"
    >
      <Play className="w-6 h-6 text-primary fill-primary -mr-1" />
    </button>
  )
}

function SocialLinks() {
  return (
    <div className="flex  flex-col gap-4">
      <Link
        href="#"
        className="group w-10 h-10 md:bg-[#F6F7FF] bg-[#09065c]  rounded-full flex items-center justify-center hover:bg-white/20 transition-colors "
        aria-label="فيسبوك"
      >
        <Facebook className="w-5 h-5 text-white md:text-[#09065c] md:group-hover:text-[#F6F7FF]" />
      </Link>
      <Link
        href="#"
        className="group w-10 h-10 md:bg-[#F6F7FF] bg-[#09065c] rounded-full flex items-center justify-center hover:bg-white/20 transition-colors md:hover:text-[#F6F7FF]"
        aria-label="تويتر"
      >
        <Twitter className="w-5 h-5 text-white md:text-[#09065c] md:group-hover:text-[#F6F7FF]" />
      </Link>
      <Link
        href="#"
        className=" group w-10 h-10 md:bg-[#F6F7FF] bg-[#09065c] rounded-full flex items-center justify-center hover:bg-white/20 transition-colors md:hover:text-[#F6F7FF]"
        aria-label="انستغرام"
      >
        <Instagram className="w-5 h-5 text-white md:text-[#09065c] md:group-hover:text-[#F6F7FF]" />
      </Link>
    </div>
  )
}

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "من نحن", href: "#about" },
    { label: "المعلمون", href: "#teachers" },
    { label: "الدورات", href: "#course" },
    { label: "الآراء", href: "#feedback" },
  ]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[55%] bg-#[#F6F7FF]" />
        <div className="hidden lg:block w-[45%] bg-[#09065c]" />
      </div>

      {/* Mobile Blue Background - only visible on mobile */}
      <div className="lg:hidden absolute inset-x-0 top-0 h-18 bg-[#09065c] rounded-b-2xl" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-5 lg:px-20 py-5 lg:py-6">
          {/* Logo */}
          <div className="hidden lg:block">
            <Logo />
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:block">
            <a
              href="tel:88006369912"
              className="text-[#09065c] font-bold text-xl tracking-wider"
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
                width={36}
                height={36}
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
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
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
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#09065c] z-40 flex flex-col items-center justify-center px-8">
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
                  <span className="text-white font-bold text-base leading-tight">
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
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                  aria-label="تويتر"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                  aria-label="انستغرام"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center px-5 lg:px-20 pt-8 lg:pt-2">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] relative z-10 text-center lg:text-right">
            {/* Floating elements - Right side in RTL */}
            <FloatingSquare className="absolute -top-4 right-4 lg:right-20 hidden lg:block" />
            <FloatingSquare className="absolute top-32 -right-2 lg:right-90 hidden lg:block" />

            <h1 className="text-5xl sm:text-5xl lg:text-7xl xl:text-[84px] font-bold text-[#09065c] leading-[1.15] tracking-tight">
              تعلم الانجليزية<br />
              بلا
              حدود
            </h1>

            <p className="text-muted-foreground text-[18px] sm:text-lg lg:text-xl mt-4 lg:mt-8 max-w-md mx-auto lg:mx-0 lg:mr-0">
              احصل على خصم لمدة 3 أشهر من التعلم
            </p>

            <button className="mt-6 lg:mt-10 px-7 py-3.5 lg:px-8 lg:py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:brightness-105 hover:scale-105 transition-all duration-200 shadow-lg text-sm lg:text-base">
              ابدأ الآن
            </button>
          </div>

          {/* Right Content - Student Image & Decorative Elements */}
          <div className="w-full lg:w-[60%] relative mt-6 lg:mt-0">
            {/* Student Image */}
            <div className="relative z-10 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Mobile background decoration */}
                <div className="lg:hidden absolute  inset-0 -bottom-4 -right-41 bg-linear-to-t from-primary/30 to-transparent rounded-3xl px-[325px]" />

                <Image
                  src="/images/funny-woman-with-curly-hair-raises-palms-smies-pos-BH8K23Z 1.png"
                  alt="Student holding books, ready to learn English"
                  width={650}
                  height={650}
                  className="object-contain relative md:left-32 md:bottom-0 z-10 w-[400px] h-[450px] sm:w-[400px] sm:h-[500px] lg:w-[650px] lg:h-[650px]"
                  priority
                />

                {/* Decorative elements around the image */}
                <FloatingCircle
                  variant="outline"
                  className="absolute -top-4 right-90 w-12 h-12 hidden lg:block"
                />
                <FloatingCircle
                  variant="white"
                  className="absolute top-1/4 left-0 w-6 h-6 hidden lg:block"
                />
                <FloatingCircle
                  variant="teal"
                  className="absolute bottom-1/3 left-0 w-4 h-4 hidden lg:block"
                />

                {/* Play Button */}
                <PlayButton className="absolute top-1/4 right-4 lg:right-8 hidden lg:flex" />
              </div>
            </div>

            {/* Social Links - Desktop only */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Mobile Social Links */}
        {/* <div className="lg:hidden flex justify-center gap-3 mt-4 pb-8">
          <Link
            href="#"
            className="group w-10 h-10 md:bg-[#F6F7FF] bg-[#09065c]  rounded-full flex items-center justify-center  transition-colors "
            aria-label="فيسبوك"
          >
            <Facebook className="w-5 h-5 text-white md:text-[#09065c] " />
          </Link>
          <Link
            href="#"
            className="group w-10 h-10 md:bg-[#F6F7FF] bg-[#09065c] rounded-full flex items-center justify-center  transition-colors "
            aria-label="تويتر"
          >
            <Twitter className="w-5 h-5 text-white md:text-[#09065c] " />
          </Link>
          <Link
            href="#"
            className=" group w-10 h-10 md:bg-[#F6F7FF] bg-[#09065c] rounded-full flex items-center justify-center  transition-colors "
            aria-label="انستغرام"
          >
            <Instagram className="w-5 h-5 text-white md:text-[#09065c] " />
          </Link>
        </div> */}
      </div>

      {/* Global Floating Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
