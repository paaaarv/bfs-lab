function bfs(rootNode, vertices, edges){
    rootNode.distance=0
    let found =[rootNode]
    let foundOrder=[rootNode]
    while(found.length!=0){
        let currentNode=found.shift();
        let adjacentNodes=findAdjacent(currentNode.name, vertices,edges);
        foundOrder=foundOrder.concat(adjacentNodes)
        markDistanceAndPredecessor(currentNode, adjacentNodes);
        found=found.concat(adjacentNodes)
    }
    return foundOrder
}

function findAdjacent(current, vertices, edges){
    let newArray=[];
    let currentVertex;
    let currentEdges;

    currentEdges=edges.filter(e=> e.includes(current)).map(x=> x.find(y=>y!=current))
    currentEdges.map(e=>{
        vertices.map(v=>{
            if(v.name===e && v.distance === null){
                newArray.push(v)
            }
        })
    })
    return newArray
}

function markDistanceAndPredecessor(current, adjacent){
    adjacent.map(a=>{
        a.predecessor = current;
        a.distance=a.predecessor.distance+1
    })
    return adjacent
}
