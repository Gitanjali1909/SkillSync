import { Question } from "@/store/useQuizStore";

const advancedQuestions : Question[] = [
	{
	  id: 1,
	  question: "What is a closure in JavaScript?",
	  options: [
		"A function having access to its outer function scope",
		"An object method",
		"A CSS property",
		"A React hook"
	  ],
	  correctAnswer: "A function having access to its outer function scope"
	},
	{
	  id: 2,
	  question: "What is debouncing in JavaScript?",
	  options: [
		"Reducing API calls",
		"Calling a function after a delay",
		"Caching data",
		"Preventing closures"
	  ],
	  correctAnswer: "Calling a function after a delay"
	},
	{
	  id: 3,
	  question: "What is the purpose of the 'this' keyword in JavaScript?",
	  options: [
		"It refers to the current function",
		"It refers to the global object",
		"It refers to the object the function is called on",
		"It refers to the constructor function"
	  ],
	  correctAnswer: "It refers to the object the function is called on"
	},
	{
	  id: 4,
	  question: "What is the event loop in JavaScript?",
	  options: [
		"A system for handling asynchronous code",
		"A browser feature that tracks events",
		"A method for debugging JavaScript",
		"A part of the React lifecycle"
	  ],
	  correctAnswer: "A system for handling asynchronous code"
	},
	{
	  id: 5,
	  question: "What is the difference between call, apply, and bind in JavaScript?",
	  options: [
		"They are used to set the context of a function",
		"They are used to return values from functions",
		"They are used to create new objects",
		"They are used to iterate over arrays"
	  ],
	  correctAnswer: "They are used to set the context of a function"
	},
	{
	  id: 6,
	  question: "What is memoization?",
	  options: [
		"A way to cache function results",
		"A React lifecycle method",
		"A CSS animation",
		"A state management tool"
	  ],
	  correctAnswer: "A way to cache function results"
	},
	{
	  id: 7,
	  question: "What is a Higher-Order Component (HOC) in React?",
	  options: [
		"A component that returns another component",
		"A component that holds state",
		"A component that renders styles",
		"A component that is loaded first"
	  ],
	  correctAnswer: "A component that returns another component"
	},
	{
	  id: 8,
	  question: "What is useMemo used for in React?",
	  options: [
		"To trigger side effects",
		"To memoize expensive calculations",
		"To handle state changes",
		"To access the DOM"
	  ],
	  correctAnswer: "To memoize expensive calculations"
	},
	{
	  id: 9,
	  question: "What is currying in JavaScript?",
	  options: [
		"Transforming a function with multiple arguments into a sequence of functions",
		"A data cleaning technique",
		"A way to style components",
		"A new ES module syntax"
	  ],
	  correctAnswer: "Transforming a function with multiple arguments into a sequence of functions"
	},
	{
	  id: 10,
	  question: "What is the difference between shallow and deep copy in JavaScript?",
	  options: [
		"Shallow copies only primitive types, deep copies everything",
		"Shallow copies nested objects by reference, deep copies by value",
		"Shallow copy doesn't exist in JavaScript",
		"Shallow copy is slower than deep copy"
	  ],
	  correctAnswer: "Shallow copies nested objects by reference, deep copies by value"
	}
  ];
  
  export default advancedQuestions;
  