import HeroSection from "../../components/banner";
import OurPackages from "./ourpackages";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundimage={sliderImages[0]} // Dynamically use the first image from the array
        title="About"
        description="Welcome to Ad-Aim Marketing Agency"
        sliderImages={sliderImages}
      />
      <OurPackages />
    </>
  );
}

export default AboutPage;
