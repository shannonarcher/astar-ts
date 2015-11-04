module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/astar.js',
        dest: 'build/astar.min.js'
      }
    },
	typescript: {
    base: {
      src: ['lib/**/*.ts'],
			dest: 'js',
			options: {
				module: 'amd', //or commonjs 
				target: 'es5', //or es3 
				rootDir: 'lib',
				sourceMap: true,
				declaration: true
			}
		}
	},
  concat: {
    options: {
      seperator: ';',
    },
    dist: {
      src: [
        'js/heuristics/Heuristic.js',
        'js/heuristics/ManhattenHeuristic.js',
        'js/heuristics/EuclideanHeuristic.js',
        'js/*.js'
      ],
      dest: 'build/astar.js'
    }
  },
  watch: {
    files: 'lib/**/*.ts',
    tasks: ['typescript', 'concat', 'uglify']
  }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'watch']);

};