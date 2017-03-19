<?php
require('fpdf.php');

$pdf = new FPDF('P', 'mm', 'A4');
$pdf->AddPage();

// Heading
$pdf->SetFont('Arial','B',24);
$pdf->Cell(0,$height,'Loan Application',0, 0, 'C');
$pdf->Ln(8);

// Loan & Property Info - Heading
$pdf->SetFont('Arial', '', 12);
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'I. LOAN AND PROPERTY INFORMATION', 0, 0, 'C',1);
$pdf->Ln(10);

// Loan & Property Info - Details
$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);
$x = $pdf->GetX();
$y = $pdf->GetY();
$propertyValue = $_GET["propertyvalue"];
$propertyValueDisplay = "Property Value\n" . "$". $propertyValue;
$pdf->MultiCell(45, 7, $propertyValueDisplay, 'LR', 1);
$pdf->SetXY($x + 45, $y);
$loanAmount = $_GET["loanamount"];
$loanAmountDisplay = "Loan Amount\n" . "$". $loanAmount;
$pdf->MultiCell(45, 7, $loanAmountDisplay, 1, 1);
$pdf->SetXY($x + 90, $y);
$loanProgram = $_GET["loanprogram"];
$loanProgramDisplay = "Loan Term\n" . $loanProgram;
$pdf->MultiCell(45, 7, $loanProgramDisplay, 1);
$pdf->SetXY($x + 135, $y);
$impound = $_GET["impound"];
$impoundDisplay = "Impound?\n" . $impound;
$pdf->Multicell(54.5, 7, $impoundDisplay, 1);
$subjectAddress = $_GET["address"];
$subjectZipcode = $_GET["zipcode"];
$subjectAddressDisplay = "Subject Property Address (Street, City, State & Zip)\n". $subjectAddress . " " . $subjectZipcode;
$pdf->MultiCell(120, 7, $subjectAddressDisplay, 1, 1);
$propertyType = $_GET["propertytype"];
$propertyTypeDisplay = "Property Type\n" . $propertyType;
$pdf->SetXY($x + 120, $y + 14);
$pdf->MultiCell(69.5, 7, $propertyTypeDisplay, 1, 1);

// Borrower's Info
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'II. BORROWER INFORMATION', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$firstName = $_GET["firstname"];
$middleName = $_GET["middlename"];
$lastName = $_GET["lastname"];
$fullname = "Borrower's Name\n" . $firstName . " " . $middleName . " " . $lastName;
$pdf->MultiCell(90, 7, $fullname, 1, 1);
$gender = $_GET["gender"];
$genderDisplay = "Gender\n" . $gender;
$pdf->SetXY($x + 90, $y + 38);
$pdf->MultiCell(45, 7, $genderDisplay, 1, 1);
$martial = $_GET["martialstatus"];
$martialDisplay = "Martial Status\n" . $martial;
$pdf->SetXY($x + 135, $y + 38);
$pdf->MultiCell(54.5, 7, $martialDisplay, 1, 1);

$ss = $_GET["ss"];
$ssDisplay = "Social Security\n" . $ss . " ";
$pdf->MultiCell(45, 7, $ssDisplay, 1, 1);
$citizenship = $_GET["citizenship"];
$citizenshipDisplay = "Citizenship\n" . $citizenship;
$pdf->SetXY($x + 45, $y + 52);
$pdf->MultiCell(45, 7, $citizenshipDisplay, 1, 1);
$dob = $_GET["dob"];
$dobDisplay = "Date of Birth\n" . $dob . " ";
$pdf->SetXY($x + 90, $y + 52);
$pdf->MultiCell(45, 7, $dobDisplay, 1, 1);
$score = $_GET["creditscore"];
$scoreDisplay = "Credit Score\n" . $score . " ";
$pdf->SetXY($x + 135, $y + 52);
$pdf->MultiCell(54.5, 7, $scoreDisplay, 1, 1);

