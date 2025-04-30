"use client";

import { useQuizStore } from "@/store/useQuizStore";
import { useRouter } from "next/navigation";

const LevelSelector = () => {
  const setQuizLevel = useQuizStore((state) => state.setQuizLevel);
  const router = useRouter();

  const handleSelectLevel = (level: "beginner" | "intermediate" | "advanced") => {
    setQuizLevel(level);
    router.push(`/quiz/${level}`);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handleSelectLevel('beginner')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Beginner
      </button>
      <button
        onClick={() => handleSelectLevel('intermediate')}
        className="px-4 py-2 bg-yellow-500 text-white rounded-md"
      >
        Intermediate
      </button>
      <button
        onClick={() => handleSelectLevel('advanced')}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Advanced
      </button>
    </div>
  );
};

export default LevelSelector;
