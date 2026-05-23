import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Ship, Anchor, Waves, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cruiseFeatures, cruisePackages } from "@/data/cruises";
import coverCruise from "@/assets/cover-cruise.jpg";
import logoDisney from "@/assets/cruise-logos/disney.png";
import logoRoyal from "@/assets/cruise-logos/royal-caribbean.png";
import logoMSC from "@/assets/cruise-logos/msc.png";
import logoCosta from "@/assets/cruise-logos/costa.png";
import logoNorwegian from "@/assets/cruise-logos/norwegian.png";
import logoRegent from "@/assets/cruise-logos/regent.png";
import { useLanguage } from "@/contexts/LanguageContext";

const partnerLines = [
  { name: "Disney Cruise Line", nameAr: "ديزني كروز لاين", logo: logoDisney },
  { name: "Royal Caribbean", nameAr: "رويال كاريبيان", logo: logoRoyal },
  { name: "MSC Cruises", nameAr: "إم إس سي كروز", logo: logoMSC },
  { name: "Costa Cruises", nameAr: "كوستا كروز", logo: logoCosta },
  { name: "Norwegian Cruise Line", nameAr: "نورويجيان كروز لاين", logo: logoNorwegian },
  { name: "Regent Seven Seas", nameAr: "ريجنت سفن سيز", logo: logoRegent },
];

const CruisePage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />

      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverCruise} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4"><Ship className="text-secondary" size={36} /><Waves className="text-secondary" size={28} /></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("الرحلات ", "")}<span className="text-secondary">{t("البحرية", "Cruise Trips")}</span></h1>
            <p className="text-lg text-white/80 mb-2">{t("استمتع بعالم من الفخامة، المغامرات، والمناظر الخلابة", "Enjoy a world of luxury, adventure, and breathtaking views")}</p>
            <p className="text-secondary font-medium">{t("على متن أفضل السفن السياحية العالمية", "On board the world's finest cruise ships")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border">
        <div className="container-custom">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-center text-foreground mb-12">
            {t("لماذا تختار ", "Why Choose ")}<span className="text-primary">{t("الرحلات البحرية؟", "Cruise Trips?")}</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cruiseFeatures.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-b border-border overflow-hidden">
        <div className="container-custom mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-foreground"
          >
            {t("شركاؤنا في ", "Our Partners in ")}
            <span className="text-primary">{t("الرحلات البحرية", "Cruise Trips")}</span>
          </motion.h2>
        </div>
        <div className="relative">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...partnerLines, ...partnerLines, ...partnerLines].map((line, idx) => (
              <div
                key={`${line.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center gap-4 px-8 py-5 bg-card border border-border rounded-2xl min-w-[280px] h-28 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <img
                  src={line.logo}
                  alt={line.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">{t("جدول ", "")}<span className="text-secondary">{t("الرحلات البحرية", "Cruise Itineraries")}</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("اختر رحلتك المفضلة من مجموعة متنوعة من المسارات العالمية", "Choose your favorite trip from a variety of worldwide itineraries")}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cruisePackages.map((pkg, i) => {
              const title = t(`رحلة ${pkg.id} – ${pkg.regionAr}`, `Trip ${pkg.id} – ${pkg.region}`);
              const waMsg = t(
                `أهلاً! أود الاستفسار عن ${title} (${pkg.nights} ليالٍ - ${pkg.ship})`,
                `Hello! I'd like to inquire about ${title} (${pkg.nights} Nights - ${pkg.ship})`
              );
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={pkg.map}
                      alt={`${pkg.region} cruise route map`}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      {pkg.nights} {t("ليالٍ", "Nights")}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                      {pkg.cruiseLine}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Anchor size={14} className="text-secondary" />
                        {pkg.ship}
                      </p>
                    </div>
                    <div className="flex-1 mb-5">
                      <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                        <Star size={14} className="text-secondary" />
                        {t("جدول الرحلة", "Itinerary")}
                      </h4>
                      <ul className="space-y-2 max-h-64 overflow-y-auto pr-1">
                        {pkg.itinerary.map((d) => (
                          <li key={d.day} className="flex gap-3 text-sm border-b border-border/50 pb-2 last:border-0">
                            <span className="flex-shrink-0 w-14 font-bold text-primary">
                              {t(`اليوم ${d.day}`, `Day ${d.day}`)}
                            </span>
                            <div className="flex-1">
                              <div className="text-foreground font-medium">{d.port}</div>
                              {d.time && <div className="text-xs text-muted-foreground mt-0.5">{d.time}</div>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={`https://wa.me/966112200396?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="btn-secondary rounded-xl w-full gap-2">
                        {t("احجز الآن عبر واتساب", "Book Now via WhatsApp")}
                        <ArrowLeft size={14} className="rtl:rotate-180" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-l from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <Ship className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">{t("ابدأ مغامرتك البحرية الآن", "Start Your Cruise Adventure Now")}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">{t("تواصل معنا لحجز رحلتك البحرية القادمة واستمتع بتجربة لا تُنسى", "Contact us to book your next cruise and enjoy an unforgettable experience")}</p>
          <a href="https://wa.me/966112200396" target="_blank" rel="noopener noreferrer"><Button className="btn-secondary rounded-xl px-8">{t("تواصل واتساب", "WhatsApp Us")}</Button></a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default CruisePage;
