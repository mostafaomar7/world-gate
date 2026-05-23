import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronRight, ChevronLeft, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: t("أحمد الشمري", "Ahmed Al-Shammari"), role: t("رجل أعمال", "Businessman"), content: t("تجربة رائعة مع بوابة العالم! حجزت رحلة عائلية إلى تركيا وكل شيء كان مثالياً من البداية للنهاية. فريق محترف وخدمة ممتازة.", "Amazing experience with WorldGate! Booked a family trip to Turkey and everything was perfect from start to finish. Professional team and excellent service."), rating: 5 },
    { name: t("سارة العتيبي", "Sara Al-Otaibi"), role: t("مسافرة دائمة", "Frequent Traveler"), content: t("أفضل شركة سياحة تعاملت معها. خدمة التأشيرات سريعة جداً والأسعار منافسة. أنصح الجميع بالتعامل معهم.", "Best travel company I've dealt with. Visa service is very fast and prices are competitive. I recommend them to everyone."), rating: 5 },
    { name: t("محمد القحطاني", "Mohammed Al-Qahtani"), role: t("مدير شركة", "Company Manager"), content: t("نتعامل معهم لحجوزات الشركة منذ 3 سنوات. خدمة احترافية ومتابعة ممتازة لجميع رحلات موظفينا.", "We've been using them for corporate bookings for 3 years. Professional service and excellent follow-up for all employee trips."), rating: 5 },
    { name: t("نورة السبيعي", "Noura Al-Subaie"), role: t("عروس", "Bride"), content: t("حجزنا شهر العسل معهم وكانت رحلة لا تُنسى! اهتموا بكل التفاصيل وفاجأونا بترتيبات رومانسية رائعة.", "We booked our honeymoon with them and it was an unforgettable trip! They took care of every detail and surprised us with wonderful romantic arrangements."), rating: 5 },
    { name: t("عبدالله الدوسري", "Abdullah Al-Dosari"), role: t("مسافر متكرر", "Frequent Traveler"), content: t("من أفضل مكاتب السفر في الرياض. تعاملهم راقي وأسعارهم ممتازة. حجزت معهم أكثر من 5 رحلات وكلها كانت مميزة.", "One of the best travel agencies in Riyadh. Classy service and excellent prices. I've booked more than 5 trips with them and all were outstanding."), rating: 5 },
    { name: t("فهد العنزي", "Fahad Al-Anazi"), role: t("أب لعائلة", "Family Man"), content: t("رتبوا لنا رحلة عائلية لماليزيا بشكل ممتاز. الفنادق كانت رائعة والبرنامج السياحي متنوع وممتع للأطفال والكبار.", "They arranged a family trip to Malaysia excellently. Hotels were amazing and the itinerary was diverse and enjoyable for both kids and adults."), rating: 5 },
    { name: t("ريم الحربي", "Reem Al-Harbi"), role: t("سيدة أعمال", "Businesswoman"), content: t("خدمة VIP حقيقية! من لحظة الحجز حتى العودة كل شيء كان مرتب ومنظم. شكراً بوابة العالم على الاحترافية.", "True VIP service! From booking to return everything was well-arranged and organized. Thank you WorldGate for the professionalism."), rating: 5 },
    { name: t("خالد المطيري", "Khaled Al-Mutairi"), role: t("مسافر", "Traveler"), content: t("حجزت تأشيرة شنغن من خلالهم وتم إنجازها بسرعة وسهولة. فريق متعاون جداً ويتابع معك خطوة بخطوة.", "I got my Schengen visa through them and it was done quickly and easily. Very cooperative team that follows up with you step by step."), rating: 5 },
    { name: t("منى الزهراني", "Mona Al-Zahrani"), role: t("مسافرة", "Traveler"), content: t("رحلة جورجيا كانت من أجمل الرحلات في حياتي. البرنامج السياحي كان مدروس ومتكامل والمرشد كان ممتاز.", "The Georgia trip was one of the best trips of my life. The itinerary was well-planned and comprehensive, and the guide was excellent."), rating: 5 },
    { name: t("ياسر الغامدي", "Yasser Al-Ghamdi"), role: t("رجل أعمال", "Businessman"), content: t("تعاملت مع كثير من شركات السفر لكن بوابة العالم هي الأفضل بلا منازع. أسعار تنافسية وخدمة لا مثيل لها.", "I've dealt with many travel companies but WorldGate is the best without a doubt. Competitive prices and unmatched service."), rating: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <motion.div className="absolute top-20 right-20 text-primary/5" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Quote size={200} /></motion.div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-secondary font-medium">{t("آراء العملاء", "Client Reviews")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("ماذا يقول ", "What Our ")}
            <span className="text-primary">{t("عملاؤنا", "Clients Say")}</span>
          </h2>
          <p className="text-muted-foreground">{t("أكثر من 20,000 عميل سعيد يثقون بنا", "Over 20,000 happy clients trust us")}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div key={currentIndex} initial={{ opacity: 0, x: 60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -60, scale: 0.95 }} transition={{ duration: 0.5 }} className="bg-card rounded-2xl p-8 md:p-12 shadow-lg relative">
            <Quote className="absolute top-6 right-6 text-primary/10" size={60} />
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                  <Star className="text-secondary fill-secondary" size={20} />
                </motion.div>
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">"{testimonials[currentIndex].content}"</p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <p className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </motion.div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button onClick={prev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"><ChevronRight size={24} /></motion.button>
            <motion.button onClick={next} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"><ChevronLeft size={24} /></motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className="relative w-2.5 h-2.5 rounded-full overflow-hidden">
                <div className={`absolute inset-0 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-border"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
