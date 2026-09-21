import { useLocation, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Check } from "lucide-react";

export function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    selectedRooms = [],
    checkIn,
    checkOut,
    guests,
    totalPrice = 0,
    fullName,
    email,
  } = location.state || {};

  const bookingReference = `GVH-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <>
      <Header />

      <main className="min-h-screen px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Confirmation Header */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#ffd21f] flex items-center justify-center">
              <Check size={40} className="text-[#013220]" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">
              Booking Confirmed
            </h1>

            <p className="text-gray-300 mt-3">
              Thank you for choosing The Grand Velora Hotel.
            </p>

            <p className="text-gray-400 mt-1">
              Your reservation has been successfully submitted.
            </p>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mt-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 pb-6">
              <div>
                <p className="text-sm text-gray-500">Booking Reference</p>

                <p className="text-2xl font-bold text-[#013220]">
                  {bookingReference}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-sm text-gray-500">Guest</p>

                <p className="font-semibold text-gray-800">{fullName}</p>

                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            {/* Stay Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Check-in</p>

                <p className="font-semibold text-gray-800 mt-1">
                  {checkIn?.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Check-out</p>

                <p className="font-semibold text-gray-800 mt-1">
                  {checkOut?.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Guests</p>

                <p className="font-semibold text-gray-800 mt-1">
                  {guests} {guests === 1 ? "Guest" : "Guests"}
                </p>
              </div>
            </div>

            {/* Rooms */}
            <div className="py-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#013220]">
                Reserved Rooms
              </h2>

              <div className="mt-4 space-y-4">
                {selectedRooms.map((room) => (
                  <div
                    key={room.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{room.name}</p>

                      <p className="text-sm text-gray-500">
                        Room {room.roomNumber}
                      </p>
                    </div>

                    <p className="font-semibold text-[#013220]">
                      ₱{room.pricePerNight.toLocaleString()} / night
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-6">
              <span className="text-lg font-semibold">Total</span>

              <span className="text-2xl font-bold text-[#013220]">
                ₱
                {totalPrice.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          {/* Thank You */}
          <div className="text-center mt-10">
            <p className="text-gray-300">We look forward to welcoming you to</p>

            <p className="text-xl font-semibold text-[#ffd21f] mt-1">
              The Grand Velora Hotel
            </p>

            <button
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              className="mt-6 px-8 py-3 rounded-xl bg-[#ffd21f] text-[#013220] font-semibold hover:text-[#ffd21f] hover:bg-[#013220] transition-all duration-300 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
