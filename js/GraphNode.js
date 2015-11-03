var GraphNode = (function () {
    function GraphNode(x, y, z, weight) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.weight = weight;
        this.connections = [];
    }
    GraphNode.prototype.getConnections = function () { return this.connections; };
    /**
     * Connect this node to another in the parent graph
     * @param b The graphnode to connect
     */
    GraphNode.prototype.connectTo = function (b) {
        this.connections.push(b);
    };
    return GraphNode;
})();
//# sourceMappingURL=GraphNode.js.map