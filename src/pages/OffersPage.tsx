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
import offerBelgium from "@/assets/market-europe.jpg";
import offerSharm from "@/assets/eid-sharm.jpg";
import offerIstanbul from "@/assets/destination-istanbul.jpg";
import offerSouthAfrica from "@/assets/dest-morocco.jpg";
import offerRussia from "@/assets/offer-poland.jpg";
import offerBeNl from "@/assets/eid-london.jpg";
import offerNorway from "@/assets/market-europe.jpg";
import offerParis from "@/assets/destination-paris.jpg";
import offerSwiss from "@/assets/dest-switzerland.jpg";
import offerMaldives from "@/assets/destination-maldives.jpg";
import offerCairo from "@/assets/eid-cairo.jpg";
import offerGreece from "@/assets/dest-greece.jpg";
import offerSpain from "@/assets/dest-spain.jpg";
import offerSriLanka from "@/assets/dest-srilanka.jpg";
import offerBali from "@/assets/destination-bali.jpg";

type Offer = {
  name: string;
  nameSearch: string;
  price: number;
  image: string;
  duration: string;
  tag: string;
  currency?: "SAR" | "USD";
  itinerary?: string;
};

const OffersPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const offers: Offer[] = [
    { name: t("موريشيوس", "Mauritius"), nameSearch: "موريشيوس Mauritius", price: 5200, image: offerMauritius, duration: t("6 ليالي", "6 Nights"), tag: t("جزر", "Islands") },
    { name: t("فيتنام", "Vietnam"), nameSearch: "فيتنام Vietnam", price: 3150, image: offerVietnam, duration: t("7 ليالي", "7 Nights"), tag: t("آسيا", "Asia") },
    { name: t("سنغافورة", "Singapore"), nameSearch: "سنغافورة Singapore", price: 6190, image: offerSingapore, duration: t("5 ليالي", "5 Nights"), tag: t("آسيا", "Asia") },
    { name: t("بولندا", "Poland"), nameSearch: "بولندا Poland", price: 5950, image: offerPoland, duration: t("7 ليالي", "7 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("تايلاند", "Thailand"), nameSearch: "تايلاند Thailand", price: 6700, image: offerThailand, duration: t("8 ليالي", "8 Nights"), tag: t("آسيا", "Asia") },
    { name: t("ماليزيا", "Malaysia"), nameSearch: "ماليزيا Malaysia", price: 4500, image: offerMalaysia, duration: t("6 ليالي", "6 Nights"), tag: t("آسيا", "Asia") },
    { name: t("جورجيا", "Georgia"), nameSearch: "جورجيا Georgia", price: 3800, image: offerGeorgia, duration: t("5 ليالي", "5 Nights"), tag: t("القوقاز", "Caucasus") },
    { name: t("أذربيجان", "Azerbaijan"), nameSearch: "أذربيجان Azerbaijan", price: 4200, image: offerAzerbaijan, duration: t("5 ليالي", "5 Nights"), tag: t("القوقاز", "Caucasus") },
    { name: t("بلجيكا", "Belgium"), nameSearch: "بلجيكا Belgium", price: 5400, image: offerBelgium, duration: t("11 ليالي", "11 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("شرم الشيخ", "Sharm El Sheikh"), nameSearch: "شرم الشيخ Sharm El Sheikh", price: 1950, image: offerSharm, duration: t("5 ليالي", "5 Nights"), tag: t("البحر الأحمر", "Red Sea") },
    { name: t("إسطنبول", "Istanbul"), nameSearch: "إسطنبول Istanbul", price: 3999, image: offerIstanbul, duration: t("7 ليالي", "7 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("جنوب أفريقيا", "South Africa"), nameSearch: "جنوب أفريقيا South Africa", price: 4670, image: offerSouthAfrica, duration: t("8 ليالي", "8 Nights"), tag: t("أفريقيا", "Africa") },
    { name: t("موسكو – سان بيترسبرغ", "Moscow – Saint Petersburg"), nameSearch: "موسكو سان بيترسبرغ Moscow Saint Petersburg Russia", price: 6150, image: offerRussia, duration: t("8 ليالي", "8 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("بلجيكا – هولندا", "Belgium – Netherlands"), nameSearch: "بلجيكا هولندا Belgium Netherlands", price: 5250, image: offerBeNl, duration: t("10 ليالي", "10 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("النرويج", "Norway"), nameSearch: "النرويج Norway", price: 4650, image: offerNorway, duration: t("10 ليالي", "10 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("فرنسا – بلجيكا – ألمانيا – هولندا", "France – Belgium – Germany – Netherlands"), nameSearch: "فرنسا بلجيكا ألمانيا هولندا France Belgium Germany Netherlands", price: 7250, image: offerParis, duration: t("12 ليلة", "12 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("إيطاليا – سويسرا", "Italy – Switzerland"), nameSearch: "إيطاليا سويسرا Italy Switzerland", price: 6590, image: offerSwiss, duration: t("11 ليلة", "11 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("تركيا", "Turkey"), nameSearch: "تركيا Turkey", price: 4750, image: offerIstanbul, duration: t("8 ليالي", "8 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("سويسرا – فرنسا – إيطاليا", "Switzerland – France – Italy"), nameSearch: "سويسرا فرنسا إيطاليا Switzerland France Italy", price: 5950, image: offerSwiss, duration: t("11 ليلة", "11 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("ألمانيا – النمسا", "Germany – Austria"), nameSearch: "ألمانيا النمسا Germany Austria", price: 7100, image: offerSwiss, duration: t("12 ليلة", "12 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("تبليسي – باتومي – تبليسي", "Tbilisi – Batumi – Tbilisi"), nameSearch: "تبليسي باتومي جورجيا Tbilisi Batumi Georgia", price: 2550, image: offerGeorgia, duration: t("6 ليالي", "6 Nights"), tag: t("القوقاز", "Caucasus") },
    { name: t("ماليزيا", "Malaysia"), nameSearch: "ماليزيا Malaysia", price: 3550, image: offerMalaysia, duration: t("7 ليالي", "7 Nights"), tag: t("آسيا", "Asia") },
    { name: t("تركيا", "Turkey"), nameSearch: "تركيا Turkey", price: 3950, image: offerIstanbul, duration: t("8 ليالي", "8 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("المالديف", "Maldives"), nameSearch: "المالديف Maldives", price: 6200, image: offerMaldives, duration: t("4 ليالي", "4 Nights"), tag: t("جزر", "Islands") },
    { name: t("هولندا", "Netherlands"), nameSearch: "هولندا Netherlands Holland", price: 3550, image: offerNorway, duration: t("5 ليالي", "5 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("القاهرة", "Cairo"), nameSearch: "القاهرة مصر Cairo Egypt", price: 3550, image: offerCairo, duration: t("5 ليالي", "5 Nights"), tag: t("أفريقيا", "Africa") },
    { name: t("لندن", "London"), nameSearch: "لندن London", price: 4450, image: offerBeNl, duration: t("6 ليالي", "6 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("اليونان", "Greece"), nameSearch: "اليونان Greece", price: 4900, image: offerGreece, duration: t("6 ليالي", "6 Nights"), tag: t("أوروبا", "Europe") },
    {
      name: t("جولة أذربيجان (باكو – قبالا – قوبا)", "Azerbaijan Tour (Baku – Gabala – Quba)"),
      nameSearch: "أذربيجان باكو قبالا قوبا Azerbaijan Baku Gabala Quba",
      price: 780,
      currency: "USD",
      image: offerAzerbaijan,
      duration: t("8 ليالي", "8 Nights"),
      tag: t("القوقاز", "Caucasus"),
      itinerary: t(
        "تفاصيل الإقامة: 2 ليلة باكو + 2 ليلة قبالا + 1 ليلة باكو + 1 ليلة قوبا + 2 ليلة باكو",
        "Itinerary: 2 nights Baku + 2 nights Gabala + 1 night Baku + 1 night Quba + 2 nights Baku",
      ),
    },
    { name: t("إسبانيا", "Spain"), nameSearch: "إسبانيا Spain", price: 5220, image: offerSpain, duration: t("10 ليالي", "10 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("الشمال الإيطالي", "Northern Italy"), nameSearch: "الشمال الإيطالي إيطاليا Northern Italy", price: 5399, image: offerSwiss, duration: t("11 ليلة", "11 Nights"), tag: t("أوروبا", "Europe") },
    { name: t("سريلانكا", "Sri Lanka"), nameSearch: "سريلانكا Sri Lanka", price: 2000, image: offerSriLanka, duration: t("6 ليالي", "6 Nights"), tag: t("آسيا", "Asia") },
    { name: t("أذربيجان", "Azerbaijan"), nameSearch: "أذربيجان Azerbaijan", price: 1450, image: offerAzerbaijan, duration: t("6 ليالي", "6 Nights"), tag: t("القوقاز", "Caucasus") },
    { name: t("تايلاند", "Thailand"), nameSearch: "تايلاند Thailand", price: 3790, image: offerThailand, duration: t("7 ليالي", "7 Nights"), tag: t("آسيا", "Asia") },
    { name: t("موريشيوس", "Mauritius"), nameSearch: "موريشيوس Mauritius", price: 7700, image: offerMauritius, duration: t("8 ليالي", "8 Nights"), tag: t("جزر", "Islands") },
    { name: t("تايلاند", "Thailand"), nameSearch: "تايلاند Thailand", price: 5050, image: offerThailand, duration: t("9 ليالي", "9 Nights"), tag: t("آسيا", "Asia") },
    { name: t("ماليزيا", "Malaysia"), nameSearch: "ماليزيا Malaysia", price: 4050, image: offerMalaysia, duration: t("10 ليالي", "10 Nights"), tag: t("آسيا", "Asia") },
    {
      name: t("جولة جورجيا (تبليسي – بورجومي/باكورياني – باتومي)", "Georgia Tour (Tbilisi – Borjomi/Bakuriani – Batumi)"),
      nameSearch: "جورجيا تبليسي بورجومي باكورياني باتومي Georgia Tbilisi Borjomi Bakuriani Batumi",
      price: 790,
      currency: "USD",
      image: offerGeorgia,
      duration: t("6 ليالي", "6 Nights"),
      tag: t("القوقاز", "Caucasus"),
      itinerary: t(
        "تفاصيل الإقامة: 2 ليلة تبليسي + 1 ليلة بورجومي أو باكورياني + 2 ليلة باتومي + 1 ليلة تبليسي",
        "Itinerary: 2 nights Tbilisi + 1 night Borjomi or Bakuriani + 2 nights Batumi + 1 night Tbilisi",
      ),
    },
    {
      name: t("باكيج بالي – جاكرتا (نوفمبر)", "Bali – Jakarta Package (November)"),
      nameSearch: "باكيج بالي جاكرتا اندونيسيا نوفمبر كوتا نوسا دوا جيمباران Bali Jakarta Indonesia November Kuta Nusa Dua Jimbaran",
      price: 4500,
      image: offerBali,
      duration: t("11 ليلة", "11 Nights"),
      tag: t("آسيا", "Asia"),
      itinerary: t(
        `برنامج الإقامة:
• 4 ليالي - بالي/كوتا - Hotel Aloft Kuta ⭐⭐⭐⭐ (غرفة الوفت روم شامل الإفطار)
• 3 ليالي - بالي/نوسا دوا - Villa Agranusa Signature ⭐⭐⭐⭐ (فيلا غرفة نوم + مسبح خاص + إفطار)
• 3 ليالي - بالي/جيمباران - Hotel Platinum Bali ⭐⭐⭐⭐⭐ (غرفة Ocean View شامل الإفطار)
• 1 ليلة - جاكرتا - Hotel Citadines Sudirman ⭐⭐⭐⭐ (شقة ديلوكس شامل الإفطار)

✅ يشمل العرض:
• الفنادق (إفطار لشخصين + طفل تحت 5 سنوات)
• سيارة خاصة + سائق (تويوتا أفانزا) للاستقبال والانتقالات والجولات اليومية
• شرائح إنترنت لشخصين
• الطيران الداخلي لشخصين

❌ لا يشمل العرض:
• ضريبة دخول بالي
• الطيران الدولي
• أسعار الأنشطة والمزارات

ملاحظة: هذا عرض سعر فقط، يتم التحقق من توفر الغرف عند اعتماد الطلب.`,
        `Stay Program:
• 4 nights - Bali/Kuta - Hotel Aloft Kuta ⭐⭐⭐⭐ (Aloft Room with breakfast)
• 3 nights - Bali/Nusa Dua - Villa Agranusa Signature ⭐⭐⭐⭐ (1-bedroom villa + private pool + breakfast)
• 3 nights - Bali/Jimbaran - Hotel Platinum Bali ⭐⭐⭐⭐⭐ (Ocean View room with breakfast)
• 1 night - Jakarta - Hotel Citadines Sudirman ⭐⭐⭐⭐ (Deluxe apartment with breakfast)

✅ Includes:
• Hotels (breakfast for 2 + 1 child under 5)
• Private car + driver (Toyota Avanza) for transfers and daily tours
• SIM cards for 2 persons
• Domestic flights for 2 persons

❌ Excludes:
• Bali entry tax
• International flights
• Activity and attraction fees

Note: This is a price quote only; room availability is confirmed upon order approval.`,
      ),
    },
  ];

  const filtered = offers.filter((o) => o.name.toLowerCase().includes(search.toLowerCase()) || o.tag.toLowerCase().includes(search.toLowerCase()) || o.nameSearch.toLowerCase().includes(search.toLowerCase()));

  const buildOfferWaLink = (offer: Offer) => {
    const currencyAr = offer.currency === "USD" ? "دولار" : "ر.س";
    const currencyEn = offer.currency === "USD" ? "USD" : "SAR";
    const itineraryLine = offer.itinerary ? `\n${offer.itinerary}` : "";
    const text = t(
      `مرحباً، أرغب بالحجز في عرض ${offer.name} (${offer.duration}) بسعر ${offer.price.toLocaleString()} ${currencyAr} للشخص${itineraryLine}`,
      `Hello, I'd like to book the ${offer.name} offer (${offer.duration}) at ${offer.price.toLocaleString()} ${currencyEn} per person${itineraryLine}`,
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
              <motion.div key={`${offer.name}-${offer.duration}-${offer.price}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">{offer.tag}</div>
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full">{offer.duration}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-2">{offer.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-primary">{offer.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">
                      {offer.currency === "USD" ? t("دولار / للشخص", "USD / person") : t("ر.س / للشخص", "SAR / person")}
                    </span>
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
