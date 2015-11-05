/// <reference path="Heuristic.ts" />
class ManhattenHeuristic extends Heuristic {
	constructor() {
		super();
	}
		
	getHeuristic(
		x1:number, y1:number, z1:number, 
		x2:number, y2:number, z2:number) : number {
		return Math.abs(x2 - x1) + Math.abs(y2 - y1) + Math.abs(z2 - z1);
	}
}