class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }

    shortestPath(start, target) {
        if (!this.adjList[start] || !this.adjList[target]) return null;

        let queue = [[start]];
        let visited = new Set([start]);

        while (queue.length > 0) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === target) return path; 

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]);
                }
            }
        }
        return null;
    }

    allPaths(start, target, visited = new Set(), path = [], paths = []) {
        visited.add(start);
        path.push(start);

        if (start === target) {
            paths.push([...path]); 
        } else {
            for (let neighbor of this.adjList[start]) {
                if (!visited.has(neighbor)) {
                    this.allPaths(neighbor, target, visited, path, paths);
                }
            }
        }

        path.pop();
        visited.delete(start);
        return paths;
    }

    longestPath(start, target) {
        let allPaths = this.allPaths(start, target);
        if (allPaths.length === 0) return null;

        return allPaths.reduce((longest, path) => path.length > longest.length ? path : longest, []);
    }
    
    findNeighbour(vertex){
        if(this.adjList[vertex]){
            null
        }
        return [...this.adjList[vertex]]
    }

    // Cycle detection in an undirected graph using DFS
    hasCycleUndirected() {
        let visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, node)) return true;
                } else if (neighbor !== parent) {
                    return true;
                }
            }
            return false;
        };

        for (let vertex in this.adjList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) return true;
            }
        }
        return false;
    }
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("Shortest Path from A to F:", graph.shortestPath("A", "F"));
console.log("All Paths from A to F:", graph.allPaths("A", "F"));
console.log("Longest Path from A to F:", graph.longestPath("A", "F"));

console.log(graph.findNeighbour('A'))

console.log("Is the graph cyclic ?", graph.hasCycleUndirected());