// var myAge = undefined; // hoisting

console.log("probando")

// HOISTING

// console.log(myName) // ReferenceError: Cannot access 'myName' before initialization
console.log( myAge )

// hoisting es el proceso en el JS hace un pre-lecture de todo el codigo
// ... y luego sube al inicio de la ejecución, todas las variables creadas con `var`
// ... sin embargo, su valor no se mantiene. El valor solo se da cuando se inicializa.


let myName = "Jorge";
var myAge = 31; // hace un proceso que se llama HOISTING

console.log(myName)
console.log(myAge)

// let myName // VS Code/JS no lo permite. Ya has creado una caja con ese nombre
var myAge = 42; // se crea una nueva caja, y se borra la anterior y su valor.

console.log(myAge)



// hoisting en funciones => el valor que se asigna es la referencia.
// hace hoisting de myFunction y su ref. 1234 => 2345

console.log( myFunction() )

function myFunction() {
  return "hola"
} // ref. 1234

console.log( myFunction() )

// 200 lineas de codigo


function myFunction() {
  return "Adios"
} // ref. 2345


console.log( myFunction() )

// cuando creamos funciones de expresion o de flecha las guardamos en una variable let o const

// let functionArrow = () => {

// }

// let functionArrow = () => {

// }





// * INVOCACIONES Y LOGICA

// invoco function1 con function2
// hago otra cosa
// invoco function3...



// * TODAS LAS DECLARACIONES DE FUNCIONES

// function1
// function2
// function3
// function4


// HOISTING => es el proceso de pre-lectura en el que JS sube todas las variables var y function al inicio del codigo con su valor de referencia o undefined.


// SCOPES

// 1. scope global
// 2. scope de bloque
// 3. scope de funciones


// 1. scope global
// el lugar donde escribimos JS en la base del codigo

let someString = "hola"; // esta en el scope global. es accesible en CUALQUIER lugar de mi codigo.

function something() {
  for (let i = 0; i < 1; i++) {
    if (true) {
      console.log(someString)
      console.log(someString)
    }
  }
}

something()

// Scope de bloque => bucles for, condicionales, switch

{
  // esto es un lugar especifico y cerrado donde yo escribo codigo
  let block1 = "block1"; // buena practica
  var block2 = "block2"; // mala practica
  block3 = "block3"; // PEOR PRACTICA
  // primero la buscar
  // si no la consigue, la crea con "var" en el scope global
}

// console.log(block1) // ReferenceError: block1 is not defined
console.log(block2)
console.log(block3)

let patata = "patata"


function someFunction( ) {
  // console.log(functionScope2)

  // console.log(patata)

  let functionScope1 = "functionScope1"; // buena practica
  var functionScope2 = "functionScope2"; // mala practica
  // el hoisting ocurre pero sube la variable al inicio de la funcion
  functionScope3 = "functionScope3"; // PEOR PRACTICA

}
someFunction() 

// console.log(functionScope1) // ReferenceError: block1 is not defined
// console.log(functionScope2) // ReferenceError: block1 is not defined
console.log(functionScope3)


// conclusiones
// 1. no usar var
// 2. no declarar variables sin su palabra reservada "let" o "const"
// 3. aprender y practicar functiones tradicionales y funciones de flecha
// 4. sobre todo funciones de flecha
// 5. leer sobre esto cuando nos preparemos para entrevistas tecnicas



// OBJETOS

// {
//   key: values, // una propiedad
//   key: values, // una propiedad2
//   key: values, // una propiedad3
//   key: values, // una propiedad4
// }

let headPhones = {
  price: 100,
  isNew: false,
  brand: "SteelSeries",
  "max volume": 90,
  // someArr: ["hola", "adios"],
  // someObject: {
  //   nombre: "jorge"
  // },
  // someFunc: () => {
  //   return "hola"
  // }
}

// como podemos acceder a los valores de las propiedades

console.log(headPhones);

// 1. notacion de puntos
console.log(headPhones.price)
console.log(headPhones.brand)
// console.log(headPhones.max volume)

// 2. notacion de corchete
console.log(headPhones["max volume"])
console.log(headPhones["isNew"])

let keyToCheck = "brand";
console.log(headPhones[keyToCheck])

// como modificamos propiedades de objetos

headPhones.price = 150;
console.log(headPhones)

// agregar nuevas propiedades

headPhones.color = "black";
console.log(headPhones)

// borrar propiedades de un objeto => con delete. palabra reservada para borrar propiedades

delete headPhones.isNew
console.log(headPhones)


// Como listar propiedades y iterar sobre objetos

// Objeto global Object => Object.keys()

console.log( Object.keys(headPhones) )
// crea un array con todos los nombres de propiedad

console.log( Object.values(headPhones) )
// crea un array con todos los valores de propiedad

// bucle for in => para objetos

for ( let nombreDePropiedad in headPhones ) {
  
  // si yo tengo patata que es el nombre de la propiedad
  // como puedo acceder al valor???
  
  // console.log( headPhones.patata )

  console.log( nombreDePropiedad )
  console.log( headPhones[nombreDePropiedad] )

}



// Estructura de data

const users = [
  {
    name: "Jorge",
    bitcoin: 0,
    hasNFTs: false,
  },
  {
    name: "Caro",
    bitcoin: 0.02,
    hasNFTs: false,
  },
  {
    name: "Clara",
    bitcoin: 0.2,
    hasNFTs: false,
  },
  {
    name: "Ruth",
    bitcoin: 0,
    hasNFTs: false,
  },
];

console.log(users[1])
users[1].hasNFTs = true;


users[2]["bitcoin"] += 1; // agregar 1 bitcoin


// users[3]["bitcoin"] += users[1]["bitcoin"]

users.push({
  name: "Phantom",
  bitcoin: 4,
  hasNFTs: true,
})

console.log(users)


// crear una funcion que verifique si un usuario tiene bitcoins o NFTs

function isUserIntoCrypto( oneUser ) {
  if ( oneUser.bitcoin > 0 || oneUser.hasNFTs === true ) {
    return `El usuario ${oneUser.name} está facturando`
  } else {
    return `El usuario ${oneUser.name} no cree en cripto`
  }
}

// console.log( isUserIntoCrypto( users[1] ) )

// crear una funcion que elija un usuario aleatorio del array
// ese usuario verificaremos si tiene o no bitcoin o nft

function randomUser( userArr ) {
  // como buscamos un elemento aleatorio del array?
  let randomNumber = Math.random() * userArr.length // 0 - 0.99999999999
  let randomPosition = Math.floor(randomNumber) // redondear abajo el numero decimal

  let randomUser = userArr[randomPosition]
  
  return isUserIntoCrypto(randomUser)
}

console.log( randomUser(users) )