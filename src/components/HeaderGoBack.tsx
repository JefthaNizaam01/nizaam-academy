import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function HeaderGoBack() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-[#181825]/80 text-primary font-semibold shadow hover:bg-white dark:hover:bg-[#232946] border border-gray-200 dark:border-gray-700 transition"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="hidden sm:inline">Back to Courses</span>
    </button>
  );
}
