import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-gradient-to-b from-[#020617] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-semibold text-white">ConFessIt</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Anonymous confessions from across the world.
            Share your thoughts freely and safely.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
  <h3 className="text-lg font-semibold text-white">Quick Links</h3>

  <ul className="mt-4 space-y-2 text-sm list-none">
    <li>
      <Link
        to="/"
        className="text-gray-300 hover:text-white transition"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/submit"
        className="text-gray-300 hover:text-white transition"
      >
        Submit Confession
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="text-gray-300 hover:text-white transition"
      >
        About Us
      </Link>
    </li>
  </ul>
</div>


        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-white">Legal & Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li> <Link to="/termsofservices"> Terms of Service </Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 ConFessIt — Stay Curious. Stay Anonymous.
      </div>
    </footer>
  );
};

export default Footer;
