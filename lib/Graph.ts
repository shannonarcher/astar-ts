/// <reference path="GraphNode.ts" />

class Graph {
	
	private nodes : Array<GraphNode>;
		
    constructor() {
		
	}
	
	/**
	 * convert a 2d array to a graph
	 */
	fromArray(array : Array<Number>) {
		this.nodes = new Array<GraphNode>();
	}
	
	/**
	 * convert the graph to a 2d array
	 */
	toArray(array : Array<Number>) {
		
	}
};