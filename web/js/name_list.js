/**
 * Created by ashtyne.madsen on 2/2/2017
 */

var valid_form = true;

// Main Javascript File
function updateTable() {
    // Here's where your code is going to go.
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
        // json_result is an object. You can set a breakpoint, or print
        // it to see the fields. Specifically, it is an array of objects.
        // Here we loop the array and print the first name.
        for (var i = 0; i < json_result.length; i++) {
            var id = json_result[i].id;
            var firstName = json_result[i].first;
            var lastName = json_result[i].last;
            var email = json_result[i].email;
            var phone = json_result[i].phone;
            var phoneDash = phone.substr(0,3) + '-' + phone.substr(3,3) + '-' + phone.substr(6,4);
            var birthday = json_result[i].birthday;

            var row ='<tr>';
            row += '<td>' + id + '</td>';
            row += '<td>' + firstName + '</td>';
            row += '<td>' + lastName + '</td>';
            row += '<td>' + email + '</td>';
            row += '<td>' + phoneDash + '</td>';
            row += '<td>' + birthday + '</td>';
            row += '</tr>';
            $('#datatable tbody').append(row);
        }
        console.log("Done");

    })
}

// Called when "Add Item" button is clicked
function showDialogAdd() {

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    // Remove style for outline of form field
    $('#idDiv').removeClass("has-error");
    $('#idGlyph').removeClass("glyphicon-remove");
    $('#idDiv').removeClass("has-success");
    $('#idGlyph').removeClass("glyphicon-ok");
    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#emailDiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    // Show the hidden dialog
    $('#myModal').modal('show');
}

function jqueryPostButtonAction() {

    var url = "api/name_list_edit";
    var idValue = $("#id").val();
    var firstNameValue = $("#firstName").val()
    var lastNameValue = $("#lastName").val()
    var emailValue = $("#email").val()
    var phoneValue = $("#phone").val()
    var birthdayValue = $("#birthday").val()
    var dataToServer = { id : idValue, firstName: firstNameValue, lastName: lastNameValue, email: emailValue, phone: phoneValue, birthday:birthdayValue };

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
    });
}

function validation() {
    var idValidate = $('#id').val();
    var idreg = /^[0-9]{1,10}$/;

    if (idreg.test(idValidate)) {
        // Set style for outline of form field
        $('#idDiv').removeClass("has-error");
        $('#idDiv').addClass("has-success");

        // Set the icon for the form field
        $('#idGlyph').removeClass("glyphicon-remove");
        $('#idGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('idStatus').val("(success)");
        console.log('Valid ID')
    }
    else {
        // Set style for outline of form field
        $('#idDiv').removeClass("has-success");
        $('#idDiv').addClass("has-error");

        // Set the icon for the form field
        $('#idGlyph').removeClass("glyphicon-ok");
        $('#idGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('idStatus').val("(error)");
        console.log('Invalid ID');
        valid_form = false
    }


    var firstNameValidate = $('#firstName').val();
    var firstNamereg = /^[a-zA-Z' -]{1,30}$/;

    if (firstNamereg.test(firstNameValidate)) {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('firstNameStatus').val("(success)");
        console.log('Valid First Name')
    }
    else {
        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('firstNameStatus').val("(error)");
        console.log('Invalid First Name')
        valid_form = false
    }


    var lastNameValidate = $('#lastName').val();
    var lastNamereg = /^[a-zA-Z' -]{1,30}$/;

    if (lastNamereg.test(lastNameValidate)) {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('lastNameStatus').val("(success)");
        console.log('Valid Last Name')
    }
    else {
        // Set style for outline of form field
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        // Set the icon for the form field
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('lastNameStatus').val("(error)");
        console.log('Invalid Last Name')
        valid_form = false
    }


    var emailValidate = $('#email').val();
    var emailreg = /^[a-zA-Z0-9_-]{1,30}@[a-zA-Z]{1,30}\.[a-zA-Z]{1,4}$/;

    if (emailreg.test(emailValidate)) {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        // Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('emailStatus').val("(success)");
        console.log('Valid Email')
    }
    else {
        // Set style for outline of form field
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        // Set the icon for the form field
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('emailStatus').val("(error)");
        console.log('Invalid Email')
        valid_form = false
    }

    var phoneValidate = $('#phone').val();
    var phonereg = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;

    if (phonereg.test(phoneValidate)) {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        // Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('phoneStatus').val("(success)");
        console.log('Valid Phone Number')
    }
    else {
        // Set style for outline of form field
        $('#phoneDiv').removeClass("has-success");
        $('#phoneDiv').addClass("has-error");

        // Set the icon for the form field
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('phoneStatus').val("(error)");
        console.log('Invalid Phone Number')
        valid_form = false
    }


    var birthdayValidate = $('#birthday').val();
    var birthdayreg = /^(19|20)[1-9]{2}[- /](0[1-9]|1[012])[- /](0[1-9]|[12][0-9]|3[01])$/;

    if (birthdayreg.test(birthdayValidate)) {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        // Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('birthdayStatus').val("(success)");
        console.log('Valid Birthday')
    }
    else {
        // Set style for outline of form field
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        // Set the icon for the form field
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        // Put in the field used by screen readers
        $('birthdayStatus').val("(error)");
        console.log('Invalid Birthday');
        valid_form = false
    }

    if (valid_form == true) {
        console.log(valid_form);
        jqueryPostButtonAction()
    }
    else {
        console.log(valid_form)
    }
}

function saveChangesWords() {
    validation();
    console.log("The changes were saved!");
}

// Call your code.
updateTable();

// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.
var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveChangesWords);