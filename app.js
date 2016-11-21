$(document).ready(function(){
	console.log("$ firing");
	$("#game").hide();
})



function phrase(){
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

	var num=Math.floor((Math.random() * phraselist.length)+1);
	console.log(num);
	return phraselist[num];
}

function Puzzle(){
	this.score=0;
	this.phrase='';
	this.char_found_times=0;
	this.chars_searched=[];
	// this.enoughpoint=false;

	this.draw_board=function(phrase){
		this.phrase=phrase.toUpperCase();
		var tile='';
		for (var i=0; i<phrase.length; i++){
			if (phrase[i]===' '){
				tile+= '<span id="tile'+i+'" class="space"><h2>&nbsp</h2></span>'
			}

			else {
				tile+='<span id="tile'+i+'" class="tile"><h2>&nbsp</h2></span>';
			}
		}
		$("#tile_board").html(tile);
		console.log(tile);
	}

	this.search=function(){
		var char=($("#user_input").val()).toUpperCase();

	// if ((char=='A'||char=='E'||char=='I'||char=='O'||char=='U')){
	//   this.score=this.score-100;
	// }

		if (char!=='' && this.chars_searched.indexOf(char)== -1){
			this.chars_searched.push(char);
			
			console.log("search() fired  "+ char);
			for (var i=0; i<this.phrase.length; i++){
				if (char===this.phrase[i]){
					$("#tile"+i).replaceWith('<span id="tile'+i+'" class="tile"><h2>'+char.toUpperCase()+'</h2></span>');
					this.char_found_times+=1;
					this.score+=100;  
				}
			}
			// console.log("testing found_times"+ this.char_found_times);
			console.log("score is:  " + this.score);
			$("#score_board").html(this.score);
			$("#letters_played").html(this.chars_searched);
			$("#user_input").val('');
			$("#rounds").html(this.chars_searched.length);
			console.log(this.chars_searched);
		}
		else {
			alert("Empty String Entered or Character Played");
		}
	}

	this.solve=function(){
		if (($("#solve").val().toUpperCase())==this.phrase){
			for (var i=0; i<this.phrase.length; i++){
				if (phrase[i]!==' '){
					$("#tile"+i).replaceWith('<span id="tile'+i+'" class="tile"><h2>'+this.phrase[i]+'</h2></span>');
				}
			}
			$("#solve_puzzle_Modal").modal("hide");
			$("#right_modal").modal("show");
			$("#letters_played").html("");
			console.log("great");
		}

		else{
			$("#solve_puzzle_Modal").modal("hide");
			$("#wrong_modal").modal("show");
			console.log("wrong");
		}
	}


	this.display=function(){
		$('#solve_puzzle_Modal').modal("show")
	}


	this.start_game=function(){
		$("#intro").fadeOut();
		$("#game").fadeIn(2000);
		puzzle.draw_board();
		// $("#wrong_modal").hide();
	}

}
var puzzle = new Puzzle();


































// $(document).ready(function(){
//  console.log("$ firing");
//  //var tile= nFilter.setAttribute("style", "width:330px;float:left;")
//  draw_board();
//  // $("#intro").fadeOut(3000);
// })

// function start_game(){
//  $("#intro").fadeOut();
//  $("#game").fadeIn(2000);
// }

// var phraselist=[
// 'ANGORA SWEATER',
// 'BEAUTIFUL GLASS VASE',
// 'BLUE JEANS',
// 'BRONZE TABLE LAMPS',
// 'CHRISTMAS WREATH',
// 'COMFORTABLE COUCH',
// 'COMFY LOAFERS',
// 'COMFY SOFA',
// 'CORDLESS PHONE',
// 'DECORATIVE AREA RUGS',
// 'DIMMER SWITCH',
// 'DOWN COMFORTER',
// 'ENGRAVED BATH SOAPS',
// 'FABRIC SOFTENER',
// 'FAMILY PHOTOS',
// 'FINE CHINA',
// 'FIRM PILLOWS',
// 'FLUFFY BATHROBE',
// 'FLUFFY PILLOWS',
// 'FOOTSTOOL',
// 'GARDENING GLOVES',
// 'GARDENING TOOLS',
// 'HOME THEATER SYSTEM',
// 'HORIZONTAL METAL SHED',
// 'HOT WATER HEATER',
// 'INCENSE BURNER',
// 'KITCHEN CABINETS',
// 'KITCHEN TABLE',
// 'LAWN SPRINKLER',
// 'MAHOGANY COFFEE TABLE',
// 'OUTDOOR RUGS',
// 'PORTABLE HEATER',
// 'STEAM MOP',
// 'PATIO LIGHTS',
// 'TOY TELEPHONE',
// 'WOODEN BOOKSHELVES'
// ];//home stuff


// var num=Math.floor((Math.random() * phraselist.length) + 1);
// var phrase=phraselist[num];
// var phrase_length=phrase.length;


// function draw_board(phrase){
//  var tile='';
//  for (var i=0; i<phrase.length; i++){
//    if (phrase[i]===' '){
//      //$("#tile_board").append('<div id="tile'+i+'" class="space"><h2></h2></div>');
//      tile+= '<div id="tile'+i+'" class="space"><h2>&nbsp;</h2></div>'
//    }

//    else {
//      tile+='<div id="tile'+i+'" class="tile"><h2>&nbsp;</h2></div>';
//      //$("#tile_board").append('<div id="tile'+i+'" class="tile"><h2></h2></div>');
//    }
//  }
//  $("#tile_board").html(tile);
// }


// function new_puzzle(){
//  num=Math.floor((Math.random() * phraselist.length) + 1);
//  phrase=phraselist[num];
//  draw_board();
// }


// var user_entered=[];
// var counter=0;
// var score=0;

// function dosearch(){
//  var input = $("#user_input").val();
//  user_entered.push(input.toUpperCase());
//  counter++;

//  var found=false;
//  var found_times=0;

//  for (var i=0; i<phrase_length; i++){
//    if (input.toUpperCase()===phrase[i]){
//      $("#tile"+i).replaceWith('<div id="tile'+i+'" class="tile"><h2>'+input.toUpperCase()+'</h2></div>');
//      found=true;
//      found_times++;
//      score+=100;
//    }

//    // else {
//    //  console.log("not found");
//    //  // tile+='<div id="tile'+i+'" class="tile"><h2>&nbsp;</h2></div>';
//    // }

//    // $("#tile_board").html(tile);
//  }

//  $("#score_board").html(score);

//  console.log("letter found?  " + found);
//  console.log("letter found "+ found_times + " times");
//  $("#user_input").val("");
//  console.log(counter);
//  console.log(user_entered);

//  if (counter==5){
//    $('#myModal').modal();
//  }
// }

// function solve(){
//  if (($("#solve").val()).toUpperCase()==phrase){
//    $("#solvetext").html('<h4> Congratuation you won</h4>');
//    console.log("you won");
//    score+=1000;
//    // setTimeout(function(){location.reload();}, 3000);

//  }
//  else {
//    $("#solvetext").html('<h4> YOU FAILED </h4>');
//    console.log("you lost");
//    // setTimeout(function(){location.reload();}, 3000);
//  }
// }

