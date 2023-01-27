function on() {
    document.getElementById('inp').value = "0";
    document.getElementById('inp').style.opacity = "1";
    // document.getElementById("inp").style.display="block";

}
function equal() {
    var output = eval(document.getElementById('inp').value);
    document.getElementById('inp').value = output;
}
function touch(input) {
    document.getElementById('inp').value += input;
}
function off() {
    document.getElementById('inp').style.opacity = "0.1";
    document.getElementById('inp').value = "";
    // document.getElementById("inp").value="none";
}

