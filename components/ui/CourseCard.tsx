"use client"

import { motion } from "motion/react"
import { Clock, BarChart, ArrowUpRight } from "lucide-react"
import { CoursesType } from "@/types"
const CourseCard = (props: CoursesType) => {
    const { icon, description, duration, level, title, index } = props
    const IconComponent = icon
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }
    return (
        <motion.div
            variants={itemVariants}
            className="group relative bg-white border border-gray-100 p-10 rounded-[40px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(9,6,92,0.15)] transition-all duration-500 overflow-hidden"
        >
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

            {/* Number Sticker */}
            <div className="absolute top-8 left-8 text-6xl font-black text-primary/5 select-none transition-colors duration-500 group-hover:text-primary/10">
                {String(index + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-2xl font-black text-primary mb-5 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-10 h-20 overflow-hidden line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between pb-6 border-b border-gray-50">
                        <div className="flex items-center gap-3">
                            <BarChart className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-primary">{level}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-secondary" />
                            <span className="font-bold text-primary">{duration}</span>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gray-50 text-primary font-bold hover:bg-secondary transition-all duration-300 group/btn max-md:bg-secondary max-md:text-background">
                        <span>تفاصيل الدورة</span>
                        <ArrowUpRight className="w-5 h-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default CourseCard