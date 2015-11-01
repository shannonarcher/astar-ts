/// <reference path="GraphNode.d.ts" />
declare class Graph {
    private nodes;
    constructor();
    /**
     * convert a 2d array to a graph
     */
    fromArray(array: Array<Number>): void;
    /**
     * convert the graph to a 2d array
     */
    toArray(array: Array<Number>): void;
}
