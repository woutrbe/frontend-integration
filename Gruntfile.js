module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		webdriver: {
			options: {
				port: 4444,
				desiredCapabilities: {
					browserName: 'chrome'
				}
			},
			ads: {
				tests: 'test/ads.js',
				options: {
                    desiredCapabilities: {
                        browserName: 'firefox'
                    }
                }
			},
			sharing: {
				tests: 'test/sharing.js',
                options: {
                    desiredCapabilities: {
                        browserName: 'firefox'
                    }
                }
			}
		}
	});

	grunt.loadNpmTasks('grunt-webdriver');

	grunt.registerTask('default', []);
	grunt.registerTask('sharing', ['webdriver:sharing']);
	grunt.registerTask('ads', ['webdriver:ads']);
}