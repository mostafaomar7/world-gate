import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Globe, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CorporateSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    t("أسعار تنافسية خاصة للشركات", "Competitive corporate prices"),
    t("مدير حساب مخصص", "Dedicated account manager"),
    t("تقارير شهرية مفصلة", "Detailed monthly reports"),
    t("دعم على مدار الساعة", "24/7 support"),
    t("مرونة في الحجز والإلغاء", "Flexible booking & cancellation"),
    t("برنامج ولاء للشركات", "Corporate loyalty program"),
  ];

  return (
    <section id="corporate" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-secondary font-medium flex items-center gap-2"><Building2 size={16} />{t("للشركات والمؤسسات", "For Companies & Institutions")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              {t("حلول سفر متكاملة ", "Integrated Travel Solutions ")}
              <span className="text-primary">{t("للشركات", "for Corporates")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("نقدم خدمات سفر متخصصة للشركات والمؤسسات تشمل إدارة رحلات العمل، حجز قاعات المؤتمرات، وتنظيم الفعاليات التجارية بأعلى معايير الاحترافية.", "We provide specialized travel services for companies including business trip management, conference hall booking, and organizing business events with the highest professional standards.")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }} className="flex items-center gap-2">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="text-foreground text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <a href="https://wa.me/966534817876?text=مرحباً، أرغب في التواصل مع قسم الشركات" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary rounded-xl">{t("تواصل مع قسم الشركات", "Contact Corporate Department")}</Button>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-center text-primary-foreground">
              <Building2 className="mx-auto mb-3" size={32} /><p className="text-3xl font-bold mb-1">+100</p><p className="text-sm opacity-90">{t("شركة شريكة", "Partner Companies")}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <Users className="mx-auto mb-3 text-secondary" size={32} /><p className="text-3xl font-bold text-foreground mb-1">+5,000</p><p className="text-sm text-muted-foreground">{t("موظف مسافر سنوياً", "Employees Traveling Yearly")}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <Globe className="mx-auto mb-3 text-primary" size={32} /><p className="text-3xl font-bold text-foreground mb-1">+50</p><p className="text-sm text-muted-foreground">{t("وجهة عمل", "Business Destinations")}</p>
            </div>
            <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 text-center text-secondary-foreground">
              <Clock className="mx-auto mb-3" size={32} /><p className="text-3xl font-bold mb-1">24/7</p><p className="text-sm opacity-90">{t("دعم متواصل", "Continuous Support")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
