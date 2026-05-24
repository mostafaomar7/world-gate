import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SaudiFlag = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.67)} viewBox="0 0 900 600" className="rounded-sm flex-shrink-0">
    <rect width="900" height="600" fill="#006C35" />
    <text x="450" y="260" textAnchor="middle" fill="white" fontSize="160" fontFamily="Arial" fontWeight="bold">لا إله إلا الله</text>
    <rect x="300" y="340" width="300" height="8" rx="4" fill="white" />
    <polygon points="300,344 270,330 270,358" fill="white" />
  </svg>
);

const USFlag = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={Math.round(size * 0.53)} viewBox="0 0 190 100" className="rounded-sm flex-shrink-0">
    <rect width="190" height="100" fill="#B22234" />
    {[0,1,2,3,4,5].map(i => <rect key={i} y={7.69 * (2*i+1)} width="190" height="7.69" fill="white" />)}
    <rect width="76" height="53.85" fill="#3C3B6E" />
    {[0,1,2,3,4,5,6,7,8].map(r =>
      Array.from({length: r % 2 === 0 ? 6 : 5}).map((_, c) => (
        <circle key={`${r}-${c}`} cx={r % 2 === 0 ? 6.33 + c * 12.67 : 12.67 + c * 12.67} cy={3 + r * 5.38} r="2" fill="white" />
      ))
    )}
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("الرئيسية", "Home"), href: "/" },
    { label: t("خدماتنا", "Services"), href: "/services" },
    {
      label: t("العروض الحصرية", "Exclusive Offers"),
      href: "/offers",
      children: [
        { label: t("العروض الحصرية", "Exclusive Offers"), href: "/offers" },
        { label: t("عروض العيد", "Eid Offers"), href: "/eid-offers" },
      ],
    },
    { label: t("الوجهات", "Destinations"), href: "/destinations" },
    { label: t("الشركات", "Corporate"), href: "/corporate" },
    { label: t("التأشيرات", "Visas"), href: "/visa" },
    {
      label: t("خدمات أخرى", "More Services"),
      href: "#",
      children: [
        { label: t("حجز الطيران", "Flight Booking"), href: "/flights" },
        { label: t("حجز الفنادق", "Hotel Booking"), href: "/hotels" },
        { label: t("شهر العسل", "Honeymoon"), href: "/honeymoon" },
        { label: t("الأسواق العالمية", "Global Markets"), href: "/markets" },
        { label: t("الرحلات البحرية", "Cruises"), href: "/cruise" },
      ],
    },
    { label: t("من نحن", "About Us"), href: "/about" },
    { label: t("تواصل معنا", "Contact Us"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = () => setLanguage(language === "ar" ? "en" : "ar");

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-1"
          : "bg-background/80 backdrop-blur-sm py-2"
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-primary/10 pb-2 mb-2 ${isScrolled ? "hidden" : "block"}`}>
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+966112200396" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <Phone size={14} />
              <span dir="ltr">+966 112200396</span>
            </a>
            <a href="mailto:info@worldgate-travel.net" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <Mail size={14} />
              <span>info@worldgate-travel.net</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} />
              <span>{t("الرياض - حي إشبيليا", "Riyadh - Ishbilia District")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt={t("بوابة العالم للسياحة", "WorldGate Travel")} className="h-14 md:h-16" src="/lovable-uploads/a4ce760b-5ced-4f38-bcc0-4a2bfd16e824.png" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6" ref={dropdownRef as any}>
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={`font-medium transition-colors hover:text-secondary flex items-center gap-1 ${
                        openDropdown === link.label ? "text-secondary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-4 py-3 text-sm hover:bg-primary/5 hover:text-secondary transition-colors ${
                                location.pathname === child.href ? "text-secondary bg-primary/5" : "text-foreground"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors hover:text-secondary ${
                      location.pathname === link.href ? "text-secondary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-primary/30 text-sm font-medium text-foreground hover:text-primary transition-all"
            >
              {language === "ar" ? <USFlag size={20} /> : <SaudiFlag size={20} />}
              {language === "ar" ? "English" : "العربية"}
            </button>
            <Link to="/contact">
              <Button className="btn-secondary rounded-full px-6">{t("احجز الآن", "Book Now")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-border text-xs font-medium text-foreground"
            >
              {language === "ar" ? <USFlag size={16} /> : <SaudiFlag size={16} />}
              {language === "ar" ? "EN" : "عربي"}
            </button>
            <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === link.label ? null : link.label)}
                          className="flex items-center justify-between w-full py-2 text-foreground hover:text-secondary transition-colors"
                        >
                          <span>{link.label}</span>
                          <ChevronDown size={16} className={`transition-transform ${mobileSubmenu === link.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`${language === "ar" ? "pr-4 border-r-2" : "pl-4 border-l-2"} border-primary/20`}
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className={`block py-2 text-sm transition-colors hover:text-secondary ${
                                    location.pathname === child.href ? "text-secondary font-medium" : "text-muted-foreground"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block py-2 transition-colors hover:text-secondary ${
                          location.pathname === link.href ? "text-secondary font-medium" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link to="/contact">
                    <Button className="btn-secondary w-full rounded-full">{t("احجز الآن", "Book Now")}</Button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
