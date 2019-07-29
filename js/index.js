var valorA = parseInt(prompt("Informe o valor de A: "));
var valorB = parseInt(prompt("Informe o valor de B: "));
var valorC = parseInt(prompt("Informe o valor de C: "));
var coeficiente1;
var coeficiente2;
var p1= document.createElement("p")
var p2= document.createElement("p")
var p3= document.createElement("p")

var delta = (valorB * valorB) - 4 * valorA * valorC;

console.log("Valor de Delta => " + delta);

if(delta < 0){
  console.log("Para Delta negativo, não existem raízes reais");  
} else{
  
  console.log("Para Delta positivo, raízes diferentes:");  
  
  coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
  coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
  
  console.log("x' = " + coeficiente1);
  console.log("x'' = " + coeficiente2);

p1.append("o valor de x' é " + coeficiente1)
document.body.appendChild(p1)

p2.append("o valor de x'' é " + coeficiente2)
document.body.appendChild(p2)

}
