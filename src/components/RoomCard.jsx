export function RoomCard({ room, onAdd, isSelected }) {
  return (
    <div className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ${
        isSelected ? "opacity-50 grayscale" : ""
    }`}
        >
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#013220]">
          {room.name}
        </h2>

        <p className="text-gray-500 mt-1">
          Room {room.roomNumber}
        </p>

        <div className="flex gap-6 mt-4 text-sm text-gray-600">
          <span>{room.beds} {room.beds === 1 ? "Bed" : "Beds"}</span>
          <span>
            {room.bathrooms} {room.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
          </span>
          <span>Up to {room.capacity} Guests</span>
        </div>

        <div className="mt-5">
          <p className="text-2xl font-bold text-[#013220]">
            ₱{room.pricePerNight.toLocaleString()}
          </p>

          <p className="text-sm text-gray-500">
            per night
          </p>
        </div>

        <button
        onClick={() => onAdd(room)}
        disabled={isSelected}
        className={`cursor-pointer w-full mt-5 px-5 py-3 rounded-xl transition-all duration-300 ${
            isSelected
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#013220] text-[#ffd21f] hover:bg-[#ffd21f] hover:text-[#013220]"
        }`}
        >
        {isSelected ? "Added ✓" : "Add Room"}
        </button>
      </div>
    </div>
  );
}