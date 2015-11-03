class GraphNode {	
	
	private connections : GraphNode[];
	getConnections() { return this.connections; }
	
	constructor(
		public x: number, 
		public y: number, 
		public z: number,
		public weight: number) {		
		this.connections = [];
	}
	
	connectTo(b : GraphNode) {
		this.connections.push(b);
	}
}