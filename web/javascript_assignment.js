function helloFunction(event) {
    console.log('Hello');
}

var formButton1 = $('#helloButton');
formButton1.on("click", helloFunction);