import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Users, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const values = [
    { icon: Heart, label: t("الإخلاص", "Sincerity") },
    { icon: Shield, label: t("النزاهة", "Integrity") },
    { icon: Sparkles, label: t("الجودة", "Quality") },
    { icon: Users, label: t("المسؤولية", "Responsibility") },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-secondary font-medium">{t("تعرف علينا", "About Us")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("من ", "Who Are ")}
            <span className="text-primary">{t("نحن؟", "We?")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: 40, filter: "blur(8px)" }} animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("شركة بوابة العالم للسفر والسياحة", "WorldGate Travel & Tourism")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("هي إحدى الشركات التي تتميز بطاقم عمل عالي الخبرة، فخبرتنا بمجال السياحة والسفر تتزايد عن 15 عاماً. نحن مستشارون نجيد إتقان الاحترافية على أعلى مستوياتها.", "A company distinguished by its highly experienced team. With over 15 years of experience in travel and tourism, we are consultants who master professionalism at its highest levels.")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("الالتزام بالابتكار وصنع الرحلات الفريدة وتقديم الخبرة اللازمة هو ما يميزنا. فريقنا يعمل على خلق الذكريات والرحلات التي لن تُنسى، وهدفنا الأسمى هو مشاركتكم الحماس وتكريس كل جهودنا لتقديم أفضل الخدمات.", "Commitment to innovation, creating unique trips, and delivering expertise is what sets us apart. Our team works to create memories and unforgettable journeys, and our ultimate goal is to share your enthusiasm and dedicate all our efforts to providing the best services.")}
            </p>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-muted rounded-xl p-4 inline-block">
              <span className="text-sm text-muted-foreground">{t("رقم الترخيص: ", "License No: ")}</span>
              <span className="font-bold text-primary">73103902</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -40, filter: "blur(8px)" }} animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="space-y-6">
            <motion.div whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }} className="bg-card rounded-2xl p-6 shadow-md border border-border transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <motion.div whileHover={{ rotate: 15 }} className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Target className="text-primary" size={24} /></motion.div>
                <h4 className="text-xl font-bold text-foreground">{t("مهمتنا", "Our Mission")}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("تقديم أفضل قيمة لعملائنا. نحن نتقدم على أحدث اتجاهات السفر، ونستثمر في البحث والتطوير ونعتمد على أحدث التقنيات لتوفير القدرة على تحمل التكاليف والاختيار والمرونة لجميع العملاء.", "Delivering the best value to our clients. We stay ahead of the latest travel trends, invest in R&D, and leverage the latest technologies to provide affordability, choice, and flexibility for all clients.")}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }} className="bg-card rounded-2xl p-6 shadow-md border border-border transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <motion.div whileHover={{ rotate: 15 }} className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center"><Eye className="text-secondary" size={24} /></motion.div>
                <h4 className="text-xl font-bold text-foreground">{t("رؤيتنا", "Our Vision")}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("أن نكون الشركة الرائدة والأفضل في تقديم خدمات السفر لمنطقة الشرق الأوسط والعالم.", "To be the leading and best company providing travel services for the Middle East and the world.")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="bg-gradient-to-l from-primary to-primary-dark rounded-2xl p-8 md:p-12">
          <h4 className="text-2xl font-bold text-primary-foreground text-center mb-8">{t("قيمنا الأساسية", "Our Core Values")}</h4>
          <motion.div variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div key={value.label} variants={fadeUp} whileHover={{ scale: 1.08, y: -5 }} className="text-center cursor-default">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-16 h-16 mx-auto mb-3 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <value.icon className="text-primary-foreground" size={28} />
                </motion.div>
                <span className="text-primary-foreground font-medium">{value.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
