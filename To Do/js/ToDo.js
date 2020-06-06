var enterButton = $("#enter");
var input = $("#userInput").val();
var ul = $(".list-items");
var item = document.getElementsByTagName("li");

	$(document).ready(function(){
		$('#input').length;
		});

	$(document).ready(function(){
		$('#item').length;

	});
	
	function createListElement(){
		var list = document.createElement("li");
		var inputvalue = $("#userInput").val();
		var dBtn = document.createElement("button");
		var jin = document.createTextNode(inputvalue);
		var jack = document.createTextNode("X");
		$(dBtn).append(jack);
		$(list).append(dBtn);
		$(list).append(jin);
		$("ul").append(list);
		userInput.value = " ";

	$(document).ready(function(){
		$(list).on ("click", function(){
			$(list).addClass("done");
		});
	});

	$(document).ready(function(){
		$(dBtn).on ("click", function(){
			$(list).addClass("delete");
	});
	})
	};
	$(document).ready(function(){
		$("#enter").on("click", function(){
		if(("#input").length > 0){
			createListElement();	
		}
		else if (input == " "){
			alert("You must write something");
		}
	});
		});
	


	// var enterButton = $("#enter");
	// $(document).ready(function(){
	// 	$("#enter").on("click",function(){
	// 		$(alert("I did it"));
	// 	});
	// });






