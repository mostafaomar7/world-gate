import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { getDestinationBySlug } from "@/data/destinations";
import { destinationsEN } from "@/data/destinations-en";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Star, Clock, Globe, Languages, CreditCard, Stamp, CalendarDays, CheckCircle, Phone, ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>{children}</motion.div>;
};

const DestinationDetailPage = () => {
  const { t, language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const dest = getDestinationBySlug(slug || "");
  const [activePackage, setActivePackage] = useState(0);

  if (!dest) return <NotFound />;

  const en = language === "en" ? destinationsEN[dest.slug] : null;

  const name = en?.name || dest.name;
  const country = en?.country || dest.country;
  const tag = en?.tag || dest.tag;
  const description = en?.description || dest.description;
  const highlights = en?.highlights || dest.highlights;
  const bestTime = en?.bestTime || dest.bestTime;
  const currency = en?.currency || dest.currency;
  const lang = en?.language || dest.language;
  const visa = en?.visa || dest.visa;
  const itinerary = en?.itinerary || dest.itinerary;

  const getPackageName = (i: number) => en?.packages[i]?.name || dest.packages[i]?.name;
  const getPackageDuration = (i: number) => en?.packages[i]?.duration || dest.packages[i]?.duration;
  const getPackageFeatures = (i: number) => en?.packages[i]?.features || dest.packages[i]?.features;

  const buildPackageWaLink = () => {
    const pkg = dest.packages[activePackage];
    const pkgName = getPackageName(activePackage);
    const pkgDuration = getPackageDuration(activePackage);
    const text = t(
      `مرحباً، أرغب بحجز رحلة إلى ${name} - باقة ${pkgName} (${pkgDuration}) بسعر ${pkg?.price?.toLocaleString?.() ?? pkg?.price} ر.س للشخص`,
      `Hello, I'd like to book a trip to ${name} - ${pkgName} package (${pkgDuration}) at ${pkg?.price?.toLocaleString?.() ?? pkg?.price} SAR per person`,
    );
    return `https://wa.me/966112200396?text=${encodeURIComponent(text)}`;
  };

  const buildDestinationInquiryWaLink = () => {
    const text = t(
      `مرحباً، أرغب بالاستفسار عن رحلة إلى ${name} والحصول على أفضل عرض متاح.`,
      `Hello, I'd like to inquire about a trip to ${name} and get the best available offer.`,
    );
    return `https://wa.me/966112200396?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen">
      <Header /><FloatingContact />
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} src={dest.image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-0 right-0 left-0 p-8 md:p-16">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">{t("الرئيسية", "Home")}</Link><ChevronLeft size={14} />
              <Link to="/destinations" className="hover:text-white transition-colors">{t("الوجهات", "Destinations")}</Link><ChevronLeft size={14} />
              <span className="text-white">{name}</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">{tag}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{name}</h1>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-1"><MapPin size={16} /><span>{country}</span></div>
                <div className="flex items-center gap-1"><Star className="text-secondary fill-secondary" size={16} /><span>{dest.rating}</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card border-b border-border py-4 sticky top-[72px] z-30 backdrop-blur-sm bg-card/95">
        <div className="container-custom">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            {[
              { icon: CalendarDays, label: t("أفضل وقت", "Best Time"), value: bestTime },
              { icon: CreditCard, label: t("العملة", "Currency"), value: currency },
              { icon: Languages, label: t("اللغة", "Language"), value: lang },
              { icon: Stamp, label: t("التأشيرة", "Visa"), value: visa },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-2"><info.icon size={16} className="text-primary" /><span className="text-muted-foreground">{info.label}:</span><span className="font-medium text-foreground">{info.value}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Section className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("عن ", "About ")}<span className="text-primary">{name}</span></h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">{description}</p>
              <h3 className="text-xl font-bold text-foreground mb-4">{t("أبرز المعالم والأنشطة", "Top Attractions & Activities")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {highlights.map((h, i) => (
                  <motion.div key={h} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-2 bg-muted/50 rounded-xl p-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={18} /><span className="text-sm text-foreground">{h}</span>
                  </motion.div>
                ))}
              </div>
            </Section>
            <Section>
              <div className="sticky top-[140px]">
                <h3 className="text-xl font-bold text-foreground mb-4">{t("الباقات المتاحة", "Available Packages")}</h3>
                <div className="space-y-4">
                  {dest.packages.map((pkg, i) => (
                    <motion.div key={pkg.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} onClick={() => setActivePackage(i)} className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 ${activePackage === i ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/30"}`}>
                      <div className="flex justify-between items-start mb-3">
                        <div><h4 className="font-bold text-foreground">{getPackageName(i)}</h4><p className="text-sm text-muted-foreground">{getPackageDuration(i)}</p><div className="flex gap-0.5 mt-1">{[...Array(pkg.hotelStars)].map((_,s)=><Star key={s} className="text-secondary fill-secondary" size={12}/>)}</div></div>
                        <div className="text-left"><p className="text-2xl font-bold text-primary">{pkg.price}</p><p className="text-xs text-muted-foreground">{t("ر.س / للشخص", "SAR / person")}</p></div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">{getPackageFeatures(i).map((f)=><span key={f} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{f}</span>)}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <a href={buildPackageWaLink()} target="_blank" rel="noopener noreferrer" className="block"><Button className="btn-primary w-full rounded-xl py-6 text-base">{t("احجز الآن عبر واتساب", "Book Now via WhatsApp")}</Button></a>
                  <a href="tel:+966112200396" className="block"><Button variant="outline" className="w-full rounded-xl py-6 text-base gap-2 border-primary/20"><Phone size={18} className="text-primary" />{t("اتصل للحجز", "Call to Book")}: +966112200396</Button></a>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <Section className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("برنامج ", "Trip ")}<span className="text-primary">{t("الرحلة", "Itinerary")}</span></h2><p className="text-muted-foreground">{t("خطة يومية مقترحة لرحلتك", "Suggested daily plan for your trip")}</p></Section>
          <div className="max-w-3xl mx-auto">
            {itinerary.map((day, i) => (
              <motion.div key={day.day} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-6 mb-0 last:mb-0">
                <div className="flex flex-col items-center"><motion.div whileHover={{ scale: 1.15 }} className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 shadow-md">{day.day}</motion.div>{i < itinerary.length - 1 && <div className="w-0.5 h-full bg-primary/20 my-2 min-h-[40px]" />}</div>
                <div className="pb-8"><h3 className="text-lg font-bold text-foreground mb-1">{day.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{day.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-l from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-4">{t(`جاهز لرحلتك إلى ${name}؟`, `Ready for Your Trip to ${name}?`)}</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">{t("تواصل معنا الآن واحصل على أفضل عرض لرحلتك القادمة", "Contact us now and get the best offer for your next trip")}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={buildDestinationInquiryWaLink()} target="_blank" rel="noopener noreferrer"><Button className="btn-secondary rounded-xl px-8 py-6 text-base">{t("احجز عبر واتساب", "Book via WhatsApp")}</Button></a>
              <Link to="/offers"><Button variant="outline" className="rounded-xl px-8 py-6 text-base bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white gap-2">{t("تصفح العروض", "Browse Offers")}{language === "ar" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default DestinationDetailPage;
