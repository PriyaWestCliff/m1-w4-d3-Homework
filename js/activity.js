$(document).ready(function() {
    // Cursor shows a hand for selectable cells
    $('td').not(':contains("Not Available")').css('cursor', 'pointer');
    
    // Add a click event listener to each table cell
    $("td").click(function () {
        var content = $(this).text();
        
        // Only allow actions for cells that don't say "Not Available"
        if (content !== "Not Available") {
            // Get the index of the clicked cell
            var columnIndex = $(this).index(); // Get the column index of the clicked cell
            
            // Get the corresponding cliff site name from the header
            var cliffSite = $("th").eq(columnIndex).text(); // Find the corresponding header
            
            // Toggle the class 'tdhighlight' for the clicked cell
            $(this).toggleClass("tdhighlight");

            // If the cell has the highlight class, show the selected activity in the result section
            if ($(this).hasClass("tdhighlight")) {
                // Make the selected activities box visible
                $('#displaySelected').css("visibility", "visible").css("margin-top", "2em");
                
                // Append the clicked activity with its corresponding cliff site to the result section
                $('#result').append("<p>" + content + " at " + cliffSite + "</p>");
            } else {
                // Remove the activity from the result section if it's deselected
                $('#result p:contains(' + content + ' at ' + cliffSite + ')').remove();
                
                // If no activities are selected, hide the result box again
                if ($('#result').find('p').length === 0) {
                    $('#displaySelected').css("visibility", "hidden").css("margin-top", "0");
                }
            }
        }
    });
});
