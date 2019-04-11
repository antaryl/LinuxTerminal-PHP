<html>
	<head>
		<link rel="stylesheet" type="text/css" href="term.css" />
		<script type="text/javascript" src="../js/jQuery.js"></script>
		<script type="text/javascript" src="term.js"></script>
		<title>~Terminal~</title>
	</head>
	<body>
		<div style="width:50%">
			<textarea id="term_textarea" readonly rows="20" cols="50" ></textarea>
			<br>
			<input id="term_text" onkeypress="return runScript(event)" type="text" /> 
			<button id="term_enter_button" onClick="send_command();">Enter<br><---|</button>
		</div>
	</body>
</html>