import CompanyPromotion from "@/components/sections/CompanyPromotion";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import JobCategories from "@/components/sections/JobCategories";
import Navbar from "@/components/sections/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CompanyPromotion />
      <JobCategories />
    </main>
  );
}