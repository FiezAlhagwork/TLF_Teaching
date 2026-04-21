"use client"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { motion } from "motion/react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white pt-20 pb-10" dir="rtl">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-16 mb-16 border-b border-white/10 gap-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-3">جاهز لتبدء رحلتك؟</h3>
            <p className="text-white/60 text-lg">انضم إلى مجتمعنا اليوم وابدأ في تطوير مهاراتك اللغوية.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:brightness-110 transition-all shadow-lg"
          >
            احجز درس مجاني الآن
          </motion.button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="TF Logo"
                width={55}
                height={50}
                className="rounded-xl object-cover ring-2 ring-white/10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">الإنجليزية</span>
                <span className="text-white/50 text-xs">مع آلان</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs">
              معهد رائد لتعليم اللغة الإنجليزية بأحدث المناهج العلمية والمدرسين المتخصصين لمساعدتك على تحقيق أهدافك.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-secondary flex items-center gap-2 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-white/60 hover:text-secondary flex items-center gap-2 transition-colors">من نحن</a></li>
              <li><a href="#course" className="text-white/60 hover:text-secondary flex items-center gap-2 transition-colors">الدورات</a></li>
              <li><a href="#feedback" className="text-white/60 hover:text-secondary flex items-center gap-2 transition-colors">آراء الطلاب</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary flex items-center gap-2 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Column 3: Courses List */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              أبرز الدورات
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">دورة تحضير الآيلتس (IELTS)</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">اللغة الإنجليزية للأعمال</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">المحادثة والطلاق اللغوي</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">دورة القواعد الشاملة</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">دورة المبتدئين الصفرية</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-white/60 text-sm py-1">شارع التعليم، الطابق الثاني، مدينة الأضواء</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:0997013656" className="text-white/60 text-sm py-1 hover:text-secondary transition-colors" dir="ltr">0997013656</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                </div>
                <a href="https://wa.me/0997013656" target="_blank" className="text-white/60 text-sm py-1 hover:text-secondary transition-colors">تواصل عبر الواتساب</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {currentYear} الإنجليزية مع آلان. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
