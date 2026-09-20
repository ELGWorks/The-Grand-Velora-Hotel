import { useState } from "react";

export function GuestSelector({ onClose, onSave }) {
  const [guests, setGuests] = useState(1);

  function addGuest() {
    if (guests < 7) {
      setGuests(guests + 1);
    }
  }

  function removeGuest() {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  }

  function handleReset() {
    setGuests(1);
  }

  function handleSave() {
    onSave(guests);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        <h2 className="text-2xl font-bold text-[#013220]">
          Select Guests
        </h2>

        {/* Guest counter */}
        <div className="flex items-center justify-between mt-8">

          <button
            onClick={removeGuest}
            disabled={guests === 1}
            className="w-12 h-12 rounded-full border-2 border-[#013220] text-2xl text-[#013220] hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            −
          </button>

          <div className="text-center">
            <p className="text-4xl font-bold text-[#013220]">
              {guests}
            </p>

            <p className="text-gray-500">
              {guests === 1 ? "Guest" : "Guests"}
            </p>
          </div>

          <button
            onClick={addGuest}
            disabled={guests === 7}
            className="w-12 h-12 rounded-full border-2 border-[#013220] text-2xl text-[#013220] hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            +
          </button>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={handleReset}
            className="px-5 py-3 rounded-xl border-2 border-[#013220] text-[#013220] hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 cursor-pointer"
          >
            Reset
          </button>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border-2 border-[#013220] text-[#013220] hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-3 rounded-xl bg-[#013220] text-[#ffd21f] hover:bg-[#ffd21f] hover:text-[#013220] transition-all duration-300 cursor-pointer"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}
