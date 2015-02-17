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
				  
	alert('antes del llamado');			  
				  
				  
       address = "1600+Amphitheatre+Parkway%2C+CA" ;
       window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: 'geo:0,0?q=' + address}, 
          function() {alert('success')}, 
          function() {alert('Failed to open URL via Android Intent')}
      );
	
	
	
	
			  }
			catch(err)
			  {
			  //Handle errors
			  }			
		}, false);

		
		
		//after fastclick instantiation and listeners setup get rest of code in load fx
		
	  
	}, false);
	















