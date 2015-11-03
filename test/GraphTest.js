
var fs = require('fs');
eval(fs.readFileSync('build/astar-ts.min.js')+'');

var expect = require("chai").expect;

describe("Graph", function () {
	
	describe("From Array to Graph", function () {
		it("Creates the right amount of nodes", function() {
			var data = [
				[0, 0, 0, 0],
				[0, 2, 2, 0],
				[0, 2, 2, 0],
				[0, 0, 0, 0]
			];
			
			var graph = new Graph();
			graph.fromArray(data);
			var nodes = graph.getNodes();
						
			expect(nodes.length).to.equal(data.length * data[0].length);
		});
		
		it("Creates the right amount of connections", function () {
			var data = [
				[1, 0, 0, 0],
				[3, 2, 2, 0],
				[0, 2, 2, 0],
				[0, 0, 0, 0]
			];
			
			var graph = new Graph();
			graph.fromArray(data);
			var nodes = graph.getNodes();
			
			var connections = [
				3, 5, 5, 3, 
				5, 8, 8, 5, 
				5, 8, 8, 5,
				3, 5, 5, 3
			];
						
			for (var i = 0; i < connections.length; i++) {
				expect(nodes[i].getConnections().length).to.equal(connections[i]);
			}
		});
	});
	
}); 