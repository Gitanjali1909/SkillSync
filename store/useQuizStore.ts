import { create } from 'zustand';

// Define the structure for a single question
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Define the structure for your Zustand store
type QuizStore = {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void; // Added prevQuestion action
  resetQuiz: () => void;
  setQuestions: (questions: Question[]) => void;
  quizLevel: 'beginner' | 'intermediate' | 'advanced';
  setQuizLevel: (level: 'beginner' | 'intermediate' | 'advanced') => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  quizLevel: 'beginner',

  setQuestions: (questions) => set({ questions }),

  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),

  nextQuestion: () =>
    set((state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
      return state; // Don't go beyond the last question
    }),

  prevQuestion: () =>
    set((state) => {
      if (state.currentQuestionIndex > 0) {
        return { currentQuestionIndex: state.currentQuestionIndex - 1 };
      }
      return state; // Don't go before the first question
    }),

  resetQuiz: () =>
    set({
      questions: [],
      currentQuestionIndex: 0,
      answers: {},
      quizLevel: 'beginner',
    }),

  setQuizLevel: (level) => set({ quizLevel: level }),
}));
