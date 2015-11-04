/// <reference path="Heuristic.d.ts" />
declare class ManhattenHeuristic extends Heuristic {
    constructor();
    getHeuristic(x1: number, y1: number, x2: number, y2: number): number;
}
