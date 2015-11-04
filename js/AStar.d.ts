/// <reference path="Graph.d.ts" />
/// <reference path="Heuristics/Heuristic.d.ts" />
declare class AStar {
    private graph;
    getGraph(): Graph;
    constructor(heuristic: Heuristic);
    /**
     * Find the cheapest path between two nodes
     * @param a Origin
     * @param b Destination
     */
    path(a: GraphNode, b: GraphNode): GraphNode[];
    /**
     * Load an array into graph
     * @param data The 2d array containing weights of each tile
     */
    load(data: number[][]): void;
}
