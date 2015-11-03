/// <reference path="GraphNode.ts" />
class Graph {
	
	private nodes : GraphNode[];
	getNode(x: number, y: number) { 
		for (var i = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			if (n.x == x && n.y == y)
				return n;
		}
		return null;
	}
	getNodes() { return this.nodes; }
		
    constructor() {
		this.nodes = [];
	}
	
	/**
	 * convert a 2d array to a graph
	 * @param data The 2d array containing weights of each tile
	 */
	fromArray(data : number[][]) {
		this.nodes = [];
		
		var width  = data[0].length;
		var height = data.length;
		
		// create and add nodes
		for (var i: number = 0; i < height; i++) {
			for (var j: number = 0; j < width; j++) {				
				var weight:number = data[i][j];
				var node = new GraphNode(j, i, 0, weight);
				this.nodes.push(node);
			}
		}
		
		// connect the nodes in O(n)
		for (var i: number = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			
			// loop in a square adding each node as a connection
			for (var x: number = -1; x <= 1; x++) {
				for (var y: number = -1; y <= 1; y++) {
					
					if (x == 0 && y == 0) continue;
					if (n.x+x < 0 || n.x+x >= width || 
						n.y+y < 0 || n.y+y >= height) continue;
					
					var node : GraphNode = this.nodes[i+width*y+x];		
					this.nodes[i].connectTo(node);
				}
			}			
		}
	}
};