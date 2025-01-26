import HeroSection from "../../components/banner";
import OurTeam from "../../components/home/our-Team";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGoogle,
  FaShopify,
  FaEdit,
} from "react-icons/fa";

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

      <section className="marketing-services py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">
          Social Media Platform Marketing Services
        </h2>
        <div className="services-container flex flex-wrap justify-center gap-8 px-4">
          {marketingData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="service-card bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-between hover:shadow-2xl transition-all duration-300"
              >
                <IconComponent
                  size={50}
                  className="service-icon mb-4 text-blue-500"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <OurTeam />
    </>
  );
}

export default HomePage;
