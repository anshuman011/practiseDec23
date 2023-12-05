let myWindow;
function openWin() {
    myWindow = window.open("https://www.w3schools.com", "myWindow", "width=400,height=200");
}
function closeWin() {
    if (myWindow) {
        myWindow.close();
    }
}
function checkIfWinClosed() {
    let text = "";
    if (!myWindow) {
        text = "It has never been opened!";
    }
    else{
        if(myWindow.closed){
            text = "It is closed";
        }
        else{
            text = "It is open";
        }
    }
    document.getElementById("winClosedCheckResult").innerHTML = text;
}