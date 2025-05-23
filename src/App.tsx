
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Tool Pages
import PayloadObfuscator from "./tools/PayloadObfuscator";
import NetworkTrafficAnalyzer from "./tools/NetworkTrafficAnalyzer";

// Blog Pages
import PayloadObfuscatorDevelopment from "./blog/PayloadObfuscatorDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Tool Routes */}
          <Route path="/tools/payload-obfuscator" element={<PayloadObfuscator />} />
          <Route path="/tools/traffic-analyzer" element={<NetworkTrafficAnalyzer />} />
          
          {/* Blog Routes */}
          <Route path="/blog/payload-obfuscator-development" element={<PayloadObfuscatorDevelopment />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
