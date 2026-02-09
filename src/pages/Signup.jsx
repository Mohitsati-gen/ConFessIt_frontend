import { useState } from "react";
import FloatingDots from "../components/FloatingDots";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await api.post("/users/signup", formData);
      toast.success("Successfully signed up! 🎉");
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Signup failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black px-4">
      <div
        className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-2xl 
        shadow-2xl border border-white/20 
        p-6 sm:p-8 md:p-12 grid gap-10 md:grid-cols-2"
      >

        {/* LEFT */}
        <div className="text-white flex flex-col justify-center text-center md:text-left relative">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
            Con<span className="text-cyan-400">Fess</span>It
          </h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Speak your heart anonymously.
            <br className="hidden sm:block" />
            Your story. Your voice.
          </p>

          {/* Decorative */}
          <div className="hidden sm:block">
            <FloatingDots />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center md:text-left">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input w-full"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input w-full"
            />

            {error && (
              <p className="text-red-400 text-sm text-center md:text-left">
                {error}
              </p>
            )}

            <label className="flex items-start gap-2 text-sm text-gray-300">
              <input type="checkbox" required className="mt-1" />
              <span>I agree to Terms & Conditions</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-semibold text-white 
              bg-gradient-to-r from-pink-500 to-purple-600 
              hover:scale-105 transition 
              disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>

            <p className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Signup;
