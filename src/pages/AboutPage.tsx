import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import coverAbout from "@/assets/cover-about.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverAbout} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("من ", "About ")}<span className="text-secondary">{t("نحن؟", "Us")}</span></h1>
            <p className="text-lg text-white/80">{t("خبرة أكثر من 15 عاماً في مجال السياحة والسفر", "Over 15 years of experience in travel and tourism")}</p>
          </motion.div>
        </div>
      </section>
      <AboutSection />
      <Footer />
    </div>
  );
};
export default AboutPage;
