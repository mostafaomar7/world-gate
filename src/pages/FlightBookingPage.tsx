import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Plane, CheckCircle, Globe, Clock, CreditCard, Shield, Headphones, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import coverFlights from "@/assets/cover-flights.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const FlightBookingPage = () => {
  const { t, isRTL } = useLanguage();

  const airlines = [
    { name: t("الخطوط السعودية", "Saudi Airlines"), code: "SV", logo: "/logos/airlines/SV.png" },
    { name: t("طيران ناس", "Flynas"), code: "XY", logo: "/logos/airlines/XY.png" },
    { name: t("طيران أديل", "Flyadeal"), code: "F3", logo: "/logos/airlines/F3.png" },
    { name: t("الخطوط التركية", "Turkish Airlines"), code: "TK", logo: "/logos/airlines/TK.png" },
    { name: t("طيران الإمارات", "Emirates"), code: "EK", logo: "/logos/airlines/EK.png" },
    { name: t("الخطوط القطرية", "Qatar Airways"), code: "QR", logo: "/logos/airlines/QR.png" },
    { name: t("طيران الاتحاد", "Etihad Airways"), code: "EY", logo: "/logos/airlines/EY.png" },
    { name: t("الخطوط الكويتية", "Kuwait Airways"), code: "KU", logo: "/logos/airlines/KU.png" },
    { name: t("طيران الخليج", "Gulf Air"), code: "GF", logo: "/logos/airlines/GF.png" },
    { name: t("لوفتهانزا", "Lufthansa"), code: "LH", logo: "/logos/airlines/LH.png" },
    { name: t("الخطوط الفرنسية", "Air France"), code: "AF", logo: "/logos/airlines/AF.png" },
    { name: t("الخطوط البريطانية", "British Airways"), code: "BA", logo: "/logos/airlines/BA.png" },
    { name: t("مصر للطيران", "EgyptAir"), code: "MS", logo: "/logos/airlines/MS.png" },
    { name: t("الملكية الأردنية", "Royal Jordanian"), code: "RJ", logo: "/logos/airlines/RJ.png" },
    { name: t("الطيران العماني", "Oman Air"), code: "WY", logo: "/logos/airlines/WY.png" },
    { name: t("الخطوط الماليزية", "Malaysia Airlines"), code: "MH", logo: "/logos/airlines/MH.png" },
    { name: t("الخطوط السنغافورية", "Singapore Airlines"), code: "SQ", logo: "/logos/airlines/SQ.png" },
    { name: "KLM", code: "KL", logo: "/logos/airlines/KL.png" },
  ];

  const features = [
    { icon: Globe, title: t("تغطية عالمية", "Global Coverage"), desc: t("حجوزات لأكثر من 500 وجهة حول العالم مع جميع شركات الطيران", "Bookings to over 500 destinations worldwide with all airlines") },
    { icon: CreditCard, title: t("أسعار تنافسية", "Competitive Prices"), desc: t("نضمن لك أفضل الأسعار مع عروض حصرية ومستمرة", "We guarantee the best prices with exclusive ongoing offers") },
    { icon: Clock, title: t("حجز فوري", "Instant Booking"), desc: t("إصدار التذاكر فورياً مع تأكيد الحجز خلال دقائق", "Instant ticket issuance with booking confirmation in minutes") },
    { icon: Shield, title: t("حماية الحجز", "Booking Protection"), desc: t("مرونة في التعديل والإلغاء مع حماية كاملة لحجزك", "Flexible modification and cancellation with full booking protection") },
    { icon: Headphones, title: t("دعم متواصل", "24/7 Support"), desc: t("فريق متخصص متاح على مدار الساعة لمساعدتك", "Dedicated team available around the clock to assist you") },
    { icon: Plane, title: t("جميع الدرجات", "All Classes"), desc: t("حجوزات اقتصادية ورجال أعمال ودرجة أولى", "Economy, business, and first class bookings") },
  ];

  const bookingSteps = [
    { step: "01", title: t("اختر وجهتك", "Choose Destination"), desc: t("حدد وجهة السفر وتاريخ المغادرة والعودة", "Select your travel destination and departure/return dates") },
    { step: "02", title: t("قارن الأسعار", "Compare Prices"), desc: t("نعرض لك أفضل الخيارات والأسعار المتاحة", "We show you the best available options and prices") },
    { step: "03", title: t("أكد الحجز", "Confirm Booking"), desc: t("اختر الرحلة المناسبة وأكمل بيانات المسافرين", "Choose the right flight and complete passenger details") },
    { step: "04", title: t("استلم التذكرة", "Receive Ticket"), desc: t("تصلك تذكرتك الإلكترونية فوراً على بريدك", "Your e-ticket is sent instantly to your email") },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const waMsg = t("مرحباً، أرغب في حجز تذكرة طيران", "Hello, I would like to book a flight ticket");

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingContact />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={coverFlights} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-secondary font-medium mb-4 bg-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Plane size={18} />
              {t("حجز الطيران", "Flight Booking")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("احجز رحلتك بأفضل ", "Book Your Flight at the Best ")}
              <span className="text-secondary">{t("الأسعار", "Prices")}</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {t("نوفر لك حجوزات طيران مع أكثر من 50 شركة طيران عالمية ومحلية بأسعار تنافسية وخدمة متميزة", "We provide flight bookings with over 50 international and local airlines at competitive prices and excellent service")}
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
              {t("لماذا تحجز ", "Why Book ")}
              <span className="text-primary">{t("معنا؟", "With Us?")}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("خدمات حجز طيران متكاملة تضمن لك أفضل تجربة سفر", "Comprehensive flight booking services that ensure the best travel experience")}</p>
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

      {/* Booking Steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("خطوات ", "Booking ")}
              <span className="text-primary">{t("الحجز", "Steps")}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {bookingSteps.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines Partners */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("شركاؤنا من ", "Our ")}
              <span className="text-secondary">{t("شركات الطيران", "Airline Partners")}</span>
            </h2>
            <p className="text-muted-foreground">{t("نتعامل مع أفضل شركات الطيران العالمية والإقليمية", "We work with the best international and regional airlines")}</p>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {airlines.map((airline, i) => (
              <motion.div key={airline.code} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} whileHover={{ y: -5 }} className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-2 hover:shadow-md hover:border-primary/20 transition-all">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={airline.logo} alt={airline.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-muted-foreground text-center leading-tight">{airline.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-l from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <Plane className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-4">{t("جاهز لحجز رحلتك القادمة؟", "Ready to Book Your Next Flight?")}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t("تواصل معنا الآن واحصل على أفضل الأسعار لتذاكر الطيران", "Contact us now and get the best prices for flight tickets")}
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

export default FlightBookingPage;