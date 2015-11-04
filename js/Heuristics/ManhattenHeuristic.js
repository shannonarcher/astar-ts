var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=ManhattenHeuristic.js.map