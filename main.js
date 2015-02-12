/**
	com.lampa.startapp
	https://github.com/lampaa/com.lampa.startapp
	
	Phonegap 3 plugin for check or launch other application in android device (iOS support).
	bug tracker: https://github.com/lampaa/org.apache.cordova.startapp/issues
*/
function init() {
	/**
	 * check the application is installed
	 */
	navigator.startApp.check('com.waze', function(message) { /* success */
		alert(message); // => OK
	}, 
	function(error) { /* error */
		alert('error en startApp.check');
	});
	
	/**
	 * start application without parameters
	 */
	navigator.startApp.start('com.waze', function(message) { /* success */
		alert(message); // => OK
	}, 
	function(error) { /* error */
		alert('error en startApp.start');
	});
	
	/**
	 * start application with parameters
	 */
	navigator.startApp.start([
		'com.waze', // applucation
		'com.teaway.teamenu.MainActivity', // activity
		'product_id', // key
		'102' // value
	], function(message) { /* success */
		alert(message); // => OK
	}, 
	function(error) { /* error */
		alert('error en startApp.start con parametros');
	});
}
