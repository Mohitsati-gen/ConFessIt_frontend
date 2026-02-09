import { useState } from "react";
import Star1Background from "../components/Star1Background";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const SubmitConfession = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    agreesTerms: false,
    noNsfw: false,
  });
  const [loading, setLoading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const navigate = useNavigate();

  const fetchLocation = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      return `${data.city}, ${data.country_name}`;
    } catch {
      return "Unknown";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    const { title, category, content, agreesTerms, noNsfw } = formData;

    if (!title.trim() || !category.trim() || !content.trim()) {
      toast.warn("Please fill in all required fields ✨");
      return;
    }
    if (!agreesTerms) {
      toast.warn("You must agree to Terms & Conditions ⚠️");
      return;
    }
    if (!noNsfw) {
      toast.warn("Please confirm no NSFW content ✋");
      return;
    }

    try {
      setLoading(true);

      const location = showLocation
        ? await fetchLocation()
        : "Anonymous from India";

      const res = await api.post("/confession/confessions", {
        title,
        category,
        content,
        location,
      });

      toast.success("Confession sent anonymously 🌙");

      const newConfessionId =
        res?.data?.data?._id || res?.data?._id;

      if (newConfessionId) {
        sessionStorage.setItem("highlightConfessionId", newConfessionId);
      }

      sessionStorage.setItem("exploreOpened", "true");

      setTimeout(() => navigate("/"), 300);

      setFormData({
        title: "",
        category: "",
        content: "",
        agreesTerms: false,
        noNsfw: false,
      });
      setShowLocation(false);
    } catch {
      toast.error("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Star1Background />

      {/* PAGE WRAPPER */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* MAIN CONTENT */}
        <main className="flex-grow flex items-center justify-center px-4 pt-10 pb-20">
          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 space-y-6">
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
              Share Your Confession
            </h1>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title (e.g., 'That awkward moment…')"
              className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Choose a category</option>
              <option value="personal">Personal</option>
              <option value="relationship">Relationship</option>
              <option value="work">Work</option>
              <option value="college">College</option>
              <option value="life">Life</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your story here..."
              rows={7}
              className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/20 resize-none focus:outline-none focus:ring-4 focus:ring-pink-500/30"
            />

            <div className="space-y-2 text-white text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreesTerms"
                  checked={formData.agreesTerms}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                I agree to the Terms & Conditions
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="noNsfw"
                  checked={formData.noNsfw}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                No NSFW content
              </label>
            </div>

            <div className="text-white text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showLocation}
                  onChange={() => setShowLocation(!showLocation)}
                  className="w-4 h-4 accent-purple-500"
                />
                Show my approximate location
                <span className="text-gray-400 text-xs">
                  (city & country only)
                </span>
              </label>

              <p className="text-gray-400 text-xs mt-1 ml-7">
                Your exact location or IP is never stored.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Confession"}
            </button>
          </div>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default SubmitConfession;
