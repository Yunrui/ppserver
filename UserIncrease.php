<?php

	class Data {
		var $date;
		var $device;
		var $user;
	}

	$con = mysql_connect("localhost","root",'J$p1ter1') or die(mysql_error());
	mysql_select_db("Instrument", $con) or die(mysql_error());
	
	$query = "SELECT DeviceIncrease.Day as Day, Device, User from DeviceIncrease LEFT JOIN UserIncrease ON DeviceIncrease.Day = UserIncrease.Day UNION SELECT UserIncrease.Day as Day, Device, User from UserIncrease LEFT JOIN DeviceIncrease ON DeviceIncrease.Day = UserIncrease.Day;";
		
	$data = mysql_query($query) or die ('Failed to insert into database.');
	
	$resultArray = array();
	while($row = mysql_fetch_array($data)) {
    		$tmp = new Data();
		$tmp->date = $row['Day'];
		$tmp->device = $row['Device'];
		$tmp->user = $row['User'];
		$resultArray[] = ($tmp);
	}
	echo json_encode($resultArray);
	mysql_close($con);
?>
