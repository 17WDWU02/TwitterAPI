$("#form").submit(function(event){
	event.preventDefault();
	var url = "http://localhost:3000";
	var value = $("#search").val();
	if(value.length > 0){
		url += "/search=" + value;
	} else {
		alert("please enter a value");
		return;
	}

	$.ajax({
		url:url,
		dataType:"json",
		success: function(data){
			var tweet = data.statuses[0];
			console.log(tweet);
			$("#Latest").empty();
			$("#Latest").append("<h3>"+tweet.user.name+"<h3>"+
				"<img style='width:100px;' src='"+tweet.user.profile_image_url+"'>"+
				"<p>"+tweet.text+"</p>"
				);
		},
		error: function(){
			console.log("error");
		}
	})

});

$("#SendTweet").submit(function(event){
	event.preventDefault();
	var url = "http://localhost:3000";
	var value = $("#TwitterMessage").val();
	if(value.length == 0){
		alert("Please enter a value");
		return;
	} else if(value.length > 140){
		alert("Must be less than 140 characters");
		return;
	} else {
		url += "/send=" + value;
	}
	$.ajax({
		url: url,
		dataType: "json",
		type: "post",
		success:function(){
			$("#result").text("Your Tweet: " + value + " -  has been sent");
		},
		error:function(){
			console.log("error");
		}
	})
})











