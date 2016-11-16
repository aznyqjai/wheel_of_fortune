$(document).ready(function(){
	console.log("$ firing");
	//var tile= nFilter.setAttribute("style", "width:330px;float:left;")
	draw_board();
	// $("#intro").fadeOut(3000);
})

function start_game(){
	$("#intro").fadeOut();
	$("#game").fadeIn(2000);
}

var phraselist=[
'ANGORA SWEATER',
'BEAUTIFUL GLASS VASE',
'BLUE JEANS',
'BRONZE TABLE LAMPS',
'CHRISTMAS WREATH',
'COMFORTABLE COUCH',
'COMFY LOAFERS',
'COMFY SOFA',
'CORDLESS PHONE',
'DECORATIVE AREA RUGS',
'DIMMER SWITCH',
'DOWN COMFORTER',
'ENGRAVED BATH SOAPS',
'FABRIC SOFTENER',
'FAMILY PHOTOS',
'FINE CHINA',
'FIRM PILLOWS',
'FLUFFY BATHROBE',
'FLUFFY PILLOWS',
'FOOTSTOOL',
'GARDENING GLOVES',
'GARDENING TOOLS',
'HOME THEATER SYSTEM',
'HORIZONTAL METAL SHED',
'HOT WATER HEATER',
'INCENSE BURNER',
'KITCHEN CABINETS',
'KITCHEN TABLE',
'LAWN SPRINKLER',
'MAHOGANY COFFEE TABLE',
'OUTDOOR RUGS',
'PORTABLE HEATER',
'STEAM MOP',
'PATIO LIGHTS',
'TOY TELEPHONE',
'WOODEN BOOKSHELVES'
];//home stuff


function spinner(){

}


var num=Math.floor((Math.random() * phraselist.length) + 1);
var phrase=phraselist[num];
var phrase_length=phrase.length;


function draw_board(){
	var tile='';
	for (var i=0; i<phrase_length; i++){
		if (phrase[i]===' '){
			//$("#tile_board").append('<span id="tile'+i+'" class="space"><h2></h2></span>');
			tile+= '<span id="tile'+i+'" class="space"><h2>&nbsp;</h2></span>'
		}

		else {
			tile+='<span id="tile'+i+'" class="tile"><h2>&nbsp;</h2></span>';
			//$("#tile_board").append('<span id="tile'+i+'" class="tile"><h2></h2></span>');
		}
	}
	$("#tile_board").html(tile);
}


function new_puzzle(){
	num=Math.floor((Math.random() * phraselist.length) + 1);
	phrase=phraselist[num];
	draw_board();
}


var user_entered=[];
var counter=0;
var score=0;

function dosearch(){
	var input = $("#user_input").val();
	user_entered.push(input.toUpperCase());
	counter++;

	var found=false;
	var found_times=0;

	for (var i=0; i<phrase_length; i++){
		if (input.toUpperCase()===phrase[i]){
			$("#tile"+i).replaceWith('<span id="tile'+i+'" class="tile"><h2>'+input.toUpperCase()+'</h2></span>');
			found=true;
			found_times++;
			score+=100;
		}

		// else {
		// 	console.log("not found");
		// 	// tile+='<span id="tile'+i+'" class="tile"><h2>&nbsp;</h2></span>';
		// }

		// $("#tile_board").html(tile);	
	}

	$("#score_board").html(score);

	console.log("letter found?  " + found);
	console.log("letter found "+ found_times + " times");
	$("#user_input").val("");
	console.log(counter);
	console.log(user_entered);

	if (counter==5){
		$('#myModal').modal();
	}
}

function solve(){
	if (($("#solve").val()).toUpperCase()==phrase){
		$("#solvetext").html('<h4> Congratuation you won</h4>');
		console.log("you won");
		score+=1000;
		// setTimeout(function(){location.reload();}, 3000);

	}
	else {
		$("#solvetext").html('<h4> YOU FAILED </h4>');
		console.log("you lost");
		// setTimeout(function(){location.reload();}, 3000);
	}
}












/*
var phrase="catcher in the rye is";
var phrase="all good soliders run";

var phrase_diced=phrase.split(""); 
var phrase_length=phrase_diced.length;
// var endpoing=0;

// for (var i=0; i<phrase_length; i++){
// 	if ((phrase[i]+phrase[i+1])>12){

// 	}
// }
function break_on_letter(phrase){
	// singles words should not br broken
	// split on spaces where possible
	// max letters in a row = 12 letters
	// no phase is bigger than 24 characters
	return 11; 
}
function draw_board(){
	phrase_diced.forEach(function(element, index, arr) {
	    //console.log('element: '+ element + ' index: '+ index);
	    //console.log(arr);
	    var new_line = (index == break_on_letter(phrase_diced)) ? 'new_line' : ''
	    $("#title_board").append('<span id="tile'+index+'" class="tile ' + new_line + '"><h2>' + element + '</h2></span>');
	});
	//var tile='';
	//for (var i=0; i<phrase_diced.length; i++){
		// for (var j=0; j<phrase_diced[0].length; j++){
		// 	// if (phrase_diced[i].length + phrase_diced[i+1].length>12){
		// 	// 	//phrase_diced[i+1]
		// 	// }
		// 	// else {
 	// 		$("#line1").append('<span id="tile'+j+'" class="tile"><h2></h2></span>');
		// 	// }
		// }
	//}
	
	phrase_diced.forEach(function(element){
		console.log("length of element  " + element.length);
		for (var i=0; i<element.length; i++){
			//if (element[])
			$("#line1").append('<span id="tile'+i+'" class="tile"><h2></h2></span>');
		}
	})
	
}
*/


/*
var a = ["a", "b", "c"];

a.forEach(function(element, index, arr) {
    console.log('element: '+ element + ' index: '+ index);
    console.log(arr);
});
*/
