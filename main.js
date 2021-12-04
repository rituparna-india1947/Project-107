function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rN1YzQ1pw//model.json', modelReady);
}

function modelReady() {
    classifier.calssify(gotResults);
}