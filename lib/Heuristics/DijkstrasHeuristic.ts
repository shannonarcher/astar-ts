/// <reference path="Heuristic.ts" />
class DijkstrasHeuristic extends Heuristic {
	constructor() {
		super();
	}
	
	getHeuristic(
		x1:number, y1:number, z1:number,
		x2:number, y2:number, z2:number) : number {
		return 0;
	} 
}