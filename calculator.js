var a=parseInt(prompt("Enter the a value"));
var b=parseInt(prompt("Enter the b value"));
var operator=(prompt("Enter the operator"));
switch(operator){
    case "+":
        document.write(a+b);
        break;
        
     case "-":   
     document.write(a-b);
        break;

     case "*":   
     document.write(a*b);
        break;

     case "/":   
     document.write(a/b);
        break;

      default:
        document.write("Enter corrcet operartor");

}