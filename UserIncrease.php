<?php

	class Data {
		var $date;
		var $device;
	}

	$con = mysql_connect("localhost","root",'J$p1ter1') or die(mysql_error());
	mysql_select_db("Instrument", $con) or die(mysql_error());
	
	$query = "SELECT Day AS Day, COUNT(*) AS Device from (SELECT instrument.HardwareId, FROM_DAYS(TO_DAYS(MIN(LogTime))) AS Day from instrument Group by HardwareId) AS t1 GROUP BY Day;";
		
	$data = mysql_query($query) or die ('Failed to insert into database.');
	
	$resultArray = new ArrayObject();
	while($row = mysql_fetch_array($data)) {
    $tmp = new Data();
		$tmp->date = $row['Day'];
		$tmp->device = $row['Device'];
		$resultArray->append($tmp);
	}
	echo json_encode($resultArray);
	mysql_close($con);
?>
