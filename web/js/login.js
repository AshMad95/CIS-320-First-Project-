/**
 * Created by ashtyne.madsen on 3/23/2017
 */

function logout() {

    var url = "api/invalidate_login_servlet";

    $.post(url, null, function (dataFromServer) {
         console.log("Finished calling logout servlet.");
         console.log(dataFromServer);
         getLoginJava();
    });
}

function getLoginJava() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling get login servlet.");
        console.log("DataFromServer: " + dataFromServer);
        $('#getLoginResult').text("You are logged in as: '" + dataFromServer + "'.");
        var data = dataFromServer.trim();
        if (data === 'null') {
            $("#logoutSection").hide();
            console.log("login null")
        }
        else {
            $("#logoutSection").show();
            console.log("login")
        }
        //See if data from server === null trim null
        //.hide or .show from earlier this semester
    });
}

function setLoginJava() {

    var url = "api/set_login_servlet";

    var loginKey = "loginID";
    var loginID = $("#loginID").val();

    var dataToServer = {loginKey : loginKey, loginID : loginID};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling set login servlet.");
        console.log(dataFromServer);
        $("#loginID").val("");
        getLoginJava();
    });
}

getLoginJava();

button = $('#setLoginJava');
button.on("click", setLoginJava);

button = $('#logout');
button.on("click", logout);