import HeroSection from "../../components/banner";
<<<<<<< HEAD
import OurPackages from "../../components/about/ourpackages";
=======
import WhyChooseUs from "../../components/about/whychooseus";
>>>>>>> 849aaed31db61bd3da9450e9f612623de4d50eb9

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
<<<<<<< HEAD
      <OurPackages />
=======
      <WhyChooseUs />
>>>>>>> 849aaed31db61bd3da9450e9f612623de4d50eb9
    </>
  );
}

export default AboutPage;