$bankruptcy = $_GET["bankruptcy"];
$bankruptcyDisplay = "Bankruptcy/Foreclosure/Shortsale?\n" . $bankruptcy . " ";
$pdf->MultiCell(90, 7, $bankruptcyDisplay, 1, 1);
$phone = $_GET["phone"];
$phoneDisplay = "Phone\n" . $phone . " ";
$pdf->SetXY($x + 90, $y + 66);
$pdf->MultiCell(45, 7, $phoneDisplay, 1, 1);
$email = $_GET["email"];
$emailDisplay = "Email\n" . $email . " ";
$pdf->SetXY($x + 135, $y + 66);
$pdf->MultiCell(54.5, 7, $emailDisplay, 1, 1);

$brstreet = $_GET["brstreet"];
$brzip = $_GET["brzipcode"];
$braddress = "Current Address\n" . $brstreet . " " . $brzip;
$pdf->MultiCell(189.5, 7, $braddress, 1, 1);
$broccupancy = $_GET["broccupancy"];
$broccupancyDisplay = "Occupancy\n" . $broccupancy . " ";
$pdf->MultiCell(63.1, 7, $broccupancyDisplay, 1, 1);
$bryears = $_GET["bryears"];
$brYearsDisplay = "Years of Residence\n" . $bryears . " ";
$pdf->SetXY($x + 63.1, $y + 94);
$pdf->MultiCell(63.1, 7, $brYearsDisplay, 1, 1);
$brmonths = $_GET["brmonths"];
$brMonthsDisplay = "Months of Residence\n" . $brmonths . " ";
$pdf->SetXY($x + 126.2, $y + 94);
$pdf->MultiCell(63.2, 7, $brMonthsDisplay, 1, 1);

// Co-Borrower's Info
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'CO-BORROWER INFORMATION', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$cofirstName = $_GET["cofirstname"];
$comiddleName = $_GET["comiddlename"];
$colastName = $_GET["colastname"];
$cofullname = "Co-Borrower's Name\n" . $cofirstName . " " . $comiddleName . " " . $colastName;
$pdf->MultiCell(90, 7, $cofullname, 1, 1);
$cogender = $_GET["cogender"];
$cogenderDisplay = "Gender\n" . $cogender . " ";
$pdf->SetXY($x + 90, $y + 118);
$pdf->MultiCell(45, 7, $cogenderDisplay, 1, 1);
$comartial = $_GET["comartialstatus"];
$comartialDisplay = "Martial Status\n" . $comartial . " ";
$pdf->SetXY($x + 135, $y + 118);
$pdf->MultiCell(54.5, 7, $comartialDisplay, 1, 1);

$coss = $_GET["coss"];
$cossDisplay = "Social Security\n" . $coss . " ";
$pdf->MultiCell(45, 7, $cossDisplay, 1, 1);
$cocitizenship = $_GET["cocitizenship"];
$cocitizenshipDisplay = "Citizenship\n" . $cocitizenship . " ";
$pdf->SetXY($x + 45, $y + 132);
$pdf->MultiCell(45, 7, $cocitizenshipDisplay, 1, 1);
$codob = $_GET["codob"];
$codobDisplay = "Date of Birth\n" . $codob . " ";
$pdf->SetXY($x + 90, $y + 132);
$pdf->MultiCell(45, 7, $codobDisplay, 1, 1);
$coscore = $_GET["cocreditscore"];
$coscoreDisplay = "Credit Score\n" . $coscore . " ";
$pdf->SetXY($x + 135, $y + 132);
$pdf->MultiCell(54.5, 7, $coscoreDisplay, 1, 1);

