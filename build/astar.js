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
        this.heuristic = heuristic;
    }
    AStar.prototype.getGraph = function () { return this.graph; };
    AStar.prototype.path = function (a, b) {
        var open = new Array(), closed = new Array();
        var next = new PathNode(0, this.heuristic.getHeuristic(a.x, a.y, a.z, b.x, b.y, b.z), null, a);
        for (var k = 0; k < 100 && next.data != b; k++) {
            var lowest = null;
            var lowestIndex = -1;
            for (var i = 0; i < open.length; i++) {
                if (lowest == null || lowest.f() > open[i].f()) {
                    lowest = open[i];
                    lowestIndex = i;
                }
            }
            if (lowest != null) {
                open.splice(lowestIndex, 1);
                closed.push(lowest);
                next = lowest;
            }
            var connections = next.data.getConnections();
            for (var i = 0; i < connections.length; i++) {
                var add = true, openIndex = -1;
                for (var j = 0; j < open.length; j++)
                    if (open[j].data.x == connections[i].x &&
                        open[j].data.y == connections[i].y &&
                        open[j].data.z == connections[i].z)
                        openIndex = j;
                for (var j = 0; j < closed.length; j++)
                    if (closed[j].data.x == connections[i].x &&
                        closed[j].data.y == connections[i].y &&
                        closed[j].data.z == connections[i].z)
                        add = false;
                var node = connections[i];
                var g = next.g;
                g += Math.sqrt(Math.pow(next.data.x - node.x, 2) +
                    Math.pow(next.data.y - node.y, 2) +
                    Math.pow(next.data.z - node.z, 2)) * node.weight;
                var h = this.heuristic.getHeuristic(node.x, node.y, node.z, b.x, b.y, b.z);
                if (openIndex == -1 && add)
                    open.push(new PathNode(g, h, next, node));
                else if (openIndex > -1 &&
                    g + h < open[openIndex].f() && add) {
                    open[openIndex].g = g;
                    open[openIndex].h = h;
                    open[openIndex].previous = next;
                }
            }
        }
        var path = new Array();
        while (next != null) {
            path.push(next.data);
            next = next.previous;
        }
        path.reverse();
        return path;
    };
    AStar.prototype.load = function (data) {
        this.graph.fromArray(data);
    };
    return AStar;
})();
/// <reference path="GraphNode.ts" />
var PathNode = (function () {
    function PathNode(g, h, previous, data) {
        this.g = g;
        this.h = h;
        this.previous = previous;
        this.data = data;
    }
    PathNode.prototype.f = function () { return this.g + this.h; };
    return PathNode;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="Heuristic.ts" />
var DijkstrasHeuristic = (function (_super) {
    __extends(DijkstrasHeuristic, _super);
    function DijkstrasHeuristic() {
        _super.call(this);
    }
    DijkstrasHeuristic.prototype.getHeuristic = function (x1, y1, z1, x2, y2, z2) {
        return 0;
    };
    return DijkstrasHeuristic;
})(Heuristic);
/// <reference path="Heuristic.ts" />
var EuclideanHeuristic = (function (_super) {
    __extends(EuclideanHeuristic, _super);
    function EuclideanHeuristic() {
        _super.call(this);
    }
    EuclideanHeuristic.prototype.getHeuristic = function (x1, y1, z1, x2, y2, z2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) +
            Math.pow(y2 - y1, 2) +
            Math.pow(z2 - z1, 2));
    };
    return EuclideanHeuristic;
})(Heuristic);
/// <reference path="Heuristic.ts" />
var ManhattenHeuristic = (function (_super) {
    __extends(ManhattenHeuristic, _super);
    function ManhattenHeuristic() {
        _super.call(this);
    }
    ManhattenHeuristic.prototype.getHeuristic = function (x1, y1, z1, x2, y2, z2) {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1) + Math.abs(z2 - z1);
    };
    return ManhattenHeuristic;
})(Heuristic);
//# sourceMappingURL=astar.js.map