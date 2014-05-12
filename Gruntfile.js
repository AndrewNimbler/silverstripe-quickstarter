module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'lib/css/<%= pkg.name %>.css': ['lib/css/scss/<%= pkg.name %>.scss']
				}
			}
		}
	});

	// Load plugin for Sass
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task
	grunt.registerTask('default', ['sass']);

};