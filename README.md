<div align="center">
<h1>Maze Solver Visualization - https://agent-maze-navigator.vercel.app</h1>
</div>

## ✨ Descrição

O **Maze Solver Visualization** é uma aplicação web interativa desenvolvida em **React** que permite aos usuários visualizar e comparar diferentes algoritmos de busca utilizados para resolver labirintos. A aplicação suporta **Busca em Profundidade (DFS)**, **Busca em Largura (BFS)** e **Busca em Feixe (BS)**, proporcionando uma compreensão prática de como cada algoritmo explora o espaço de busca.

## 🚀 Funcionalidades

- **Seleção de Algoritmo:** Escolha entre DFS, BFS e BS para resolver o labirinto.
- **Visualização em Tempo Real:** Observe o movimento do agente (⚽) pelo labirinto, com destaque para células visitadas.
- **Contador de Passos:** Acompanhe o número de passos que cada algoritmo leva para encontrar o objetivo.
- **Interface Responsiva:** Utilização otimizada em dispositivos móveis, tablets e desktops.
- **Resetar Labirinto:** Reinicie o labirinto para uma nova execução a qualquer momento.
- **Feedback Visual:** Animações suaves e mensagens de sucesso ao alcançar o objetivo.

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
  - [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Estilização e responsividade da aplicação.

- **Algoritmos:**
  - **DFS (Depth-First Search)**
  - **BFS (Breadth-First Search)**
  - **BS (Beam Search)**

- **Gerenciamento de Estado:**
  - [Context API](https://reactjs.org/docs/context.html) - Para gerenciamento global do estado da aplicação.

## 🎮 Uso
- Acesse a demo: https://agent-maze-navigator.vercel.app/
1. **Selecione o Algoritmo:**
   - Utilize o menu dropdown para escolher entre **DFS**, **BFS** ou **BS**.

2. **Inicie a Busca:**
   - Clique no botão `Start [Algoritmo] ▶️` para iniciar a busca.
   - O agente (⚽) começará a se mover pelo labirinto, e as células visitadas serão destacadas.

3. **Acompanhe os Passos:**
   - Observe o contador de passos que incrementa a cada movimento do agente.

4. **Chegada ao Gol:**
   - Quando o agente alcançar o gol (🥅), uma mensagem de sucesso será exibida.

5. **Resetar o Labirinto:**
   - Clique em `Resetar 🧹` para reiniciar o labirinto ao estado inicial.

## 🛠️ Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/VictorAlves08/agent_maze_navigator.git
    ```

2. **Acesse o diretório do projeto:**

    ```bash
    cd agent_maze_navigator
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run start
    ```

5. **Acesse a aplicação:**
    Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000)

## 🔍 Algoritmos Implementados

### DFS - Busca em Profundidade

- **Descrição:** Explora o labirinto profundamente, indo o mais longe possível em uma direção antes de retroceder.
- **Características:**
  - **Memória:** Usa menos memória comparado ao BFS.
  - **Caminho Encontrado:** Pode não encontrar o caminho mais curto.
  - **Aplicação Ideal:** Cenários onde a profundidade da solução é limitada ou a memória é uma preocupação.

### BFS - Busca em Largura

- **Descrição:** Explora todos os nós em um nível antes de passar para o próximo nível.
- **Características:**
  - **Memória:** Requer mais memória, pois armazena todos os nós de um nível antes de prosseguir.
  - **Caminho Encontrado:** Garante encontrar o caminho mais curto em termos de número de passos.
  - **Aplicação Ideal:** Cenários onde a eficiência do caminho é crucial e a memória disponível é suficiente.

### BS - Busca em Feixe

- **Descrição:** Uma versão heurística da BFS que limita o número de nós explorados em cada nível com base em uma largura de feixe (beam width) pré-definida.
- **Características:**
  - **Memória:** Mais eficiente que a BFS, pois limita o número de nós mantidos em cada nível.
  - **Caminho Encontrado:** Não garante o caminho mais curto, pois pode descartar caminhos promissores devido à limitação do feixe.
  - **Aplicação Ideal:** Cenários onde há necessidade de balancear entre eficiência de memória e tempo de execução.

## 📊 Resultados

Após a execução dos algoritmos no labirinto atual, os seguintes resultados foram obtidos:

- **DFS:** 54 passos
- **BFS:** 56 passos
- **BS:** 50 passos

### **Análise dos Resultados**

- **BS (Busca em Feixe):** Obteve o menor número de passos, indicando uma busca mais direta e eficiente dentro das limitações do feixe.
- **DFS (Busca em Profundidade):** Leu um número intermediário de passos, sugerindo que explorou caminhos eficazes, mas sem a garantia de otimização total.
- **BFS (Busca em Largura):** Teoricamente deveria garantir o menor caminho, mas neste caso específico, obteve um número ligeiramente maior de passos devido à exploração de múltiplos caminhos.

**Observação:** A eficiência real dos algoritmos pode variar com base na estrutura específica do labirinto e na implementação dos mesmos.

## 📄 Licença

Este projeto foi desenvolvido como parte da disciplina de Inteligência Artificial (SIN 323) pela Universidade Federal de Viçosa, campus Rio Paranaíba.

## 📫 Contato

- **Desenvolvedor:** Victor Oliveira
- **Universidade Federal de Viçosa**
- **GitHub:** [@victoralves08](https://github.com/VictorAlves08)
- **LinkedIn:** [Victor Oliveira](https://www.linkedin.com/in/victor-alves-de-oliveira/)

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.
---
