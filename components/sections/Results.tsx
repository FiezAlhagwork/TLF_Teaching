"use client"
import { motion } from "motion/react"

const results = [
    {
        number: "01",
        text: "تحسين مستوى المعرفة بالقواعد اللغوية",
    },
    {
        number: "02",
        text: "تطوير مهارات المحادثة باللغة الإنجليزية",
    },
    {
        number: "03",
        text: "إثراء الحصيلة والمفردات اللغوية",
    },
    {
        number: "04",
        text: "توفير مجموعة كبيرة من الكتب التعليمية المجانية",
    },
    {
        number: "05",
        text: "المتابعة والتوجيه طوال فترة الدورة",
    },
    {
        number: "06",
        text: "الانضمام لنادي المحادثة وأمسيات الأفلام",
    },
]

function WavyLine({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 160 20"
            fill="none"
            className={`absolute w-full h-auto pointer-events-none ${className}`}
            preserveAspectRatio="none"
        >
            <motion.path
                d="M0 10C20 10 20 2 40 2C60 2 60 18 80 18C100 18 100 2 120 2C140 2 140 10 160 10"
                stroke="#E5E7EB"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </svg>
    )
}

function Diamond({ className, color = "bg-brand-yellow" }: { className?: string, color?: string }) {
    return (
        <div className={`w-3 h-3 rotate-45 ${color} absolute ${className}`} />
    )
}

export function Results() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <section className="py-24 lg:py-40 bg-white relative overflow-hidden" dir="rtl">
            {/* Decorative Accents */}
            <Diamond className="top-20 left-[30%] opacity-40 bg-secondary" />
            <Diamond className="bottom-40 right-[20%] opacity-30 bg-accent" />

            <div className="absolute top-10 left-10 text-[18vw] font-black text-primary/3 select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
                Results
            </div>

            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
                    <div className="text-center lg:text-right max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                        >
                            <div className="w-3 h-3 bg-secondary rounded-full animate-ping" />
                            <h3 className="text-primary font-bold text-lg lg:text-xl uppercase tracking-[0.2em]">
                                نتائج الدورة
                            </h3>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl lg:text-7xl font-black text-primary leading-tight tracking-tight"
                        >
                            ماذا ستحصل عليه <br className="hidden lg:block" /> بعد الانتهاء
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-lg lg:text-xl lg:max-w-sm w-full  lg:text-right text-center"
                    >
                        نضمن لك تجربة تعليمية فريدة تنعكس نتائجها على مهاراتك اللغوية وثقتك بنفسك في التواصل.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-20 lg:gap-y-32 gap-x-12"
                >
                    {results.map((item, index) => (
                        <motion.div
                            key={item.number}
                            variants={itemVariants}
                            className="relative group flex flex-col items-center lg:items-start"
                        >
                            {/* Number and Wave Container */}
                            <div className="flex items-center gap-6 mb-4 lg:mb-6 w-full justify-center lg:justify-start">
                                <span className="text-[40px] lg:text-[48px] font-bold text-secondary leading-none">
                                    {item.number}
                                </span>

                                {/* Show Wavy Line correctly for RTL: 
                                     01 leads to 02, 02 leads to 03 (on desktop)
                                     In RTL, index 0 is on the right, so wave should go to the left.
                 */}
                                {/* Desktop: Show after 1st and 2nd items in each row */}
                                {(index + 1) % 3 !== 0 && (
                                    <div className="hidden lg:block flex-1 relative h-5 -mx-4">
                                        <WavyLine className="top-1/2 -translate-y-1/2 left-0 w-full rotate-180" />
                                    </div>
                                )}

                                {/* Tablet: Show after 1st in row */}
                                {(index + 1) % 2 !== 0 && (
                                    <div className="hidden md:block lg:hidden flex-1 relative h-5 -mx-4">
                                        <WavyLine className="top-1/2 -translate-y-1/2 left-0 w-full rotate-180" />
                                    </div>
                                )}
                            </div>

                            {/* Text Description */}
                            <p className="text-[#111827] text-lg lg:text-xl font-medium leading-relaxed max-w-[280px] lg:max-w-[240px] text-center lg:text-right">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
