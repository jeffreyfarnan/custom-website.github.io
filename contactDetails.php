<!-- example for PHP 5.0.0 final release -->

<html>
 <head>
  <title>Your submission</title>
 </head>
 <body>
 <br>

 <?php
	$Name = $_POST['name'];
	$Password = $_POST['password'];


	$Comments = $_POST['comments'];

 echo( "<br>Thanks for filling out the Form</br>" );

  echo( "<hr>" );

  echo( "Your selection is as follows<br> " );

 echo( "<strong> Name</strong>: $Name " );

 echo( "<br><strong>Password</strong>: $Password </br>" );







echo"<br><br>";

if( ( $Comments != null ) )
	{
	  $msg = "<strong>Comments</strong>:  $Comments <br>";

	  echo( $msg );
	}




 ?>

 </body>
</html>

