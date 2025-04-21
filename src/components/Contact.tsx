import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
          CONTACT US
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have questions about our products? Get in touch with the Empire Oil
          team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10">
            <h3 className="text-xl font-bold tracking-wider mb-6">
              SEND US A MESSAGE
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 px-6 rounded tracking-wider hover:bg-gray-100 transition-colors cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-bold tracking-wider mb-6">
                HEADQUARTERS
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white/60 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Empire Oil Corporation
                    <br />
                    350 Fifth Avenue, 21st Floor
                    <br />
                    New York, NY 10118
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white/60 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>contact@empireoil.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white/60 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+1 (212) 555-7890</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  BUSINESS HOURS
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-bold tracking-wider mb-6">
                FOLLOW US
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.214c0 2.717-.012 3.056-.06 4.122-.049 1.065-.218 1.792-.465 2.428a4.908 4.908 0 01-1.153 1.772c-.5.508-1.104.902-1.772 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.214c-2.717 0-3.056-.012-4.122-.06-1.065-.049-1.792-.218-2.428-.465a4.883 4.883 0 01-1.772-1.153 4.915 4.915 0 01-1.152-1.772c-.248-.636-.417-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.012-3.056.06-4.122.049-1.065.218-1.792.465-2.428a4.889 4.889 0 011.153-1.772c.5-.509 1.104-.903 1.771-1.152.637-.247 1.363-.416 2.428-.465C9.006 2.013 9.346 2 12.063 2h.252zm-.131 1.801h-.17C9.398 3.801 9.08 3.812 8.063 3.86c-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.672.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.565 1.15.747.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.672 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.747c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
