
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
    console.log(startingVertex);
    while (queue.length) {
        let current = queue[0];
        let list = current.adjList;
        list.forEach(element => {
          queue.push(element);
        });
        array.push(current);
        queue.shift();
        
      }
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
