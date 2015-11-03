declare class GraphNode {
    x: number;
    y: number;
    z: number;
    weight: number;
    private connections;
    getConnections(): GraphNode[];
    constructor(x: number, y: number, z: number, weight: number);
    connectTo(b: GraphNode): void;
}
