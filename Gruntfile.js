module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/**/*.js',
        dest: 'build/astar-ts.min.js'
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
  watch: {
    files: 'lib/**/*.ts',
    tasks: ['typescript', 'uglify']
  }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['typescript', 'uglify', 'watch']);

};