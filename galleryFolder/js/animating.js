 $(function() {
            $("#right").click(function() {
                $("#theDiv").animate({ width: "500px" }, 1000);
            });
            $("#text").click(function() {
                $("#theDiv").animate({ fontSize: "24pt" }, 1000);
            });
            // Can pass in swing or linear to indicate how its animated
            $("#toggle").click(function() {
                $("#theDiv").animate({ left: "500" }, 1000, "swing");
            });
            // the following does all at once
            $("#everything").click(function() {
	                    $("#theDiv").animate({ width: "500px", fontSize: "24pt", left: "500" }, 
	                    1000, "swing");
            });
        });
        
        
        
        
        