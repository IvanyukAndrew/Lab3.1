/*футів в метри ==0.3048*/
function Converter(){
    var x = prompt("Введіть милі: ");
    var a = parseFloat(x)*0.3048;
    document.write(a+"м");
}