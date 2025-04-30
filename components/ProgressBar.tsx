type ProgressBarProps = {
	current: number;
	total: number;
  };
  
  const ProgressBar = ({ current, total }: ProgressBarProps) => {
	const progressPercentage = (current / total) * 100;
  
	return (
	  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden mb-6">
		<div
		  className="bg-indigo-600 h-full transition-all duration-300"
		  style={{ width: `${progressPercentage}%` }}
		/>
	  </div>
	);
  };
  
  export default ProgressBar;
  