class Graph{
    constructor(){
        this.adjusantList = {};
    }
    addVertex(vertex){
        if(!this.adjusantList[vertex]){
            this.adjusantList[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjusantList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjusantList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjusantList[vertex1].add(vertex2);
        this.adjusantList[vertex2].add(vertex1);
    }   
    hasEdge(vertex1,vertex2){
        return (this.adjusantList[vertex1].has(vertex2) && this.adjusantList[vertex2].has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjusantList[vertex1].delete(vertex2)
        this.adjusantList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjusantList[vertex]){
            return 
        }
        for(let adjusantVertex of this.adjusantList[vertex]){
            this.removeEdge(vertex,adjusantVertex);
        }
        delete this.adjusantList[vertex]
    }
    display(){
        for(let vertex in this.adjusantList){
            console.log(vertex,'=>',[...this.adjusantList[vertex]])
        }
    }
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return;
        console.log(start);
        visited.add(start);
        let neighbors = this.adjusantList[start]; 
        if (neighbors) {
            for (let neighbor of neighbors) {
                this.dfs(neighbor, visited);
            }
        }
    }
    bfs(start){
        let queue = [start];
        let visited = new Set();
        let results = []
        visited.add(start)
        while(queue.length){
            let curr = queue.shift();
            results.push(curr);
            for(let item of this.adjusantList[curr]){
                if(!visited.has(item)){
                    visited.add(item);
                    queue.push(item);
                }
            }
        }
        return results;
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A','B');
graph.addEdge('B','C');
graph.addEdge('E','A'); 
// console.log(graph.hasEdge('B','C'))
// graph.removeVertex('A')
graph.display()
console.log(graph.bfs('A'))
graph.dfs('A')