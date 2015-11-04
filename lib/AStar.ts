/// <reference path="Graph.ts" />
/// <reference path="Heuristics/Heuristic.ts" />
class AStar 
{
	private graph : Graph;
	getGraph() { return this.graph; }
	
	constructor(heuristic: Heuristic) {
		this.graph = new Graph();
	}	
	
	/**
	 * Find the cheapest path between two nodes
	 * @param a Origin
	 * @param b Destination
	 */
	path(a: GraphNode, b: GraphNode) : GraphNode[] {
		var open = new Array<PathNode>(), 
			closed = new Array<PathNode>();
					
		var next: PathNode = new PathNode(0, 0, null, a);		
		// find lowest
		var lowest: PathNode = null;
		var lowestIndex: number = -1;
		for (var i: number = 0; i < open.length; i++) 
		{
			if (lowest == null || lowest.f() < open[i].f()) {
				lowest = open[0];
				lowestIndex = i;
			}
		}
		
		// add to closed
		if (lowest != null) {
			open[open.length-1] = open[lowestIndex];
			open.splice(open.length-1);
			closed.push(lowest);
			
			next = lowest;
		}
		
		// for all next, add to open
		
		
		var path = new Array<GraphNode>();
		return path;
	}
	
	/**
	 * Load an array into graph
	 * @param data The 2d array containing weights of each tile
	 */
	load(data: number[][]) {
		this.graph.fromArray(data);
	}
}