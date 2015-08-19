
console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$("#submit").on("click", function(event){
	var search = $("#keyword").val();
	console.log(search);
	$.get('https://api.spotify.com/v1/search?q=' + search + '&type=track', function(response_data){
	console.log(response_data.tracks.items[0].artists[0].name);
		response_data.tracks.items.forEach(function(elem){
			$('body').append('<p>' + elem.artists[0].name + ": " + elem.name + '</p>');
		})
})
})



});

