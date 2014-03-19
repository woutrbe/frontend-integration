module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jasmine: {
			src: 'http://www.lifehack.org',
			options: {
				host: 'http://www.lifehack.org',
				specs: 'spec/*Spec.js',
				helpers: 'spec/*Helper.js'
			}
		},

		selenium: {
			options: {
				startURL: 'http://www.lifehack.org',
				browsers: ['chrome', 'firefox'],
				log: 'test/test.log'
			},
			suite: {
				files: {
					'node_modules/grunt-selenium/test/actual/success.tap': ['node_modules/grunt-selenium/test/source/success/*.suite']
				}
			}
		},

		nodeunit: {
			
		}

		// http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-selenium');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', []);
	grunt.registerTask('test', ['selenium']);
}