import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const teamMembers = [
  {
    name: "Syed Ibadat Shah",
    role: "Marketing Manager | SEO Specialist",
    image: "images/home/syed.png",
  },
  {
    name: "Hamza Khan",
    role: "Social Media Coordinator",
    image: "images/home/hamza.png",
  },
  {
    name: "Wajid Ullah Ghazi",
    role: "Data Analyst",
    image: "images/home/wajid.png",
  },
  {
    name: "Aizaz Ali",
    role: "Video Editor and Content Creator",
    image: "images/home/aizaz.jpeg",
  },
  {
    name: "Kashif Munir",
    role: "Digital Marketing Strategist",
    image: "images/home/kashif.png",
  },
];

function OurTeam() {
  return (
    <section className="text-white py-12">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-6 mt-[6rem]">
          Our Team
        </h2>
        <p className="text-lg text-black mb-10 max-w-3xl mx-auto">
          AD AIM Marketing is comprised of a team of experienced professionals
          who bring a wealth of industry knowledge and hands-on expertise to
          every project, ensuring top-notch delivery and client satisfaction.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="pb-10"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto object-cover rounded-full mb-4 border-4 border-gray-300"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurTeam;