$cobankruptcy = $_GET["cobankruptcy"];
$cobankruptcyDisplay = "Bankruptcy/ Foreclosure/ Shortsale?\n" . $cobankruptcy . " ";
$pdf->MultiCell(90, 7, $cobankruptcyDisplay, 1, 1);
$cophone = $_GET["cophone"];
$cophoneDisplay = "Phone\n" . $cophone ." ";
$pdf->SetXY($x + 90, $y + 146);
$pdf->MultiCell(45, 7, $cophoneDisplay, 1, 1);
$coemail = $_GET["coemail"];
$coemailDisplay = "Email\n" . $coemail . " ";
$pdf->SetXY($x + 135, $y + 146);
$pdf->MultiCell(54.5, 7, $coemailDisplay, 1, 1);

$cobrstreet = $_GET["cobrstreet"];
$cobrzip = $_GET["cobrzipcode"];
$cobraddress = "Current Address\n" . $cobrstreet . " " . $cobrzip;
$pdf->MultiCell(189.5, 7, $cobraddress, 1, 1);
$cobroccupancy = $_GET["cobroccupancy"];
$cobroccupancyDisplay = "Occupancy\n" . $cobroccupancy . " ";
$pdf->MultiCell(63.1, 7, $cobroccupancyDisplay, 1, 1);
$cobryears = $_GET["cobryears"];
$cobrYearsDisplay = "Years of Residence\n" . $cobryears . " ";
$pdf->SetXY($x + 63.1, $y + 174);
$pdf->MultiCell(63.1, 7, $cobrYearsDisplay, 1, 1);
$cobrmonths = $_GET["cobrmonths"];
$cobrMonthsDisplay = "Months of Residence\n" . $cobrmonths . " ";
$pdf->SetXY($x + 126.2, $y + 174);
$pdf->MultiCell(63.2, 7, $cobrMonthsDisplay, 1, 1);

// Employment
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'III. EMPLOYMENT', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$employername = $_GET["employername"];
$employerNameDisplay = "Employer Name\n" . $employername . " ";
$pdf->MultiCell(90, 7, $employerNameDisplay, 1, 1);
$pdf->SetXY($x + 90, $y + 198);
$employerstreet = $_GET["employerstreet"];
$employerzipcode = $_GET["employerzipcode"];
$employeraddress = $employerstreet . $employerzipcode;
$employerAddressDisplay = "Employer Address\n" . $employeraddress . " ";
$pdf->MultiCell(99.5, 7, $employerAddressDisplay, 1, 1);
$employment = $_GET["employment"];
$employmentDisplay = "Employment Status\n" . $employment . " ";
$pdf->MultiCell(63.1, 7, $employmentDisplay, 1, 1);
$position = $_GET["position"];
$positionDisplay = "Position\n" . $position . " ";
$pdf->SetXY($x + 63.1, $y + 212);
$pdf->MultiCell(63.1, 7, $positionDisplay, 1, 1);
$income = $_GET["pretaxincome"];
$incomeDisplay = "Monthly Pre-tax Income\n" . $income . " ";
$pdf->SetXY($x + 126.2, $y + 212);
$pdf->MultiCell(63.2, 7, $incomeDisplay, 1, 1);
$startdate = $_GET["startdate"];
$startdateDisplay = "Start Date\n" . $startdate . " ";
$pdf->MultiCell(63.1, 7, $startdateDisplay, 1, 1);
$yearsinprofession = $_GET["yearsinprofession"];
$yearsinprofessionDisplay = "Years in Profession\n" . $yearsinprofessionDisplay . " ";
$pdf->SetXY($x + 63.1, $y + 226);
$pdf->MultiCell(63.1, 7, $yearsinprofessionDisplay, 1, 1);
$employerphone = $_GET["employerphone"];
$employerphoneDisplay = "Employer Phone\n" . $employerphone . " ";
$pdf->SetXY($x + 126.2, $y + 226);
$pdf->MultiCell(63.2, 7, $employerphoneDisplay, 1, 1);

