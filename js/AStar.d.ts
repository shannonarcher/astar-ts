/// <reference path="Graph.d.ts" />
declare class AStar {
    private graph;
    constructor();
    path(a: GraphNode, b: GraphNode): void;
    load(data: number[][]): void;
}
