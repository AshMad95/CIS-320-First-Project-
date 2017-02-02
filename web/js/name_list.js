/**
 * Created by ashtyne.madsen on 2/2/2017.
 */

// Main Javascript File

function updateTable() {
    // Here's where your code is going to go.
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
            for (var i = 0; i < json_result.length; i++) {
                var row = "<tr>"
                row += "<td>" + json_result[i].first + "<td>";
                row += "<tr>"
                $("#datatable thead").append(row)
            }
            console.log("Done");
        }
    );
}

// Call your code.
updateTable();