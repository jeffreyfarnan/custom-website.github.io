$(function() {
        // get div where id = 'evtTarget' and call the highlight function
            $("#evtTarget").hover(highlight, highlight);

        // get div where id = evtTarget and call fnclick1 and fnclick2 for each toggle

            $("#evtTarget").toggle(fnClick1, fnClick2);
        });

        function highlight(evt) {
            $("#evtTarget").toggleClass("highlighted");
        }
        // set html text to 'click'
        function fnClick1() {
            $("#evtTarget").html("Click!");
        }
        function fnClick2() {
            $("#evtTarget").html("Clack!");
        }
        
        
         $(function() {
	            $("#fadein").click(function() {
	                $("#theDiv").fadeIn("normal");
	            });
	            $("#fadeout").click(function() {
	            // fades out over 4 seconds and calls alert
	                $("#theDiv").fadeOut(4000, function() { alert ("done fading out");});
	            });
	            $("#fadeto3").click(function() {
	                $("#theDiv").fadeTo("slow", 0.3);
	            });
	            $("#fadeup").click(function() {
	                $("#theDiv").fadeTo("slow", 1.0);
	            });
	        });
        
        
        
        $(function() {
	            $("#slideup").click(function() {
	                $("#theDiv2").slideUp("normal");
	            });
	            $("#slidedown").click(function() {
	                $("#theDiv2").slideDown("normal");
	            });
	            $("#toggle").click(function() {
	                $("#theDiv2").slideToggle("slow");
	            });
        });
        
	