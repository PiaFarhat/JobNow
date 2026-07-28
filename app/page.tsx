import CompanyPromotion from "@/components/sections/CompanyPromotion";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import JobCategories from "@/components/sections/JobCategories";
import Navbar from "@/components/sections/Navbar";
import RecentJobs from "@/components/sections/RecentJobs";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import RegisterCta from "@/components/sections/RegisterCta";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
    <Navbar />
<Hero />
<HowItWorks />
<CompanyPromotion />
<JobCategories />
<RecentJobs />
<Testimonials />
<RegisterCta />
<Footer />
    </main>
  );
}