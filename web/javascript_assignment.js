function helloFunction(event) {

    console.log('Hello');
}

var Button1 = $('#button1');
Button1.on("click", helloFunction);

function additionFunction(event) {

	var field1 = $('#field1').val();

	var field2 = $('#field2').val();

	var answer = (parseInt(field1) + parseInt(field2));

	$('#field3').val(answer);
}

var addButton2 = $('#button2');
addButton2.on("click", additionFunction);

function hideFunction(event) {

    $('#paragraphToHide').toggle(500);
}

var button3 = $('#button3');
button3.on("click", hideFunction);

function validateFunction(event) {
    var v1 = $('#phoneField').val();

    var reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (reg.test(v1)) {
        console.log("Ok");
    } else {
        console.log("Bad");
    }}

var button4 = $('#button4');
button4.on("click", validateFunction);

function jsonFunction(event) {

    var formObject = {};

    formObject.firstName = $('#firstName').val();

    formObject.lastName = $('#lastName').val();

    formObject.email = $('#email').val();

    var jsonString = JSON.stringify(formObject);

    console.log(jsonString);
}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);