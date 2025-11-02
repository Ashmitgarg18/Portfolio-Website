import React from "react";
import ReadingSection from "./ReadingSection";
import ReadingStats from "./ReadingStats";

export default function Reading() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <ReadingStats />
        <ReadingSection
          title="Currently Reading"
          feedUrl="https://oku.club/rss/collection/j06WR"
          noBorder
        />
        <ReadingSection
          title="Read"
          feedUrl="https://oku.club/rss/collection/vQXqF"
        />
      </div>
    </div>
  );
}
