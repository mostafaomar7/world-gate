import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Hotel, CheckCircle, Star, MapPin, CreditCard, Shield, Headphones, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import coverHotels from "@/assets/cover-hotels.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HotelBookingPage = () => {
  const { t, isRTL } = useLanguage();

  const hotelPartners = [
    { name: t("ماريوت", "Marriott"), logo: "/logos/hotels/marriott.png" },
    { name: t("هيلتون", "Hilton"), logo: "/logos/hotels/hilton.png" },
    { name: t("حياة", "Hyatt"), logo: "/logos/hotels/hyatt.png" },
    { name: t("أكور", "Accor"), logo: "/logos/hotels/accor.png" },
    { name: "IHG", logo: "/logos/hotels/ihg.png" },
    { name: t("راديسون", "Radisson"), logo: "/logos/hotels/radisson.png" },
    { name: t("ويندهام", "Wyndham"), logo: "/logos/hotels/wyndham.png" },
    { name: t("فورسيزونز", "Four Seasons"), logo: "/logos/hotels/fourseasons.png" },
    { name: t("شانغريلا", "Shangri-La"), logo: "/logos/hotels/shangrila.png" },
    { name: t("بست ويسترن", "Best Western"), logo: "/logos/hotels/bestwestern.png" },
    { name: t("ريتز كارلتون", "Ritz-Carlton"), logo: "/logos/hotels/ritz.png" },
    { name: t("ماينور", "Minor"), logo: "/logos/hotels/minor.png" },
  ];

  const features = [
    { icon: Star, title: t("جميع الفئات", "All Categories"), desc: t("من فنادق 3 نجوم إلى المنتجعات الفاخرة 5 نجوم لتناسب جميع الميزانيات", "From 3-star hotels to luxury 5-star resorts to suit all budgets") },
    { icon: CreditCard, title: t("أسعار حصرية", "Exclusive Prices"), desc: t("أسعار خاصة بفضل شراكاتنا المباشرة مع سلاسل الفنادق العالمية", "Special prices thanks to our direct partnerships with global hotel chains") },
    { icon: MapPin, title: t("مواقع مميزة", "Prime Locations"), desc: t("فنادق في أفضل المواقع قرب المعالم السياحية والأسواق", "Hotels in the best locations near tourist attractions and markets") },
    { icon: Shield, title: t("إلغاء مجاني", "Free Cancellation"), desc: t("سياسات إلغاء مرنة مع إمكانية التعديل بدون رسوم إضافية", "Flexible cancellation policies with modification options at no extra charge") },
    { icon: Headphones, title: t("دعم 24/7", "24/7 Support"), desc: t("فريق متخصص لمساعدتك قبل وأثناء إقامتك", "Dedicated team to assist you before and during your stay") },
    { icon: Hotel, title: t("باقات متكاملة", "Complete Packages"), desc: t("إقامة مع إفطار، نقل من المطار، وجولات سياحية", "Stay with breakfast, airport transfers, and sightseeing tours") },
  ];

  const roomTypes = [
    {
      title: t("غرف اقتصادية", "Economy Rooms"),
      stars: 3,
      features: [
        t("إقامة مريحة بأسعار مناسبة", "Comfortable stay at affordable prices"),
        t("خدمة واي فاي مجانية", "Free Wi-Fi"),
        t("إفطار يومي", "Daily breakfast"),
        t("موقع مركزي", "Central location"),
      ],
      price: t("من 200 ريال/ليلة", "From 200 SAR/night"),
    },
    {
      title: t("غرف فاخرة", "Deluxe Rooms"),
      stars: 4,
      features: [
        t("غرف واسعة ومجهزة بالكامل", "Spacious and fully equipped rooms"),
        t("مسبح وصالة رياضة", "Pool and gym"),
        t("إفطار بوفيه", "Buffet breakfast"),
        t("خدمة الغرف 24 ساعة", "24-hour room service"),
      ],
      price: t("من 500 ريال/ليلة", "From 500 SAR/night"),
      popular: true,
    },
    {
      title: t("أجنحة ملكية", "Royal Suites"),
      stars: 5,
      features: [
        t("أجنحة فسيحة بإطلالات خلابة", "Spacious suites with stunning views"),
        t("سبا ومرافق ترفيهية", "Spa and entertainment facilities"),
        t("خدمة كونسيرج شخصية", "Personal concierge service"),
        t("نقل خاص من وإلى المطار", "Private airport transfers"),
      ],
      price: t("من 1,200 ريال/ليلة", "From 1,200 SAR/night"),
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const waMsg = t("مرحباً، أرغب في حجز فندق", "Hello, I would like to book a hotel");

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverHotels} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-secondary font-medium mb-4 bg-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Hotel size={18} />
              {t("حجز الفنادق", "Hotel Booking")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("أفضل الفنادق بأفضل ", "Best Hotels at the Best ")}
              <span className="text-secondary">{t("الأسعار", "Prices")}</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {t("نوفر لك إقامة مميزة في أرقى الفنادق والمنتجعات حول العالم مع شراكات حصرية مع أكبر سلاسل الفنادق العالمية", "We provide premium stays at the finest hotels and resorts worldwide with exclusive partnerships with the largest global hotel chains")}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href={`https://wa.me/966534817876?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer">
                <Button className="btn-secondary rounded-xl px-8 py-6 text-base gap-2">
                  {t("احجز الآن عبر واتساب", "Book Now via WhatsApp")}
                  <ArrowIcon size={18} />
                </Button>
              </a>
              <a href="tel:+966112200396">
                <Button variant="outline" className="rounded-xl px-8 py-6 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 gap-2">
                  <Phone size={18} />
                  {t("اتصل بنا", "Call Us")}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("مميزات حجز ", "Benefits of Booking ")}
              <span className="text-primary">{t("الفنادق", "Hotels")}</span>
              {t(" معنا", " With Us")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("نضمن لك إقامة مريحة ومميزة بأفضل الأسعار", "We guarantee a comfortable and premium stay at the best prices")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("فئات ", "Room ")}
              <span className="text-secondary">{t("الإقامة", "Categories")}</span>
            </h2>
            <p className="text-muted-foreground">{t("اختر الفئة التي تناسب ميزانيتك واحتياجاتك", "Choose the category that fits your budget and needs")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roomTypes.map((room, i) => (
              <motion.div key={room.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`bg-card rounded-2xl border overflow-hidden hover:shadow-xl transition-all ${room.popular ? "border-primary shadow-lg scale-[1.02]" : "border-border"}`}>
                {room.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">{t("الأكثر طلباً", "Most Popular")}</div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{room.title}</h3>
                  <div className="flex gap-1 mb-3">
                    {[...Array(room.stars)].map((_, j) => (
                      <Star key={j} className="text-secondary fill-secondary" size={16} />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-primary mb-4">{room.price}</p>
                  <ul className="space-y-3 mb-6">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="text-primary flex-shrink-0" size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/966534817876?text=${encodeURIComponent(t(`مرحباً، أرغب في حجز ${room.title}`, `Hello, I would like to book ${room.title}`))}`} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-xl ${room.popular ? "btn-primary" : "btn-secondary"}`}>
                      {t("احجز الآن", "Book Now")}
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Partners */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("شركاؤنا من ", "Our ")}
              <span className="text-secondary">{t("سلاسل الفنادق", "Hotel Chain Partners")}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {hotelPartners.map((hotel, i) => (
              <motion.div key={hotel.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -5 }} className="bg-card border border-border rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md hover:border-primary/20 transition-all">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={hotel.logo} alt={hotel.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-muted-foreground text-center">{hotel.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-l from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <Hotel className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">{t("ابحث عن فندقك المثالي الآن", "Find Your Perfect Hotel Now")}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t("تواصل معنا واحصل على أفضل العروض الفندقية في وجهتك المفضلة", "Contact us and get the best hotel deals at your favorite destination")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/966534817876?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary rounded-xl px-8">{t("تواصل واتساب", "WhatsApp Us")}</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="rounded-xl px-8 border-white/30 text-white bg-white/10 hover:bg-white/20">{t("تواصل معنا", "Contact Us")}</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotelBookingPage;