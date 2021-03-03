
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
    let visited = [startingVertex];
    while (queue.length) {
      let current = queue[0];
      queue.shift();

      let list = this.adjList[current];
      // console.log(queue);
     // console.log(list);

      for(let i = 0; i < list.length; i++) {
        let element = list[i];
        if (visited.includes(element)) {
          continue;
        
        }
       else { 
        queue.push(element);
        visited.push(element);
       }
      };
      array.push(current);

    }
    return array;
  }

  depthFirstTraversalIterative(startingVertex) {
    let stack = [startingVertex];
    let arr = [];
    let visited = [startingVertex];
    while (stack.length) {
      let current = stack.pop();
      let list = this.adjList[current];
      
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (!visited.includes(element)) {
          arr.push(element);
          visited.push(element);
          stack.push(element);
        }

      }
    }
    return arr;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
