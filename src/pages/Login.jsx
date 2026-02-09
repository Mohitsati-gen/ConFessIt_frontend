import { useState } from "react";
import FloatingDots from "../components/FloatingDots";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await login(formData);
      toast.success("Welcome back! 🎉");
      navigate("/");
    } catch (err) {
      toast.error("Invalid email or password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black px-4"
      style={{ minHeight: "calc(100vh - 77px)" }}
    >
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 
        p-6 sm:p-8 md:p-12 grid gap-10 md:grid-cols-2">

        {/* LEFT */}
        <div className="text-white flex flex-col justify-center text-center md:text-left relative">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
            Welcome Back
          </h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Your confessions are waiting.
          </p>

          {/* Decorative – hide on very small screens */}
          <div className="hidden sm:block">
            <FloatingDots />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center md:text-left">
            Login
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-semibold text-white 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:scale-105 transition
              disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm text-gray-300">
              New here?{" "}
              <Link
                to="/signup"
                className="text-pink-400 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
