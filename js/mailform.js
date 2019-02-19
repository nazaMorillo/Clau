// JavaScript Document
$(function() {
	$('.error').hide();
	$(".btn_send").click(function() {
		$('.error').hide();
		
	   var nombre = $("#nombre").val();
		if (nombre == "") {
			$('#nombre_error').html("Por favor complete el campo Nombre!");
			$("#nombre_error").fadeIn('fast');
			$("#nombre").focus();
			return false;
		}		
		
		var email = $("#email").val();
		if (email == "") {
			$('#email_error').html("Por favor complete el campo Correo Electrónico!");
			$("#email_error").fadeIn('fast');
			$("#email").focus();
			return false;
		}

		var Xemail = $("#email").val();
		var atpos = Xemail.indexOf("@");
		var dotpos = Xemail.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=Xemail.length) {
			$('#email_error').html("Correo Electrónico inválido!");
			$("#email_error").fadeIn('fast');
			$("#email").focus();
			return false;
	   }
	   
		var telefono = $("#telefono").val();
		
			   
		var message = $("#message").val();
		if (message == "") {
			$('#message_error').html("Por favor complete el campo Mensaje!");
			$("#message_error").fadeIn('fast');
			$("#message").focus();
			return false;
		}
		
		
		var dataString = '&nombre=' + nombre + '&email=' + email + '&telefono=' + telefono +'&message=' + message;
		$.ajax({
			type: "POST",
			url: "php/mailer.php",
			data: dataString,
			success: function() {
				$('#contactResponse').html("!Gracias por tu consulta!");
				$("#nombre").val('');
				$("#email").val('');
				$("#telefono").val('');
				$("#message").val('');				
				$(".btn_send").attr("disabled", false);
				//$('#contactResponse').delay(2500).fadeOut('fast');
			},

			error: function(){
				$('#contactResponse').html("Error, intente de nuevo mas tarde");
				$("#nombre").val('');
				$("#email").val('');
				$("#telefono").val('');
				$("#message").val('')
				//$('#contactResponse').delay(2500).fadeOut('fast');
			}

		});
		return false;		
	});
});
