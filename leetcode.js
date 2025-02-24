// 133.Clone Graph
var cloneGraph = function (node) {
    if (!node) return null;
    // dfs(node, visited): A recursive function to traverse and clone the graph.
    // The visited map (a Map() object) keeps track of already copied nodes to avoid cycles and redundant work.
    let dfs = (node, visited) => {
        if (visited.has(node)) return visited.get(node);
        //If the current node has already been cloned, return the cloned node.
        // This avoids infinite recursion in cyclic graphs and prevents duplicating nodes. 
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor, visited));
        }
        //Iterate through the neighbors of the current node.
        // Recursively clone each neighbor using dfs(neighbor, visited).
        // Add the cloned neighbor to newNode.neighbors.

        return newNode;
        // After all neighbors are cloned, return the newNode.
    }
    return dfs(node, new Map());
    // Call the DFS function with the starting node and an empty Map() to keep track of visited nodes.
    // The function will return the deep copy of the entire graph.
};
f           
// 230.Kth Smallest Element in a BST
var kthSmallest = function (root, k) {
    let ans, count = 0
    function inOrder(root) {
        if (!root) return
        inOrder(root.left)
        count++
        if (count === k) return ans = root.val
        inOrder(root.right)
    }
    inOrder(root)
    return ans
};

// 215.Kth Largest Element in an Array
var findKthLargest = function (nums, k) {
    const heap = new MaxPriorityQueue()
    for (let i = 0; i < nums.length; i++)
        heap.enqueue(nums[i])
    while (k-- > 1)
        heap.dequeue()
    return heap.front().element
};

// 200.Number of Islands
var numIslands = function (grid) {
    if(!grid) return 0
    let cols = grid[0].length;
    let rows = grid.length
    let count = 0

    // The function graphDs(row, col) is a recursive function that performs DFS to explore the entire island.
    function graphDs(row, col) {
         if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
            return;
        }

        //Set grid[row][col] = '0' to mark the current cell as visited.
         grid[row][col] = '0';

        // Explore all 4 directions
        graphDs(row + 1, col); // Down
        graphDs(row- 1, col); // Up
        graphDs(row, col + 1); // Right
        graphDs(row, col - 1); // Left
    }

     for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') { 
                count++; 
                graphDs(r, c); //Call graphDs(r, c) to explore and mark all connected land (1s) as 0 (visited).
            }
        }
    }
    return count
};