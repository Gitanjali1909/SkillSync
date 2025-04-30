"use client";

import LevelSelector from "@/components/LevelSelectore";
import { useQuizStore } from "@/store/useQuizStore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const QuizPage = () => {
  const { quizLevel } = useQuizStore();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6">
      
      {/* Left: Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/quiz.svg" // make sure you have this SVG
          alt="Quiz Illustration"
          width={600}
          height={800}
          className="object-contain"
        />
      </motion.div>

      {/* Right: Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6"
      >
        <h1 className="text-4xl font-bold">
          Ready to take the Quiz?
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          Select your skill level to begin the quiz.
        </p>

        <LevelSelector />
      </motion.div>

    </div>
  );
};

export default QuizPage;
