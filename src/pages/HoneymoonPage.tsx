import Header from "@/components/Header";
import HoneymoonSection from "@/components/HoneymoonSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import coverHoneymoon from "@/assets/cover-honeymoon.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HoneymoonPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverHoneymoon} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4"><Heart className="text-secondary fill-secondary" size={28} /></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("رحلات ", "")}<span className="text-secondary">{t("شهر العسل", "Honeymoon Trips")}</span></h1>
            <p className="text-lg text-white/80">{t("اجعل بداية حياتكما الزوجية مميزة مع باقاتنا الرومانسية المصممة خصيصاً للأزواج", "Make the beginning of your married life special with our romantic packages designed for couples")}</p>
          </motion.div>
        </div>
      </section>
      <HoneymoonSection />
      <Footer />
    </div>
  );
};
export default HoneymoonPage;
