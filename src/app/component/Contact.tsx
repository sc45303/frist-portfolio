const Contect = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600   shadow-2xl shadow-[#66fcf1] bg-[#1f2833] body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.230762965837!2d67.00322977401157!3d24.85596694543994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb0b69ae269%3A0x877aa58ad5404a25!2sCity%20Courts!5e0!3m2!1sen!2s!4v1729620266508!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-[#1f2833] relative flex flex-wrap py-6 rounded shadow-md lg:w-2/3 md:w-1/2">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-[#66fcf1] tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-white">
                  light house market, near city court karachi, pakistan
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-[#66fcf1] tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-white leading-relaxed">
                  sc3078786@gmail.com
                </a>
                <h2 className="title-font font-semibold text-[#66fcf1] tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-white">0322-0472781</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-[#1f2833] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#66fcf1]">
              Contact
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Feel free to reach out to me for collaboration or inquiries!
              Whether you are looking for web development, digital marketing
              services, or just want to chat about tech, I m always open to new
              opportunities.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-[#66fcf1]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#66fcf1] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-[#66fcf1]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#66fcf1] focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-[#66fcf1]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#66fcf1] focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white  border-2 border-[#66fcf1] py-2 px-6 focus:outline-none hover:bg-[#66fcf1] hover:text-black hover:border-[#1f2833] rounded text-lg">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contect;
