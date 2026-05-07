import { BookOpen, Clock, BarChart, GraduationCap } from "lucide-react"

export const navLinks = [
    { label: "من نحن", href: "#about" },
    { label: "المعلمون", href: "#teachers" },
    { label: "تواصل معنا", href: "#contact" },
    { label: "الآراء", href: "#feedback" },
]
export const courses = [
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
