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
	
	/**
	 * Connect this node to another in the parent graph
	 * @param b The graphnode to connect
	 */
	connectTo(b : GraphNode) {
		this.connections.push(b);
	}
}