// Past Employment
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'PAST EMPLOYER', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$employername2 = $_GET["employername2"];
$employerNameDisplay2 = "Employer Name\n" . $employername2 . " ";
$pdf->MultiCell(90, 7, $employerNameDisplay2, 1, 1);
$pdf->SetXY($x + 90, $y - 8);
$employerstreet2 = $_GET["employerstreet2"];
$employerzipcode2 = $_GET["employerzipcode2"];
$employeraddress2 = $employerstreet2 . $employerzipcode2;
$employerAddressDisplay2 = "Employer Address\n" . $employeraddress2 . " ";
$pdf->MultiCell(99.5, 7, $employerAddressDisplay2, 1, 1);
$employment2 = $_GET["employment2"];
$employmentDisplay2 = "Employment Status\n" . $employment2 . " ";
$pdf->MultiCell(63.1, 7, $employmentDisplay2, 1, 1);
$position2 = $_GET["position2"];
$positionDisplay2 = "Position\n" . $position2 . " ";
$pdf->SetXY($x + 63.1, $y + 6);
$pdf->MultiCell(63.1, 7, $positionDisplay2, 1, 1);
$income2 = $_GET["pretaxincome2"];
$incomeDisplay2 = "Monthly Pre-tax Income\n" . $income2 . " ";
$pdf->SetXY($x + 126.2, $y + 6);
$pdf->MultiCell(63.2, 7, $incomeDisplay2, 1, 1);
$startdate2 = $_GET["startdate2"];
$startdateDisplay2 = "Start Date\n" . $startdate2 . " ";
$pdf->MultiCell(45, 7, $startdateDisplay2, 1, 1);
$enddate2 = $_GET["enddate2"];
$enddateDisplay2 = "End Date\n" . $enddate2 . " ";
$pdf->SetXY($x + 45, $y + 20);
$pdf->MultiCell(45, 7, $enddateDisplay2, 1, 1);
$yearsinprofession2 = $_GET["yearsinprofession2"];
$yearsinprofessionDisplay2 = "Years in Profession\n" . $yearsinprofessionDisplay2 . " ";
$pdf->SetXY($x + 90, $y + 20);
$pdf->MultiCell(45, 7, $yearsinprofessionDisplay2, 1, 1);
$employerphone2 = $_GET["employerphone2"];
$employerphoneDisplay2 = "Employer Phone\n" . $employerphone2 . " ";
$pdf->SetXY($x + 135, $y + 20);
$pdf->MultiCell(54.5, 7, $employerphoneDisplay2, 1, 1);

// Asset 1
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'IV. ASSETS', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$assettype1 = $_GET["assettype1"];
$assetDisplay1 = "Asset Type\n" . $assettype1 . " ";
$pdf->MultiCell(63.1, 7, $assetDisplay1, 1, 1);

$pdf->SetXY($x + 63.1, $y + 44);
$assetname1 = $_GET["nameofasset1"];
$assetnameDisplay1 = "Name of Institute\n" . $assetname1 . " ";
$pdf->MultiCell(63.1, 7, $assetnameDisplay1, 1, 1);

$pdf->SetXY($x + 126.2, $y + 44);
$assetbalance1 = $_GET["asset1balance"];
$assetBalanceDisplay1 = "Approximate Balance\n" . $assetbalance1 . " ";
$pdf->MultiCell(63.1, 7, $assetBalanceDisplay1, 1, 1);

// Asset 2
$assettype2 = $_GET["assettype2"];
$assetDisplay2 = "Asset Type\n" . $assettype2 . " ";
$pdf->MultiCell(63.1, 7, $assetDisplay1, 1, 1);

$pdf->SetXY($x + 63.1, $y + 58);
$assetname2 = $_GET["nameofasset2"];
$assetnameDisplay2 = "Name of Institute\n" . $assetname2 . " ";
$pdf->MultiCell(63.1, 7, $assetnameDisplay2, 1, 1);

$pdf->SetXY($x + 126.2, $y + 58);
$assetbalance2 = $_GET["asset2balance"];
$assetBalanceDisplay2 = "Approximate Balance\n" . $assetbalance2 . " ";
$pdf->MultiCell(63.1, 7, $assetBalanceDisplay2, 1, 1);

