import React from "react";
import ReadingStats from "./ReadingStats";
import ReadingSection from "./ReadingSection";

export default function Reading() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <ReadingStats />

        <ReadingSection
          section="currentlyReading"
          title="Currently Reading"
        />

        <div className="border-t border-gray-800 my-16" />

        <ReadingSection section="read" title="Read" />
      </div>
    </div>
  );
}
