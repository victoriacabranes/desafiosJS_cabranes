
const nombreUsuario = prompt("Ingresa tu nombre");
let materia = prompt("Hola " + nombreUsuario +  "!" + " Ingresa el nombre de la materia");
let nota1 = Number(prompt("Ingresa tu primer nota"));
let nota2 = Number(prompt("Ingresa tu segunda nota"));
let nota3 = Number(prompt("Ingresa tu tercera nota"));

function calcularPromedio () {
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(nombreUsuario + " tu promedio en " + materia + " es de: " + promedio); 
}
calcularPromedio()
var inputValue = Number(prompt("Queres saber el promedio de otra materia? Ingresa: 1 (si) o 2 (no)"));

while (inputValue == 1) {
    materia = prompt("Ingresa el nombre de la materia");
    nota1 = Number(prompt("Ingresa tu primer nota"));
    nota2 = Number(prompt("Ingresa tu segunda nota"));
    nota3 = Number(prompt("Ingresa tu tercera nota"));
    calcularPromedio();
    inputValue = Number(prompt("Queres saber el promedio de otra materia? Ingresa: 1 (si) o 2 (no)"));
}
 
    


