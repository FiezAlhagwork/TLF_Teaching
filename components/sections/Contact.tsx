"use client"
import { useState, FormEvent } from "react"
import { motion } from "motion/react"
import { Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    // Simulate sending
    setTimeout(() => {
      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 lg:py-40 bg-gray-50/30" dir="rtl">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold mb-4"
          >
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            اتصل بنا اليوم
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-black text-primary mb-6"
          >
               تواصل معنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto"
          >
            نحن جاهزون للإجابة على جميع استفساراتك ومساعدتك في اختيار الدورة المناسبة لك
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Right Side: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">العنوان</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    شارع التعليم، الطابق الثاني، مدينة الأضواء، سورية
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">الهاتف</h4>
                  <a href="tel:0997013656" className="text-muted-foreground hover:text-primary transition-colors block" dir="ltr">
                    0997013656
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">واتساب</h4>
                  <a href="https://wa.me/0997013656" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    تواصل معنا عبر الواتساب مباشرة
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">ساعات العمل</h4>
                  <p className="text-muted-foreground">
                    السبت - الخميس: 9:00 صباحاً - 8:00 مساءً
                  </p>
                </div>
              </div>
            </div>

            {/* Embed Map Placeholder */}
            <div className="h-64 lg:h-80 w-full rounded-[40px] overflow-hidden shadow-2xl relative bg-gray-200 border-4 border-white">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106398.055959146!2d36.1910609!3d33.5138073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66070a241284!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1715051000000!5m2!1sen!2s" 
                className="w-full h-full grayscale opacity-80"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            </div>
          </div>

          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-16 rounded-[48px] shadow-2xl border border-gray-100"
            >
              <div className="mb-10 text-center lg:text-right">
                <h3 className="text-2xl lg:text-3xl font-black text-primary mb-2">
                  احجز درسًا تجريبيًا مجانيًا الآن
                </h3>
                <p className="text-muted-foreground">سوف يتواصل معك فريقنا خلال 24 ساعة لترتيب موعدك.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary px-1">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required
                      placeholder="مثال: أحمد محمد"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary px-1">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="مثال: 0997013656"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-primary"
                      dir="rtl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary px-1">اختر الدورة</label>
                  <select 
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-primary appearance-none cursor-pointer"
                  >
                    <option value="">-- اختر من القائمة --</option>
                    <option value="ielts">دورة تحضير الآيلتس (IELTS)</option>
                    <option value="business">اللغة الإنجليزية للأعمال</option>
                    <option value="conversation">المحادثة والطلاق اللغوي</option>
                    <option value="grammar">دورة القواعد الشاملة</option>
                    <option value="beginner">دورة المبتدئين الصفرية</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary px-1">رسالتك (اختياري)</label>
                  <textarea 
                    rows={4}
                    placeholder="أخبرنا بالمزيد عن أهدافك..."
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-primary resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    formStatus === "success" 
                    ? "bg-green-500 text-white" 
                    : "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20"
                  }`}
                >
                  {formStatus === "idle" && (
                    <>
                      إرسال الطلب
                      <Send className="w-5 h-5 rotate-180" />
                    </>
                  )}
                  {formStatus === "sending" && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formStatus === "success" && (
                    <>
                      تم الإرسال بنجاح
                      <CheckCircle2 className="w-6 h-6" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
