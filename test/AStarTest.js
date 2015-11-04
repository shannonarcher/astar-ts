var fs = require('fs');
eval(fs.readFileSync('build/astar-ts.min.js')+'');

var expect = require("chai").expect;


describe("AStar", function () {
	
	describe("AStar Path", function () {
		
		it("Finds path between nodes", function() {
			var data = [
				[0, 0, 0, 0],
				[0, 2, 2, 0],
				[0, 2, 2, 0],
				[0, 0, 0, 0]
			];
			
			var astar = new AStar(new ManhattenHeuristic());
			astar.load(data);
			
			var g = astar.getGraph();
			var path = astar.path(g.getNode(0,0), g.getNode(3,3));
						
			console.log(path);
			expect(path.length).to.be.above(0);
		});
		
	});
	
}); 