import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { destinationsEN } from "@/data/destinations-en";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } };

const DestinationsSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featured = destinations.slice(0, 4).map((dest) => {
    if (language === "en" && destinationsEN[dest.slug]) {
      const en = destinationsEN[dest.slug];
      return { ...dest, name: en.name, country: en.country, tag: en.tag };
    }
    return dest;
  });

  return (
    <section id="destinations" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <motion.span initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="text-secondary font-medium">
              {t("اكتشف العالم", "Discover the World")}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("أشهر ", "Top ")}
              <span className="text-primary">{t("الوجهات السياحية", "Tourist Destinations")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t("وجهات مختارة بعناية لتناسب جميع الأذواق والميزانيات", "Carefully selected destinations to suit all tastes and budgets")}
            </p>
          </div>
          <Link to="/destinations">
            <Button className="btn-primary rounded-full mt-4 md:mt-0 gap-2">
              {t("عرض جميع الوجهات", "View All Destinations")}
              {language === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((dest) => (
            <motion.div key={dest.slug} variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link to={`/destination/${dest.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {dest.tag}
                  </motion.span>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Star className="text-secondary fill-secondary" size={14} />
                    <span className="text-sm font-medium text-foreground">{dest.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2"><MapPin size={14} /><span>{dest.country}</span></div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{dest.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{dest.packages[0]?.price ? `${t("من", "From")} ${dest.packages[0].price} ${t("ريال", "SAR")}` : ""}</span>
                    <span className="text-secondary text-sm font-medium group-hover:translate-x-[-4px] transition-transform duration-300 flex items-center gap-1">
                      {t("التفاصيل", "Details")}
                      {language === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
