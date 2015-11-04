var GraphNode = (function () {
    function GraphNode(x, y, z, weight) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.weight = weight;
        this.connections = [];
    }
    GraphNode.prototype.getConnections = function () { return this.connections; };
    GraphNode.prototype.connectTo = function (b) {
        this.connections.push(b);
    };
    return GraphNode;
})();
/// <reference path="GraphNode.ts" />
var Graph = (function () {
    function Graph() {
        this.nodes = [];
    }
    Graph.prototype.getNode = function (x, y) {
        for (var i = 0; i < this.nodes.length; i++) {
            var n = this.nodes[i];
            if (n.x == x && n.y == y)
                return n;
        }
        return null;
    };
    Graph.prototype.getNodes = function () { return this.nodes; };
    Graph.prototype.fromArray = function (data) {
        this.nodes = [];
        var width = data[0].length;
        var height = data.length;
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                var weight = data[i][j];
                var node = new GraphNode(j, i, 0, weight);
                this.nodes.push(node);
            }
        }
        for (var i = 0; i < this.nodes.length; i++) {
            var n = this.nodes[i];
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
var Heuristic = (function () {
    function Heuristic() {
    }
    return Heuristic;
})();
/// <reference path="Graph.ts" />
/// <reference path="Heuristics/Heuristic.ts" />
var AStar = (function () {
    function AStar(heuristic) {
        this.graph = new Graph();
    }
    AStar.prototype.getGraph = function () { return this.graph; };
    AStar.prototype.path = function (a, b) {
        var path = new Array();
        var open = new Array(), closed = new Array();
        var conn = a.getConnections();
        for (var c in conn) {
            var connection = conn[c];
        }
        return path;
    };
    AStar.prototype.load = function (data) {
        this.graph.fromArray(data);
    };
    return AStar;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="Heuristic.ts" />
var EuclideanHeuristic = (function (_super) {
    __extends(EuclideanHeuristic, _super);
    function EuclideanHeuristic() {
        _super.call(this);
    }
    EuclideanHeuristic.prototype.getHeuristic = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    return EuclideanHeuristic;
})(Heuristic);
/// <reference path="Heuristic.ts" />
var ManhattenHeuristic = (function (_super) {
    __extends(ManhattenHeuristic, _super);
    function ManhattenHeuristic() {
        _super.call(this);
    }
    ManhattenHeuristic.prototype.getHeuristic = function (x1, y1, x2, y2) {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    };
    return ManhattenHeuristic;
})(Heuristic);
//# sourceMappingURL=astar.js.map