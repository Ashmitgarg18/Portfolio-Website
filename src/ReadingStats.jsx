import React, { useEffect, useState } from "react";

export default function ReadingStats() {
  const [stats, setStats] = useState({
    totalTime: "",
    pagesRead: "",
    booksRead: 0,
  });
  const [lastUpdated, setLastUpdated] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await fetch(
          `https://raw.githubusercontent.com/Ashmitgarg18/Portfolio-Website/main/public/data/books.json?${today}`
        );
        const data = await response.json();

        // Compute stats dynamically
        const booksRead = data.read ? data.read.length : 0;

        // Optionally, estimate total reading time or pages (static for now)
        const totalTime = `${(booksRead * 18).toFixed(0)}h`; // e.g., 18h/book
        const pagesRead = (booksRead * 800).toLocaleString(); // e.g., avg 800 pages/book

        setStats({ totalTime, pagesRead, booksRead });
        setLastUpdated(data.lastUpdated);
      } catch (error) {
        console.error("Error fetching reading stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 bg-[#121212] border-b border-gray-800 text-center text-gray-400">
        Loading reading stats...
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-[#121212] border-b border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-400 tracking-wide uppercase">
          reading stats
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-300">
          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              total time
            </p>
            <p className="text-3xl font-semibold text-gray-100">
              {stats.totalTime}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              pages read
            </p>
            <p className="text-3xl font-semibold text-gray-100">
              {stats.pagesRead}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              books read
            </p>
            <p className="text-3xl font-semibold text-gray-100">
              {stats.booksRead}
            </p>
          </div>
        </div>

        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-10">
            Last updated:{" "}
            {new Date(lastUpdated).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </section>
  );
}
