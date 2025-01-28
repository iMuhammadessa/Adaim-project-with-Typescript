function ContactForm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-6 mt-[6rem]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-sm sm:text-base md:text-lg font-light w-full md:w-1/2 lg:w-1/3 mx-auto">
          At Adaim, we are eager to hear from you and explore the endless
          possibilities for your digital success.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-[#F35542] focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
