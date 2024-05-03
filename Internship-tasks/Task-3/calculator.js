const display = document.getElementById("display");
function appendToDisplay(input)
{
display.value +=input;
}
function toCalculate()
{
   
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function toClear()
{
   
        display.value ="";
    
   
}
function toDelete() {
   
    let currentValue = display.value;
    
    
    let newValue = currentValue.slice(0, -1);
    
    
    display.value = newValue;
}
