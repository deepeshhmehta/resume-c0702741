$(document).ready(function(){
	console.log(getUrlVars());
	var pp = Math.round(Math.random() * 100)
	if(pp%2 ==0){
		$("img").attr("src","ProfilePic.jpg");
	}else{
		$("img").attr("src","ProfilePic2.jpg");
	}

	$(".switch").click(function(){
		var id = $(this).attr('id');
		console.log(id);
		switch(id){
			case "workToggle": {
				$("#workDetails").slideToggle("slow");
				$(this).find("span").toggleClass("glyphicon-chevron-right",1000,"easeOutShine");
				$(this).find("span").toggleClass("glyphicon-chevron-down",1000,"easeOutShine");
				break;
			}
			case "skillsToggle": {
				$("#skillsDetails").slideToggle("slow");
				$(this).find("span").toggleClass("glyphicon-chevron-right",1000,"easeOutShine");
				$(this).find("span").toggleClass("glyphicon-chevron-down",1000,"easeOutShine");
				break;
			}
			case "educationToggle": {
				$("#educationDetails").slideToggle("slow");
				$(this).find("span").toggleClass("glyphicon-chevron-right",1000,"easeOutShine");
				$(this).find("span").toggleClass("glyphicon-chevron-down",1000,"easeOutShine");
				break;
			}
			case "strengthToggle": {
				$("#strengthDetails").slideToggle("slow");
				$(this).find("span").toggleClass("glyphicon-chevron-right",1000,"easeOutShine");
				$(this).find("span").toggleClass("glyphicon-chevron-down",1000,"easeOutShine");
				break;
			}
		}
		
	})



	$("#collapseAll").click(function(){
		$("#workDetails").slideUp("slow");
		$("#workToggle").find("span").addClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#workToggle").find("span").removeClass("glyphicon-chevron-down",1000,"easeOutShine");
		
		$("#skillsDetails").slideUp("slow");
		$("#skillsToggle").find("span").addClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#skillsToggle").find("span").removeClass("glyphicon-chevron-down",1000,"easeOutShine");
		
		$("#educationDetails").slideUp("slow");
		$("#educationToggle").find("span").addClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#educationToggle").find("span").removeClass("glyphicon-chevron-down",1000,"easeOutShine");
		
		$("#strengthDetails").slideUp("slow");
		$("#strengthToggle").find("span").addClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#strengthToggle").find("span").removeClass("glyphicon-chevron-down",1000,"easeOutShine");

	})

	$("#expandAll").click(function(){
		$("#workDetails").slideDown("slow");
		$("#workToggle").find("span").removeClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#workToggle").find("span").addClass("glyphicon-chevron-down",1000,"easeOutShine");
		
		$("#skillsDetails").slideDown("slow");
		$("#skillsToggle").find("span").removeClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#skillsToggle").find("span").addClass("glyphicon-chevron-down",1000,"easeOutShine");
		
		$("#educationDetails").slideDown("slow");
		$("#educationToggle").find("span").removeClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#educationToggle").find("span").addClass("glyphicon-chevron-down",1000,"easeOutShine");
		
		$("#strengthDetails").slideDown("slow");
		$("#strengthToggle").find("span").removeClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#strengthToggle").find("span").addClass("glyphicon-chevron-down",1000,"easeOutShine");
	
	})

	function getUrlVars(){
    	var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}



})


