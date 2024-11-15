export const mazeData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Linha 0
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], // Linha 1
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0], // Linha 2
  [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0], // Linha 3
  [0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1], // Linha 4
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Linha 5
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Linha 6
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Linha 7
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], // Linha 8
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], // Linha 9
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0], // Linha 10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Linha 11
];

export const startPosition = { x: 11, y: 4 };
export const goalPosition = { x: 0, y: 10 };

export const searchAlgorithmsOptions = [
  { id: 1, value: "DFS", label: "DFS - Busca em Profundidade" },
  { id: 2, value: "BFS", label: "BFS - Busca em Largura" },
  { id: 3, value: "TODO", label: "TODO" },
];
