import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function GuestInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    selectedRooms = [],
    checkIn,
    checkOut,
    guests,
    totalPrice = 0,
  } = location.state || {};

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/confirmation", {
      state: {
        selectedRooms,
        checkIn,
        checkOut,
        guests,
        totalPrice,
        fullName,
        email,
        phone,
        specialRequests,
      },
    });
  }

  const hasEnteredInfo = fullName || email || phone || specialRequests;

  function handleHomeClick() {
    if (!hasEnteredInfo) {
      return true;
    }

    return window.confirm(
      "You have entered information that may be lost. Are you sure you want to leave this page?",
    );
  }

  return (
    <>
      <Header onNavigate={handleHomeClick} />

      <main className="min-h-screen px-4 sm:px-6 py-32 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white">Guest Information</h1>

          <p className="mt-2 text-gray-300">
            Please enter your information to complete your booking.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Guest Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#013220]">
                Your Information
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd21f]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd21f]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                    placeholder="09XX XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffd21f]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Special Requests
                    <span className="font-normal text-gray-400">
                      {" "}
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    value={specialRequests}
                    onChange={(event) => setSpecialRequests(event.target.value)}
                    rows="4"
                    placeholder="Anything you'd like us to know?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#ffd21f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-5 py-3 rounded-xl bg-[#013220] text-[#ffd21f] font-semibold hover:bg-[#ffd21f] hover:text-[#013220] transition-all duration-300 cursor-pointer"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Confirm Booking
                </button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-28">
                <h2 className="text-2xl font-bold text-[#013220]">
                  Booking Summary
                </h2>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Check-in</p>
                    <p className="font-semibold">
                      {checkIn?.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Check-out</p>
                    <p className="font-semibold">
                      {checkOut?.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-semibold">
                      {guests} {guests === 1 ? "Guest" : "Guests"}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-5">
                  <p className="text-sm text-gray-500">Selected Rooms</p>

                  <div className="mt-3 space-y-3">
                    {selectedRooms.map((room) => (
                      <div key={room.id}>
                        <p className="font-semibold text-[#013220]">
                          {room.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          Room {room.roomNumber}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-5 flex justify-between">
                  <span className="font-semibold">Total</span>

                  <span className="font-bold text-[#013220]">
                    ₱
                    {totalPrice.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
