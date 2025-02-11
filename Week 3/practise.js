class Graph {
    constructor(){
        this.adjList = {}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex,'=>',[...this.adjList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return (this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]) return
        for(let adjVertex of this.adjList[vertex]){
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjList[vertex]
    }
    dfs(start){
        let queue = [start]
        let visited = new Set()
        let result = []
        visited.add(start)
        while(queue.length){
            let current = queue.shift()
            result.push(current)
            for(let item of this.adjList[current]){
                if(!visited.has(item)){
                    visited.add(item)
                    queue.push(item)
                }
            }
        }
        return result
    }
    bfs(start,visited = new Set()){
        if(visited.has(start)) return
        console.log(start)
        visited.add(start)
        for(let neighbor of this.adjList[start]){
            this.bfs(neighbor, visited)
        }
    }
}
const graph = new Graph()
graph.addEdge('A','B')
graph.addEdge('C','D')
console.log(graph.hasEdge('A','C'))
// graph.removeEdge('A','B')
graph.bfs('A')
// graph.removeVertex('A')
graph.display()