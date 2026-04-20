
import { courses } from "@/constant"
import { BookOpen, Clock, BarChart } from "lucide-react"

function FloatingCircle({ className }: { className?: string }) {
  return (
    <div
      className={`w-5 h-5 border-4 border-secondary rounded-full animate-float ${className}`}
    />
  )
}


export function Courses() {
  return (
    <section id="course" className="py-16 lg:py-30 bg-background" aria-labelledby="courses-heading">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="relative mb-12 lg:mb-16 text-center lg:text-right">
          {/* Accent */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
             <FloatingCircle />
             <h3 className="text-foreground text-xl lg:text-2xl font-extrabold uppercase tracking-wide">
                دوراتنا
             </h3>
          </div>
          <h2 id="courses-heading" className="text-primary text-3xl lg:text-[42px] font-bold leading-tight">
            اختر الدورة المناسبة لك
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-400">
                 <BookOpen className="w-7 h-7 text-primary group-hover:text-white" />
              </div>

              <h4 className="text-xl font-bold text-primary mb-4">
                {course.title}
              </h4>

              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                 <div className="flex items-center gap-2 text-sm">
                    <BarChart className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{course.level}</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{course.duration}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
