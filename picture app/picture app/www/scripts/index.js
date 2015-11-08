$(document).ready(function() {
  
    //  hammerIt(document.getElementById("panzoom"));

    console.log(navigator.camera);

    $("#panzoom").panzoom({
        minScale: 0.4,
        maxScale: 10,
        rangeStep: .1
    });
  
});

function takePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {});
}

function onSuccess(picLocation) {
    $("#panzoom").attr("src", picLocation);

    $("#panzoom").panzoom({
        minScale: 0.4,
        maxScale: 10,
        rangeStep: .1
    });
}

function onFail(message) {
    alert('Failed because: ' + message);
}