import { useState } from 'react';

import { mazeData, startPosition, goalPosition } from '../../utils/mazeData';

import { DFS } from '../../algorithms/DFS';
import { BFS } from '../../algorithms/BFS';
import { BS } from '../../algorithms/BS';

import { useAlgorithm } from '../../contexts/AlgorithmContext';

import './styles.css';

const Maze = () => {
    const { selectedAlgorithm, setIsRunning, isRunning } = useAlgorithm();

    const [agentCurrentPosition, setAgentCurrentPosition] = useState(startPosition);
    const [visited, setVisited] = useState(new Set());
    const [pathFound, setPathFound] = useState(false);
    const [steps, setSteps] = useState(0);

    const handleStep = (current, visitedSet, stepCount) => {
        setAgentCurrentPosition(current);
        setVisited(new Set(visitedSet));
        setSteps(stepCount);
    };

    const startSearch = async () => {
        setIsRunning(true);
        setPathFound(false);
        setSteps(0);
        setVisited(new Set());
        setAgentCurrentPosition(startPosition);

        let found = false;
        if (selectedAlgorithm === "DFS") {
            found = await DFS(mazeData, startPosition, goalPosition, handleStep);
        }

        if (selectedAlgorithm === "BFS") {
            found = await BFS(mazeData, startPosition, goalPosition, handleStep);
        }

        if (selectedAlgorithm === "BS") {
            const beamWidth = 3;
            found = await BS(mazeData, startPosition, goalPosition, handleStep, beamWidth);
        }

        if (found) {
            setPathFound(true);
        }

        setIsRunning(false);
    };

    const reset = () => {
        if (isRunning) return;

        setAgentCurrentPosition(startPosition);
        setVisited(new Set());
        setPathFound(false);
        setSteps(0);
    };

    return (
        <div className="main-container">
            <div className="maze-container-wrapper">
                <div className="maze-container">
                    {mazeData.map((row, rowIndex) => (
                        <div key={rowIndex} className="maze-row">
                            {row.map((cell, cellIndex) => {
                                const isStartCell = cellIndex === startPosition.x && rowIndex === startPosition.y;
                                const isGoalCell = cellIndex === goalPosition.x && rowIndex === goalPosition.y;
                                const isAgentCell = cellIndex === agentCurrentPosition.x && rowIndex === agentCurrentPosition.y;
                                const isVisited = visited.has(`${cellIndex},${rowIndex}`) && !isStartCell && !isGoalCell;
                                return (
                                    <div
                                        key={cellIndex}
                                        className={`cell 
                                        ${cell === 1 ? 'path' : 'wall'} 
                                        ${isStartCell ? 'start' : ''} 
                                        ${isGoalCell ? 'goal' : ''} 
                                        ${isAgentCell ? 'agent' : ''} 
                                        ${isVisited ? 'visited' : ''}
                                    `}
                                    >
                                        {isStartCell && <span className="start-icon">🚩</span>}
                                        {isGoalCell && <span className="goal-icon">🥅</span>}
                                        {isAgentCell && <span className="agent-icon">⚽</span>}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
                <div className="legend">
                    <div><span className="cell path" />Grama</div>
                    <div><span className="cell wall" />Obstáculo</div>
                    <div><span className="cell start" />Ponto de Partida 🚩</div>
                    <div><span className="cell goal" />Gol 🥅</div>
                    <div><span className="cell agent" />Bola ⚽</div>
                    <div><span className="cell visited" />Visitado</div>
                </div>
            </div>
            <div className="controls-container">
                <div className="controls">
                    <button onClick={startSearch} disabled={isRunning || pathFound}>
                        {isRunning ? 'Buscando...🔎' : `Start ${selectedAlgorithm} ▶️`}
                    </button>
                    <button onClick={reset} disabled={isRunning && !pathFound}>
                        Resetar 🧹
                    </button>
                </div>
                <div className="step-counter">
                    Passos: {steps}
                </div>
                <div className="status">
                    {pathFound && <div className="status success">Gol Encontrado! Golaço! 🥅⚽</div>}
                </div>
            </div>
        </div>
    );
}

export default Maze;
