$(document).ready(waitForShaqFu)

function waitForShaqFu() {
    $(".shaq-btn").on("click", shaqFu)
}

function shaqFu() {
    $(".shaq-zone").append(`<img height=200 width=280 src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/9/13/11/enhanced-buzz-3994-1379086824-25.jpg?downsize=715:*&output-format=auto&output-quality=auto">`)
}