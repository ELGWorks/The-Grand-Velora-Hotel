import HotelImage from '../assets/hotel-image.webp';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-start xl:items-center">
        <div className="flex flex-col xl:flex-row w-full gap-5 xl:gap-10 mx-5 xl:mx-10">

            {/* Title */}
            <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[70px] font-bold text-[#ffd21f] text-center xl:hidden mt-10">
                The Grand Velora Hotel
            </h1>

            {/* Image */}
            <div className="flex flex-1 justify-center items-center">
                <img
                    src={HotelImage}
                    alt="The Grand Velora Hotel"
                    className="w-200 aspect-[4/3] object-cover rounded-[50px]"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-3 xl:gap-30 items-center justify-center text-white">
                <h1 className="hidden xl:block text-[70px] font-bold text-[#ffd21f] text-center">
                    The Grand Velora Hotel
                </h1>
                <p className="text-[20px] xl:text-[40px] font-['Ephesis'] text-[#ffd21f]">
                    A Stay Worth Remembering
                </p>
                <button className="px-2 xl:px-10 py-1 xl:py-3 bg-[#ffd21f] text-[#013220] text-[25px] xl:text-[40px] font-semibold rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-[#013220] hover:text-[#ffd21f] hover:-translate-y-1 hover:shadow-lg mt-3.5">
                    Book Now
                </button>
            </div> 
            
            <div className="text-[12px] absolute bottom-1 left-0 w-full flex items-center justify-center gap-2 text-[#ffd21f]">
                <span>📍</span> 
                <span>San Fernando, Pampanga, Philippines</span>
            </div>
        </div>
    </section>
  );
}