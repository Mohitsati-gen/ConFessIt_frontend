import { useEffect, useRef, useState } from "react";
import api from "../services/api";
import { MapPin } from "lucide-react";


const categories = [
  "All",
  "personal",
  "relationship",
  "college",
  "life",
  "work",
  "other",
];

const ExploreConfessions = () => {
  const [confessions, setConfessions] = useState([]);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [highlightId, setHighlightId] = useState(null);
  const [visible, setVisible] = useState(false);

  const confessionRefs = useRef({});
  const limit = 10;

  // reveal animation
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  // highlight logic
  useEffect(() => {
    const id = sessionStorage.getItem("highlightConfessionId");
    if (id) {
      setHighlightId(id);

      setTimeout(() => {
        setHighlightId(null);
        sessionStorage.removeItem("highlightConfessionId");
      }, 3000);
    }
  }, []);

  // fetch feed
  const fetchFeed = async (reset = false) => {
    if (loading) return;

    try {
      setLoading(true);
      const res = await api.get("/confession/confessions", {
        params: {
          page,
          limit,
          category: category || undefined,
        },
      });
      console.log(res)

      const { confessions: newData, pagination } = res.data.data;
      setConfessions((prev) =>
        reset ? newData : [...prev, ...newData]
      );

      setHasMore(page < pagination.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed(true);
  }, [category]);

  useEffect(() => {
    if (page > 1) fetchFeed();
  }, [page]);

  // auto-scroll to highlight
  useEffect(() => {
    if (highlightId && confessionRefs.current[highlightId]) {
      confessionRefs.current[highlightId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlightId]);

  const changeCategory = (cat) => {
    const newCat = cat === "All" ? "" : cat;
    if (newCat === category) return; // 🔥 FIX BUG

    setCategory(newCat);
    setPage(1);
    setConfessions([]);
    setHasMore(true);
  };

  const categoryStyles = {
    relationship: "bg-pink-500/15 text-pink-300 border-pink-400/30",
    college: "bg-purple-500/15 text-purple-300 border-purple-400/30",
    life: "bg-yellow-500/15 text-yellow-300 border-yellow-400/30",
    work: "bg-blue-500/15 text-blue-300 border-blue-400/30",
    personal: "bg-green-800 /10 text-white/70 border-white/20",
    other: "bg-white/10 text-white/70 border-white/20",
  };


  return (
    <section
      className={`max-w-6xl mx-auto px-4 py-24 text-white transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore All Confessions
      </h2>


      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`px-4 py-2 rounded-full ${category === cat.toLowerCase() || (cat === "All" && !category)
              ? "bg-purple-600"
              : "bg-white/10 hover:bg-white/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      

      {/* FEED */}
      <div className="space-y-5">
        {!confessions.length ? (<h1 className="flex justify-center font-bold text-4xl"> No Confessions Yet! </h1>) : (
        confessions.map((c) => (
          <div
            key={c._id}
            ref={(el) => (confessionRefs.current[c._id] = el)}
            className={`
        relative rounded-2xl p-6
        bg-[#121a2a]/80 backdrop-blur-md
        border border-white/10
        transition-all duration-900
        hover:border-white/20 hover:bg-[#121a2a]
        transition-all duration-300 ease-out
  hover:-translate-y-1 hover:scale-[1.02]
        ${highlightId === c._id
                ? "ring-2 ring-blue-700 shadow-lg shadow-purple-500/20"
                : ""
              }
      `}
          >
            {/* Title */}
            <h3 className="break-words overflow-hidden text-lg font-medium text-white mb-2 leading-snug">
              {c.title}
            </h3>

            {/* Meta info */}
            <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
              <span
                className={`
    px-2.5 py-0.5 rounded-full text-[11px] font-medium
    border backdrop-blur-sm
    ${categoryStyles[c.category?.toLowerCase()]}
  `}
              >
                {c.category}
              </span>

              <span>•</span>
              <span>{new Date(c.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-white/50">
                <MapPin size={12} className="opacity-60" />
                <span className="capitalize">{c.location}</span>
              </span>

            </div>

            {/* Content */}
            <p className="break-words overflow-hidden text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
              {c.content}
            </p>
          </div>
        ))
      )}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={loading}
            className="px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ExploreConfessions;
