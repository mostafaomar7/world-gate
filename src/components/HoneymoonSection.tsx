import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import honeymoonImg from "@/assets/honeymoon.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardItem = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } };

const HoneymoonSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const honeymoonPackages = [
    { destination: t("جزر المالديف", "Maldives"), duration: t("6 ليالي / 7 أيام", "6 Nights / 7 Days"), price: "12,500", features: [t("فيلا فوق الماء", "Overwater Villa"), t("إفطار وعشاء رومانسي", "Romantic Breakfast & Dinner"), t("جولة بحرية خاصة", "Private Boat Tour")], slug: "maldives" },
    { destination: t("جزر سيشل", "Seychelles"), duration: t("5 ليالي / 6 أيام", "5 Nights / 6 Days"), price: "10,800", features: [t("جناح فاخر مطل على البحر", "Luxury Sea View Suite"), t("سبا للأزواج", "Couples Spa"), t("عشاء على الشاطئ", "Beach Dinner")], slug: "seychelles" },
    { destination: t("سويسرا", "Switzerland"), duration: t("8 ليالي / 9 أيام", "8 Nights / 9 Days"), price: "14,200", features: [t("فنادق 5 نجوم", "5-Star Hotels"), t("جولات سياحية خاصة", "Private Tours"), t("قطار الأحلام", "Dream Train")], slug: "switzerland" },
  ];

  return (
    <section id="honeymoon" className="section-padding bg-muted/30 relative overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div key={i} className="absolute text-secondary/10" style={{ top: `${15 + i * 25}%`, right: `${5 + i * 10}%` }} animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}>
          <Heart size={40 + i * 20} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-secondary font-medium flex items-center justify-center gap-2"><Heart size={16} className="fill-secondary" />{t("رحلات الأحلام", "Dream Trips")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("باقات ", "")}
            <span className="text-secondary">{t("شهر العسل", "Honeymoon Packages")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("اجعل بداية حياتكما الزوجية مميزة مع باقاتنا الرومانسية المصممة خصيصاً للأزواج", "Make the beginning of your married life special with our romantic packages designed for couples")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="relative group">
            <img src={honeymoonImg} alt={t("رحلات شهر العسل", "Honeymoon Trips")} className="w-full h-[400px] object-cover rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500" />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6, type: "spring" }} whileHover={{ scale: 1.05, rotate: -3 }} className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold">20%</p>
              <p className="text-sm">{t("خصم خاص للعرسان", "Special Discount for Newlyweds")}</p>
            </motion.div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-4">
            {honeymoonPackages.map((pkg) => (
              <motion.div key={pkg.destination} variants={cardItem} whileHover={{ x: -6, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}>
                <Link to={`/destination/${pkg.slug}`}>
                  <div className="bg-card rounded-xl p-5 shadow-md border border-border hover:border-secondary/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1"><MapPin size={14} /><span>{pkg.destination}</span></div>
                        <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-secondary">{pkg.price}</p>
                        <p className="text-xs text-muted-foreground">{t("ريال / للزوجين", "SAR / per couple")}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.map((feature) => <span key={feature} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">{feature}</span>)}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <Link to="/honeymoon">
              <Button className="btn-secondary w-full rounded-xl mt-4 group">
                <Heart className="ml-2 group-hover:scale-110 transition-transform" size={18} />
                {t("احجز رحلة شهر العسل", "Book Your Honeymoon")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoneymoonSection;
