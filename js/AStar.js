/// <reference path="Graph.ts" />
var AStar = (function () {
    function AStar() {
        this.graph = new Graph();
    }
    AStar.prototype.getGraph = function () { return this.graph; };
    /**
     * Find the cheapest path between two nodes
     * @param a Origin
     * @param b Destination
     */
    AStar.prototype.path = function (a, b) {
        var path = [];
        return path;
    };
    /**
     * Load an array into graph
     * @param data The 2d array containing weights of each tile
     */
    AStar.prototype.load = function (data) {
        this.graph.fromArray(data);
    };
    return AStar;
})();
//# sourceMappingURL=AStar.js.map