import HeroSection from "../../components/banner";
import OurPackages from "../../components/about/ourpackages";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundimage="/images/home/containerpic1.jpg"
        title="About"
        description="Welcome to Ad-Aim Marketing Agency"
        sliderImages={sliderImages}
      />
      <OurPackages />
    </>
  );
}

export default AboutPage;
