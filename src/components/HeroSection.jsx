import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const HeroSection = ({ onExplore }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleExplore = () => {
    if (!user) {
      toast.warn("Login required to explore confessions 🔒");
      setTimeout(() => navigate("/login"), 1200);
      return;
    }
    onExplore();
  };

  const handleShare = () => {
    if (!user) {
      toast.warn("Please login to share your confession ✨");
      setTimeout(() => navigate("/login"), 1200);
      return;
    }
    navigate("/submit");
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 min-h-[calc(100vh-64px)]">
      <div className="relative z-10 max-w-5xl text-center animate-fadeUp">

        <h1 className="font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-7xl text-white break-words">
          <span className="bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-400 bg-clip-text text-transparent">
            Speak without fear.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-white bg-clip-text text-transparent">
            Be heard without a name.
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="font-extrabold text-2xl sm:text-3xl tracking-wide  hover:text-purple-600 transition-colors duration-300 text-white">
            <span className="text-yellow-400">Con</span>
            <span className="text-pink-500">Fess</span>It
          </span>
          <br />
           is a quiet corner of the internet where thoughts don’t need faces, and emotions don’t need explanations.
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          No profiles. No judgments. No filters.
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
          <button
            onClick={handleExplore}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base sm:text-lg shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] hover:scale-[1.03] transition-all duration-300"
          >
            Explore Confessions
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-2xl border-4 border-white/60 text-white font-semibold text-base sm:text-lg backdrop-blur-md hover:shadow-[0_0_40px_rgba(255,220,120,0.3)] hover:scale-[1.03] transition-all duration-300 hover:bg-black hover:border-amber-300"
          >
            Share Yours
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
