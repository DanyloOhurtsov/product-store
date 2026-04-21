const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home Decoration",
];

export default function FilterBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 flex-1 scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border"
            style={
              i === 0
                ? {
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                    borderColor: "var(--primary)",
                  }
                : {
                    backgroundColor: "var(--surface)",
                    color: "var(--text-muted)",
                    borderColor: "var(--border)",
                  }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort dropdown */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>
          Sort by:
        </span>
        <select
          className="text-sm px-3 py-2 rounded-lg border outline-none cursor-pointer"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--surface)",
            color: "var(--text)",
          }}
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Highest Rated</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
}
