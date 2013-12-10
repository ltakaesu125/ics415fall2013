<!DOCTYPE HTML>
<html>
<head>

</head>

<body>
	<h1>Previous Entries</h1>
	<?php
		$file=fopen("comment.txt", "a+") or exit ("Unable to locate file!");
		while(!feof($file)){
			echo nl2br(fgets($file));
		}
		fclose($file);
	?>
	<br />
	<br />
	<form action="a13.php" method="post" action="<?php $_SERVER['PHP_SELF'];?>">
	Comment: <input type="text" name="comment">
	<input type="submit" value="Submit">
	</form>
	<?php
		$file=fopen("comment.txt.", "a+") or exit ("Unable to locate file!");
		$newComment = $_POST["comment"]."\n";
		fwrite($file, $newComment);
		fclose($file);
	?>
</body

</html>