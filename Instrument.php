<?php

	$con = mysql_connect("localhost","root",'J$p1ter1') or die(mysql_error());
	mysql_select_db("Instrument", $con) or die(mysql_error());

  $json = json_decode($_POST["Instrument"]) or die('Failed to pass input content.');
  foreach($json as $key => $value) {
    foreach($value as $n => $v) {
      if ($n == "CustomA") {
        $customA = $v;
      }
      if ($n == "CustomB") {
        $customB = $v;
      }
      if ($n == "CustomC") {
        $customC = $v;
      }
      if ($n == "Version") {
        $version = $v;
      }
      if ($n == "Event") {
        $event = $v;
      }
      if ($n == "HardwareId") {
        $hardwareId = $v;
      }
      if ($n == "UserId") {
        $userId = $v;
      }
      if ($n == "LogTime") {
        $logTime = $v;
      }
    }
		
		$dateTime = date("Y-m-d H:i:s" ,strtotime( $logTime ));
		$insert = "INSERT INTO instrument (LogTime, UserId, HardwareId, Event, Version, CustomA, CustomB, CustomC) VALUE ('$dateTime', '$userId', '$hardwareId', '$event', '$version', '$customA', '$customB', '$customC')";
		mysql_query($insert) or die ('Failed to insert into database.');
  }

	mysql_close($con);
  echo 'Uploaded!';
?>
