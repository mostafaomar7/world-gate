import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import coverServices from "@/assets/cover-services.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverServices} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("خدماتنا ", "Our ")}
              <span className="text-secondary">{t("المتميزة", "Distinguished Services")}</span>
            </h1>
            <p className="text-lg text-white/80">{t("نقدم لكم مجموعة شاملة من الخدمات السياحية المتميزة لضمان رحلة مريحة وممتعة", "We offer a comprehensive range of distinguished travel services to ensure a comfortable and enjoyable trip")}</p>
          </motion.div>
        </div>
      </section>
      <ServicesSection />
      <Footer />
    </div>
  );
};
export default ServicesPage;
