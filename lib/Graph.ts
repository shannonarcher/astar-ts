/// <reference path="GraphNode.ts" />
class Graph {
	
	private nodes : GraphNode[];
	getNodes() { return this.nodes; }
		
    constructor() {
		this.nodes = [];
	}
	
	/**
	 * convert a 2d array to a graph
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
		
		// connect the nodes in n^2 (TODO optimise)
		for (var i: number = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			// loop in a square adding each node as a connection
			for (var x: number = -1; x <= 1; x++) {
				for (var y: number = -1; y <= 1; y++) {
					
					if (x == 0 && y == 0) continue;
					if (n.x+x < 0 || n.x+x >= width || 
						n.y+y < 0 || n.y+y >= height) continue;
					
					var node : GraphNode = null;
					for (var j = 0; j < this.nodes.length; j++) {
						if (this.nodes[j].x == (this.nodes[i].x+x) && 
							this.nodes[j].y == (this.nodes[i].y+y)) {
							node = this.nodes[j];
						}
					}
					
					if (node != null)
						this.nodes[i].connectTo(node);
				}
			}			
		}
	}
};