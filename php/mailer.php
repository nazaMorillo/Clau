<?php 

	$to = "nazamorillo1@gmail.com";
	$subject = 'Consulta de Maquillaje' .$email. ' desde formulario web'; 
	 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$telefono = $_POST['telefono'];
	$message = $_POST['message'];	 
	$body = "Mensaje de: $nombre
	Correo: $email
	Telefono: $telefono
	Consulta: $message";	
	
	$headers = 'From: '.$email."\r\n";
	

//*************************************************************
		
	if( mail($to, $subject, $body, $headers) )
		{			
			$subject2 = ' Su consulta en www.claudiaserrano.esy.es '; 
			$body2 = " $nombre, gracias por visitar mi sitio Web, su consulta es la siguiente ... $message , le respondere a la brevedad. Saludos.\n\n \t\t Claudia Serrano ";
			
			$headers2 = 'From: '.$to."\r\n";		
			$Response =  mail($email, $subject2, $body2, $headers2);			
		/*enviado*/	
		}	
	
    else
		{ /*error*/ }

?>