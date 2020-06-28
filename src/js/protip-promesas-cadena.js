
/*
200  todo correcto
201  registro creado correctamente
404  recurso no encontrado ( problemas desde la petición )
500  peticion realizada correctamente pero hay problemas del lado del servidor
*/



const juckUrl = 'https://api.chucknorris.io/jokes/random';


// fetch( juckUrl ).then( resp =>{

//     resp.json().then( ({ id, value }) =>{ // aqui utilizamos la destructuracion de objeto, para obtener solo los valores que necesitamos
//         console.log(id); 
//         console.log(value);
//     }); 
// });



//Protip: promesas en cadena
fetch( juckUrl )
    .then( resp => resp.json() )
    .then( ({ id, value }) =>{
        console.log(id);
        console.log(value);        
    }); 