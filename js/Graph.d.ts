/// <reference path="GraphNode.d.ts" />
declare class Graph {
    private nodes;
    getNodes(): GraphNode[];
    constructor();
    /**
     * convert a 2d array to a graph
     */
    fromArray(data: number[][]): void;
}
