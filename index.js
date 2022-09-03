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
                const primerNota = Number(prompt("Ingrese la primera nota"));
                const segundaNota = Number(prompt("Ingrese la segunda nota"));
                const tercerNota = Number(prompt("Ingrese la tercer nota"));
                const promedio = (primerNota + segundaNota + tercerNota) / 3;
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





    


