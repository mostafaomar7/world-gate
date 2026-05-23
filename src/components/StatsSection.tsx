import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Plane, Building2, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const { language } = useLanguage();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString(language === "ar" ? "ar-SA" : "en-US")}{suffix}
    </span>
  );
};

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariant = { hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } };

const StatsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { icon: Users, value: 3000, suffix: "+", label: t("عميل سعيد", "Happy Clients"), description: t("خلال العام الماضي", "In the past year") },
    { icon: Plane, value: 20000, suffix: "+", label: t("تذكرة طيران", "Flight Tickets"), description: t("تم حجزها بنجاح", "Successfully booked") },
    { icon: Building2, value: 30000, suffix: "+", label: t("ليلة فندقية", "Hotel Nights"), description: t("حجوزات مؤكدة", "Confirmed bookings") },
    { icon: Award, value: 15, suffix: "+", label: t("سنة خبرة", "Years of Experience"), description: t("في مجال السياحة", "In the tourism industry") },
  ];

  return (
    <section className="section-padding bg-muted/50 relative overflow-hidden">
      <motion.div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2" animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("أرقامنا تتحدث عن ", "Our Numbers Speak of ")}
            <span className="text-secondary">{t("نجاحنا", "Our Success")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("نفخر بثقة عملائنا وإنجازاتنا المتميزة في قطاع السياحة والسفر", "We take pride in our clients' trust and outstanding achievements in the travel industry")}
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardVariant} whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} className="bg-card rounded-2xl p-6 text-center shadow-md transition-shadow">
              <motion.div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center" whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <stat.icon className="text-primary" size={28} />
              </motion.div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-semibold text-foreground mt-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
