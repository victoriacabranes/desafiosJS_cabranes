/**
 * 1.Ingresar materia, notas y saber el promedio.
 * si cuando pide la nota, se ingresa una letra, se le vuelve a pedir la nota hasta que ingrese el numero
 * para ver las materias, ir a la consola, y se veran los objetos.
 */

let opcion;
let materias = [
    {
        materia: "Arte",
        primerNota: 6,
        segundaNota: 4,
        tercerNota: 3,
        promedio: 4
    }
];

while (opcion !== 0) {
    opcion = Number(prompt("Elija una opción:\n1. Averiguar el promedio de una materia \n2. Ver mis promedios\n0. Salir" ));

    switch (opcion) {
        case 1:
                const materia = prompt("Ingrese el nombre de la materia");  
                let primerNota;
                do {
                    primerNota = parseInt(prompt("Ingrese la primera nota"));
                } while (isNaN(primerNota));
                let segundaNota;
                do {
                   segundaNota = parseInt(prompt("Ingrese la segunda nota"));
                } while (isNaN(segundaNota));
                let tercerNota;
                do {
                    tercerNota = parseInt(prompt("Ingrese la tercer nota"));
                } while (isNaN(tercerNota));
                const promedio = parseInt((primerNota + segundaNota + tercerNota) / 3);
                alert("tu promedio es de: " + promedio); 
                guardarMateria (materia, primerNota, segundaNota, tercerNota, promedio);
            break;
        case 2:
                mostrarMateria();
            break;
        case 0:
                alert("Gracias por su visita.")
            break;
        default:
                alert("La opción ingresada no es correcta, intente nuevamente");
            break;
    }
}

function guardarMateria (materia, primerNota, segundaNota, tercerNota, promedio) {
    materias.push({
        materia,
        primerNota,
        segundaNota,
        tercerNota,
        promedio
    });
}

function mostrarMateria () {
    console.log(materias)
}





    


