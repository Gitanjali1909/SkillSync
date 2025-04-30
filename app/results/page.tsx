"use client";

import { useQuizStore } from "@/store/useQuizStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For smooth animations

const ResultPage = () => {
  const { questions, answers } = useQuizStore();
  const router = useRouter();

  const [score, setScore] = useState(0);

  useEffect(() => {
   
    if (questions.length === 0) {
      router.push("/quiz/beginner");
      return;
    }

    
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });
    setScore(score);
  }, [questions, answers, router]);

  
  const percentage = Math.round((score / questions.length) * 100);

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen rounded-lg bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Results
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            You answered <span className="font-semibold text-[#B797FA]">{score}</span> out of{" "}
            <span className="font-semibold text-[#B797FA]">{questions.length}</span> questions
            correctly.
          </p>
        </motion.div>

        
        <motion.div 
          className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Score</span>
            <span className="text-sm font-medium text-[#B797FA]">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <motion.div 
              className="bg-gradient-to-r from-indigo-500 to-[#B797FA] h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            ></motion.div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-[#B797FA]">{score}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Correct</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-400">{questions.length - score}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Incorrect</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">{questions.length}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total</p>
            </div>
          </div>
        </motion.div>

        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Question Review</h2>
        
        <motion.div 
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {questions.map((question, index) => {
            const isCorrect = answers[question.id] === question.correctAnswer;
            
            return (
              <motion.div
                key={question.id}
                variants={item}
                className="bg-bg-gray-400 dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-gray-800 dark:text-gray-200 font-medium">{question.question}</h3>
                  </div>
                  
                  <div className={`mt-4 pl-9 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    <div className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {isCorrect ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        )}
                      </svg>
                      <span className="font-medium">
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    
                    {!isCorrect && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Correct answer: {question.correctAnswer}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Your answer: {answers[question.id]}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center space-x-4">
          <motion.button
            onClick={() => router.push("/quiz/beginner")}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-[#B797FA] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Retake Quiz
          </motion.button>
          
          <motion.button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultPage;
