import HeroSection from "../../components/banner";
import OurTeam from "../../components/home/our-Team";
<<<<<<< HEAD
<<<<<<< HEAD
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
=======
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGoogle,
  FaShopify,
  FaEdit,
} from "react-icons/fa";
=======
>>>>>>> 183b25c425471301dd107bc31ccf60df2353ac91

>>>>>>> 74f0792 (Updated home page)
const sliderImages = [
  "/images/home/containerpic1.jpg",
  "/images/home/containerpic2.jpg",
  "/images/home/containerpic3.jpg",
];

const marketingData = [
  {
    id: 1,
    title: "Facebook Marketing",
    description:
      "Enhance your brand's presence and elevate your business with our specialized and tailored Facebook marketing strategies and solutions.",
    icon: FaFacebook,
  },
  {
    id: 2,
    title: "Instagram Marketing",
    description:
      "Amplify your brand's impact and elevate your business with our comprehensive and targeted Instagram marketing solutions.",
    icon: FaInstagram,
  },
  {
    id: 3,
    title: "YouTube Marketing",
    description:
      "Boost your brand's visibility and amplify your business with our strategic and tailored YouTube marketing solutions.",
    icon: FaYoutube,
  },
  {
    id: 4,
    title: "YouTube SEO",
    description:
      "Optimize your YouTube presence and maximize your video visibility with our expert and tailored YouTube SEO services and strategies.",
    icon: FaYoutube,
  },
  {
    id: 5,
    title: "Google Ads",
    description:
      "Enhance your online presence and maximize your digital reach with our targeted and expert Google Ads solutions and strategies.",
    icon: FaGoogle,
  },
  {
    id: 6,
    title: "TikTok Marketing",
    description:
      "Amplify your brand's impact and elevate your business with our specialized and tailored TikTok marketing strategies and solutions.",
    icon: FaTiktok,
  },
  {
    id: 7,
    title: "TikTok SEO",
    description:
      "Optimize your TikTok presence and maximize your video visibility with our expert TikTok SEO services and strategies.",
    icon: FaTiktok,
  },
  {
    id: 8,
    title: "Video Editing",
    description:
      "Enhance your video content and captivate your audience with our professional and tailored video editing services and solutions.",
    icon: FaEdit,
  },
  {
    id: 9,
    title: "Shopify Marketing",
    description:
      "Boost your online store's visibility and elevate your e-commerce business with our specialized and tailored Shopify marketing strategies and solutions.",
    icon: FaShopify,
  },
];

function HomePage() {
  return (
    <>
      <HeroSection
        backgroundimage="/images/home/containerpic1.jpg"
        title="Ad Aim Marketing Agency"
        description="Where precision meets impact, delivering excellence for your brand’s success"
        sliderImages={sliderImages}
      />
<<<<<<< HEAD

      <section className="marketing-services">
        <h2>Our Marketing Services</h2>
        <div className="services-grid">
          {marketingData.map((service) => (
            <div key={service.id} className="service-card">
              <service.icon size={50} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

=======
>>>>>>> 183b25c425471301dd107bc31ccf60df2353ac91
      <OurTeam />
    </>
  );
}

export default HomePage;
