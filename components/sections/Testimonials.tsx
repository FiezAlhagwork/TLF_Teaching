"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Star, ChevronRight, ChevronLeft, Quote, BadgeCheck } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "أحمد العلي",
        role: "طالب مستوى متوسط",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
        content: "تحسنت مهاراتي في المحادثة بشكل كبير خلال فترة قصيرة، وأصبحت أتكلم بثقة أكبر بفضل التوجيه المستمر.",
        rating: 5,
    },
    {
        id: 2,
        name: "مريم سليم",
        role: "طالبة في دورة القواعد",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
        content: "طريقة الشرح كانت بسيطة وواضحة، وقدرت أفهم القواعد بدون تعقيد. المنهج منوع وشيق جداً.",
        rating: 5,
    },
    {
        id: 3,
        name: "خالد منصور",
        role: "طالب IELTS",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
        content: "المدرسين متعاونين جدًا، والجو داخل الصف مريح ويشجع على التعلم. شعرت بفرق شاسع في أدائي.",
        rating: 5,
    },
    {
        id: 4,
        name: "لينا أحمد",
        role: "طالبة لغة إنجليزية للأعمال",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
        content: "بعد الدورة، صرت أستخدم اللغة الإنجليزية في عملي بشكل أفضل وأكثر احترافية في مراسلاتي واجتماعاتي.",
        rating: 5,
    },
    {
        id: 5,
        name: "يوسف حسن",
        role: "خريج دورة التحضير للآيلتس",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
        content: "الدورة ساعدتني كثير في التحضير لامتحان IELTS وحققت نتيجة ممتازة فاقت توقعاتي الشخصية.",
        rating: 5,
    },
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const slideNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const slidePrev = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        if (isPaused) return
        const timer = setInterval(slideNext, 5000)
        return () => clearInterval(timer)
    }, [currentIndex, isPaused])

    return (
        <section id="feedback" className="py-24 lg:py-40 bg-white relative overflow-hidden" dir="rtl">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="absolute top-10 left-10 text-[13vw] font-black text-primary/3 select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
                Testimonials
            </div>
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
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
                                آراء الطلاب
                            </h3>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl lg:text-6xl font-black text-primary leading-tight tracking-tight"
                        >
                            ماذا يقول طلابنا <br className="hidden lg:block" /> عن تجربتهم معنا
                        </motion.h2>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-muted-foreground text-lg lg:text-xl lg:max-w-sm w-full lg:text-right text-center"
                        >
                            نفتخر بقصص النجاح التي يحققها طلابنا والتحول الجذري في مهاراتهم اللغوية بعد انضمامهم إلينا.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <button
                                onClick={slidePrev}
                                className="w-14 h-14 rounded-full border-2 border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <button
                                onClick={slideNext}
                                className="w-14 h-14 rounded-full border-2 border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                <div
                    className="relative min-h-[480px]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction < 0 ? 50 : -50 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                        >
                            {/* Feature Card (Active) */}
                            <div className="bg-primary p-10 lg:p-14 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
                                <Quote className="absolute -top-6 -right-6 w-32 h-32 text-white/5 rotate-12" />

                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                        ))}
                                    </div>

                                    <p className="text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    <div className="pt-8 border-t border-white/10">
                                        <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                                        <p className="text-white/60 text-sm">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Next Card Preview (Desktop) */}
                            <div className="hidden lg:block h-full">
                                <div className="bg-gray-50 p-10 lg:p-14 rounded-[48px] border border-gray-100 h-full flex flex-col justify-between opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" onClick={slideNext}>
                                    <div>
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonials[(currentIndex + 1) % testimonials.length].rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-primary/20 text-primary/20" />
                                            ))}
                                        </div>
                                        <p className="text-lg text-primary/70 line-clamp-4">
                                            "{testimonials[(currentIndex + 1) % testimonials.length].content}"
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 mt-auto">
                                        <h4 className="text-lg font-bold text-primary">{testimonials[(currentIndex + 1) % testimonials.length].name}</h4>
                                        <p className="text-primary/40 text-xs">{testimonials[(currentIndex + 1) % testimonials.length].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center mt-12 gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1)
                                setCurrentIndex(index)
                            }}
                            className="group relative"
                            aria-label={`شريحة ${index + 1}`}
                        >
                            <div className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? "w-12 bg-primary" : "w-3 bg-primary/10 group-hover:bg-primary/30"
                                }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
