import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // Only scroll if on the home page
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About" },
    { name: "Projects" },
    { name: "Experience" },
    { name: "Education" },
    { name: "Stack" },
    { name: "Blog", path: "/blog" },
    { name: "Reading", path: "/reading" },
    { name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-1 nav-wave">
          {navItems.map((item) =>
            item.path ? (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg"
              >
                {item.name}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
