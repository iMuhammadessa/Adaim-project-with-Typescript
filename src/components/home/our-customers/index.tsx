import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const clients = [
  { src: "images/home/DrNasir.png", alt: "Client-1" },
  { src: "images/home/cosmetic.png", alt: "Client-2" },
  { src: "images/home/Dr Zafar Ali khan.jpeg", alt: "Client-3" },
  { src: "images/home/Evoulation.jpeg", alt: "Client-4" },
  { src: "images/home/Friends.png", alt: "Client-5" },
  { src: "images/home/Dot.png", alt: "Client-6" },
  { src: "images/home/GreenPine.png", alt: "Client-7" },
  { src: "images/home/NaturalZafran.png", alt: "Client-8" },
  { src: "images/home/peg.png", alt: "Client-9" },
  { src: "images/home/Zameen.png", alt: "Client-10" },
  { src: "images/home/Warsak Model.jpeg", alt: "Client-11" },
  {
    src: "images/home/TheKnowledge School peshawar campus.jpeg",
    alt: "Client-12",
  },
];

const OurCustomers = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-12">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5">
          Our Customers
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Our customers are at the heart of everything we do. We are dedicated
          to providing exceptional service and exceeding their expectations at
          every opportunity. Here are some of our esteemed clients.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="px-2 md:px-4"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="p-4 m-5 md:p-6 rounded-lg transition-all duration-300 flex justify-center items-center">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-32 h-32 rounded-lg md:w-32 md:h-32 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCustomers;
