import { useState } from "react";

function GuessGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    if (guess === "") {
      setMessage("Enter a number first!");
      return;
    }

    if (parseInt(guess) === number) {
      setMessage("🎉 Correct! You won!");
    } else if (guess > number) {
      setMessage("📉 Too High!");
    } else {
      setMessage("📈 Too Low!");
    }
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2>🎯 Guess the Number</h2>
      <p>Guess a number between 1 and 10</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        style={styles.input}
      />

      <div>
        <button onClick={checkGuess} style={styles.button}>
          Guess
        </button>
        <button onClick={resetGame} style={styles.reset}>
          Reset
        </button>
      </div>

      <h3>{message}</h3>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  button: {
    padding: "8px 15px",
    marginRight: "10px",
    cursor: "pointer",
  },
  reset: {
    padding: "8px 15px",
    cursor: "pointer",
  },
};

export default GuessGame;
