function send_command(){
	var command = $('#term_text').val();
	if (command == "clr"){
		$('#term_textarea').val('');
	}else if (command == ""){
		window.alert("Invalid Command");
	}else{
		$.ajax({
			url: 'send_command.php',
			method: 'POST',
			data: {command:command},
			dataType: 'json',
					success: function(res) {
						var value = "";
						res.forEach(function(element) {
							value = value + element + "\n";
						});
						$('#term_textarea').val($('#term_textarea').val() + "\nuser>" + command);
						$('#term_textarea').val($('#term_textarea').val() + "\nsystem>\n" + value);
						$('#term_text').val('');
						$('#term_textarea').scrollTop($('#term_textarea')[0].scrollHeight);
					}
		})
	}
}

function runScript(e) {
    if (e.keyCode == 13) {
        send_command();
        return false;
    }
}
