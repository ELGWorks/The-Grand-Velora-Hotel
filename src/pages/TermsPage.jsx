import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function TermsPage() {
  return (
    <>
      <Header />
      <title>Terms & Conditions - The Grand Velora Hotel</title>

      <main className="min-h-screen pt-32 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ffd21f]">
              Terms & Conditions
            </h1>

            <p className="text-gray-300 mt-4">
              Please review our terms before making a reservation.
            </p>
          </div>

          {/* Terms */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                1. Reservations
              </h2>

              <p className="text-gray-700 leading-relaxed">
                All reservations submitted through this website are subject to
                room availability and confirmation by The Grand Velora Hotel.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                2. Guest Information
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Guests are responsible for providing accurate and complete
                information when making a reservation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                3. Booking Details
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Each confirmed reservation is assigned a booking reference.
                Guests should keep this reference for their records.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                4. Rates and Payment
              </h2>

              <p className="text-gray-700 leading-relaxed">
                All room rates are displayed in Philippine Pesos (₱). The total
                price is calculated based on the selected rooms, dates, and
                number of guests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                5. Cancellation and Changes
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Guests who need to modify or cancel their reservation should
                contact the hotel as soon as possible. Cancellation and
                modification policies may apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                6. Check-in and Check-out
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Guests are expected to follow the hotel's check-in and check-out
                policies and provide valid identification when required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                7. Website Information
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Room availability, prices, images, and other information
                displayed on this website may be changed without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#013220] mb-2">
                8. Agreement
              </h2>

              <p className="text-gray-700 leading-relaxed">
                By submitting a reservation, you acknowledge that you have read
                and agreed to these Terms & Conditions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
