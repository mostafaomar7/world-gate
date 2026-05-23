import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  // ============================================================
  // WhatsApp submission (active) — builds a multi-line message
  // with each form field on its own line and opens wa.me.
  // ============================================================
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setFeedback("");

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const body = t(
      [
        "رسالة جديدة من موقع بوابة العالم",
        "",
        `الاسم: ${name}`,
        `رقم الجوال: ${phone}`,
        `البريد الإلكتروني: ${email}`,
        `نوع الخدمة: ${service}`,
        `الرسالة: ${message}`,
      ].join("\n"),
      [
        "New message from WorldGate website",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Message: ${message}`,
      ].join("\n"),
    );

    const url = `https://wa.me/966112200396?text=${encodeURIComponent(body)}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");

    if (win) {
      setStatus("success");
      setFeedback(t("تم فتح واتساب، أكمل إرسال رسالتك من هناك وسنتواصل معك فوراً.", "WhatsApp has been opened. Send your message from there and we'll get back to you shortly."));
      form.reset();
    } else {
      setStatus("error");
      setFeedback(t("تعذّر فتح واتساب، يرجى السماح بالنوافذ المنبثقة أو المحاولة مجدداً.", "Could not open WhatsApp. Please allow popups or try again."));
    }
  };

  // ============================================================
  // (Disabled) Email submission via FormSubmit.co
  // Kept for future use — to re-enable, swap `handleSubmit` below
  // with `handleEmailSubmit` and uncomment the hidden inputs in
  // the form (_subject, _captcha, _template).
  // ============================================================
  // const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   setStatus("submitting");
  //   setFeedback("");
  //
  //   const data = Object.fromEntries(new FormData(form).entries());
  //
  //   try {
  //     const res = await fetch("https://formsubmit.co/ajax/info@worldgate-travel.net", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json", Accept: "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     const json = await res.json().catch(() => ({}));
  //     const ok = res.ok && (json.success === "true" || json.success === true);
  //     if (ok) {
  //       setStatus("success");
  //       setFeedback(t("تم إرسال بياناتك بنجاح، سنتواصل معك قريباً.", "Your message has been sent successfully. We'll contact you shortly."));
  //       form.reset();
  //     } else {
  //       setStatus("error");
  //       setFeedback(json.message || t("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.", "An error occurred while sending. Please try again."));
  //     }
  //   } catch (err) {
  //     setStatus("error");
  //     setFeedback(t("تعذّر الاتصال بالخادم، تأكد من الإنترنت وحاول مجدداً.", "Could not reach the server. Check your connection and try again."));
  //   }
  // };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-secondary font-medium">{t("نحن هنا لخدمتك", "We're Here to Serve You")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {t("تواصل ", "Contact ")}
            <span className="text-primary">{t("معنا", "Us")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("فريقنا جاهز للإجابة على استفساراتكم ومساعدتكم في تخطيط رحلتكم القادمة", "Our team is ready to answer your inquiries and help you plan your next trip")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6">{t("معلومات التواصل", "Contact Information")}</h3>
              <div className="space-y-4">
                <a href="tel:+966112200396" className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-primary/10 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><Phone className="text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">{t("اتصل بنا", "Call Us")}</p><p className="font-bold text-foreground text-lg" dir="ltr">+966 112200396</p></div>
                </a>
                <a href="mailto:info@worldgate-travel.net" className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-secondary/10 transition-colors">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center"><Mail className="text-secondary" /></div>
                  <div><p className="text-sm text-muted-foreground">{t("البريد الإلكتروني", "Email")}</p><p className="font-bold text-foreground">info@worldgate-travel.net</p></div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"><MapPin className="text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">{t("العنوان", "Address")}</p><p className="font-bold text-foreground">{t("الرياض - حي إشبيليا", "Riyadh - Ishbilia District")}</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center"><Clock className="text-secondary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("ساعات العمل", "Working Hours")}</p>
                    <p className="font-bold text-foreground">{t("السبت - الخميس: 9 ص - 11 م", "Sat - Thu: 9 AM - 11 PM")}</p>
                    <p className="font-bold text-foreground">{t("الجمعة: 4 عصراً - 11 م", "Friday: 4 PM - 11 PM")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-6">{t("أرسل لنا رسالة", "Send Us a Message")}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* FormSubmit hidden fields — kept for future re-enable of email submission */}
                {/* <input type="hidden" name="_subject" value={t("رسالة جديدة من موقع بوابة العالم", "New message from WorldGate website")} /> */}
                {/* <input type="hidden" name="_captcha" value="false" /> */}
                {/* <input type="hidden" name="_template" value="table" /> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="text-sm font-medium text-foreground mb-2 block">{t("الاسم", "Name")}</label><Input name="name" placeholder={t("اسمك الكريم", "Your name")} className="bg-muted border-border" required /></div>
                  <div><label className="text-sm font-medium text-foreground mb-2 block">{t("رقم الجوال", "Phone Number")}</label><Input name="phone" placeholder="05xxxxxxxx" className="bg-muted border-border" required /></div>
                </div>
                <div><label className="text-sm font-medium text-foreground mb-2 block">{t("البريد الإلكتروني", "Email")}</label><Input name="email" type="email" placeholder="example@email.com" className="bg-muted border-border" required /></div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">{t("نوع الخدمة", "Service Type")}</label>
                  <select name="service" className="w-full bg-muted border border-border rounded-lg p-3 text-foreground">
                    <option>{t("اختر الخدمة المطلوبة", "Select a service")}</option>
                    <option>{t("حجز طيران", "Flight Booking")}</option>
                    <option>{t("حجز فندق", "Hotel Booking")}</option>
                    <option>{t("باقة سياحية", "Tour Package")}</option>
                    <option>{t("تأشيرة", "Visa")}</option>
                    <option>{t("شهر عسل", "Honeymoon")}</option>
                    <option>{t("سفر شركات", "Corporate Travel")}</option>
                    <option>{t("أخرى", "Other")}</option>
                  </select>
                </div>
                <div><label className="text-sm font-medium text-foreground mb-2 block">{t("رسالتك", "Your Message")}</label><Textarea name="message" placeholder={t("اكتب رسالتك هنا...", "Write your message here...")} rows={4} className="bg-muted border-border" required /></div>
                <Button type="submit" disabled={status === "submitting"} className="btn-secondary w-full rounded-xl disabled:opacity-70">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className={`${t("ml-2", "mr-2")} animate-spin`} size={18} />
                      {t("جاري الإرسال...", "Sending...")}
                    </>
                  ) : (
                    <>
                      <Send className={`${t("ml-2", "mr-2")}`} size={18} />
                      {t("إرسال الرسالة", "Send Message")}
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    aria-live="polite"
                    className="flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-700 dark:text-green-400"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                    <span>{feedback}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    aria-live="assertive"
                    className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{feedback}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
