import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, ListOrdered, AlertCircle, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { visaCountries } from "@/data/visas";
import { useLanguage } from "@/contexts/LanguageContext";

const VisaDetailPage = () => {
  const { t, language } = useLanguage();
  const { slug } = useParams();
  const visa = visaCountries.find((v) => v.slug === slug);

  if (!visa) {
    return (
      <div className="min-h-screen"><Header /><div className="flex items-center justify-center min-h-[60vh]"><div className="text-center"><h1 className="text-2xl font-bold text-foreground mb-4">{t("التأشيرة غير موجودة", "Visa not found")}</h1><Link to="/visa"><Button className="btn-primary rounded-xl">{t("العودة للتأشيرات", "Back to Visas")}</Button></Link></div></div><Footer /></div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header /><FloatingContact />
      <section className="pt-32 pb-16 bg-gradient-to-bl from-primary/10 via-background to-secondary/5">
        <div className="container-custom">
          <Link to="/visa" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6">
            {language === "ar" ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            {t("العودة لجميع التأشيرات", "Back to All Visas")}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-32 rounded-xl overflow-hidden border border-border shadow-md bg-card flex items-center justify-center p-4"><img src={visa.flag} alt={visa.name} className="w-full h-full object-contain" /></div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{t("دليل ", "Complete Guide to ")}<span className="text-primary">{visa.name}</span> {t("الشامل", "")}</h1>
              <div className="flex items-center gap-2 text-muted-foreground"><Clock size={18} /><span>{t("مدة المعالجة: ", "Processing Time: ")}{visa.processingTime}</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><FileText className="text-primary" size={22} />{t("أنواع التأشيرات المتاحة", "Available Visa Types")}</h2>
                <ul className="space-y-3">{visa.types.map((tt) => <li key={tt} className="flex items-center gap-3 text-muted-foreground"><CheckCircle size={16} className="text-primary flex-shrink-0" />{tt}</li>)}</ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><CheckCircle className="text-secondary" size={22} />{t("المتطلبات والأوراق المطلوبة", "Requirements & Documents")}</h2>
                <ul className="space-y-3">{visa.requirements.map((r) => <li key={r} className="flex items-start gap-3 text-muted-foreground"><span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />{r}</li>)}</ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><ListOrdered className="text-primary" size={22} />{t("خطوات الحصول على التأشيرة", "Steps to Obtain the Visa")}</h2>
                <ol className="space-y-4">{visa.steps.map((s, i) => <li key={s} className="flex items-start gap-4"><span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span><span className="text-muted-foreground pt-1">{s}</span></li>)}</ol>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 sticky top-28">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><AlertCircle className="text-secondary" size={20} />{t("ملاحظات مهمة", "Important Notes")}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{visa.notes}</p>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Star className="text-secondary" size={20} />{t("لماذا تختار بوابة العالم؟", "Why Choose WorldGate?")}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{visa.whyUs}</p>
                <a href={`https://wa.me/966112200396?text=${encodeURIComponent(t(`أهلاً! أود الاستفسار عن ${visa.name}`, `Hello! I'd like to inquire about ${visa.name}`))}`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="btn-secondary w-full rounded-xl">{t("استفسر الآن عبر واتساب", "Inquire Now via WhatsApp")}</Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default VisaDetailPage;
