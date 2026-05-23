import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { useState } from "react";
import coverDestinations from "@/assets/cover-destinations.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 30, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } } };

const DestinationsPage = () => {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState("");
  const destNames: Record<string, { name: string; country: string; tag: string; desc: string }> = {
    maldives: { name: "Maldives", country: "Maldives", tag: "Most Popular", desc: "A tropical paradise with crystal-clear waters and luxury overwater villas." },
    paris: { name: "Paris", country: "France", tag: "Romantic", desc: "The city of lights, love, and world-class cuisine." },
    istanbul: { name: "Istanbul", country: "Turkey", tag: "Cultural", desc: "Where East meets West — history, bazaars, and stunning mosques." },
    bali: { name: "Bali", country: "Indonesia", tag: "Tropical", desc: "Island of the Gods with rice terraces, temples, and beaches." },
    seychelles: { name: "Seychelles", country: "Seychelles", tag: "Luxury", desc: "Pristine beaches and granite boulders in the Indian Ocean." },
    switzerland: { name: "Switzerland", country: "Switzerland", tag: "Nature", desc: "Alpine scenery, chocolate, and charming villages." },
    spain: { name: "Spain", country: "Spain", tag: "Adventure", desc: "Flamenco, tapas, and vibrant Mediterranean culture." },
    georgia: { name: "Georgia", country: "Georgia", tag: "Trending", desc: "Caucasus mountains, ancient churches, and warm hospitality." },
    azerbaijan: { name: "Azerbaijan", country: "Azerbaijan", tag: "Unique", desc: "Land of fire with modern architecture and rich heritage." },
    thailand: { name: "Thailand", country: "Thailand", tag: "Popular", desc: "Golden temples, street food, and tropical islands." },
    malaysia: { name: "Malaysia", country: "Malaysia", tag: "Family", desc: "Modern cities, rainforests, and diverse cuisine." },
    singapore: { name: "Singapore", country: "Singapore", tag: "Modern", desc: "A futuristic city-state with gardens and world-class dining." },
    dubai: { name: "Dubai", country: "UAE", tag: "Luxury", desc: "Skyscrapers, golden beaches, and luxury shopping." },
    morocco: { name: "Morocco", country: "Morocco", tag: "Exotic", desc: "Colorful souks, Sahara desert, and imperial cities." },
    japan: { name: "Japan", country: "Japan", tag: "Cultural", desc: "Ancient temples, cherry blossoms, and cutting-edge technology." },
    greece: { name: "Greece", country: "Greece", tag: "Islands", desc: "Stunning islands, ancient ruins, and Mediterranean charm." },
    egypt: { name: "Egypt", country: "Egypt", tag: "Historical", desc: "Pyramids, pharaohs, and the magnificent Nile River." },
    srilanka: { name: "Sri Lanka", country: "Sri Lanka", tag: "Nature", desc: "Tea plantations, wildlife safaris, and golden beaches." },
  };

  const getDestField = (dest: any, field: "name" | "country" | "tag" | "description") => {
    if (language === "ar") return dest[field === "description" ? "description" : field];
    const en = destNames[dest.slug];
    if (!en) return dest[field === "description" ? "description" : field];
    if (field === "description") return en.desc;
    return en[field];
  };

  const filtered = destinations.filter((d) => {
    const q = search.toLowerCase();
    const name = getDestField(d, "name").toLowerCase();
    const country = getDestField(d, "country").toLowerCase();
    const tag = getDestField(d, "tag").toLowerCase();
    return name.includes(q) || country.includes(q) || tag.includes(q) || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverDestinations} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("اكتشف أجمل ", "Discover the Most Beautiful ")}<span className="text-secondary">{t("الوجهات السياحية", "Tourist Destinations")}</span></h1>
            <p className="text-lg text-white/80 mb-8">{destinations.length} {t("وجهة سياحية مختارة بعناية لتناسب جميع الأذواق والميزانيات", "carefully selected destinations to suit all tastes and budgets")}</p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <Input placeholder={t("ابحث عن وجهة...", "Search for a destination...")} value={search} onChange={(e) => setSearch(e.target.value)} className="pr-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dest) => (
              <motion.div key={dest.slug} variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
                <Link to={`/destination/${dest.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img src={dest.image} alt={getDestField(dest, "name")} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">{getDestField(dest, "tag")}</span>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg"><Star className="text-secondary fill-secondary" size={14} /><span className="text-sm font-medium text-foreground">{dest.rating}</span></div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2"><MapPin size={14} /><span>{getDestField(dest, "country")}</span></div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{getDestField(dest, "name")}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{getDestField(dest, "description")}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">{t("من", "From")} {dest.packages[0]?.price} {t("ريال", "SAR")}</span>
                      <span className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                        {t("التفاصيل", "Details")}
                        {language === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && <div className="text-center py-16 text-muted-foreground"><p className="text-lg">{t("لا توجد وجهات تطابق بحثك", "No destinations match your search")}</p></div>}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default DestinationsPage;
