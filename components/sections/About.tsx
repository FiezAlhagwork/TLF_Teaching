import Image from "next/image"

function FloatingTriangle({ className }: { className?: string }) {
  return (
    <div
      className={`w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-b-20 border-b-secondary ${className}`}
    />
  )
}



export function About() {
  return (
    <section id="about" className="py-16 lg:py-30 bg-gray-200/40" aria-labelledby="about-heading">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Text Content - Right side in RTL */}
          <div className="w-full lg:w-[60%] relative">
            {/* Yellow Triangle Accent */}
            <div className="flex items-center gap-3 mb-4">
              <FloatingTriangle />
              <h3 className="text-foreground text-xl lg:text-2xl font-extrabold uppercase tracking-wide">
                من نحن
              </h3>
            </div>

            <h2 id="about-heading" className="text-primary text-3xl lg:text-[42px] font-bold mb-6 lg:mb-8 leading-tight">
              كيف بدأت القصة؟
            </h2>

            <div className="space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
              <p>
                نحن مدرسة إنجليزية شابة تساعد طلابنا على تحقيق أهدافهم.
                الميزة الرئيسية لمركزنا هي أن المعلمين الأمريكيين المؤهلين تأهيلاً عالياً فقط هم من يعملون هنا.
              </p>
              <p>
                في الدروس ستصقل مهاراتك في الحوار، وتتعلم كيف تقدم أفكارك بأفضل طريقة، وكيف تتحدث مثل المتحدثين الأصليين، وبالطبع ستستمع إلى البودكاست وتناقشها مع المعلمين وزملائك.
              </p>
              <p className="font-medium text-foreground">
                نريدك أن تتحدث الإنجليزية بشكل جميل وصحيح ومتنوع. المهارة في التفاصيل!
              </p>
            </div>
          </div>

          {/* Image Content - Left side in RTL */}
          <div className="w-full lg:w-[40%] relative">
            <div className="relative">
              {/* Blue Background Square */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-full h-full bg-primary rounded-lg" />
              
              {/* White Overlay Frame */}
              <div className="absolute top-2 right-2 lg:top-4 lg:right-4 w-[calc(100%-16px)] lg:w-[calc(100%-32px)] h-[calc(100%-16px)] lg:h-[calc(100%-32px)] bg-white rounded-lg" />
              
              {/* Teacher Image */}
              <div className="relative z-10">
                <Image
                  src="/images/teacher.jpg"
                  alt="معلمة تكتب على السبورة الزجاجية"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover w-full h-[300px] sm:h-[350px] lg:h-[400px]"
                />
              </div>

              {/* Play Button */}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
