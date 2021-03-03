
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

    while (queue.length) {
      let current = queue[0];
      queue.shift();

      let list = this.adjList[current];
      // console.log(queue);
      console.log(list);

      for(let i = 0; i < list.length; i++) {
        let element = list[i];
        if (queue.includes(element)) continue;
        queue.push(element);
      };
      array.push(current);

    }
    return array;
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
