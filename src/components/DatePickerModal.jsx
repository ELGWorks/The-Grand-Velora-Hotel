import { useState } from "react";

export function DatePickerModal({ onClose, onSave }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Get number of days in current month
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  // Get the first day of the month
  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  // Handle clicking a date
  function handleDateClick(day) {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    if (!startDate || endDate) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (selectedDate > startDate) {
      setEndDate(selectedDate);
    } else {
      setStartDate(selectedDate);
      setEndDate(null);
    }
  }

  // Reset selected dates
  function handleReset() {
    setStartDate(null);
    setEndDate(null);
  }

  // Save selected dates
  function handleSave() {
    if (startDate && endDate) {
      onSave(startDate, endDate);
    }
  }

  // Move to previous month
  function previousMonth() {
    const previous = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    // Don't go before the current month
    if (previous >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(previous);
    }
  }

  // Move to next month
  function nextMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  }

  function formatMonth(date) {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  function isPastDate(day) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    return date < today;
  }

  function isSelected(day) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    return (
      (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime())
    );
  }

  function isBetween(day) {
    if (!startDate || !endDate) return false;

    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    return date > startDate && date < endDate;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        <h2 className="text-2xl font-bold text-[#013220]">
          Select Dates
        </h2>

        {/* Month navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={previousMonth}
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            ←
          </button>

          <h3 className="font-semibold text-lg">
            {formatMonth(currentMonth)}
          </h3>

          <button
            onClick={nextMonth}
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            →
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-2 mt-6 text-center text-sm font-semibold">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar dates */}
        <div className="grid grid-cols-7 gap-2 mt-2">

          {/* Empty spaces before first day */}
          {Array.from({ length: firstDay }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const past = isPastDate(day);
            const selected = isSelected(day);
            const between = isBetween(day);

            return (
              <button
                key={day}
                disabled={past}
                onClick={() => handleDateClick(day)}
                className={`
                  h-10 rounded-lg transition
                  ${past
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-[#013220] hover:text-[#ffd21f] cursor-pointer"
                  }
                  ${selected
                    ? "bg-[#013220] text-[#ffd21f]"
                    : ""
                  }
                  ${between
                    ? "bg-[#013220]/10"
                    : ""
                  }
                `}
              >
                {day}
              </button>
            );
          })}

        </div>

        {/* Selected dates */}
        <div className="mt-6 text-center text-sm">
          <p>
            Check-in:{" "}
            <span className="font-semibold">
              {startDate
                ? startDate.toLocaleDateString()
                : "Not selected"}
            </span>
          </p>

          <p>
            Check-out:{" "}
            <span className="font-semibold">
              {endDate
                ? endDate.toLocaleDateString()
                : "Not selected"}
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8">

          <div className="flex items-center gap-2 xl:gap-10">

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border-2 border-[#013220] text-[#013220] hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl border-2 border-[#013220] text-[#013220] hover:bg-[#013220] hover:text-[#ffd21f] transition-all duration-300 cursor-pointer"
            >
              Reset
            </button>

            <button
              onClick={handleSave}
              disabled={!startDate || !endDate}
              className="px-5 py-3 rounded-xl bg-[#013220] text-[#ffd21f] hover:bg-[#ffd21f] hover:text-[#013220] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Save
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}