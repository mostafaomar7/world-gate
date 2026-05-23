import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Phone, Sparkles, MapPin, Calendar, Hotel, Utensils, Bed, Star, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import coverOffers from "@/assets/cover-eid-offers.jpg";

import sharmImg from "@/assets/eid-sharm.jpg";
import cairoImg from "@/assets/eid-cairo.jpg";
import londonImg from "@/assets/eid-london.jpg";
import istanbulImg from "@/assets/destination-istanbul.jpg";
import dohaImg from "@/assets/eid-doha.jpg";
import hurghadaImg from "@/assets/eid-hurghada.jpg";
import cruiseImg from "@/assets/cover-cruise.jpg";

type EidOffer = {
  id: string;
  destination: string;
  image: string;
  rating: string;
  duration: string;
  hotel: string;
  room: string;
  meals: string;
  services: string;
  price: number;
  priceNote?: string;
  badge?: string;
};

const EidOffersPage = () => {
  const { t, language } = useLanguage();

  const offers: EidOffer[] = [
    {
      id: "sharm",
      destination: t("شرم الشيخ", "Sharm El Sheikh"),
      image: sharmImg,
      rating: t("5 نجوم", "5 Stars"),
      duration: t("5 ليالي / 6 أيام", "5 Nights / 6 Days"),
      hotel: "Coral Sea Holiday Resort",
      room: t("غرفة زوجية إطلالة بحر - سرير كبير", "Double Sea-View Room - King Bed"),
      meals: t("إقامة شاملة كلياً", "All Inclusive"),
      services: t("استقبال وتوديع", "Meet & Greet"),
      price: 1950,
      badge: t("الأكثر طلباً", "Best Seller"),
    },
    {
      id: "aroya",
      destination: t("أوروبا كروز - أرويا", "Aroya Cruise"),
      image: cruiseImg,
      rating: t("كروز فاخر", "Luxury Cruise"),
      duration: t("5 أيام / 4 ليالي", "5 Days / 4 Nights"),
      hotel: t("كروز أرويا", "Aroya Cruise"),
      room: t("غرفة زوجية", "Double Cabin"),
      meals: t("شامل جميع الوجبات", "All Meals Included"),
      services: t("الأنشطة الترفيهية", "Entertainment Activities"),
      price: 1899,
      badge: t("جديد", "New"),
    },
    {
      id: "doha",
      destination: t("الدوحة", "Doha"),
      image: dohaImg,
      rating: t("5 نجوم", "5 Stars"),
      duration: t("6 أيام / 5 ليالي", "6 Days / 5 Nights"),
      hotel: t("شذا الدوحة", "Shaza Doha"),
      room: t("غرفة ديلوكس توأم", "Deluxe Twin Room"),
      meals: t("إفطار", "Breakfast"),
      services: t("استقبال وتوديع", "Meet & Greet"),
      price: 2499,
    },
    {
      id: "cairo",
      destination: t("القاهرة", "Cairo"),
      image: cairoImg,
      rating: t("5 نجوم", "5 Stars"),
      duration: t("6 أيام / 5 ليالي", "6 Days / 5 Nights"),
      hotel: "Grand Nile Tower",
      room: t("غرفة جراند - إطلالة على النيل", "Grand Room - Nile View"),
      meals: t("إفطار", "Breakfast"),
      services: t("استقبال وتوديع + جولات يومية 10 ساعات", "Meet & Greet + Daily 10-Hour Tours"),
      price: 3550,
    },
    {
      id: "hurghada",
      destination: t("الغردقة", "Hurghada"),
      image: hurghadaImg,
      rating: t("5 نجوم", "5 Stars"),
      duration: t("6 أيام / 5 ليالي", "6 Days / 5 Nights"),
      hotel: "Sunrise Aqua Joy Resort",
      room: t("سوبيريور - إطلالة على المسبح", "Superior Room - Pool View"),
      meals: t("إفطار", "Breakfast"),
      services: t("استقبال وتوديع + جولات يومية", "Meet & Greet + Daily Tours"),
      price: 3550,
    },
    {
      id: "london",
      destination: t("لندن", "London"),
      image: londonImg,
      rating: t("شقق فندقية فاخرة", "Luxury Apartments"),
      duration: t("6 ليالي / 7 أيام", "6 Nights / 7 Days"),
      hotel: t("شقق فندقية فاخرة", "Luxury Hotel Apartments"),
      room: t("شقة غرفة وصالة", "One-Bedroom Apartment"),
      meals: t("بدون إفطار", "Without Breakfast"),
      services: t("شامل الاستقبال والتوديع", "Meet & Greet Included"),
      price: 4450,
    },
    {
      id: "istanbul",
      destination: t("إسطنبول", "Istanbul"),
      image: istanbulImg,
      rating: t("4 نجوم / 5 نجوم / VIP", "4★ / 5★ / VIP"),
      duration: t("8 أيام / 7 ليالي", "8 Days / 7 Nights"),
      hotel: t("حسب البرنامج المختار", "Per Selected Program"),
      room: t("غرفة قياسية", "Standard Room"),
      meals: t("إفطار", "Breakfast"),
      services: t("استقبال وتوديع + 5 جولات + سيارة خاصة 9 ساعات يومياً", "Meet & Greet + 5 Tours + Private Car 9h Daily"),
      price: 3999,
      priceNote: t("يبدأ من", "Starts from"),
      badge: t("برنامج مميز", "Featured Program"),
    },
  ];

  const waMessage = (dest: string) =>
    encodeURIComponent(
      t(
        `مرحباً، أرغب بالاستفسار عن عرض العيد إلى ${dest}`,
        `Hello, I'd like to inquire about the Eid offer to ${dest}`,
      ),
    );

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverOffers} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-secondary" size={28} />
              <span className="bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-medium">
                {t("عروض موسم العيد", "Eid Season Offers")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("عروض ", "Eid ")}
              <span className="text-secondary">{t("العيد", "Offers")}</span>
            </h1>
            <p className="text-lg text-white/80">
              {t(
                "احتفل بالعيد مع باقات سفر مميزة وأسعار حصرية لأجمل الوجهات",
                "Celebrate Eid with curated travel packages and exclusive prices to the best destinations",
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Carousel
            opts={{ align: "start", loop: true, direction: language === "ar" ? "rtl" : "ltr" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {offers.map((offer, index) => (
                <CarouselItem key={offer.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.destination}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      {offer.badge && (
                        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                          <Tag size={12} /> {offer.badge}
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        <Calendar size={12} /> {offer.duration}
                      </div>
                      <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white">
                        <h3 className="text-xl font-bold flex items-center gap-1.5">
                          <MapPin size={16} className="text-secondary" />
                          {offer.destination}
                        </h3>
                        <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-md text-xs">
                          <Star size={12} className="text-secondary fill-secondary" /> {offer.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <ul className="space-y-2.5 text-sm text-foreground/90 mb-5 flex-1">
                        <li className="flex items-start gap-2">
                          <Hotel size={16} className="text-primary shrink-0 mt-0.5" />
                          <span><span className="font-semibold">{t("الفندق:", "Hotel:")}</span> {offer.hotel}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Bed size={16} className="text-primary shrink-0 mt-0.5" />
                          <span><span className="font-semibold">{t("الغرفة:", "Room:")}</span> {offer.room}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Utensils size={16} className="text-primary shrink-0 mt-0.5" />
                          <span><span className="font-semibold">{t("الوجبات:", "Meals:")}</span> {offer.meals}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles size={16} className="text-primary shrink-0 mt-0.5" />
                          <span><span className="font-semibold">{t("الخدمات:", "Services:")}</span> {offer.services}</span>
                        </li>
                      </ul>

                      <div className="border-t border-border pt-4">
                        <div className="flex items-baseline justify-between mb-3">
                          <div>
                            {offer.priceNote && (
                              <span className="block text-xs text-muted-foreground">{offer.priceNote}</span>
                            )}
                            <span className="text-3xl font-bold text-primary">{offer.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground"> {t("ر.س", "SAR")}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{t("للفرد", "per person")}</span>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/966112200396?text=${waMessage(offer.destination)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button className="btn-primary w-full rounded-xl text-sm">{t("احجز الآن", "Book Now")}</Button>
                          </a>
                          <a href="tel:+966112200396">
                            <Button variant="outline" size="icon" className="rounded-xl border-primary/20 hover:bg-primary/5">
                              <Phone size={18} className="text-primary" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
          </Carousel>


          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-muted/40 border border-border rounded-2xl p-6 text-sm text-muted-foreground"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <p className="font-semibold text-foreground mb-2">
              {t("ملاحظات هامة:", "Important Notes:")}
            </p>
            <ul className="list-disc ps-5 space-y-1">
              <li>{t("جميع الأسعار بالريال السعودي وللفرد في الغرفة الزوجية.", "All prices are in SAR per person in a double room.")}</li>
              <li>{t("الأسعار خاضعة للتغيير وفقاً للتوفر وفترة السفر.", "Prices are subject to change based on availability and travel dates.")}</li>
              <li>{t("للحجز والاستفسار يرجى التواصل عبر الواتساب أو الاتصال المباشر.", "For booking and inquiries, please contact us via WhatsApp or phone.")}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EidOffersPage;
