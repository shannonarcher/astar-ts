var fs = require('fs');
eval(fs.readFileSync('build/astar.js')+'');

var expect = require("chai").expect;

describe("AStar", function () {
	
	describe("AStar Path", function () {
		
		it("Finds path of no resistance", function() {
			var data = [
				[0, 0, 0, 0],
				[0, 5, 5, 0],
				[0, 5, 5, 0],
				[0, 0, 0, 0]
			];
			
			var astar = new AStar(new ManhattenHeuristic());
			astar.load(data);
			
			var g = astar.getGraph();
			var path = astar.path(g.getNode(0,0), g.getNode(3,3));
			
			// should be equal to 6
			expect(path.length).to.be.equal(6);
			// starts at 0,0
			expect(path[0].x).to.be.equal(0);
			expect(path[0].x).to.be.equal(0);
			// ends at 3,3
			expect(path[path.length-1].x).to.be.equal(3);
			expect(path[path.length-1].y).to.be.equal(3);
			// no node selected for path should have weight > 0
			for (var i = 0; i < path.length; i++) {
				expect(path[i].weight).to.be.equal(0);
			}
		});
		
		
		it("Finds least resistant path", function() {
			var data = [
				[0, 3, 0, 0],
				[3, 2, 5, 0],
				[0, 5, 5, 0],
				[0, 0, 0, 0]
			];
			
			var astar = new AStar(new EuclideanHeuristic());
			astar.load(data);
			
			var g = astar.getGraph();
			var path = astar.path(g.getNode(0,0), g.getNode(3,3));
						
			// should be equal to 6
			expect(path.length).to.be.equal(6);
			// starts at 0,0
			expect(path[0].x).to.be.equal(0);
			expect(path[0].x).to.be.equal(0);
			// ends at 3,3
			expect(path[path.length-1].x).to.be.equal(3);
			expect(path[path.length-1].y).to.be.equal(3);
			// no node selected for path should have weight > 0
			for (var i = 0; i < path.length; i++) {
				if (i != 1)
					expect(path[i].weight).to.be.equal(0);
				else 
					expect(path[i].weight).to.be.equal(2);
			}
		});
		
		
		it("Finds opposing but equal path", function() {
			var data = [
				[0, 3, 0, 0, 0, 3, 0, 3],
				[0, 3, 0, 3, 0, 3, 0, 3],
				[0, 3, 0, 3, 0, 3, 0, 3],
				[0, 3, 0, 3, 0, 3, 0, 3],
				[0, 3, 0, 3, 0, 3, 0, 3],
				[0, 3, 0, 3, 0, 0, 0, 3],
				[0, 3, 0, 3, 0, 3, 0, 3],
				[0, 0, 0, 3, 0, 3, 0, 0]
			];
			
			// guaranteed shortest path
			var astar = new AStar(new DijkstrasHeuristic());
			astar.load(data);
			
			var g = astar.getGraph();
			var path = astar.path(g.getNode(0,0), g.getNode(7,7));
			var path2 = astar.path(g.getNode(7,7), g.getNode(0,0));
						
			// should be above minimum possible - 1
			expect(path.length).to.be.above(7);
			expect(path.length).to.be.equal(path2.length);
			
			// starts at 0,0
			expect(path[0].x).to.be.equal(0);
			expect(path[0].x).to.be.equal(0);
			// ends at 3,3
			expect(path[path.length-1].x).to.be.equal(7);
			expect(path[path.length-1].y).to.be.equal(7);
			
			// paths should be equal
			for (var i = 0; i < path.length; i++) {
				expect(path[i].x).to.be.equal(path2[path.length-1-i].x);
				expect(path[i].y).to.be.equal(path2[path.length-1-i].y);
				expect(path[i].z).to.be.equal(path2[path.length-1-i].z);
			}
		});
		
	});
	
}); 