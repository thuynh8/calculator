<?php
	ob_start();
	if(!isset($_POST['submit'])) {
		//This page should not be accessed directly. Need to submit the form.
		echo "Error! You need to submit the form!";
	}

	$firstName = $_POST["firstname"];
	$middleName = $_POST["middlename"];
	$lastName = $_POST["lastname"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$question = $_POST["message"];

	$propertyValue = $_POST["propertyvalue"];
	$loanAmount = $_POST["loanamount"];
	$propertyType = $_POST["propertytype"];
	$occupancy = $_POST["occupancy"];
	$loanPurpose = $_POST["loanpurpose"];
	$impound = $_POST["impound"];
	$loanTerm = $_POST["loanterm"];
	$state = $_POST["state"];

	$body = "Fullname: $firstName $middleName $lastName\n".
			"Phone: $phone\n".
			"Email: $email\n" .
			"Message: $question\n\n\n" .
			"Loan Details: \n".
			"Property Value: $propertyValue\n".
			"Property Type: $propertyType\n".
			"Loan Amount: $loanAmount\n" .
			"Loan Term: $loanTerm\n" .
			"Occupancy: $occupancy\n" .
			"Loan Purpose: $loanPurpose\n".
			"Impound: $impound\n".
			"State: $state\n";
	//Validate first
	if(empty($firstName) || empty($lastName) || empty($phone) || empty($email) || empty($question))
	{
	    echo "First Name, Last Name, Phone, Email, and Message are Mandatory";
	    exit;
	}

	if(IsInjected($email))
	{
	    echo "Bad email value!";
	    exit;
	}

	$email_from = 'contact@iloannow.com';//<== update the email address
	$email_subject = "New Question Submission";
	$email_body = "You have received a new message from the user $firstName $lastName.\n".
	    "Here is the message:\n $body \n".

	$to = "tylerhuynh100@gmail.com, thomas_dao@yahoo.com";//<== update the email address
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $email \r\n";
	//Send the email!
	mail($to,$email_subject,$email_body,$headers);
	//done. redirect to thank-you page.

	header('Location: ../templates/confirmation.html');

	// Function to validate against any email injection attempts
	function IsInjected($str)
	{
	  $injections = array('(\n+)',
	              '(\r+)',
	              '(\t+)',
	              '(%0A+)',
	              '(%0D+)',
	              '(%08+)',
	              '(%09+)'
	              );
	  $inject = join('|', $injections);
	  $inject = "/$inject/i";
	  if(preg_match($inject,$str))
	    {
	    return true;
	  }
	  else
	    {
	    return false;
	  }
	}
?>
