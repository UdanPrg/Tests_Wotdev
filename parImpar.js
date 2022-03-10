// Sí la multiplicación de los numeros dados en un lista, no resulta en un NÚMERO PAR, devolver la suma de todos los numeros dados en la lista, si es un NÚMERO IMPAR devolver "0"; 
function parImpar(my_list){
    const multiple = my_list.reduce((actual, contador)=>{
        return actual * contador;
    });

    return multiple % 2 == 0 ? my_list.reduce((actual, contador) => {return actual + contador}, 0) : 0;
}

// --- Testing --- //

// parImpar([1,5,3,9,2])
// 20

// parImpar([7,5,13])
// 0