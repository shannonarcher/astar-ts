declare class GraphNode {
    x: number;
    y: number;
    z: number;
    weight: number;
    private connections;
    getConnections(): GraphNode[];
    constructor(x: number, y: number, z: number, weight: number);
    /**
     * Connect this node to another in the parent graph
     * @param b The graphnode to connect
     */
    connectTo(b: GraphNode): void;
}
