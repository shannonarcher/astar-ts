/// <reference path="Graph.ts" />
/// <reference path="Heuristics/Heuristic.ts" />
class AStar 
{
	private graph : Graph;
	getGraph() { return this.graph; }
	getNode(x : number, y : number) { return this.graph.getNode(x, y); }
		
	private heuristic : Heuristic;
	setHeuristic(heuristic : Heuristic) { this.heuristic = heuristic; }
	
	constructor(heuristic: Heuristic) {
		this.graph = new Graph();
		this.setHeuristic(heuristic);
	}	
	
	/**
	 * Find the cheapest path between two nodes
	 * @param a Origin
	 * @param b Destination
	 */
	path(a: GraphNode, b: GraphNode) : GraphNode[] {
		var open = new Array<PathNode>(), 
			closed = new Array<PathNode>();
					
		var next: PathNode = new PathNode(
			0, this.heuristic.getHeuristic(a.x, a.y, a.z, b.x, b.y, b.z), null, a);
		
		// find lowest
		while (next.data != b)
		{
			var lowest: PathNode = null;
			var lowestIndex: number = -1;
			for (var i: number = 0; i < open.length; i++) 
			{
				if (lowest == null || lowest.f() > open[i].f()) {
					lowest = open[i];
					lowestIndex = i;
				}
			}
			
			// add to closed
			if (lowest != null) {
				// open[open.length-1] = open[lowestIndex];
				open.splice(lowestIndex, 1);
				closed.push(lowest);			
				next = lowest;
			}
			
			// for all next connections, add to open if not in closed or open
			var connections = next.data.getConnections();
			for (var i = 0; i < connections.length; i++) {
				
				// list check
				var add = true, openIndex = -1;
				for (var j = 0; j < open.length; j++) 
					if (open[j].data.x == connections[i].x &&
						open[j].data.y == connections[i].y &&
						open[j].data.z == connections[i].z) 
						openIndex = j;
				for (var j = 0; j < closed.length; j++)
					if (closed[j].data.x == connections[i].x &&
						closed[j].data.y == connections[i].y &&
						closed[j].data.z == connections[i].z)
						add = false;
				
				// calculate score
				var node = connections[i];
				var g = next.g;
				g += Math.sqrt(
						Math.pow(next.data.x - node.x, 2) + 
						Math.pow(next.data.y - node.y, 2) + 
						Math.pow(next.data.z - node.z, 2)) * node.weight;
				var h = this.heuristic.getHeuristic(node.x, node.y, node.z, b.x, b.y, b.z);
				
				// if not in open
				if (openIndex == -1 && add)
					open.push(new PathNode(g, h, next, node));
				// update open if better score
				else if (
					openIndex > -1 &&
					g + h < open[openIndex].f() && add) {
					open[openIndex].g = g;
					open[openIndex].h = h;
					open[openIndex].previous = next;
				}
			}
		}
				
		var path = new Array<GraphNode>();
		while (next != null) {
			path.push(next.data);
			next = next.previous;
		}
		path.reverse();
		
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