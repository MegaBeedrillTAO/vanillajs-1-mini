var count = 0;
var element = document.getElementById("counter");
var increase = () => {
    count++;
    element.innerText = count;
}
var decrease = () => {
    count--;
    element.innerText = count;
}
var reset = () => {
    count = 0;
    element.innerText = count;
}

var selectTheme = theme => {
    
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    let buttons = document.getElementsByTagName("button");
    for (i = 0; i < buttons.length; i++){
        buttons[i].className = theme;
    }
}