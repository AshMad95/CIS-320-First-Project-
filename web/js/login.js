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
        console.log(dataFromServer);
        $('#getLoginResult').html(dataFromServer)
    });
}

function setLoginJava() {

    var url = "api/set_login_servlet";

    var loginKey = "loginID"
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