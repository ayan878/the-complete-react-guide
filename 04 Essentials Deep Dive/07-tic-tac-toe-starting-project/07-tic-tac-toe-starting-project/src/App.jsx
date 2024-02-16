function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-name">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name"></span>Player 2
              <span className="player-name">0</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
        <div className="game-board"></div>
      </div>
    </main>
  );
}

export default App;