// Asset 3
$assettype3 = $_GET["assettype3"];
$assetDisplay3 = "Asset Type\n" . $assettype3 . " ";
$pdf->MultiCell(63.1, 7, $assetDisplay3, 1, 1);

$pdf->SetXY($x + 63.1, $y + 72);
$assetname3 = $_GET["nameofasset3"];
$assetnameDisplay3 = "Name of Institute\n" . $assetname3 . " ";
$pdf->MultiCell(63.1, 7, $assetnameDisplay3, 1, 1);

$pdf->SetXY($x + 126.2, $y + 72);
$assetbalance3 = $_GET["asset3balance"];
$assetBalanceDisplay3 = "Approximate Balance\n" . $assetbalance3 . " ";
$pdf->MultiCell(63.1, 7, $assetBalanceDisplay3, 1, 1);

// Asset 4
$assettype4 = $_GET["assettype4"];
$assetDisplay4 = "Asset Type\n" . $assettype4 . " ";
$pdf->MultiCell(63.1, 7, $assetDisplay4, 1, 1);

$pdf->SetXY($x + 63.1, $y + 86);
$assetname4 = $_GET["nameofasset4"];
$assetnameDisplay4 = "Name of Institute\n" . $assetname4 . " ";
$pdf->MultiCell(63.1, 7, $assetnameDisplay4, 1, 1);

$pdf->SetXY($x + 126.2, $y + 86);
$assetbalance4 = $_GET["asset4balance"];
$assetBalanceDisplay4 = "Approximate Balance\n" . $assetbalance4 . " ";
$pdf->MultiCell(63.1, 7, $assetBalanceDisplay4, 1, 1);

// Additional Information
$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'V. ADDITIONAL INFORMATION', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$response = $_GET["response"];
$consent = "I hereby authorize TD LENDING to order a consumer credit report and verify other credit information, including past and present mortgage and landlord references. It is understood that by checking yes, this will serve as my written authorization for you to pull my credit for mortgage purposes.\n" . "Borrower's Response: " . $response . " " ;
$pdf->MultiCell(189.5, 7, $consent, 1, 1);

$pdf->setFillColor(0,0,0);
$pdf->SetTextColor(255,255,255);
$pdf->Cell(0,10,'MESSAGE', 0, 0, 'C',1);
$pdf->Ln(10);

$pdf->setFillColor(255, 255, 255);
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 12);

$comment = $_GET["comment"];
$commentDisplay = "Borrower's Message to TD Lending\n" . $comment . " ";
$pdf->MultiCell(189.5, 7, $commentDisplay, 1, 1);

// Code below to email attachment
$to = "tylerhuynh100@gmail.com, thomas_dao@yahoo.com";
$from = "contact@iloannow.com";
$subject = "New Loan Application Submission";
$message = "<p>New loan application has been submitted. Please see attachment.</p>";

// Random hash to send mixed content
$separator = md5(time());
// Carriage return type
$eol = PHP_EOL;

// Attachment name
$filename = "application.pdf";

// Encode data (puts attachment in proper format)
$pdfdoc = $pdf->Output("", "S");
$attachment = chunk_split(base64_encode($pdfdoc));

// main header
$headers  = "From: ".$from.$eol;
$headers .= "MIME-Version: 1.0".$eol;
$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

// no more headers after this, we start the body! //

$body = "--".$separator.$eol;
$body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;
$body .= "This is a MIME encoded message.".$eol;

// message
$body .= "--".$separator.$eol;
$body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;
$body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;
$body .= $message.$eol;

// attachment
$body .= "--".$separator.$eol;
$body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol;
$body .= "Content-Transfer-Encoding: base64".$eol;
$body .= "Content-Disposition: attachment".$eol.$eol;
$body .= $attachment.$eol;
$body .= "--".$separator."--";

// send message
mail($to, $subject, $body, $headers);
header('Location: templates/loan-confirm.html');
//$pdf->Output();
?>
