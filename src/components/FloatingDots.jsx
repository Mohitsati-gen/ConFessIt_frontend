const FloatingDots = () => {
  return (
    <div className="flex gap-4 mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-float"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
