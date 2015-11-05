#A* Pathfinding in TypeScript
A simple application aimed at familiarising myself with the gulp and typescript workflow.

[From Wikipedia](https://en.wikipedia.org/wiki/A*_search_algorithm)

In computer science, A* is a computer algorithm that is widely used in pathfinding and graph traversal, 
the process of plotting an efficiently traversable path between multiple points, called nodes. 
It is an extension of Edsger Dijkstra's 1959 algorithm. A* achieves better performance by using heuristics to guide its search.

##How to use?
```Javascript
var data = [
	[ 0, 0, 0, 0 ],
	[ 0, 5, 5, 0 ],
	[ 0, 5, 5, 0 ],
	[ 0, 0, 0, 0 ]
];

var astar = new AStar(new ManhattenHeuristic());
astar.load(data);

var nodeA = astar.getGraph().getNode(0, 0),
	nodeB = astar.getGraph().getNode(3, 3);
astar.path(nodeA, nodeB); 
// returns path (0,0), (0,1), (0,2), (1,3), (2,3), (3,3)
```
A total of three heuristics are provided which will affect how a path is found. These include:
- Manhatten Heuristic: sum of distances between nodes, measured along axes at right angles
- Euclidean Heuristic: the true distance between nodes, calculated using pythagoras
- Dijkstras Heuristic: returns 0, turns the AStar algorithm into pure Dijkstras, used to find a shortest possible path

Each of these Heuristics can be set when instantiating the AStar class.

```Javascript
var manhatten = new AStar(new ManhattenHeuristic());
var euclidean = new AStar(new EuclideanHeuristic());
var dijkstras = new AStar(new DijkstrasHeuristic());
```