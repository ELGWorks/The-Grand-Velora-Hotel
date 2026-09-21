import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactPage() {
  return (
    <>
      <Header />
      <title>Contact Us - The Grand Velora Hotel</title>

      <main className="min-h-screen pt-32 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ffd21f]">
              Contact Us
            </h1>

            <p className="text-white mt-4 text-lg">
              We'd love to hear from you. Get in touch with The Grand Velora
              Hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="text-white">
              <h2 className="text-2xl font-bold text-[#ffd21f] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#ffd21f] mt-1 shrink-0" size={24} />

                  <div>
                    <p className="text-[#ffd21f] font-semibold">Address</p>

                    <p className="mt-1 text-gray-300">
                      San Fernando, Pampanga, Philippines
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="text-[#ffd21f] mt-1 shrink-0" size={24} />

                  <div>
                    <p className="text-[#ffd21f] font-semibold">Phone</p>

                    <p className="mt-1 text-gray-300">+63 912 345 6789</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="text-[#ffd21f] mt-1 shrink-0" size={24} />

                  <div>
                    <p className="text-[#ffd21f] font-semibold">Email</p>

                    <p className="mt-1 text-gray-300">
                      contact@grandvelorahotel.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#013220] mb-6">
                Send Us a Message
              </h2>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#013220] focus:ring-2 focus:ring-[#ffd21f]/40"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#013220] focus:ring-2 focus:ring-[#ffd21f]/40"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#013220] focus:ring-2 focus:ring-[#ffd21f]/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#ffd21f] text-[#013220] font-semibold rounded-xl hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
