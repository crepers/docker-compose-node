<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
</head>
<body>
	<p>Icecream menu</p>
	<ul>
		<?php
			$json = file_get_contents('http://api-node/');
			$obj = json_decode($json);
			$items = $obj->items;
			foreach ($items as $item) {
				echo "<li>$item</li>";
			}
		?>
	</ul>
</body>
</html>