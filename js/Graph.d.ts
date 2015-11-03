/// <reference path="GraphNode.d.ts" />
declare class Graph {
    private nodes;
    getNode(x: number, y: number): GraphNode;
    getNodes(): GraphNode[];
    constructor();
    /**
     * convert a 2d array to a graph
     * @param data The 2d array containing weights of each tile
     */
    fromArray(data: number[][]): void;
}
