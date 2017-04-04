
var paragraphs = $("p");
console.log(paragraphs);

// How many tags match?
console.log("There are " + paragraphs.length + " paragraphs in this page.");

for(var i = 0; i < paragraphs.length; i++) {
    var paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}

function myUpdateFunction() {
    var fieldValue = $('#myTextField').val();
    console.log(fieldValue);
    $("#tableName tbody").append("<tr><td>" + fieldValue + "</td></tr>");
}

var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);

function hideFunction() {
    $("#hideme").hide(500);
}

var formButton2 = $('#button2');
formButton2.on("click", hideFunction);

