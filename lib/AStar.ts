/// <reference path="Graph.ts" />
class AStar 
{
	private graph : Graph;
	getGraph() { return this.graph; }
	
	constructor() {
		this.graph = new Graph();
	}	
	
	/**
	 * Find the cheapest path between two nodes
	 * @param a Origin
	 * @param b Destination
	 */
	path(a: GraphNode, b: GraphNode) {
		var path = [];
		
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