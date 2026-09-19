import { Link } from "react-router";
import { Header } from "../components/Header";
import HotelImage from "../assets/hotel-image.webp";

export function HomePage() {
  return (
    <>
      <Header />
      <title>The Grand Velora Hotel</title>

      <section className="relative min-h-screen pt-20 flex items-start xl:items-center">
        <div className="flex flex-col xl:flex-row w-full gap-5 xl:gap-10 mx-8 xl:mx-10">
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
            <Link to="/setbooking">
              <button className="px-5 xl:px-10 py-1 xl:py-3 bg-[#ffd21f] text-[#013220] text-[24px] xl:text-[40px] font-semibold rounded-[50px] cursor-pointer transition-all duration-300 hover:bg-[#013220] hover:text-[#ffd21f] hover:-translate-y-1 hover:shadow-lg mt-3.5">
                Book Now
              </button>
            </Link>
          </div>

          <div className="text-[12px] absolute bottom-1 left-0 w-full flex items-center justify-center gap-2 text-[#ffd21f]">
            <span>📍</span>
            <span>San Fernando, Pampanga, Philippines</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="min-h-screen px-6 py-20 md:px-10 flex flex-col justify-center bg-[#1D1D1F]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffd21f]">
            What Our Guests Say
          </h2>

          <p className="mt-4 text-white text-lg">
            A few words from our valued guests.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-[#ffd21f] text-2xl mb-5">★★★★★</div>

            <p className="text-gray-700 text-lg leading-relaxed">
              "The room was beautiful and incredibly comfortable. The staff were
              welcoming and made our entire stay feel special."
            </p>

            <div className="mt-8">
              <h3 className="text-[#013220] text-xl font-semibold">
                Sofia Martinez
              </h3>

              <p className="text-gray-500 text-sm">Stayed for 3 nights</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-[#ffd21f] text-2xl mb-5">★★★★★</div>

            <p className="text-gray-700 text-lg leading-relaxed">
              "Everything from check-in to check-out was smooth and relaxing.
              The atmosphere was elegant without feeling too formal."
            </p>

            <div className="mt-8">
              <h3 className="text-[#013220] text-xl font-semibold">
                Daniel Reyes
              </h3>

              <p className="text-gray-500 text-sm">Stayed for 2 nights</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-[#ffd21f] text-2xl mb-5">★★★★★</div>

            <p className="text-gray-700 text-lg leading-relaxed">
              "One of the most memorable hotel stays I've had. The room was
              spotless, the service was excellent, and the whole experience felt
              special."
            </p>

            <div className="mt-8">
              <h3 className="text-[#013220] text-xl font-semibold">
                Isabella Cruz
              </h3>

              <p className="text-gray-500 text-sm">Stayed for 4 nights</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
