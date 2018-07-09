$("#input").keyup(function () {
	
	var name = $("#input").val() + '&nbsp;';
	console.log(name);
	$.ajax({
		type: 'GET',
		url: '../php/censor.php',
		statusCode: {
			404: function(){
				$("#content").text("Error: 404. page not found");
			}
		},
		data: "name="+name,
		success: function(data){
			$("#input").val(data);
		}
	});
});