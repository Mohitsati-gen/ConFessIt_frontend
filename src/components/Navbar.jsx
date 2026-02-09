import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Submit", path: "/submit" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      toast.success("Successfully logout 🎉");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const handleSubmitClick = (e) => {
    if (!user) {
      e.preventDefault();
      setSubmitActive(true);

      toast.warn("Please login to share your confession ✨");

      setTimeout(() => {
        setSubmitActive(false);
        navigate("/login");
      }, 1200);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white/10 border border-white/20 shadow-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            <img src="/logo.png" alt="conFessIt logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white group-hover:text-purple-600 transition-colors duration-300">
            <span className="text-yellow-400">Con</span>
            <span className="text-pink-500">Fess</span>It
          </h1>
        </NavLink>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={item.name === "Submit" ? handleSubmitClick : undefined}
              className={({ isActive }) => {
                const active = isActive || (item.name === "Submit" && submitActive);
                return `
                  relative text-base font-medium transition-colors duration-300
                  ${active ? "text-white" : "text-gray-300 hover:text-white"}
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:bg-gradient-to-r
                  after:from-amber-400 after:via-pink-500 after:to-white
                  after:transition-all after:duration-300
                  ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `;
              }}
            >
              {item.name}
            </NavLink>
          ))}

          {!user ? (
            <NavLink to="/login" className="text-gray-300 font-medium hover:text-white">
              Login
            </NavLink>
          ) : (
            <button onClick={handleLogout} className="text-red-400 hover:text-red-500">
              Logout
            </button>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl p-2"
        >
          ☰
        </button>
      </div>

      {/* mobile view */}
      {open && (
        <div className="fixed inset-x-0 top-[64px] max-h-[calc(100vh-64px)] overflow-y-auto bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={(e) => {
                  if (item.name === "Submit") handleSubmitClick(e);
                  setOpen(false);
                }}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </NavLink>
            ))}

            {!user ? (
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="text-lg text-gray-300 hover:text-white"
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="text-lg text-red-400 text-left"
              >
                Logout
              </button>
              
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
