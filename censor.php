<?php
	$find = array('fuck', 'dick', 'boob', 'asshole', 'chut', 'lund', 'chod', 'choot', 'bhosd',);
	$replace = array('f**k', 'd**k', 'b**b', 'a*sh*le', 'c**t', 'l**d', 'c**d', 'c***t', 'b**s*',);
	
	if(isset($_GET['name'])){
		$name = $_GET['name'];
		$new_string = str_ireplace($find, $replace, $name);
		echo $new_string;
	}
?>