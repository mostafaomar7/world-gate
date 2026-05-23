import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/lovable-uploads/a4ce760b-5ced-4f38-bcc0-4a2bfd16e824.png" alt={t("بوابة العالم للسياحة", "WorldGate Travel")} className="h-20 mb-4" />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {t("بوابة العالم للسياحة والسفر، شريكك الموثوق في عالم السفر منذ أكثر من 15 عاماً.", "WorldGate Travel & Tourism, your trusted partner in the world of travel for over 15 years.")}
            </p>
            <p className="text-sm text-background/50">
              {t("رقم الترخيص: ", "License No: ")}<span className="text-secondary">73103902</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t("روابط سريعة", "Quick Links")}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/70 hover:text-secondary transition-colors">{t("الرئيسية", "Home")}</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-secondary transition-colors">{t("خدماتنا", "Services")}</Link></li>
              <li><Link to="/destinations" className="text-background/70 hover:text-secondary transition-colors">{t("الوجهات", "Destinations")}</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-secondary transition-colors">{t("من نحن", "About Us")}</Link></li>
              <li><Link to="/honeymoon" className="text-background/70 hover:text-secondary transition-colors">{t("شهر العسل", "Honeymoon")}</Link></li>
              <li><Link to="/corporate" className="text-background/70 hover:text-secondary transition-colors">{t("للشركات", "Corporate")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t("خدماتنا", "Our Services")}</h4>
            <ul className="space-y-2">
              <li><Link to="/flights" className="text-background/70 hover:text-secondary transition-colors">{t("حجز الطيران", "Flight Booking")}</Link></li>
              <li><Link to="/hotels" className="text-background/70 hover:text-secondary transition-colors">{t("حجز الفنادق", "Hotel Booking")}</Link></li>
              <li><Link to="/visa" className="text-background/70 hover:text-secondary transition-colors">{t("خدمات التأشيرات", "Visa Services")}</Link></li>
              <li><Link to="/cruise" className="text-background/70 hover:text-secondary transition-colors">{t("الرحلات البحرية", "Cruises")}</Link></li>
              <li><Link to="/honeymoon" className="text-background/70 hover:text-secondary transition-colors">{t("رحلات شهر العسل", "Honeymoon Trips")}</Link></li>
              <li><Link to="/corporate" className="text-background/70 hover:text-secondary transition-colors">{t("سفر الشركات", "Corporate Travel")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t("تواصل معنا", "Contact Us")}</h4>
            <ul className="space-y-3">
              <li><a href="tel:+966112200396" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"><Phone size={18} /><span dir="ltr">+966 112200396</span></a></li>
              <li><a href="mailto:info@worldgate-travel.net" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"><Mail size={18} /><span>info@worldgate-travel.net</span></a></li>
              <li><div className="flex items-center gap-3 text-background/70"><MapPin size={18} /><span>{t("الرياض - حي إشبيليا", "Riyadh - Ishbilia District")}</span></div></li>
            </ul>
            <div className="mt-4 flex items-center gap-2.5 flex-wrap">
              <a href="https://wa.me/966112200396" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shrink-0" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://www.instagram.com/worldgate.ksa" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] via-40% via-[#D62976] via-70% to-[#4F5BD5] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shrink-0" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" strokeWidth={2.2} />
              </a>
              <a href="https://x.com/WorldGateksaa" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 bg-black rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shrink-0" aria-label="X">
                <svg viewBox="0 0 24 24" fill="white" className="w-[18px] h-[18px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://snapchat.com/t/qgEDszSL" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 bg-[#FFFC00] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shrink-0" aria-label="Snapchat">
                <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6"><path d="M12.166 2.34c1.797.013 3.353.659 4.475 2.018.93 1.127 1.205 2.456 1.182 3.886-.01.6-.07 1.198-.106 1.797-.005.087.026.17.105.21.197.103.412.166.633.18.327.014.628-.094.92-.226.092-.042.187-.08.288-.087.32-.025.567.115.65.412.082.293-.04.555-.343.69-.225.1-.46.18-.696.255-.292.094-.594.156-.886.247-.345.108-.408.247-.282.585.387 1.04 1.13 1.745 2.13 2.176.366.158.751.246 1.146.291.246.029.36.182.31.43-.034.171-.155.276-.302.36-.495.282-1.043.398-1.598.488-.227.037-.295.143-.336.358-.073.385-.351.587-.748.6-.296.01-.59-.043-.886-.044-.49-.001-.974.04-1.428.246-.412.187-.752.475-1.082.78-.83.766-1.79 1.183-2.93 1.183h-.075c-1.14 0-2.1-.417-2.93-1.183-.33-.305-.67-.593-1.082-.78-.454-.206-.937-.247-1.428-.246-.296.001-.59.054-.886.044-.397-.013-.675-.215-.748-.6-.041-.215-.109-.32-.336-.358-.555-.09-1.103-.206-1.598-.488-.147-.084-.268-.189-.302-.36-.05-.248.064-.401.31-.43.395-.045.78-.133 1.146-.291 1-.431 1.743-1.137 2.13-2.176.126-.338.063-.477-.282-.585-.292-.091-.594-.153-.886-.247-.236-.075-.471-.155-.696-.255-.302-.135-.425-.397-.343-.69.083-.297.33-.437.65-.412.101.007.196.045.288.087.292.132.593.24.92.226.221-.014.436-.077.633-.18.079-.04.11-.123.105-.21-.036-.6-.096-1.197-.106-1.797-.023-1.43.252-2.759 1.182-3.886 1.122-1.359 2.678-2.005 4.475-2.018h.083z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@worldgate.ksa" target="_blank" rel="noopener noreferrer" className="group relative w-11 h-11 bg-black rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shrink-0 overflow-hidden" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]">
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.971-1.166-1.957-1.282-2.647h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .398-.008.594l-.001.073-.003.038v.009a3.281 3.281 0 01-1.65 2.604 3.226 3.226 0 01-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.178 7.178 0 00-5.532 1.62 7.583 7.583 0 00-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 001.674 1.58v-.01l.01.01c1.78 1.21 3.755 1.13 3.755 1.13.34-.014 1.482 0 2.778-.613 1.437-.68 2.256-1.695 2.256-1.695a7.072 7.072 0 001.234-2.054c.336-.86.448-1.892.448-2.304V8.276c.044.027.635.418.635.418s.853.546 2.184.902c.954.253 2.24.306 2.24.306V5.866c-.45.049-1.365-.093-2.302-.304z" fill="#25F4EE" transform="translate(-1.2 0.6)"/>
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.971-1.166-1.957-1.282-2.647h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .398-.008.594l-.001.073-.003.038v.009a3.281 3.281 0 01-1.65 2.604 3.226 3.226 0 01-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.178 7.178 0 00-5.532 1.62 7.583 7.583 0 00-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 001.674 1.58v-.01l.01.01c1.78 1.21 3.755 1.13 3.755 1.13.34-.014 1.482 0 2.778-.613 1.437-.68 2.256-1.695 2.256-1.695a7.072 7.072 0 001.234-2.054c.336-.86.448-1.892.448-2.304V8.276c.044.027.635.418.635.418s.853.546 2.184.902c.954.253 2.24.306 2.24.306V5.866c-.45.049-1.365-.093-2.302-.304z" fill="#FE2C55" transform="translate(1.2 -0.6)"/>
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.971-1.166-1.957-1.282-2.647h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .398-.008.594l-.001.073-.003.038v.009a3.281 3.281 0 01-1.65 2.604 3.226 3.226 0 01-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.178 7.178 0 00-5.532 1.62 7.583 7.583 0 00-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 001.674 1.58v-.01l.01.01c1.78 1.21 3.755 1.13 3.755 1.13.34-.014 1.482 0 2.778-.613 1.437-.68 2.256-1.695 2.256-1.695a7.072 7.072 0 001.234-2.054c.336-.86.448-1.892.448-2.304V8.276c.044.027.635.418.635.418s.853.546 2.184.902c.954.253 2.24.306 2.24.306V5.866c-.45.049-1.365-.093-2.302-.304z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              {t("© 2025 بوابة العالم للسياحة والسفر. جميع الحقوق محفوظة.", "© 2025 WorldGate Travel & Tourism. All rights reserved.")}
            </p>
            <p className="text-background/50 text-sm">WorldGate Travel - Riyadh, Saudi Arabia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
