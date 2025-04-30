"use client";

import { useEffect, useState } from "react";
import { useQuizStore } from "@/store/useQuizStore";
import advancedQuestions from "../../data/advancedQuestions"; // Your advanced questions
import QuizQuestion from "@/components/QuizQuestion";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/navigation"; 

const AdvancedQuizPage = () => {
  const { questions, currentQuestionIndex, setQuestions, answers, setAnswer, nextQuestion, prevQuestion } = useQuizStore();
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<string | null>(answers[questions[currentQuestionIndex]?.id] || null);

  useEffect(() => {
    setQuestions(advancedQuestions); // Load advanced questions
  }, [setQuestions]);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) return <div className="text-center mt-10">Loading...</div>;

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setAnswer(currentQuestion.id, option);
  };

  const handleNextQuestion = () => {
    nextQuestion();
    setSelectedOption(null);
  };

  const handlePrevQuestion = () => {
    prevQuestion();
    setSelectedOption(answers[questions[currentQuestionIndex]?.id] || null);
  };

  const handleResultPage = () => {
    router.push("/results"); // Navigate to result page
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />

      <QuizQuestion
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedAnswer={selectedOption || answers[currentQuestion.id]}
        onSelect={handleSelect}
      />

      <div className="flex justify-between mt-6">
        {currentQuestionIndex > 0 && (
          <button
            onClick={handlePrevQuestion}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Previous Question
          </button>
        )}

        {!isLastQuestion && (
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${!selectedOption && "opacity-50 cursor-not-allowed"}`}
          >
            Next Question
          </button>
        )}

        {isLastQuestion && (
          <button
            onClick={handleResultPage}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            View Results
          </button>
        )}
      </div>
    </div>
  );
};

export default AdvancedQuizPage;
