import React from "react";
import ReadingSection from "./ReadingSection";

export default function Reading() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <ReadingSection
          section="currentlyReading"
          title="Currently Reading"
        />
        <ReadingSection section="read" title="Read" />
      </div>
    </div>
  );
}
