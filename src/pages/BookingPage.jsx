import { Header } from "../components/Header";
import { Calendar } from "lucide-react";
import { Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Footer } from "../components/Footer";
import { DatePickerModal } from "../components/DatePickerModal";
import { useState } from "react";

export function BookingPage() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  return (
    <>
      <Header />
      <title>Booking</title>

      <div className="min-h-screen flex justify-center items-center px-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col gap-5">
          
          <button
            onClick={() => setShowDatePicker(true)}
            className="group flex justify-center items-center flex-row gap-3 w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-black text-[14px] md:text-[18px] xl:text-[20px] cursor-pointer hover:bg-[#013220] hover:text-[#ffd21f] hover:border-[#ffd21f] transition-all duration-300 ease-in-out"
          >
            <Calendar className="text-black group-hover:text-[#ffd21f] transition-all duration-300 w-5" />

            {checkIn
              ? checkIn.toLocaleDateString()
              : "Check-in"}

            <ArrowRight className="w-4" />

            {checkOut
              ? checkOut.toLocaleDateString()
              : "Check-out"}
          </button>
          <button className=" group flex justify-center items-center flex-row gap-3 w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col border-2 border-black text-xl cursor-pointer hover:bg-[#013220] hover:text-[#ffd21f] hover:border-[#ffd21f]">
            <Users className="text-black group-hover:text-[#ffd21f] transition-all duration-300" size={24} />
            <p>1</p>
            Guest
          </button>
          <button className="flex justify-center items-center flex-row gap-3 w-full max-w-2xl bg-[#013220] rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col border-2 border-black text-xl text-[#ffd21f] cursor-pointer hover:bg-[#013220] hover:text-[#ffd21f] hover:border-[#ffd21f]">
            Search
          </button>

        </div>
      </div>
      {showDatePicker && (
        <DatePickerModal
          onClose={() => setShowDatePicker(false)}
          onSave={(startDate, endDate) => {
            setCheckIn(startDate);
            setCheckOut(endDate);
            setShowDatePicker(false);
          }}
        />
      )}
      <Footer />
    </>
  );
}