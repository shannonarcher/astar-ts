declare class GraphNode {
    x: number;
    y: number;
    z: number;
    weight: number;
    constructor(x: number, y: number, z: number, weight: number);
    connectTo(b: GraphNode): void;
}
