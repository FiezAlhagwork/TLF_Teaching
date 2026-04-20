"use client"
import { BookOpen, Clock, BarChart, ArrowUpRight, GraduationCap } from "lucide-react"
import { motion } from "motion/react"

function FloatingShape({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={`absolute pointer-events-none rounded-full blur-3xl ${className}`}
    />
  )
}

const courses = [
  {
    title: "اللغة الإنجليزية للمبتدئين",
    description: "ابدأ من الصفر وتعلم أساسيات اللغة من الحروف حتى تكوين الجمل، بأسلوب علمي ممتع.",
    level: "مبتدئ",
    duration: "3 أشهر",
    icon: GraduationCap,
  },
  {
    title: "المحادثة باللغة الإنجليزية",
    description: "طوّر مهاراتك في التحدث والتواصل بثقة في الحياة اليومية مع متحدثين أصليين.",
    level: "متوسط",
    duration: "شهرين",
    icon: BookOpen,
  },
  {
    title: "التحضير لامتحان IELTS",
    description: "تدريب مكثف على جميع أقسام الامتحان مع نماذج عملية واختبارات تجريبية حقيقية.",
    level: "متوسط - متقدم",
    duration: "2 إلى 3 أشهر",
    icon: BarChart,
  },
  {
    title: "اللغة الإنجليزية للأعمال",
    description: "تعلم استخدام اللغة في بيئة العمل والاجتماعات والمراسلات الاحترافية.",
    level: "متوسط",
    duration: "شهرين",
    icon: BookOpen,
  },
  {
    title: "دورة القواعد (Grammar)",
    description: "فهم قواعد اللغة بطريقة مبسطة وتطبيقها بشكل عملي دون تعقيد.",
    level: "جميع المستويات",
    duration: "شهر",
    icon: Clock,
  },
  {
    title: "دورة الأطفال",
    description: "تعليم اللغة للأطفال بأسلوب تفاعلي ممتع وسهل ينمي حب اللغة لديهم.",
    level: "مبتدئ",
    duration: "مستمرة",
    icon: GraduationCap,
  },
]

export function Courses() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

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
    <section id="course" className="relative py-24 lg:py-40 bg-background overflow-hidden" aria-labelledby="courses-heading">
      {/* Decorative Background Elements */}
      <FloatingShape className="w-96 h-96 bg-primary/10 -top-20 -right-20" />
      <FloatingShape className="w-80 h-80 bg-secondary/10 bottom-20 -left-20" delay={2} />
      
      {/* Background Large Text */}
      <div className="absolute top-10 left-10 text-[18vw] font-black text-primary/[0.03] select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
        Courses
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
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
                  الدورات المتميزة
               </h3>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              id="courses-heading" 
              className="text-4xl lg:text-7xl font-black text-primary leading-tight tracking-tight"
            >
              اختر الدورة <br className="hidden lg:block" /> المناسبة لمستقبلك
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg lg:text-xl max-w-sm lg:text-right text-center"
          >
            نقدم لك باقة متنوعة من الدورات المصممة خصيصاً لتناسب جميع المستويات والاحتياجات المهنية والأكاديمية.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.div 
                key={index}
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
                     <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl font-black text-primary mb-5 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-10 h-20 overflow-hidden line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between pb-6 border-b border-gray-50">
                       <div className="flex items-center gap-3">
                          <BarChart className="w-5 h-5 text-secondary" />
                          <span className="font-bold text-primary">{course.level}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-secondary" />
                          <span className="font-bold text-primary">{course.duration}</span>
                       </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gray-50 text-primary font-bold hover:bg-secondary hover:text-primary transition-all duration-300 group/btn">
                       <span>تفاصيل الدورة</span>
                       <ArrowUpRight className="w-5 h-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA or Decorative Line */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
        />
      </div>
    </section>
  )
}
