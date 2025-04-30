import { Question } from "@/store/useQuizStore";

const intermediateQuestions : Question[] = [
	{
	  id: 1,
	  question: "What is the box model in CSS?",
	  options: [
		"A framework",
		"A concept of margins, borders, padding, and content",
		"A color model",
		"A flexbox grid"
	  ],
	  correctAnswer: "A concept of margins, borders, padding, and content"
	},
	{
	  id: 2,
	  question: "What is React?",
	  options: [
		"A backend framework",
		"A database",
		"A frontend library",
		"An API service"
	  ],
	  correctAnswer: "A frontend library"
	},
	{
	  id: 3,
	  question: "What is the difference between class and functional components in React?",
	  options: [
		"Class components are stateless, functional components are stateful",
		"Class components can have state, functional components cannot",
		"Functional components use hooks, class components do not",
		"There is no difference"
	  ],
	  correctAnswer: "Functional components use hooks, class components do not"
	},
	{
	  id: 4,
	  question: "What is JSX?",
	  options: [
		"A JavaScript framework",
		"A syntax extension for JavaScript that looks like HTML",
		"A React feature",
		"A templating engine"
	  ],
	  correctAnswer: "A syntax extension for JavaScript that looks like HTML"
	},
	{
	  id: 5,
	  question: "What is the purpose of the 'key' prop in React?",
	  options: [
		"To identify elements in a list and help with reordering",
		"To pass data between components",
		"To make the component re-render",
		"To define a unique ID for each component"
	  ],
	  correctAnswer: "To identify elements in a list and help with reordering"
	},
	{
	  id: 6,
	  question: "What is the useState hook in React used for?",
	  options: [
		"To navigate between pages",
		"To fetch data from APIs",
		"To manage local component state",
		"To define CSS in JS"
	  ],
	  correctAnswer: "To manage local component state"
	},
	{
	  id: 7,
	  question: "What is the difference between == and === in JavaScript?",
	  options: [
		"No difference",
		"== compares value only, === compares value and type",
		"== compares type only, === compares value only",
		"=== allows coercion, == does not"
	  ],
	  correctAnswer: "== compares value only, === compares value and type"
	},
	{
	  id: 8,
	  question: "What is a component in React?",
	  options: [
		"A reusable piece of UI",
		"A backend service",
		"A database entity",
		"A styling method"
	  ],
	  correctAnswer: "A reusable piece of UI"
	},
	{
	  id: 9,
	  question: "What does the 'map' function do in JavaScript?",
	  options: [
		"Maps values to a database",
		"Creates a new array with modified elements",
		"Sorts an array",
		"Filters an array"
	  ],
	  correctAnswer: "Creates a new array with modified elements"
	},
	{
	  id: 10,
	  question: "Which hook is used to perform side effects in React?",
	  options: [
		"useState",
		"useEffect",
		"useRef",
		"useContext"
	  ],
	  correctAnswer: "useEffect"
	}
  ];
  
  export default intermediateQuestions;
  