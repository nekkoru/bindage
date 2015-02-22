//CSGO bind generator
//2015 baikonur
$(document).ready(function(){

    var numpad = {
	"/": "KP_SLASH",
	"*": "KP_MULTIPLY",
	"-": "KP_MINUS",
	"7": "KP_HOME",
	"8": "KP_UPARROW",
	"9": "KP_PGUP",
	"4": "KP_LEFTARROW",
	"5": "KP_5",
	"6": "KP_RIGHTARROW",
	"1": "KP_END",
	"2": "KP_DOWNARROW",
	"3": "KP_PGDN",
	"+": "KP_PLUS",
	"Enter": "KP_ENTER",
	"0": "KP_INS",
	".": "KP_DEL"
    }

    var currentBind = "";
    var currentKey = "";

    function generateBind(){
	currentBind = "";
	$("#gunList input:checked").each(function(){
	    var buyLine = "buy " + $(this).val() + ";";
	    currentBind += buyLine;
	    console.log(buyLine);
	});
	return currentBind;
    }

    function renderBind(){
	var bindLine = 'bind "' + currentKey + '" "' + currentBind + '"';
	return bindLine;
    }	
    
    $("#keyboard .key").click(function(){
	// var value = $(this).text();
	// $("#binds").append(value + "\n");
	// console.log("Click!");
	if( $(this).hasClass("disabled") ){
	    console.log("You can't actually bind Numlock :< but you can have a butt bump! (__)_) *bump* (_(__)");
	} else {
	    currentKey = numpad[$(this).text()];
	    
	    $("#keyboard .key").removeClass("active");
	    $("#currentBind").text("");
	    $(this).toggleClass("active");
	    $("#currentBind").text('bind "' + currentKey + '" "' + generateBind() + '"');
	}
    });

    $("#gunList input").change(function(){
	currentBind = "";
	$("#currentBind").text("");
	generateBind();
	currentBind = renderBind();
	$("#currentBind").text(currentBind);
    });

    $("#commit").click(function(event){
	event.preventDefault();
	$("#binds").append(currentBind + "\n");
    });
});
