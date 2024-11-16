/**
 * Função para realizar a Busca em Feixe (Beam Search) de forma assíncrona.
 * Utiliza callbacks para atualizar o estado no componente que a invoca.
 *
 * @param {Array} mazeData - Matriz representando o labirinto.
 * @param {Object} start - Posição inicial {x, y}.
 * @param {Object} goal - Posição objetivo {x, y}.
 * @param {Function} onStep - Callback chamado a cada passo com as posições atuais e o conjunto de visitados.
 * @param {number} beamWidth - Largura do feixe, número máximo de nós a serem mantidos por nível.
 * @returns {Promise} - Resolvida quando a busca é concluída.
 */
export const BS = async (mazeData, start, goal, onStep, beamWidth = 3) => {
  let currentLevel = [start];
  const visited = new Set();
  let steps = 0;

  // Função auxiliar para converter posição em string única
  const posToString = (pos) => `${pos.x},${pos.y}`;

  // Função para obter vizinhos na ordem: cima, esquerda, direita, baixo
  const getNeighbors = (pos) => {
    const directions = [
      { x: pos.x, y: pos.y - 1 }, // Cima
      { x: pos.x - 1, y: pos.y }, // Esquerda
      { x: pos.x + 1, y: pos.y }, // Direita
      { x: pos.x, y: pos.y + 1 }, // Baixo
    ];

    return directions.filter((neighbor) => {
      const { x, y } = neighbor;
      return (
        x >= 0 &&
        x < mazeData[0].length &&
        y >= 0 &&
        y < mazeData.length &&
        mazeData[y][x] === 1 &&
        !visited.has(posToString(neighbor))
      );
    });
  };

  // Função de ordenação heurística (distância Manhattan ao objetivo)
  const heuristic = (pos) =>
    Math.abs(pos.x - goal.x) + Math.abs(pos.y - goal.y);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  while (currentLevel.length > 0) {
    // Ordenar os nós atuais com base na heurística (menor distância primeiro)
    currentLevel.sort((a, b) => heuristic(a) - heuristic(b));

    // Selecionar apenas os nós dentro da largura do feixe
    const nextLevelCandidates = currentLevel.slice(0, beamWidth);
    const nextLevel = [];

    for (const current of nextLevelCandidates) {
      const currentStr = posToString(current);

      if (visited.has(currentStr)) {
        continue;
      }

      visited.add(currentStr);
      steps += 1;

      // Chama o callback para atualizar o estado no componente Maze
      onStep(current, new Set(visited), steps);

      // Verifica se o objetivo foi alcançado
      if (current.x === goal.x && current.y === goal.y) {
        return true; // Objetivo encontrado
      }

      const neighbors = getNeighbors(current);
      nextLevel.push(...neighbors);
    }

    // Atualizar para o próximo nível
    currentLevel = nextLevel;

    await delay(500); // Delay em milissegundos entre os passos
  }

  return false; // Objetivo não encontrado
};
