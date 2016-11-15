$(document).ready(function(){
	console.log("$ firing");
	//var tile= nFilter.setAttribute("style", "width:330px;float:left;");


	var phrase="catcher in the rye";
	var phrase_length= phrase.length;


	var tile='<style> #tile{padding: 5px} </style> <img src = "http://placehold.it/100x150">';
	for (var i=0; i<phrase_length; i++){
	$("#tile").append(tile);
	}
	// $( "#tile" ).html(tile);

})