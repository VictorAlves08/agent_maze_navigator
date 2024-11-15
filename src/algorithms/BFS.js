/**
 * Função para realizar a busca em largura (BFS) de forma assíncrona.
 * Utiliza callbacks para atualizar o estado no componente que a invoca.
 *
 * @param {Array} mazeData - Matriz representando o labirinto.
 * @param {Object} start - Posição inicial {x, y}.
 * @param {Object} goal - Posição objetivo {x, y}.
 * @param {Function} onStep - Callback chamado a cada passo com a posição atual e o conjunto de visitados.
 * @returns {Promise} - Resolvida quando a busca é concluída.
 */
export const BFS = async (mazeData, start, goal, onStep) => {
  const queue = [start];
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

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  while (queue.length > 0) {
    const current = queue.shift(); // Dequeue
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

    // Enqueue os vizinhos
    for (let i = 0; i < neighbors.length; i++) {
      queue.push(neighbors[i]);
    }

    await delay(500); // Delay em milissegundos entre os passos
  }

  return false; // Objetivo não encontrado
};
