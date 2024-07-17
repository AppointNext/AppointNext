import Footer from "@/components/own/Footer";
import BenefitsSection from "@/components/own/home/BenefitsSection";
import FeatureSection from "@/components/own/home/FeatureSection";
import Hero from "@/components/own/home/Hero";
import NewsLetter from "@/components/own/home/NewsLetter";
import TestimonalSection from "@/components/own/home/TestimonalSection";
import ScrollAnimation from "@/components/own/ScrollAnimation";

export default function Home() {
  return (
    <div className="relative">
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <FeatureSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <BenefitsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TestimonalSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="">
          <div>
            <NewsLetter />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
