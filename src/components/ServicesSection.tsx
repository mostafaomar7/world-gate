import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stamp, Hotel, Plane, Package, Building2, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariant = { hidden: { opacity: 0, y: 30, rotateX: 15 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5 } } };

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    { icon: Plane, title: t("حجز الطيران", "Flight Booking"), description: t("أفضل الأسعار لتذاكر الطيران مع جميع شركات الطيران العالمية والمحلية", "Best prices for flight tickets with all international and local airlines"), color: "primary", link: "/flights" },
    { icon: Stamp, title: t("خدمات التأشيرات", "Visa Services"), description: t("نوفر لكم خدمات استخراج التأشيرات لجميع دول العالم بسرعة واحترافية", "We provide visa processing services for all countries quickly and professionally"), color: "secondary", link: "/visa" },
    { icon: Hotel, title: t("حجز الفنادق", "Hotel Booking"), description: t("باقة متنوعة من الفنادق بمختلف الفئات تناسب جميع الميزانيات", "A diverse range of hotels across all categories to suit every budget"), color: "primary", link: "/hotels" },
    { icon: Package, title: t("الباقات السياحية", "Tour Packages"), description: t("باقات سياحية متكاملة تشمل الإقامة والتنقل والأنشطة السياحية", "Complete tour packages including accommodation, transport, and activities"), color: "secondary", link: "/offers" },
    { icon: Building2, title: t("سفر الشركات", "Corporate Travel"), description: t("حلول متكاملة لسفر رجال الأعمال والشركات بأعلى معايير الجودة", "Comprehensive solutions for business travel with the highest quality standards"), color: "primary", link: "/corporate" },
    { icon: HeartHandshake, title: t("رحلات شهر العسل", "Honeymoon Trips"), description: t("رحلات رومانسية مميزة للعرسان في أجمل الوجهات حول العالم", "Special romantic trips for newlyweds to the most beautiful destinations worldwide"), color: "secondary", link: "/honeymoon" },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }} className="text-secondary font-medium">
            {t("ماذا نقدم", "What We Offer")}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("خدماتنا ", "Our ")}
            <span className="text-primary">{t("المتميزة", "Distinguished Services")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("نقدم لكم مجموعة شاملة من الخدمات السياحية المتميزة لضمان رحلة مريحة وممتعة", "We offer a comprehensive range of distinguished travel services to ensure a comfortable and enjoyable trip")}
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariant} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
              <Link to={service.link} className="block h-full">
                <div className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 h-full">
                  <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                    <service.icon size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <span className={`inline-flex items-center mt-4 font-medium transition-all duration-300 group-hover:translate-x-[-6px] ${service.color === "primary" ? "text-primary" : "text-secondary"}`}>
                    {t("اعرف المزيد", "Learn More")}
                    <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
