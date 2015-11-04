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
//# sourceMappingURL=EuclideanHeuristic.js.map