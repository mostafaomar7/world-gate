import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { visaCountries } from "@/data/visas";
import coverVisa from "@/assets/cover-visa.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const VisaPage = () => {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverVisa} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <FileText className="mx-auto mb-4 text-secondary" size={36} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("تأشيرات ", "Travel ")}<span className="text-secondary">{t("السفر", "Visas")}</span></h1>
            <p className="text-lg text-white/80">{t("نساعدك في استخراج تأشيرات السفر لجميع الدول بسهولة وسرعة", "We help you obtain travel visas for all countries easily and quickly")}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {visaCountries.map((country, i) => (
              <motion.div key={country.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/visa/${country.slug}`}>
                  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-6">
                      <img src={country.flag} alt={country.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-foreground mb-2">{country.name}</h3>
                      <Button variant="ghost" className="text-primary text-sm gap-1">
                        {t("التعرف أكثر", "Learn More")}
                        {language === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-l from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <FileText className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">{t("تحتاج مساعدة في استخراج تأشيرتك؟", "Need Help Getting Your Visa?")}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">{t("فريقنا المتخصص جاهز لمساعدتك في جميع إجراءات التأشيرات", "Our specialized team is ready to help you with all visa procedures")}</p>
          <a href={`https://wa.me/966112200396?text=${encodeURIComponent(t("مرحباً، أحتاج مساعدة في استخراج تأشيرة سفر، وأود معرفة المتطلبات والإجراءات.", "Hello, I need help obtaining a travel visa. Could you share the requirements and procedure?"))}`} target="_blank" rel="noopener noreferrer"><Button className="btn-secondary rounded-xl px-8">{t("تواصل واتساب", "WhatsApp Us")}</Button></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default VisaPage;
