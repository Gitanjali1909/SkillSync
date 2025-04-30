import { Question } from "@/store/useQuizStore";

const beginnerQuestions: Question[] = [
  {
    id: 1,
    question: "What is HTML?",
    options: ["Programming language", "Markup language", "Database", "Operating system"],
    correctAnswer: "Markup language",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 3,
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    id: 4,
    question: "Which property is used to change text color in CSS?",
    options: ["color", "text-color", "font-color", "background-color"],
    correctAnswer: "color",
  },
  {
    id: 5,
    question: "What does the 'src' attribute in an <img> tag specify?",
    options: ["Image style", "Image source", "Image name", "Image caption"],
    correctAnswer: "Image source",
  },
  {
    id: 6,
    question: "Which of these is a JavaScript data type?",
    options: ["Boolean", "Style", "Markup", "Font"],
    correctAnswer: "Boolean",
  },
  {
    id: 7,
    question: "How do you write a single-line comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    correctAnswer: "// comment",
  },
  {
    id: 8,
    question: "Which symbol is used for ID selectors in CSS?",
    options: [".", "#", "*", "&"],
    correctAnswer: "#",
  },
  {
    id: 9,
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Method", "Display Output Model", "Desktop Oriented Mode"],
    correctAnswer: "Document Object Model",
  },
  {
    id: 10,
    question: "Which tag is used for inserting a line break in HTML?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correctAnswer: "<br>",
  },
];

export default beginnerQuestions;
