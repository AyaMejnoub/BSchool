import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/quiz');
      setQuestions(response.data);
      setAnswers(new Array(response.data.length).fill(null));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((prevAnswer, index) =>
        index === questionIndex ? answerIndex : prevAnswer
      )
    );
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await axios.post('/api/quiz/submit', answers);
      // Process the response, e.g., display the score to the user
      console.log('Quiz submitted. Score:', response.data);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((question, questionIndex) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          {question.choices.map((choice, choiceIndex) => (
            <div key={choiceIndex}>
              <input
                type="radio"
                id={`q${questionIndex}_c${choiceIndex}`}
                name={`q${questionIndex}`}
                value={choiceIndex}
                checked={answers[questionIndex] === choiceIndex}
                onChange={() => handleAnswerSelect(questionIndex, choiceIndex)}
              />
              <label htmlFor={`q${questionIndex}_c${choiceIndex}`}>
                {choice}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmitQuiz}>Submit</button>
    </div>
  );
};

export default Quiz;
