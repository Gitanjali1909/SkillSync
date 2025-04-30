type QuizQuestionProps = {
	question: string;
	options: string[];
	onSelect: (selectedOption: string) => void;
	selectedAnswer?: string;
  };
  
  const QuizQuestion = ({
	question,
	options,
	onSelect,
	selectedAnswer,
  }: QuizQuestionProps) => {
	return (
	  <div className="w-full max-w-2xl">
		<h3 className="text-xl font-semibold mb-4">{question}</h3>
  
		<div className="flex flex-col gap-4">
		  {options.map((option) => (
			<button
			  key={option}
			  onClick={() => onSelect(option)}
			  className={`border px-4 py-2 rounded-lg transition 
			  ${selectedAnswer === option ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-800"}
			  hover:bg-indigo-500 hover:text-white`}
			>
			  {option}
			</button>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default QuizQuestion;
  