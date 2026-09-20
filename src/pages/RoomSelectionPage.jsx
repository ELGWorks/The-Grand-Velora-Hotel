import { useState } from "react";
import { useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RoomCard } from "../components/RoomCard";
import { Trash2 } from "lucide-react";

export function RoomSelectionPage() {
  const location = useLocation();
  const { rooms = [], checkIn, checkOut, guests } = location.state || {};

  const [selectedRooms, setSelectedRooms] = useState([]);

  function handleAddRoom(room) {
    const alreadySelected = selectedRooms.some(
      (selectedRoom) => selectedRoom.id === room.id,
    );

    if (alreadySelected) {
      return;
    }

    setSelectedRooms([...selectedRooms, room]);
  }

  function handleRemoveRoom(roomId) {
    setSelectedRooms(selectedRooms.filter((room) => room.id !== roomId));
  }

  function isRoomSelected(roomId) {
    return selectedRooms.some((room) => room.id === roomId);
  }

  function getNumberOfNights() {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const difference = checkOut - checkIn;

    return difference / (1000 * 60 * 60 * 24);
  }

  const numberOfNights = getNumberOfNights();

  const totalPrice =
    selectedRooms.reduce((total, room) => total + room.pricePerNight, 0) *
    numberOfNights;

  return (
    <>
      <Header />

      <main className="min-h-screen px-6 py-32 pb-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#013220]">Available Rooms</h1>

          <p className="mt-2 text-gray-600">
            {guests} {guests === 1 ? "Guest" : "Guests"}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Available Rooms */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    onAdd={handleAddRoom}
                    isSelected={isRoomSelected(room.id)}
                  />
                ))}
              </div>
            </div>

            {/* Selection Summary */}
            <div className="lg:col-span-1 hidden xl:block">
              <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-28">
                <h2 className="text-2xl font-bold text-[#013220]">
                  Your Selection
                </h2>

                <p className="text-gray-500 mt-1">
                  {selectedRooms.length}{" "}
                  {selectedRooms.length === 1 ? "Room" : "Rooms"}
                </p>

                <div className="mt-6 max-h-80 overflow-y-auto pr-2">
                  {selectedRooms.map((room) => (
                    <div
                      key={room.id}
                      className="border-b border-gray-200 py-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-[#013220]">
                            {room.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            Room {room.roomNumber}
                          </p>

                          <p className="mt-2 font-semibold">
                            ₱{room.pricePerNight.toLocaleString()} / night
                          </p>
                        </div>

                        <button
                          onClick={() => handleRemoveRoom(room.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                          aria-label={`Remove ${room.name}`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-6 pt-5">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>

                    <span className="font-bold text-[#013220]">
                      ₱
                      {totalPrice.toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                <button
                  disabled={selectedRooms.length === 0}
                  className="w-full mt-6 px-5 py-3 rounded-xl bg-[#013220] text-[#ffd21f] hover:bg-[#ffd21f] hover:text-[#013220] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl px-5 py-4">
        {selectedRooms.length > 0 && (
          <div className="max-h-32 overflow-y-auto mb-4">
            {selectedRooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <div>
                  <p className="font-semibold text-[#013220]">{room.name}</p>

                  <p className="text-sm text-gray-500">
                    Room {room.roomNumber}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveRoom(room.id)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                  aria-label={`Remove ${room.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">
              {checkIn?.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}{" "}
              -{" "}
              {checkOut?.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>

            <p className="text-lg font-bold text-[#013220]">
              ₱
              {totalPrice.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>

          <button
            disabled={selectedRooms.length === 0}
            className="px-6 py-3 rounded-xl bg-[#013220] text-[#ffd21f] font-semibold hover:bg-[#ffd21f] hover:text-[#013220] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
