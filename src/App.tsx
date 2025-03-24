
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
          <Route path="/event" element={<EventPlanner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
