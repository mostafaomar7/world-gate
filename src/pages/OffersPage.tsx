import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Phone, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import coverOffers from "@/assets/cover-offers.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

import offerMauritius from "@/assets/offer-mauritius.jpg";
import offerVietnam from "@/assets/offer-vietnam.jpg";
import offerSingapore from "@/assets/offer-singapore.jpg";
import offerPoland from "@/assets/offer-poland.jpg";
import offerThailand from "@/assets/offer-thailand.jpg";
import offerMalaysia from "@/assets/offer-malaysia.jpg";
import offerGeorgia from "@/assets/offer-georgia.jpg";
import offerAzerbaijan from "@/assets/offer-azerbaijan.jpg";

const OffersPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const offers = [
    { name: t("موريشيوس", "Mauritius"), nameSearch: "موريشيوس Mauritius", price: 5200, image: offerMauritius, duration: t("6 ليالي", "6 Nights"), tag: t("جزر", "Islands") },
    { name: t("فيتنام", "Vietnam"), nameSearch: "فيتنام Vietnam", price: 3150, image: offerVietnam, duration: t("7 ليالي", "7 Nights"), tag: t("آسيا", "Asia") },
    { name: t("سنغافورة", "Singapore"), nameSearch: "سنغافورة Singapore", price: 6190, image: offerSingapore, duration: t("5 ليالي", "5 Nights"), tag: t("آسيا", "Asia") },
    { name: t("بولندا", "Poland"), nameSearch: "بولندا Poland", price: 5950, image: offerPoland, duration: t("7 ليالي", "7 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("تايلاند", "Thailand"), nameSearch: "تايلاند Thailand", price: 6700, image: offerThailand, duration: t("8 ليالي", "8 Nights"), tag: t("آسيا", "Asia") },
    { name: t("ماليزيا", "Malaysia"), nameSearch: "ماليزيا Malaysia", price: 4500, image: offerMalaysia, duration: t("6 ليالي", "6 Nights"), tag: t("آسيا", "Asia") },
    { name: t("جورجيا", "Georgia"), nameSearch: "جورجيا Georgia", price: 3800, image: offerGeorgia, duration: t("5 ليالي", "5 Nights"), tag: t("القوقاز", "Caucasus") },
    { name: t("أذربيجان", "Azerbaijan"), nameSearch: "أذربيجان Azerbaijan", price: 4200, image: offerAzerbaijan, duration: t("5 ليالي", "5 Nights"), tag: t("القوقاز", "Caucasus") },
  ];

  const filtered = offers.filter((o) => o.name.toLowerCase().includes(search.toLowerCase()) || o.tag.toLowerCase().includes(search.toLowerCase()) || o.nameSearch.toLowerCase().includes(search.toLowerCase()));

  const buildOfferWaLink = (offer: typeof offers[number]) => {
    const text = t(
      `مرحباً، أرغب بالحجز في عرض ${offer.name} (${offer.duration}) بسعر ${offer.price.toLocaleString()} ر.س للشخص`,
      `Hello, I'd like to book the ${offer.name} offer (${offer.duration}) at ${offer.price.toLocaleString()} SAR per person`,
    );
    return `https://wa.me/966112200396?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverOffers} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4"><Tag className="text-secondary" size={28} /></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("العروض ", "Exclusive ")}<span className="text-secondary">{t("الحصرية", "Offers")}</span></h1>
            <p className="text-lg text-white/80 mb-8">{t("اكتشف أفضل العروض والباقات السياحية بأسعار تنافسية", "Discover the best travel deals and packages at competitive prices")}</p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input placeholder={t("ابحث عن وجهة...", "Search for a destination...")} value={search} onChange={(e) => setSearch(e.target.value)} className="pr-10 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((offer, index) => (
              <motion.div key={offer.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">{offer.tag}</div>
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full">{offer.duration}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-2">{offer.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-primary">{offer.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">{t("ر.س / للشخص", "SAR / person")}</span>
                  </div>
                  <div className="flex gap-2">
                    <a href={buildOfferWaLink(offer)} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="btn-primary w-full rounded-xl text-sm">{t("احجز الآن", "Book Now")}</Button>
                    </a>
                    <a href="tel:+966112200396">
                      <Button variant="outline" size="icon" className="rounded-xl border-primary/20 hover:bg-primary/5"><Phone size={18} className="text-primary" /></Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-16 text-muted-foreground"><p className="text-lg">{t("لا توجد عروض تطابق بحثك", "No offers match your search")}</p></div>}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default OffersPage;
