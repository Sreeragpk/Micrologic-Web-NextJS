import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Home, Shuffle, Trophy, Clock, Move, Lightbulb, ArrowLeft, RotateCcw } from "lucide-react";
import game from "../assets/game.webp";

const SIZE = 3;
const TILE_SIZE = 100;
const IMAGE = game;

function isSolvable(tiles) {
  let inversions = 0;
  const arr = tiles.filter((t) => t !== SIZE * SIZE - 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) inversions++;
    }
  }
  if (SIZE % 2 === 1) return inversions % 2 === 0;
  const emptyRow = Math.floor(tiles.indexOf(SIZE * SIZE - 1) / SIZE);
  return (inversions + emptyRow) % 2 === 1;
}

// Shuffle with limited moves from solved state (controls difficulty)
function easyShuffleTiles() {
  const solved = [...Array(SIZE * SIZE).keys()];
  let tiles = [...solved];
  const numMoves = 15; // fewer = easier
  let lastEmpty = tiles.indexOf(SIZE * SIZE - 1);

  for (let i = 0; i < numMoves; i++) {
    const emptyRow = Math.floor(lastEmpty / SIZE);
    const emptyCol = lastEmpty % SIZE;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const validMoves = [];

    for (const [dr, dc] of dirs) {
      const r = emptyRow + dr;
      const c = emptyCol + dc;
      if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) {
        validMoves.push(r * SIZE + c);
      }
    }

    const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    [tiles[lastEmpty], tiles[randomMove]] = [tiles[randomMove], tiles[lastEmpty]];
    lastEmpty = randomMove;
  }

  // Make sure it's not already solved
  const isSolved = tiles.every((t, i) => t === i);
  if (isSolved) return easyShuffleTiles();

  return tiles;
}

function getManhattanDistance(tiles) {
  let distance = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== SIZE * SIZE - 1) {
      distance +=
        Math.abs(Math.floor(i / SIZE) - Math.floor(tiles[i] / SIZE)) +
        Math.abs((i % SIZE) - (tiles[i] % SIZE));
    }
  }
  return distance;
}

function getMovableTiles(tiles) {
  const empty = tiles.indexOf(SIZE * SIZE - 1);
  const emptyRow = Math.floor(empty / SIZE);
  const emptyCol = empty % SIZE;
  const moves = [];
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (const [dr, dc] of dirs) {
    const r = emptyRow + dr;
    const c = emptyCol + dc;
    if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) {
      moves.push(r * SIZE + c);
    }
  }
  return moves;
}

