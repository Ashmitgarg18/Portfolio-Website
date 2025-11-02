import React, { useEffect, useState } from "react";

export default function ReadingSection() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://api.codetabs.com/v1/proxy?quest=https://oku.club/rss/collection/j06WR"
        );
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        const items = Array.from(xmlDoc.querySelectorAll("item"));

        const parsedBooks = items.map((item) => ({
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          author:
            item.querySelector("dc\\:creator")?.textContent ||
            item.getElementsByTagNameNS("*", "creator")[0]?.textContent ||
            "Unknown Author",
          cover:
            item.getElementsByTagName("oku:cover")[0]?.textContent ||
            item.getElementsByTagNameNS("*", "cover")[0]?.textContent ||
            null,
        }));

        setBooks(parsedBooks);
      } catch (error) {
        console.error("Error fetching or parsing feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section id="reading" className="py-20 px-6 bg-[#121212] border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Reading</h2>

        {loading ? (
          <p className="text-gray-500">Fetching your reading list...</p>
        ) : books.length === 0 ? (
          <p className="text-gray-500">No books found in your Oku collection.</p>
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
                    {book.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{book.author}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
