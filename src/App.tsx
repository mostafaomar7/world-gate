import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import AboutPage from "./pages/AboutPage";
import HoneymoonPage from "./pages/HoneymoonPage";
import CorporatePage from "./pages/CorporatePage";
import OffersPage from "./pages/OffersPage";
import EidOffersPage from "./pages/EidOffersPage";
import MarketsPage from "./pages/MarketsPage";
import ContactPage from "./pages/ContactPage";
import CruisePage from "./pages/CruisePage";
import VisaPage from "./pages/VisaPage";
import VisaDetailPage from "./pages/VisaDetailPage";
import FlightBookingPage from "./pages/FlightBookingPage";
import HotelBookingPage from "./pages/HotelBookingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destination/:slug" element={<DestinationDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/honeymoon" element={<HoneymoonPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/eid-offers" element={<EidOffersPage />} />
            <Route path="/eid" element={<EidOffersPage />} />
            <Route path="/eid-offer" element={<EidOffersPage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cruise" element={<CruisePage />} />
            <Route path="/visa" element={<VisaPage />} />
            <Route path="/visas" element={<VisaPage />} />
            <Route path="/visa-services" element={<VisaPage />} />
            <Route path="/visa/:slug" element={<VisaDetailPage />} />
            <Route path="/visas/:slug" element={<VisaDetailPage />} />
            <Route path="/flights" element={<FlightBookingPage />} />
            <Route path="/hotels" element={<HotelBookingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
