import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane, Search, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import heroMaldives from "@/assets/hero-maldives.jpg";
import heroGeorgia from "@/assets/hero-georgia.jpg";
import heroThailand from "@/assets/hero-thailand.jpg";
import heroBali from "@/assets/hero-bali.jpg";
import heroDubai from "@/assets/hero-dubai.jpg";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers] = useState(t("1 مسافر", "1 Traveler"));
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroMaldives,
      title: t("جزر المالديف", "Maldives"),
      subtitle: t("جنة استوائية على الأرض", "A Tropical Paradise on Earth"),
      description: t("استمتع بالمياه الفيروزية الصافية والفيلات فوق الماء في أجمل جزر العالم. تجربة فاخرة لا تُنسى.", "Enjoy crystal-clear turquoise waters and overwater villas on the world's most beautiful islands. An unforgettable luxury experience."),
    },
    {
      image: heroGeorgia,
      title: t("جورجيا", "Georgia"),
      subtitle: t("سحر القوقاز وعراقة التاريخ", "The Charm of the Caucasus & Rich History"),
      description: t("اكتشف جبال القوقاز الشاهقة والكنائس الأثرية والطبيعة الخلابة في قلب أوروبا الشرقية.", "Discover the towering Caucasus mountains, ancient churches, and stunning nature in the heart of Eastern Europe."),
    },
    {
      image: heroThailand,
      title: t("تايلاند", "Thailand"),
      subtitle: t("أرض الابتسامات والمعابد الذهبية", "Land of Smiles & Golden Temples"),
      description: t("من شواطئ بوكيت إلى معابد بانكوك، تايلاند تجمع بين الثقافة والطبيعة والمغامرة.", "From Phuket beaches to Bangkok temples, Thailand blends culture, nature, and adventure."),
    },
    {
      image: heroBali,
      title: t("بالي - إندونيسيا", "Bali - Indonesia"),
      subtitle: t("جزيرة الآلهة الساحرة", "The Enchanting Island of the Gods"),
      description: t("مدرجات الأرز الخضراء والمعابد الهندوسية والشواطئ البركانية في أجمل جزر إندونيسيا.", "Green rice terraces, Hindu temples, and volcanic beaches on Indonesia's most beautiful island."),
    },
    {
      image: heroDubai,
      title: t("دبي", "Dubai"),
      subtitle: t("مدينة المستقبل والرفاهية", "City of the Future & Luxury"),
      description: t("ناطحات السحاب والأسواق التقليدية والشواطئ الذهبية في أيقونة السياحة العربية.", "Skyscrapers, traditional souks, and golden beaches in the icon of Arabian tourism."),
    },
  ];

  const handleSearch = () => {
    const message = language === "ar"
      ? `مرحباً، أرغب في حجز رحلة:\n🌍 الوجهة: ${destination || "غير محددة"}\n📅 تاريخ المغادرة: ${departureDate || "غير محدد"}\n👥 عدد المسافرين: ${travelers}`
      : `Hello, I'd like to book a trip:\n🌍 Destination: ${destination || "Not specified"}\n📅 Departure: ${departureDate || "Not specified"}\n👥 Travelers: ${travelers}`;
    window.open(`https://wa.me/966112200396?text=${encodeURIComponent(message)}`, "_blank");
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const slide = slides[currentSlide];

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} className="absolute inset-0" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 bg-secondary/30 rounded-full" style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }} animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }} />
        ))}
      </div>

      <motion.div className="container-custom relative z-10 pt-32" style={{ opacity: contentOpacity, y: contentY }}>
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t("خبرة أكثر من 15 عاماً في السياحة والسفر", "Over 15 Years of Experience in Travel & Tourism")}
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-3">{slide.title}</h1>
              <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">{slide.subtitle}</p>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">{slide.description}</p>
            </motion.div>
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4">
            <Link to="/destinations">
              <Button size="lg" className="btn-secondary rounded-full px-8 text-lg group">
                <Plane className={`${language === "ar" ? "ml-2" : "mr-2"} group-hover:translate-x-[-4px] transition-transform`} />
                {t("استكشف الوجهات", "Explore Destinations")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                {t("تواصل معنا", "Contact Us")}
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="flex gap-2 mt-8">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? "w-10 bg-secondary" : "w-4 bg-primary-foreground/40"}`} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-10 bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">{t("الوجهة", "Destination")}</label>
              <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
                <Search className="text-primary" size={20} />
                <input type="text" placeholder={t("إلى أين تريد السفر؟", "Where do you want to go?")} value={destination} onChange={(e) => setDestination(e.target.value)} className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">{t("تاريخ المغادرة", "Departure Date")}</label>
              <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
                <CalendarDays className="text-primary" size={20} />
                <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="bg-transparent border-none outline-none w-full text-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">{t("عدد المسافرين", "Travelers")}</label>
              <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
                <select value={travelers} onChange={(e) => setTravelers(e.target.value)} className="bg-transparent border-none outline-none w-full text-foreground">
                  <option>{t("1 مسافر", "1 Traveler")}</option>
                  <option>{t("2 مسافر", "2 Travelers")}</option>
                  <option>{t("3 مسافرين", "3 Travelers")}</option>
                  <option>{t("4+ مسافرين", "4+ Travelers")}</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <Button onClick={handleSearch} className="btn-primary w-full rounded-lg h-12 text-base">{t("ابحث الآن", "Search Now")}</Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
              <Plane className="text-secondary" />
            </motion.div>
            <div>
              <p className="text-sm text-muted-foreground">{t("رحلات ناجحة", "Successful Trips")}</p>
              <p className="text-xl font-bold text-foreground">+20,000</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
