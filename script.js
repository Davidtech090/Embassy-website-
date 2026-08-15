const display =
document.getElementById("display")
;
function addTodisplay(value) {
    display.value += value;
}
function clearDisplay(){
    display.value ="";
}
funtion deletelast(){
    display.value =
    display.value. slice(0, -1);
}
function calculate(){
    try{
        display.value =
        eval(display.value);
    } catch {
        display.value = "Error";
    }
}