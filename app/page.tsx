import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import TapToPay from "@/components/sections/TapToPay";
import Payments from "@/components/sections/Payments";
import OperatingSystem from "@/components/sections/OperatingSystem";
import Analytics from "@/components/sections/Analytics";
import CRM from "@/components/sections/CRM";
import Inventory from "@/components/sections/Inventory";
import Employees from "@/components/sections/Employees";
import MultiDevice from "@/components/sections/MultiDevice";
import Enterprise from "@/components/sections/Enterprise";
import Developers from "@/components/sections/Developers";
import Security from "@/components/sections/Security";
import GlobalSection from "@/components/sections/Global";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <SectionDivider />
        <TapToPay />
        <SectionDivider />
        <Payments />
        <SectionDivider />
        <OperatingSystem />
        <SectionDivider />
        <Analytics />
        <SectionDivider />
        <CRM />
        <SectionDivider />
        <Inventory />
        <SectionDivider />
        <Employees />
        <SectionDivider />
        <MultiDevice />
        <SectionDivider />
        <Enterprise />
        <SectionDivider />
        <Developers />
        <SectionDivider />
        <Security />
        <SectionDivider />
        <GlobalSection />
        <SectionDivider />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function SectionDivider() {
  return (
    <div aria-hidden className="container-page">
      <div className="divider-soft" />
    </div>
  );
}
