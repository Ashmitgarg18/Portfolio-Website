import React, { useEffect, useState } from "react";

export default function ReadingSection({ section = "currentlyReading", title }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await fetch(
          "https://raw.githubusercontent.com/Ashmitgarg18/Portfolio-Website/main/public/data/books.json?${today}"
          );
        const data = await response.json();

        if (section === "read") {
          setBooks(data.read || []);
        } else {
          setBooks(data.currentlyReading || []);
        }

        setLastUpdated(data.lastUpdated);
      } catch (error) {
        console.error("Error fetching reading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [section]);

  return (
    <section
      id={section}
      className="py-20 px-6 bg-[#121212] border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">{title}</h2>

        {lastUpdated && (
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date(lastUpdated).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          )}

        {loading ? (
          <p className="text-gray-500">Loading your reading list...</p>
          ) : books.length === 0 ? (
          <p className="text-gray-500">
            No books found in this section.
          </p>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {books.map((book, idx) => (
              <a
                key={idx}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#181818] border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 hover:bg-[#1c1c1c] transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.3)] no-underline flex flex-col"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#222]">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm italic">
                        No cover available
                      </div>
                      )}
                    </div>

                    <div className="p-4 text-left">
                      <h3 className="text-base font-semibold text-white group-hover:text-[#b8ff6a] transition-colors truncate">
                        {typeof book.title === "string"
                        ? book.title
                        : book.title?._text || "Untitled"}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {typeof book.author === "string"
                        ? book.author
                        : book.author?._text || "Unknown Author"}
                      </p>

                    </div>
                  </a>
                  ))}
          </div>
          )}
        </div>
      </section>
      );
}
