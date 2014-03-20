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
			sharing: {
				tests: 'test/sharing.js',
                options: {
                    desiredCapabilities: {
                        browserName: 'chrome'
                    }
                }
			},
			ads: {
				test: 'test/ads.js',
				options: {
                    desiredCapabilities: {
                        browserName: 'chrome'
                    }
                }
			}
		},
	});

	grunt.loadNpmTasks('grunt-webdriver');

	grunt.registerTask('default', []);
	grunt.registerTask('test', ['']);
}