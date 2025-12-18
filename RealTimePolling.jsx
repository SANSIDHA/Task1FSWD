import React, { useState } from "react";

function App() {
  const pollQuestion = "Which subject do you like the most?";

  const initialOptions = [
    { text: "Mathematics", votes: 0 },
    { text: "Computer Science", votes: 0 },
    { text: "Physics", votes: 0 },
    { text: "Chemistry", votes: 0 }
  ];

  const [options, setOptions] = useState(initialOptions);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (index) => {
    if (hasVoted) return;

    const updatedOptions = [...options];
    updatedOptions[index].votes += 1;

    setOptions(updatedOptions);
    setHasVoted(true);
  };

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div
      className="realtime-polling-system"
      style={styles.page}
    >
      <div className="poll-card" style={styles.card}>
        <h2 className="poll-question">{pollQuestion}</h2>

        <div className="poll-options">
          {options.map((option, index) => {
            const percentage =
              totalVotes === 0
                ? 0
                : Math.round((option.votes / totalVotes) * 100);

            return (
              <div
                key={index}
                className="poll-option"
                style={styles.optionBox}
              >
                <button
                  className="poll-button"
                  style={styles.button}
                  onClick={() => handleVote(index)}
                  disabled={hasVoted}
                >
                  {option.text}
                </button>

                {hasVoted && (
                  <>
                    <div
                      className="poll-bar"
                      style={{
                        ...styles.bar,
                        width: `${percentage}%`
                      }}
                    ></div>
                    <small className="poll-result">
                      {percentage}% ({option.votes} votes)
                    </small>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <p className="poll-total">
          Total Votes: <strong>{totalVotes}</strong>
        </p>

        {hasVoted && (
          <p className="poll-message">✔ Vote submitted successfully</p>
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
    backgroundColor: "#f4f6f8"
  },
  card: {
    width: "380px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  optionBox: {
    marginBottom: "10px"
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#2c7be5",
    color: "#ffffff",
    cursor: "pointer"
  },
  bar: {
    height: "8px",
    backgroundColor: "#28a745",
    borderRadius: "4px",
    marginTop: "4px"
  }
};

export default App;

