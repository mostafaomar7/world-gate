import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";
import award2024 from "@/assets/award-minor-2024.png";
import award2025 from "@/assets/award-minor-2025.png";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const cardItem = { hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } };

const AwardsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const awards = [
    { image: award2024, title: "Minor Hotels 2024 Award", description: t("تكريم لدعمنا وشراكتنا المتميزة مع مجموعة ماينور للفنادق", "Recognition for our outstanding support and partnership with Minor Hotels"), year: "2024" },
    { image: award2025, title: "Minor Hotels 2025 Award", description: t("جائزة التقدير من ماينور للفنادق في حفل الشرق الأوسط", "Appreciation award from Minor Hotels at the Middle East ceremony"), year: "2025" },
  ];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 text-primary/5" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Trophy size={120} /></motion.div>
      <motion.div className="absolute bottom-10 right-10 text-secondary/5" animate={{ rotate: [360, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}><Award size={100} /></motion.div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-secondary font-medium flex items-center justify-center gap-2">
            <Trophy size={16} className="fill-secondary" />
            {t("إنجازاتنا", "Our Achievements")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("جوائز ", "Awards of ")}
            <span className="text-secondary">{t("التميز والتقدير", "Excellence & Recognition")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("نفخر بالثقة التي منحنا إياها شركاؤنا العالميون تقديراً لجودة خدماتنا وشراكتنا المتميزة", "We are proud of the trust our global partners have given us in recognition of our service quality and outstanding partnership")}
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award) => (
            <motion.div key={award.year} variants={cardItem} whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} className="bg-card rounded-2xl p-8 shadow-md border border-border hover:border-secondary/40 transition-all duration-300 text-center group">
              <div className="relative mx-auto mb-6 h-[320px] flex items-center justify-center">
                <img src={award.image} alt={award.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-3 py-1 rounded-full mb-3">{award.year}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
