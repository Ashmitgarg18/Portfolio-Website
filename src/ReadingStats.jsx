import React from "react";

export default function ReadingStats() {
  const stats = [
    { label: "total time", value: "145h 55m" },
    { label: "pages read", value: "6434" },
    { label: "books read", value: "8" },
  ];

  return (
    <section className="py-20 px-6 bg-[#121212] border-b border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-400 tracking-wide uppercase stats-animate">
          reading stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-300">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center stats-animate">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-semibold text-gray-100">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
