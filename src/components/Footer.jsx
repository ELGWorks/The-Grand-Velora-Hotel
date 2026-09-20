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
          <a href="/" className="hover:text-[#ffd21f] transition">
            Home
          </a>

          <a href="/contact" className="hover:text-[#ffd21f] transition">
            Contact
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto border-t border-white/20 mt-8 pt-5 text-center">
        <p className="text-sm text-gray-400">
          © 2026 The Grand Velora Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}