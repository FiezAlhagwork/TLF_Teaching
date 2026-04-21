"use client"
import { courses } from "@/constant";
import { motion } from "motion/react"
import CourseCard from "../ui/CourseCard";

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



  return (
    <section id="course" className="relative py-24 lg:py-40 bg-background overflow-hidden" aria-labelledby="courses-heading">
      {/* Decorative Background Elements */}
      <FloatingShape className="w-96 h-96 bg-primary/10 -top-20 -right-20" />
      <FloatingShape className="w-80 h-80 bg-secondary/10 bottom-20 -left-20" delay={2} />

      {/* Background Large Text */}
      <div className="absolute top-10 left-10 text-[18vw] font-black text-primary/3 select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
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
              className="text-4xl lg:text-6xl font-black text-primary leading-tight tracking-tight "
            >
              اختر الدورة <br className="hidden lg:block" /> المناسبة لمستقبلك
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg lg:text-xl lg:max-w-sm w-full lg:text-right text-center"
          >
            نقدم لك باقة متنوعة من الدورات المصممة خصيصاً لتناسب جميع المستويات والاحتياجات المهنية والأكاديمية.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {courses.map((course, index) => {
            return (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                duration={course.duration}
                icon={course.icon}
                index={index}
                level={course.level} />
            )
          })}
        </motion.div>

        {/* Bottom CTA or Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-24 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent w-full  "
        />
      </div>
    </section>
  )
}
