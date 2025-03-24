
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
          <Route path="/inspirations" element={<Inspirations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Future routes will be added here
          <Route path="/vendors/category/:category" element={<VendorCategory />} />
          <Route path="/vendors/:id" element={<VendorDetail />} />
          <Route path="/venues/:id" element={<VenueDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/vendor-signup" element={<VendorSignup />} />
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
