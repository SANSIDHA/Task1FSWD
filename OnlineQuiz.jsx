import { useState } from "react";

export default function App() {
  const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyper Tool Multi Language"
      ],
      answer: 0
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS"],
      answer: 2
    },
    {
      question: "Which is not a JavaScript framework?",
      options: ["React", "Angular", "Django"],
      answer: 2
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === quizData[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  return (
    <div style={styles.page}>
      <div className="quiz-container" style={styles.card}>
        {finished ? (
          <>
            <h2>🎉 Quiz Completed</h2>
            <p>
              Your Score: <strong>{score}</strong> / {quizData.length}
            </p>
          </>
        ) : (
          <>
            <h3 className="quiz-score">Score: {score}</h3>

            <h2 className="quiz-question">
              {quizData[current].question}
            </h2>

            <div className="quiz-options">
              {quizData[current].options.map((option, index) => {
                let btnStyle = styles.option;

                if (selected !== null) {
                  if (index === quizData[current].answer)
                    btnStyle = styles.correct;
                  else if (index === selected)
                    btnStyle = styles.wrong;
                }

                return (
                  <button
                    key={index}
                    className="quiz-option"
                    style={btnStyle}
                    onClick={() => handleAnswer(index)}
                    disabled={selected !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <p className="quiz-progress">
              Question {current + 1} of {quizData.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8"
  },
  card: {
    width: "360px",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  option: {
    width: "100%",
    padding: "10px",
    margin: "6px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    background: "#e9ecef"
  },
  correct: {
    background: "#28a745",
    color: "#fff",
    width: "100%",
    padding: "10px",
    margin: "6px 0",
    border: "none",
    borderRadius: "4px"
  },
  wrong: {
    background: "#dc3545",
    color: "#fff",
    width: "100%",
    padding: "10px",
    margin: "6px 0",
    border: "none",
    borderRadius: "4px"
  }
};