	window.addEventListener('load', function() {

		var contrasenaBtn;
		contrasenaBtn = document.getElementById('loginentrar');

		// Android 2.2 needs FastClick to be instantiated before the other listeners so that the stopImmediatePropagation hack can work.
		FastClick.attach(contrasenaBtn);

		//add event listener fx for controls
		contrasenaBtn.addEventListener('touchend', function(event) {
			//alert('touched on ok');
		}, false);

		contrasenaBtn.addEventListener('click', function(event) {
			try
			  {
				processLoginBtn();
			  }
			catch(err)
			  {
			  //Handle errors
			  }			
		}, false);

		
		
		//after fastclick instantiation and listeners setup get rest of code in load fx
		try
		  {
			$('#textnombreusuario').val(localStorage.getItem('myLastUserName'));
			$('#checkboxrecordarme').prop("checked", localStorage.getItem('myRememberMe')).checkboxradio('refresh'); //sets the checkbox
		  }
		catch(err)
		  {
		  //Handle errors
		  }			

		  
	function processLoginBtn(){
		try
		  {
			if ($('#checkboxrecordarme')[0].checked){
				localStorage.setItem('myLastUserName', $('#textnombreusuario')[0].value);
				localStorage.setItem('myRememberMe', $('#checkboxrecordarme')[0].checked);
			} else {localStorage.setItem('myLastUserName', '');localStorage.setItem('myRememberMe', 'False');}
		  }
		catch(err)
		  {
		  //Handle errors
		  }		
		//after storing username if needed it continue to credentials validation
			var myDeviceID = device.uuid;
			var myDeviceInfo = device.name + ' ' + device.platform + ' ' + device.version;
			var MOB_TK_DIR = 'http://137.117.101.234/UMS/UMS.svc/MOB_TK_GET?P1=' + $('#textnombreusuario').val() + '&P2=' + $('#contrasena').val() + '&P3=DIR' + '&P4=' + myDeviceID + '&P5=' + myDeviceInfo;
			$.ajax(MOB_TK_DIR,
			{
				beforeSend: function (xhr) {
					// $.mobile.showPageLoadingMsg();
				},

				complete: function () {
					// $.mobile.hidePageLoadingMsg();
				},
				contentType: 'application/json',
				dataType: 'jsonp',
				jsonp: 'callback',
				type: 'GET',
				error: function (xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(xhr.responseText);
					//alert(thrownError);
				},
				success: function (data) {
					var result = data.GetMOB_TK_GETResult;
					if(result.length > 1){
					$.mobile.changePage( "#contenido", { transition: "slideup"} );
					
					var GetTestWS = 'http://137.117.101.234/UMS/UMS.svc/TestWS?P1=' + result;
					$.ajax(GetTestWS,
					{
						beforeSend: function (xhr) {
							// $.mobile.showPageLoadingMsg();
						},
						complete: function () {
							// $.mobile.hidePageLoadingMsg();
						},
						contentType: 'application/json',
						dataType: 'jsonp',
						jsonp: 'callback',
						type: 'GET',
						error: function (xhr, ajaxOptions, thrownError) {
							alert(xhr.status);
							alert(xhr.responseText);
							//alert(thrownError);
						},
						success: function (data) {
							var resultGetTestWS = data.GetTestWSResult;
							$('#myWSResult').text(resultGetTestWS);
						 //end of success return call			
						}
					});						
					
					
					
					
					
					}else{
						$.mobile.changePage( "#invalidpassword", { transition: "slideup"} );
						//alert('El usuario/contraseña son inválidos');
					}

		         //end of success return call			
				}
			});				
	  
	}		  
		  
		  
	}, false);
	
/*
	function onDeviceReady() {
		var element = document.getElementById('deviceProperties');
		element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
							'Device Platform: ' + device.platform + '<br />' + 
							'Device UUID: '     + device.uuid     + '<br />' + 
							'Device Version: '  + device.version  + '<br />';
	}
	
*/
	

