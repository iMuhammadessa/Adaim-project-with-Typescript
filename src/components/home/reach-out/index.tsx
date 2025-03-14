import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function ReachOut() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Let's Start Your Project Together!
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Get in touch with us and let’s bring your vision to life.
      </p>

      {/* Contact Card */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8 md:p-12  relative text-gray-800">
        {/* Address Section */}
        <div className="flex items-start gap-4 mb-6">
          <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
          <div>
            <h3 className="text-lg font-semibold">Visit Us:</h3>
            <address className="text-gray-600 text-base leading-relaxed">
              FF04, 1st Floor, Awan Tower, <br />
              Near Mercy Teaching Hospital, <br />
              Tehkal Payyan, University Road, <br />
              Peshawar
            </address>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-4 mb-6">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <p className="text-lg font-medium">
            Email:{" "}
            <a
              href="mailto:adaimmarketingagency@gmail.com"
              className="text-blue-500 hover:text-blue-700 underline transition-all duration-300"
            >
              contact@admain.com.pk
            </a>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-600 text-white font-semibold rounded-md  transition-all duration-300 focus:outline-none shadow-md">
            <FaPhoneAlt /> Call Now
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-md hover:from-green-700 hover:to-green-500 transition-all duration-300 focus:outline-none shadow-md">
            <FaWhatsapp /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReachOut;
