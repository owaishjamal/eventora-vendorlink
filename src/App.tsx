
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FindVendors from "./pages/FindVendors";
import Venues from "./pages/Venues";
import PlanningTools from "./pages/PlanningTools";
import Inspirations from "./pages/Inspirations";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import VendorSignup from "./pages/VendorSignup";
import EventPlanner from "./pages/EventPlanner";
import BudgetCalculator from "./pages/BudgetCalculator";
import WeddingChecklist from "./pages/WeddingChecklist";
import VendorLogin from "./pages/VendorLogin";
import VendorDashboard from "./pages/VendorDashboard";
import VendorPricing from "./pages/VendorPricing";
import SuccessStories from "./pages/SuccessStories";
import SupportHub from "./pages/SupportHub";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vendors" element={<FindVendors />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/planning-tools" element={<PlanningTools />} />
          <Route path="/planning-tools/budget-calculator" element={<BudgetCalculator />} />
          <Route path="/planning-tools/wedding-checklist" element={<WeddingChecklist />} />
          <Route path="/planning-tools/:toolId" element={<PlanningTools />} />
          <Route path="/inspirations" element={<Inspirations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:tab" element={<Profile />} />
          <Route path="/vendor-signup" element={<VendorSignup />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/vendor-pricing" element={<VendorPricing />} />
          <Route path="/event" element={<EventPlanner />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/support" element={<SupportHub />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
