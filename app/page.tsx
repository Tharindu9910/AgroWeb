import Banner from "@/components/Banner";
import Camp from "@/components/Camp";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import FeatureSection from "@/components/FeaturesSection";
import GetApp from "@/components/GetApp";
import GlobalReachSection from "@/components/GlobalReachSection";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import RollingTicker from "@/components/RollingTicker";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection/>
      <WhoWeAreSection/>
      <RollingTicker/>
      <ProductsSection/>
      <WhyChooseSection/>
      <GlobalReachSection/>
      {/* <Banner/> */}
      <ContactSection/>
    </>
  )
}
