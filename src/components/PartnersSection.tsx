import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LogoCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex-shrink-0 flex flex-col items-center justify-center bg-card rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer group" style={{ width: 130, height: 90 }} title={name}>
    <img src={logo} alt={name} className="h-14 w-auto max-w-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" loading="lazy" />
  </div>
);

const marqueeStyles = `
  @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
  .marquee-track { display: flex; gap: 1.5rem; width: max-content; }
  .marquee-left { animation: scroll-left 40s linear infinite; }
  .marquee-right { animation: scroll-right 35s linear infinite; }
  .marquee-wrapper:hover .marquee-track { animation-play-state: paused; }
`;

const PartnersSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const airlines = [
    { name: t("الخطوط السعودية", "Saudi Airlines"), logo: "/logos/airlines/SV.png" },
    { name: t("طيران ناس", "Flynas"), logo: "/logos/airlines/XY.png" },
    { name: t("طيران أديل", "Flyadeal"), logo: "/logos/airlines/F3.png" },
    { name: t("طيران الإمارات", "Emirates"), logo: "/logos/airlines/EK.png" },
    { name: t("فلاي دبي", "Flydubai"), logo: "/logos/airlines/FZ.png" },
    { name: t("الاتحاد للطيران", "Etihad Airways"), logo: "/logos/airlines/EY.png" },
    { name: t("طيران العربية", "Air Arabia"), logo: "/logos/airlines/G9.png" },
    { name: t("الخطوط القطرية", "Qatar Airways"), logo: "/logos/airlines/QR.png" },
    { name: t("الخطوط التركية", "Turkish Airlines"), logo: "/logos/airlines/TK.png" },
    { name: t("الخطوط الكويتية", "Kuwait Airways"), logo: "/logos/airlines/KU.png" },
    { name: t("طيران الخليج", "Gulf Air"), logo: "/logos/airlines/GF.png" },
    { name: t("العمانية", "Oman Air"), logo: "/logos/airlines/WY.png" },
    { name: t("مصر للطيران", "EgyptAir"), logo: "/logos/airlines/MS.png" },
    { name: t("الملكية الأردنية", "Royal Jordanian"), logo: "/logos/airlines/RJ.png" },
    { name: t("لوفتهانزا", "Lufthansa"), logo: "/logos/airlines/LH.png" },
    { name: t("الخطوط البريطانية", "British Airways"), logo: "/logos/airlines/BA.png" },
    { name: t("الخطوط الفرنسية", "Air France"), logo: "/logos/airlines/AF.png" },
    { name: "KLM", logo: "/logos/airlines/KL.png" },
    { name: t("سنغافورة", "Singapore Airlines"), logo: "/logos/airlines/SQ.png" },
    { name: t("ماليزيا", "Malaysia Airlines"), logo: "/logos/airlines/MH.png" },
  ];

  const hotels = [
    { name: t("مجموعة IHG", "IHG Hotels"), logo: "/logos/hotels/ihg.png" },
    { name: t("ماريوت", "Marriott"), logo: "/logos/hotels/marriott.png" },
    { name: t("هيلتون", "Hilton"), logo: "/logos/hotels/hilton.png" },
    { name: t("أكور", "Accor"), logo: "/logos/hotels/accor.png" },
    { name: t("حياة", "Hyatt"), logo: "/logos/hotels/hyatt.png" },
    { name: t("ريتز كارلتون", "Ritz-Carlton"), logo: "/logos/hotels/ritz.png" },
    { name: "Minor Hotels", logo: "/logos/hotels/minor.png" },
    { name: t("فور سيزونز", "Four Seasons"), logo: "/logos/hotels/fourseasons.png" },
    { name: t("راديسون", "Radisson"), logo: "/logos/hotels/radisson.png" },
    { name: t("ويندام", "Wyndham"), logo: "/logos/hotels/wyndham.png" },
    { name: t("بست ويسترن", "Best Western"), logo: "/logos/hotels/bestwestern.png" },
    { name: t("شانغريلا", "Shangri-La"), logo: "/logos/hotels/shangrila.png" },
  ];

  const ihgBrands = language === "ar"
    ? ["إنتركونتيننتال", "كراون بلازا", "هوليداي إن", "هوليداي إن إكسبريس", "فوكو", "كيمبتون"]
    : ["InterContinental", "Crowne Plaza", "Holiday Inn", "Holiday Inn Express", "voco", "Kimpton"];

  return (
    <section className="section-padding bg-background overflow-hidden" dir="ltr">
      <style>{marqueeStyles}</style>
      <div className="container-custom" ref={ref} dir={language === "ar" ? "rtl" : "ltr"}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-secondary font-medium">{t("شركاؤنا في النجاح", "Partners in Success")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("شركات ", "")}
            <span className="text-primary">{t("الطيران والفنادق", "Airlines & Hotels")}</span>
            {language === "en" ? " Partners" : ""}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("نتعاون مع أفضل شركات الطيران والفنادق العالمية لنقدم لكم أفضل الخدمات والأسعار", "We partner with the best airlines and hotel chains worldwide to offer you the best services and prices")}
          </p>
        </motion.div>
      </div>

      <div className="mb-10">
        <div className="container-custom mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2"><Plane className="text-primary" />{t("شركات الطيران", "Airlines")}</h3>
        </div>
        <div className="relative marquee-wrapper">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee-track marquee-left">{[...airlines, ...airlines].map((a, i) => <LogoCard key={`${a.name}-${i}`} name={a.name} logo={a.logo} />)}</div>
        </div>
      </div>

      <div className="mb-12">
        <div className="container-custom mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2"><Building2 className="text-secondary" />{t("مجموعات الفنادق", "Hotel Groups")}</h3>
        </div>
        <div className="relative marquee-wrapper">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee-track marquee-right">{[...hotels, ...hotels].map((h, i) => <LogoCard key={`${h.name}-${i}`} name={h.name} logo={h.logo} />)}</div>
        </div>
      </div>

      <div className="container-custom" dir={language === "ar" ? "rtl" : "ltr"}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.01 }} className="bg-gradient-to-l from-primary to-primary-dark rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className={`text-center ${language === "ar" ? "md:text-right" : "md:text-left"} flex-1`}>
            <h4 className="text-xl font-bold text-primary-foreground mb-2">{t("شريك معتمد لمجموعة فنادق IHG", "Certified Partner of IHG Hotels Group")}</h4>
            <p className="text-primary-foreground/80 mb-4">{t("احصل على أفضل الأسعار والعروض الحصرية في فنادق مجموعة IHG العالمية", "Get the best prices and exclusive offers at IHG Hotels worldwide")}</p>
            <div className={`flex flex-wrap gap-2 justify-center ${language === "ar" ? "md:justify-start" : "md:justify-start"}`}>
              {ihgBrands.map((brand) => <span key={brand} className="bg-white/15 text-primary-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">{brand}</span>)}
            </div>
          </div>
          <motion.div whileHover={{ rotate: 3, scale: 1.05 }} className="bg-white rounded-xl p-4 flex-shrink-0 shadow-lg">
            <img src="/logos/hotels/ihg.png" alt="IHG" className="h-14 w-auto object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
