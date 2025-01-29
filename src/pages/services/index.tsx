<<<<<<< HEAD
function Services() {
  return <div></div>;
=======
import HeroSection from "../../components/banner";
import Services from "../../components/Services";

const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

function ServicesPage() {
  return (
    <>
      <HeroSection
        backgroundimage="/images/home/containerpic1.jpg"
        title="Services"
        description="We provide a wide range of services tailored to meet your specific needs. With a steadfast commitment to client satisfaction,
        AD AIM Marketing forges enduring partnerships and endeavors to surpass expectations."
        sliderImages={sliderImages}
      />
      <Services />
    </>
  );
>>>>>>> main
}

export default ServicesPage;