function swapTiles(tiles, i, j) {
  const newTiles = [...tiles];
  [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
  return newTiles;
}

function findSmartHint(tiles, lastMovedFrom) {
  const empty = tiles.indexOf(SIZE * SIZE - 1);
  const movable = getMovableTiles(tiles);

  let bestMove = null;
  let bestScore = Infinity;
  let secondBestMove = null;
  let secondBestScore = Infinity;

  for (const firstMove of movable) {
    const state1 = swapTiles(tiles, firstMove, empty);
    const score1 = getManhattanDistance(state1);
    if (score1 === 0) return firstMove;

    let bestDepth = score1;
    const empty1 = state1.indexOf(SIZE * SIZE - 1);
    const movable1 = getMovableTiles(state1);

    for (const secondMove of movable1) {
      if (secondMove === empty) continue;
      const state2 = swapTiles(state1, secondMove, empty1);
      const score2 = getManhattanDistance(state2);
      if (score2 === 0) return firstMove;

      const empty2 = state2.indexOf(SIZE * SIZE - 1);
      const movable2 = getMovableTiles(state2);

      for (const thirdMove of movable2) {
        if (thirdMove === empty1) continue;
        const state3 = swapTiles(state2, thirdMove, empty2);
        const score3 = getManhattanDistance(state3);
        if (score3 < bestDepth) bestDepth = score3;
      }
      if (score2 < bestDepth) bestDepth = score2;
    }

    if (firstMove === lastMovedFrom) {
      if (bestDepth < secondBestScore) {
        secondBestScore = bestDepth;
        secondBestMove = firstMove;
      }
    } else {
      if (bestDepth < bestScore) {
        bestScore = bestDepth;
        bestMove = firstMove;
      }
    }
  }

  if (bestMove !== null) {
    if (secondBestMove !== null && secondBestScore < bestScore - 2) {
      return secondBestMove;
    }
    return bestMove;
  }
  return secondBestMove;
}

function NotFound() {
  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [hintTile, setHintTile] = useState(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [lastMovedFrom, setLastMovedFrom] = useState(null);

  const initializePuzzle = useCallback(() => {
    setTiles(easyShuffleTiles());
    setMoves(0);
    setTime(0);
    setIsRunning(false);
    setIsWon(false);
    setHintTile(null);
    setHintsUsed(0);
    setLastMovedFrom(null);
  }, []);

  useEffect(() => {
    initializePuzzle();
  }, [initializePuzzle]);

  useEffect(() => {
    let interval;
    if (isRunning && !isWon) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isWon]);

  useEffect(() => {
    if (tiles.length > 0) {
      const isComplete = tiles.every((tile, index) => tile === index);
      if (isComplete && moves > 0) {
        setIsWon(true);
        setIsRunning(false);
      }
    }
  }, [tiles, moves]);

  useEffect(() => {
    if (hintTile !== null) {
      const timeout = setTimeout(() => setHintTile(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [hintTile]);

  const moveTile = (index) => {
    if (isWon) return;
    const empty = tiles.indexOf(SIZE * SIZE - 1);
    const emptyRow = Math.floor(empty / SIZE);
    const emptyCol = empty % SIZE;
    const tileRow = Math.floor(index / SIZE);
    const tileCol = index % SIZE;
    const isAdjacent =
      (Math.abs(emptyRow - tileRow) === 1 && emptyCol === tileCol) ||
      (Math.abs(emptyCol - tileCol) === 1 && emptyRow === tileRow);

    if (isAdjacent) {
      if (!isRunning) setIsRunning(true);
      const newTiles = [...tiles];
      [newTiles[index], newTiles[empty]] = [newTiles[empty], newTiles[index]];
      setTiles(newTiles);
      setMoves((prev) => prev + 1);
      setHintTile(null);
      setLastMovedFrom(empty);
    }
  };

  const showHint = () => {
    if (isWon) return;
    const bestMove = findSmartHint(tiles, lastMovedFrom);
    setHintTile(bestMove);
    setHintsUsed((prev) => prev + 1);
    if (!isRunning) setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full mb-4 shadow-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-600 text-sm font-medium">Page Not Found</span>
          </div>
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto">
            Oops! The page you're looking for has vanished.
            <span className="text-indigo-600 font-medium"> Solve the puzzle while you're here!</span>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
            <Move className="w-4 h-4 text-blue-500" />
            <span className="text-gray-800 font-mono font-semibold">{moves}</span>
            <span className="text-gray-500 text-sm">moves</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
            <Clock className="w-4 h-4 text-indigo-500" />
            <span className="text-gray-800 font-mono font-semibold">{formatTime(time)}</span>
          </div>
          {/* <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-gray-800 font-mono font-semibold">{hintsUsed}</span>
            <span className="text-gray-500 text-sm">hints</span>
          </div> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="relative">
            {isWon && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-green-200">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4 animate-bounce shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">🎉 Puzzle Solved!</h2>
                  <div className="space-y-1 text-gray-600">
                    <p>Completed in <span className="text-blue-600 font-semibold">{moves}</span> moves</p>
                    <p>Time: <span className="text-indigo-600 font-semibold">{formatTime(time)}</span></p>
                    {/* <p>Hints used: <span className="text-amber-600 font-semibold">{hintsUsed}</span></p> */}
                  </div>
                  <button onClick={initializePuzzle} className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:scale-105">
                    Play Again
                  </button>
                </div>
              </div>
            )}

            <div
              className="grid gap-2 p-5 bg-white border border-gray-200 rounded-2xl shadow-xl"
              style={{ gridTemplateColumns: `repeat(${SIZE}, ${TILE_SIZE}px)` }}
            >
              {tiles.map((tile, index) => {
                const isEmpty = tile === SIZE * SIZE - 1;
                const isHinted = hintTile === index;
                return (
                  <div
                    key={tile}
                    onClick={() => moveTile(index)}
                    className={`
                      relative overflow-hidden rounded-xl cursor-pointer
                      transition-all duration-200 ease-out
                      ${isEmpty ? "bg-gray-100 border-2 border-dashed border-gray-300" : "shadow-md hover:shadow-lg hover:scale-105 hover:z-10"}
                      ${isHinted && !isEmpty ? "ring-4 ring-amber-400 ring-offset-2 animate-pulse z-10 scale-105" : ""}
                    `}
                    style={{
                      width: TILE_SIZE,
                      height: TILE_SIZE,
                      ...(isEmpty
                        ? {}
                        : {
                            backgroundImage: `url(${IMAGE})`,
                            backgroundSize: `${TILE_SIZE * SIZE}px ${TILE_SIZE * SIZE}px`,
                            backgroundPosition: `${-(tile % SIZE) * TILE_SIZE}px ${-Math.floor(tile / SIZE) * TILE_SIZE}px`,
                          }),
                    }}
                  >
                    {isHinted && !isEmpty && (
                      <div className="absolute inset-0 flex items-center justify-center bg-amber-400/30 rounded-xl">
                        <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
                          Move this!
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              <button onClick={initializePuzzle} className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button onClick={initializePuzzle} className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                <Shuffle className="w-4 h-4" />
                Shuffle
              </button>
              {/* <button
                onClick={showHint}
                disabled={isWon}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Lightbulb className="w-4 h-4" />
                Show Hint
              </button> */}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-white p-4 rounded-2xl border border-gray-200 shadow-lg">
                <img src={IMAGE} alt="Reference" className="rounded-lg shadow-sm" style={{ width: TILE_SIZE * SIZE }} />
                <div className="flex items-center justify-center gap-2 mt-3 text-gray-500">
                  <span className="text-sm font-medium">🎯 Goal Image</span>
                </div>
              </div>
            </div>
            {/* <div className="mt-6 p-4 bg-white border border-gray-200 rounded-xl shadow-sm max-w-xs">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span>📖</span> How to Play
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Click tiles next to the empty space</li>
                <li>• Arrange pieces to match the goal</li>
                <li>• Use hints if you get stuck!</li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            Go back to previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;