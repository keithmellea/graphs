
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (this.adjList[vertex]) return;
    this.adjList[vertex] = [];

  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    const sourceVertex = this.adjList[srcValue];
    const destVertex = this.adjList[destValue];

    sourceVertex.push(destValue);
    destVertex.push(srcValue);
  }

  buildGraph(edges) {

    for (let i = 0; i < edges.length; i++) {
      let current = edges[i];
      let first = current[0];
      let second = current[1];

      this.addEdges(first, second);
    }
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let queue = [startingVertex];
    let array = [];
    let visited = new Set();

    while (queue.length) {
      let current = queue[0];
      queue.shift();

      if (visited.has(current)) continue;
      visited.add(current);
      array.push(current);

      let list = this.adjList[current];

      queue.push(...list);

    }
    return array;
  }

  depthFirstTraversalIterative(startingVertex) {
    let stack = [startingVertex];
    let array = [];
    let visited = new Set();

    while(stack.length) {
      let current = stack.pop();
      let list = this.adjList[current];

      if (visited.has(current)) continue;

      array.push(current);
      visited.add(current);
      stack.push(...list);
    }
    return array;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {

  }

}

module.exports = {
  Graph
};
