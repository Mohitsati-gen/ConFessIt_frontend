import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen text-white">

      {/* MAIN CONTENT */}
      <main className="flex-grow px-4 sm:px-6 pt-10 pb-20">
        
        {/* HERO */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            About ConfessIt
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A safe space for honest, anonymous confessions
          </p>
        </div>

        {/* MISSION */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Sometimes, you just need to let things out — without fear,
            judgment, or identity. ConfessIt is built to give you a place
            where your thoughts remain truly anonymous. Whether it’s a
            secret, a regret, a feeling you’ve never shared, or something
            weighing on your heart, this is your space to speak freely —
            or quietly read and relate.
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="max-w-6xl mx-auto mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/10">
                ✍️
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                1. Write
              </h3>
              <p className="text-gray-400 text-sm">
                Write your confession, secret, or thought in your own
                words. No filters, no forced formats — just honesty.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/10">
                🕶️
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                2. Stay Anonymous
              </h3>
              <p className="text-gray-400 text-sm">
                Your identity stays completely hidden.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/10">
                🔒
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                3. Submit & Let Go
              </h3>
              <p className="text-gray-400 text-sm">
                Once submitted, your confession becomes part of a shared
                anonymous space — helping others feel less alone while
                you find relief in letting go.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default About;
