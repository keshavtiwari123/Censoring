$("#input").keyup(function () {
	
	var name = $("#input").val() + '&nbsp;';
	$.ajax({
		type: 'GET',
		url: 'censor.php',
		statusCode: {
			404: function(){
				$("#input").val("Error: 404. page not found");
			}
		},
		data: "name="+name,
		success: function(data){
			$("#input").val(data);
		}
	});
});
