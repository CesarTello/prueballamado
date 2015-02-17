	window.addEventListener('load', function() {

		var mybutton;
		mybutton = document.getElementById('mybutton');

		// Android 2.2 needs FastClick to be instantiated before the other listeners so that the stopImmediatePropagation hack can work.
		FastClick.attach(mybutton);

		//add event listener fx for controls
		mybutton.addEventListener('touchend', function(event) {
			//alert('touched on ok');
		}, false);

		mybutton.addEventListener('click', function(event) {
			try
			  {
				  
				  
				  
				  
alert('dededededed');
	
	
	
	
			  }
			catch(err)
			  {
			  //Handle errors
			  }			
		}, false);

		
		
		//after fastclick instantiation and listeners setup get rest of code in load fx
		
	  
		  
		  
	}, false);
	














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
