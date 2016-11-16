$(document).ready(function(){
	console.log("$ firing");
	//var tile= nFilter.setAttribute("style", "width:330px;float:left;")
	draw_board();
})

var phrase="catcher in the rye";
var phrase_length= phrase.length;

function draw_board(){
var tile='';
	for (var i=0; i<phrase_length; i++){
		if (phrase[i]===' '){
			// $("#tile_board").html('<span id="tile'+i+'" class="tile"><h2></h2>i</span>');
			tile+= '<span id="tile'+i+'" class="space"><h2>&nbsp;</h2></span>'
		}

		else {
			tile+='<span id="tile'+i+'" class="tile"><h2>&nbsp;</h2></span>';
			// $("#tile_board").append('<span id="tile'+i+'" class="tile"><h2></h2></span>');
		}
	}
	$("#tile_board").html(tile);

}

var user_entered=[];
var counter=0;

function dosearch(){
	var input = $("#user_input").val();
	user_entered.push(input);
	counter++;

	for (var i=0; i<phrase_length; i++){
		if (phrase[i]===input){
			$("#tile"+i).replaceWith('<span id="tile'+i+'" class="tile"><h2>'+input.toUpperCase()+'</h2></span>');
		}

	//counter++;
		// else {
		// 	tile+='<span id="tile'+i+'" class="tile"><h2>&nbsp;</h2></span>';
		// }

		// $("#tile_board").html(tile);	
	}
	$("#user_input").val("");
	console.log(counter);
	console.log(user_entered);
}

