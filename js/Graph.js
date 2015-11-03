/// <reference path="GraphNode.ts" />
var Graph = (function () {
    function Graph() {
        this.nodes = [];
    }
    Graph.prototype.getNodes = function () { return this.nodes; };
    /**
     * convert a 2d array to a graph
     */
    Graph.prototype.fromArray = function (data) {
        this.nodes = [];
        var width = data[0].length;
        var height = data.length;
        // create and add nodes
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                var weight = data[i][j];
                var node = new GraphNode(j, i, 0, weight);
                this.nodes.push(node);
            }
        }
        // connect the nodes in O(n)
        for (var i = 0; i < this.nodes.length; i++) {
            var n = this.nodes[i];
            // loop in a square adding each node as a connection
            for (var x = -1; x <= 1; x++) {
                for (var y = -1; y <= 1; y++) {
                    if (x == 0 && y == 0)
                        continue;
                    if (n.x + x < 0 || n.x + x >= width ||
                        n.y + y < 0 || n.y + y >= height)
                        continue;
                    var node = this.nodes[i + width * y + x];
                    this.nodes[i].connectTo(node);
                }
            }
        }
    };
    return Graph;
})();
;
//# sourceMappingURL=Graph.js.map