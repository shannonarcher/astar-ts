/// <reference path="GraphNode.ts" />
class PathNode {	
	
	f() { return this.g + this.h; }
		
	constructor(
		public g: number, 
		public h: number,
		public previous: PathNode,
		public data: GraphNode) {
			
	}
	
}