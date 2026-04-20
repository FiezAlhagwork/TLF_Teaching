
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Play } from "lucide-react"

import Header from "./Header"



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



function SocialLinks() {
  return (
    <div className="flex  flex-col gap-4">
      <Link
        href="#"
        className="group w-10 h-10 md:bg-background  bg-primary  rounded-full flex items-center justify-center hover:bg-white/20 transition-colors "
        aria-label="فيسبوك"
      >
        <Facebook className="w-5 h-5 text-background md:text-primary md:group-hover:text-background" />
      </Link>
      <Link
        href="#"
        className="group w-10 h-10 md:bg-background bg-primary rounded-full flex items-center justify-center hover:bg-white/20 transition-colors md:hover:text-background"
        aria-label="تويتر"
      >
        <Twitter className="w-5 h-5 text-background md:text-primary md:group-hover:text-background" />
      </Link>
      <Link
        href="#"
        className=" group w-10 h-10 md:bg-background bg-primary rounded-full flex items-center justify-center hover:bg-white/20 transition-colors md:hover:text-background"
        aria-label="انستغرام"
      >
        <Instagram className="w-5 h-5 text-background md:text-primary md:group-hover:text-background" />
      </Link>
    </div>
  )
}

export function Hero() {

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[55%] bg-background" />
        <div className="hidden lg:block w-[45%] bg-primary" />
      </div>

      {/* Mobile Blue Background - only visible on mobile */}
      <div className="lg:hidden absolute inset-x-0 top-0 h-19 bg-primary rounded-b-2xl" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center px-5 lg:px-20 pt-8 lg:pt-2">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] relative z-10 text-center lg:text-right">
            {/* Floating elements - Right side in RTL */}
            <FloatingSquare className="absolute -top-4 right-4 lg:right-20 hidden lg:block" />
            <FloatingSquare className="absolute top-32 -right-2 lg:right-90 hidden lg:block" />

            <h1 className="text-5xl sm:text-5xl lg:text-7xl xl:text-[84px] font-bold text-primary leading-[1.15] tracking-tight">
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
                <div className="lg:hidden absolute  inset-0 -bottom-4 -right-70 bg-linear-to-t from-primary/30 to-transparent rounded-3xl px-[500px]" />

                <Image
                  src="/images/funny-woman-with-curly-hair-raises-palms-smies-pos-BH8K23Z 1.png"
                  alt="Student holding books, ready to learn English"
                  width={650}
                  height={650}
                  className="object-contain relative lg:left-32 bottom-0 max-sm:-bottom-10 z-10 w-[400px] h-[450px] sm:w-[400px] sm:h-[500px] lg:w-[650px] lg:h-[650px]"
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


              </div>
            </div>

            {/* Social Links - Desktop only */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <SocialLinks />
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
