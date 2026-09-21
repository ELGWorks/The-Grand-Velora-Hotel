import { Link } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#013220] border-t border-[#ffd21f] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Hotel Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-[#ffd21f]">
            The Grand Velora Hotel
          </h2>

          <p className="text-sm text-gray-300 mt-1">
            A Stay Worth Remembering
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6">
          <Link
            to="/terms"
            onClick={() => window.scrollTo(0, 0)}
            className="text-[#ffd21f] hover:text-white transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto border-t border-white/20 mt-8 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 text-sm text-gray-300">
          {/* Address */}
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#ffd21f]" />
            <span>San Fernando, Pampanga, Philippines</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-[#ffd21f]" />
            <span>+63 912 345 6789</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#ffd21f]" />
            <span>contact@grandvelorahotel.com</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center mt-5">
          © 2026 The Grand Velora Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}