// app/api/quiz/[level].ts
export async function GET(request: Request, { params }: { params: { level: string } }) {
	const { level } = params;
  
	// Example question sets
	const quizData = {
	  beginner: [
		{ id: 1, question: 'What is 2 + 2?', options: ['2', '3', '4'], correctAnswer: '4' },
		// More beginner questions
	  ],
	  intermediate: [
		{ id: 1, question: 'What is 2 * 3?', options: ['5', '6', '7'], correctAnswer: '6' },
		// More intermediate questions
	  ],
	  advanced: [
		{ id: 1, question: 'What is 10^3?', options: ['1000', '100', '10000'], correctAnswer: '1000' },
		// More advanced questions
	  ]
	};
  
	return new Response(JSON.stringify(quizData[level] || []), { status: 200 });
  }
  