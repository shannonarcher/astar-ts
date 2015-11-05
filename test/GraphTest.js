var fs = require('fs');
eval(fs.readFileSync('build/astar.js')+'');

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
				[1, 2, 3, 5],
				[2, 2, 3, 5],
				[3, 3, 4, 4],
				[5, 5, 4, 1]
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
			
			for (var i = 0; i < nodes[0].getConnections().length; i++)
				expect(nodes[0].getConnections()[i].weight).to.equal(2);
				
			for (var i = 0; i < nodes[15].getConnections().length; i++)
				expect(nodes[15].getConnections()[i].weight).to.equal(4); 
		});
		
	});
	
}); 