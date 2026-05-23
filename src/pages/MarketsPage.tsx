import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Plane, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import coverMarkets from "@/assets/cover-markets.jpg";
import marketAsia from "@/assets/market-asia.jpg";
import marketEurope from "@/assets/market-europe.jpg";
import marketCaucasus from "@/assets/market-caucasus.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destIstanbul from "@/assets/destination-istanbul.jpg";
import destBali from "@/assets/destination-bali.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MarketsPage = () => {
  const { t, language } = useLanguage();

  const markets = [
    { name: t("جنوب شرق آسيا","Southeast Asia"), description: t("تايلاند، ماليزيا، سنغافورة، فيتنام، إندونيسيا - استكشف سحر الشرق","Thailand, Malaysia, Singapore, Vietnam, Indonesia - Explore the charm of the East"), image: marketAsia, destinations: language==="ar"?["تايلاند","ماليزيا","سنغافورة","فيتنام","إندونيسيا"]:["Thailand","Malaysia","Singapore","Vietnam","Indonesia"], color: "from-primary to-primary-dark" },
    { name: t("أوروبا","Europe"), description: t("فرنسا، إسبانيا، إيطاليا، بولندا، تركيا - اكتشف عراقة التاريخ","France, Spain, Italy, Poland, Turkey - Discover rich history"), image: marketEurope, destinations: language==="ar"?["فرنسا","إسبانيا","إيطاليا","بولندا","تركيا"]:["France","Spain","Italy","Poland","Turkey"], color: "from-secondary to-secondary-dark" },
    { name: t("القوقاز","Caucasus"), description: t("جورجيا، أذربيجان - وجهات ساحرة بطبيعة خلابة","Georgia, Azerbaijan - Charming destinations with stunning nature"), image: marketCaucasus, destinations: language==="ar"?["جورجيا","أذربيجان"]:["Georgia","Azerbaijan"], color: "from-primary to-secondary" },
    { name: t("جزر المحيط الهندي","Indian Ocean Islands"), description: t("المالديف، موريشيوس، سيشل - جنة على الأرض","Maldives, Mauritius, Seychelles - Paradise on Earth"), image: destMaldives, destinations: language==="ar"?["المالديف","موريشيوس","سيشل"]:["Maldives","Mauritius","Seychelles"], color: "from-cyan-600 to-primary" },
    { name: t("تركيا","Turkey"), description: t("إسطنبول، أنطاليا، طرابزون، بورصة - وجهة تجمع بين الشرق والغرب","Istanbul, Antalya, Trabzon, Bursa - Where East meets West"), image: destIstanbul, destinations: language==="ar"?["إسطنبول","أنطاليا","طرابزون","بورصة"]:["Istanbul","Antalya","Trabzon","Bursa"], color: "from-red-600 to-secondary" },
    { name: t("إندونيسيا","Indonesia"), description: t("بالي، جاكرتا، يوجياكارتا - جزر استوائية بطبيعة ساحرة","Bali, Jakarta, Yogyakarta - Tropical islands with enchanting nature"), image: destBali, destinations: language==="ar"?["بالي","جاكرتا","يوجياكارتا"]:["Bali","Jakarta","Yogyakarta"], color: "from-emerald-600 to-primary" },
  ];

  const MarketCard = ({ market, index }: { market: typeof markets[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    return (
      <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer">
        <img src={market.image} alt={market.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{market.name}</h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">{market.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">{market.destinations.map((dest)=><span key={dest} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{dest}</span>)}</div>
          <Link to="/offers"><Button className="btn-secondary rounded-xl text-sm gap-2">{t("اكتشف العروض","Discover Offers")}{language==="ar"?<ArrowLeft size={16}/>:<ArrowRight size={16}/>}</Button></Link>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
      <Header /><FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0"><img src={coverMarkets} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" /></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4"><Globe className="text-secondary" size={28} /></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("الأسواق ","Global ")}<span className="text-secondary">{t("العالمية","Markets")}</span></h1>
            <p className="text-lg text-white/80">{t("اكتشف أبرز الوجهات والمناطق السياحية التي نغطيها حول العالم","Discover the top destinations and tourist regions we cover worldwide")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{label:t("وجهة سياحية","Tourist Destinations"),value:"+50"},{label:t("باقة متاحة","Available Packages"),value:"+30"},{label:t("شريك فندقي","Hotel Partners"),value:"+200"},{label:t("شركة طيران","Airlines"),value:"+15"}].map((stat)=>(<div key={stat.label}><p className="text-3xl font-bold text-primary">{stat.value}</p><p className="text-sm text-muted-foreground mt-1">{stat.label}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background"><div className="container-custom"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{markets.map((market,index)=><MarketCard key={market.name} market={market} index={index}/>)}</div></div></section>

      <section className="py-16 bg-gradient-to-l from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <Plane className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">{t("لم تجد وجهتك المفضلة؟","Didn't Find Your Favorite Destination?")}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">{t("تواصل معنا وسنصمم لك رحلة مخصصة تناسب ميزانيتك ورغباتك","Contact us and we'll design a custom trip to suit your budget and preferences")}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/966112200396" target="_blank" rel="noopener noreferrer"><Button className="btn-secondary rounded-xl px-8">{t("تواصل واتساب","WhatsApp Us")}</Button></a>
            <Link to="/contact"><Button variant="outline" className="rounded-xl px-8 border-white/30 text-white hover:bg-white/10">{t("تواصل معنا","Contact Us")}</Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default MarketsPage;
