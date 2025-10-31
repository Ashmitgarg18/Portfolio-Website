import { PenTool, Clock } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-gray-300 px-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <PenTool size={48} className="text-gray-500" />
        </div>
        <h1 className="text-4xl font-semibold mb-3 text-white">Blog Coming Soon</h1>
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
          I’m working on thoughtful posts about software engineering, poker, and development journeys.  
          Stay tuned for insights and stories from real-world projects.
        </p>

        <div className="flex items-center justify-center mt-8 text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>Last updated: October 2025</span>
        </div>
      </div>
    </div>
  );
}
